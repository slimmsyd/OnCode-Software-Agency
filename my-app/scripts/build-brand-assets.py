#!/usr/bin/env python3
"""Build OnCode brand assets from the master logos.

Masters (committed, never hand-edited in place):

  public/Logos/oncode-wordmark-master.png     horizontal "ONCODE" lockup, black on white
  public/Logos/oncode-mark-ornate-master.png  the ornate "O" emblem, black on white

Outputs:

  public/redesign/oncode-hero-wordmark.png    transparent wordmark used in the hero
  public/redesign/oncode-mark-ornate.png      transparent emblem used in the footer
  public/images/oncode-logo.png               logo on white for JSON-LD / publisher logo
  public/images/og-image.png                  1200x630 social share card (ornate mark)
  public/images/favicon-mark-1024.png         favicon master: emblem with the corner
                                              ornaments stripped, centered on white
  + every favicon size and apple-touch-icon.png / icon.png
  src/app/favicon.ico                         the ICO that Next.js actually serves at
                                              /favicon.ico

Note: Next.js App Router treats `app/favicon.ico` as a metadata file convention and
it takes precedence over `public/favicon.ico`. A copy in `public/` is silently
ignored, so this script writes the ICO into `src/app/` only - do not add one back
to `public/`.

Run from anywhere:  python3 scripts/build-brand-assets.py
Requires: pillow, numpy
"""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image

MY_APP = Path(__file__).resolve().parents[1]
PUBLIC = MY_APP / "public"
LOGOS = PUBLIC / "Logos"

WORDMARK_MASTER = LOGOS / "oncode-wordmark-master.png"
ORNATE_MASTER = LOGOS / "oncode-mark-ornate-master.png"

HERO_WORDMARK_OUT = PUBLIC / "redesign" / "oncode-hero-wordmark.png"
FOOTER_MARK_OUT = PUBLIC / "redesign" / "oncode-mark-ornate.png"
SCHEMA_LOGO_OUT = PUBLIC / "images" / "oncode-logo.png"
OG_IMAGE_OUT = PUBLIC / "images" / "og-image.png"
FAVICON_MASTER_OUT = PUBLIC / "images" / "favicon-mark-1024.png"
# App Router metadata convention - Next serves this at /favicon.ico and ignores
# any public/favicon.ico, so the generated ICO has to land here.
FAVICON_ICO_OUT = MY_APP / "src" / "app" / "favicon.ico"

# Anything darker than this counts as ink when we look for the artwork bounds.
INK_THRESHOLD = 200
# Transparent breathing room added around trimmed artwork, as a fraction of its
# longest side. Keeps anti-aliased edges from looking clipped.
TRIM_PADDING_RATIO = 0.02
# The emblem occupies this fraction of the square favicon canvas.
FAVICON_FILL_RATIO = 0.82
# The emblem occupies this fraction of the 630px-tall share card.
OG_MARK_HEIGHT_RATIO = 0.78

OG_SIZE = (1200, 630)
SCHEMA_LOGO_SIZE = (1200, 300)
FAVICON_MASTER_SIZE = (1024, 1024)
FAVICON_PNG_SIZES = (16, 32, 48, 64, 96, 128, 192, 256)
APPLE_TOUCH_SIZE = 180
PWA_ICON_SIZE = 512
ICO_SIZES = ((16, 16), (32, 32), (48, 48), (64, 64))


def load_gray(path: Path) -> np.ndarray:
    """Grayscale copy of an image, flattening any alpha onto white."""
    if not path.exists():
        sys.exit(
            f"Missing master artwork: {path}\n"
            "Add the source logo before running this script."
        )
    image = Image.open(path)
    if image.mode in ("RGBA", "LA", "P"):
        image = image.convert("RGBA")
        backdrop = Image.new("RGBA", image.size, (255, 255, 255, 255))
        image = Image.alpha_composite(backdrop, image)
    return np.asarray(image.convert("L"), dtype=np.uint8)


def ink_alpha(gray: np.ndarray) -> np.ndarray:
    """Alpha for black ink on white: white becomes transparent, ink stays solid.

    Deriving alpha from luminance (instead of keying out a fixed colour) keeps
    the anti-aliased edge of every stroke smooth.
    """
    return (255 - gray.astype(np.int16)).clip(0, 255).astype(np.uint8)


def ink_bounds(gray: np.ndarray) -> tuple[int, int, int, int]:
    """(left, top, right, bottom) bounding box of the ink, right/bottom exclusive."""
    rows, cols = np.where(gray < INK_THRESHOLD)
    if rows.size == 0:
        sys.exit("No ink found in the master artwork - is the file blank?")
    return int(cols.min()), int(rows.min()), int(cols.max()) + 1, int(rows.max()) + 1


def padded_crop(bounds: tuple[int, int, int, int], shape: tuple[int, int], ratio: float):
    """Grow a bounding box by `ratio` of its longest side, clamped to the image."""
    left, top, right, bottom = bounds
    height, width = shape
    pad = round(max(right - left, bottom - top) * ratio)
    return (
        max(left - pad, 0),
        max(top - pad, 0),
        min(right + pad, width),
        min(bottom + pad, height),
    )


def ink_layer(path: Path, ratio: float = TRIM_PADDING_RATIO) -> Image.Image:
    """Trimmed, transparent-background, black-ink version of an artwork file."""
    gray = load_gray(path)
    left, top, right, bottom = padded_crop(ink_bounds(gray), gray.shape, ratio)
    alpha = ink_alpha(gray[top:bottom, left:right])
    black = np.zeros_like(alpha)
    return Image.merge("RGBA", [Image.fromarray(black)] * 3 + [Image.fromarray(alpha)])


def label_components(mask: np.ndarray) -> np.ndarray:
    """8-connected component labels via union-find (keeps numpy as the only dep)."""
    height, width = mask.shape
    labels = np.zeros((height, width), dtype=np.int32)
    parent: dict[int, int] = {}
    next_label = 1

    def find(label: int) -> int:
        while parent[label] != label:
            parent[label] = parent[parent[label]]
            label = parent[label]
        return label

    def union(a: int, b: int) -> None:
        root_a, root_b = find(a), find(b)
        if root_a != root_b:
            parent[root_b] = root_a

    for y in range(height):
        for x in range(width):
            if not mask[y, x]:
                continue
            neighbours = [
                labels[y + dy, x + dx]
                for dy, dx in ((-1, -1), (-1, 0), (-1, 1), (0, -1))
                if 0 <= y + dy < height
                and 0 <= x + dx < width
                and labels[y + dy, x + dx]
            ]
            if not neighbours:
                labels[y, x] = next_label
                parent[next_label] = next_label
                next_label += 1
                continue
            smallest = min(neighbours)
            labels[y, x] = smallest
            for neighbour in neighbours:
                union(smallest, neighbour)

    for y in range(height):
        for x in range(width):
            if labels[y, x]:
                labels[y, x] = find(labels[y, x])
    return labels


def emblem_bounds(path: Path) -> tuple[int, int, int, int]:
    """Bounding box of the central emblem only, ignoring the four corner flourishes."""
    gray = load_gray(path)
    labels = label_components(gray < INK_THRESHOLD)
    counts = np.bincount(labels.ravel())
    counts[0] = 0  # background
    rows, cols = np.where(labels == int(counts.argmax()))
    return int(cols.min()), int(rows.min()), int(cols.max()) + 1, int(rows.max()) + 1


def save_png(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, "PNG", optimize=True)
    print(f"  {path.relative_to(MY_APP)}  {image.width}x{image.height}  {path.stat().st_size // 1024}KB")


def build_transparent_marks() -> None:
    """Hero wordmark + footer emblem, both trimmed with a transparent background."""
    print("Transparent marks")
    save_png(ink_layer(WORDMARK_MASTER), HERO_WORDMARK_OUT)
    save_png(ink_layer(ORNATE_MASTER), FOOTER_MARK_OUT)


def build_schema_logo() -> None:
    """Wordmark flattened onto white for JSON-LD, where transparency is unreliable."""
    print("Schema logo")
    mark = ink_layer(WORDMARK_MASTER, ratio=0)
    canvas_width, canvas_height = SCHEMA_LOGO_SIZE
    scale = min(canvas_width / mark.width, canvas_height / mark.height) * 0.92
    mark = mark.resize(
        (round(mark.width * scale), round(mark.height * scale)), Image.LANCZOS
    )
    canvas = Image.new("RGB", SCHEMA_LOGO_SIZE, (255, 255, 255))
    canvas.paste(mark, ((canvas_width - mark.width) // 2, (canvas_height - mark.height) // 2), mark)
    save_png(canvas, SCHEMA_LOGO_OUT)


def build_og_image() -> None:
    """1200x630 share card: the ornate emblem centered on white."""
    print("Share card")
    mark = ink_layer(ORNATE_MASTER, ratio=0)
    target_height = round(OG_SIZE[1] * OG_MARK_HEIGHT_RATIO)
    mark = mark.resize(
        (round(mark.width * target_height / mark.height), target_height), Image.LANCZOS
    )
    canvas = Image.new("RGB", OG_SIZE, (255, 255, 255))
    canvas.paste(mark, ((OG_SIZE[0] - mark.width) // 2, (OG_SIZE[1] - mark.height) // 2), mark)
    save_png(canvas, OG_IMAGE_OUT)


def build_favicon_master() -> Image.Image:
    """Emblem with the corner flourishes removed, centered on a square white canvas."""
    print("Favicon master")
    gray = load_gray(ORNATE_MASTER)
    left, top, right, bottom = emblem_bounds(ORNATE_MASTER)
    emblem = Image.fromarray(gray[top:bottom, left:right]).convert("RGB")
    side = round(max(emblem.width, emblem.height) / FAVICON_FILL_RATIO)
    canvas = Image.new("RGB", (side, side), (255, 255, 255))
    canvas.paste(
        emblem, ((side - emblem.width) // 2, (side - emblem.height) // 2)
    )
    master = canvas.resize(FAVICON_MASTER_SIZE, Image.LANCZOS)
    save_png(master, FAVICON_MASTER_OUT)
    return master


def build_favicon_sets(master: Image.Image) -> None:
    """Every browser / PWA / OS icon size, downsampled from the single master."""
    print("Favicons")
    for size in FAVICON_PNG_SIZES:
        resized = master.resize((size, size), Image.LANCZOS)
        save_png(resized, PUBLIC / "images" / f"favicon-{size}x{size}.png")
    save_png(
        master.resize((APPLE_TOUCH_SIZE,) * 2, Image.LANCZOS),
        PUBLIC / "apple-touch-icon.png",
    )
    save_png(master.resize((PWA_ICON_SIZE,) * 2, Image.LANCZOS), PUBLIC / "icon.png")
    master.save(FAVICON_ICO_OUT, format="ICO", sizes=list(ICO_SIZES))
    print(f"  {FAVICON_ICO_OUT.relative_to(MY_APP)}  {FAVICON_ICO_OUT.stat().st_size // 1024}KB")


def main() -> None:
    build_transparent_marks()
    build_schema_logo()
    build_og_image()
    build_favicon_sets(build_favicon_master())
    print("Done.")


if __name__ == "__main__":
    main()
