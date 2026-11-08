#!/usr/bin/env python3
"""Build OnCode brand assets from the master logos.

Masters (committed, never hand-edited in place):

  public/Logos/oncode-wordmark-master.png     horizontal wordmark, black ink, transparent
  public/Logos/oncode-share-master.png        1200x630 wordmark share card on white
  public/Logos/on-favicon-master.png          square "On" mark, transparent, 1024px
  public/Logos/favicon-16.png                 designer export, used as-is
  public/Logos/favicon-32.png                 designer export, used as-is
  public/Logos/favicon-64.png                 designer export, used as-is
  public/Logos/favicon.ico                    designer export, used as-is
  public/Logos/oncode-mark-ornate-master.png  previous ornate "O", kept for reference

Outputs:

  public/redesign/oncode-hero-wordmark.png    wordmark used in the hero, nav, and footer
  public/images/oncode-logo.png               logo on white for JSON-LD / publisher logo
  public/images/og-image.png                  1200x630 social share card
  public/images/favicon-mark-1024.png         favicon master on white
  + every favicon size and apple-touch-icon.png / icon.png
  src/app/favicon.ico                         the ICO that Next.js actually serves at
                                              /favicon.ico

Note: Next.js App Router treats `app/favicon.ico` as a metadata file convention and
it takes precedence over `public/favicon.ico`. A copy in `public/` is silently
ignored, so this script writes the ICO into `src/app/` only - do not add one back
to `public/`.

Run from anywhere:  python3 scripts/build-brand-assets.py
Requires: pillow
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

MY_APP = Path(__file__).resolve().parents[1]
PUBLIC = MY_APP / "public"
LOGOS = PUBLIC / "Logos"

WORDMARK_MASTER = LOGOS / "oncode-wordmark-master.png"
SHARE_MASTER = LOGOS / "oncode-share-master.png"
FAVICON_MASTER_SRC = LOGOS / "on-favicon-master.png"

HERO_WORDMARK_OUT = PUBLIC / "redesign" / "oncode-hero-wordmark.png"
SCHEMA_LOGO_OUT = PUBLIC / "images" / "oncode-logo.png"
OG_IMAGE_OUT = PUBLIC / "images" / "og-image.png"
FAVICON_MASTER_OUT = PUBLIC / "images" / "favicon-mark-1024.png"
# App Router metadata convention - Next serves this at /favicon.ico and ignores
# any public/favicon.ico, so the generated ICO has to land here.
FAVICON_ICO_OUT = MY_APP / "src" / "app" / "favicon.ico"

OG_SIZE = (1200, 630)
SCHEMA_LOGO_SIZE = (1200, 300)
FAVICON_MASTER_SIZE = (1024, 1024)
FAVICON_PNG_SIZES = (16, 32, 48, 64, 96, 128, 192, 256)
APPLE_TOUCH_SIZE = 180
PWA_ICON_SIZE = 512


def save_png(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, "PNG", optimize=True)
    print(f"  {path.relative_to(MY_APP)}  {image.width}x{image.height}  {path.stat().st_size // 1024}KB")


def build_transparent_marks() -> None:
    """Hero, nav, and footer all use the supplied wordmark file."""
    print("Wordmark")
    save_png(Image.open(WORDMARK_MASTER).convert("RGBA"), HERO_WORDMARK_OUT)


def build_schema_logo() -> None:
    """Wordmark flattened onto white for JSON-LD, where transparency is unreliable."""
    print("Schema logo")
    mark = Image.open(WORDMARK_MASTER).convert("RGBA")
    canvas_width, canvas_height = SCHEMA_LOGO_SIZE
    scale = min(canvas_width / mark.width, canvas_height / mark.height) * 0.92
    mark = mark.resize(
        (round(mark.width * scale), round(mark.height * scale)), Image.LANCZOS
    )
    canvas = Image.new("RGB", SCHEMA_LOGO_SIZE, (255, 255, 255))
    canvas.paste(mark, ((canvas_width - mark.width) // 2, (canvas_height - mark.height) // 2), mark)
    save_png(canvas, SCHEMA_LOGO_OUT)


def on_white(image: Image.Image) -> Image.Image:
    """Flatten a transparent mark onto white. Apple and PWA icons cannot be transparent."""
    canvas = Image.new("RGB", image.size, (255, 255, 255))
    canvas.paste(image, mask=image.split()[-1])
    return canvas


def build_og_image() -> None:
    """1200x630 share card supplied with the wordmark."""
    print("Share card")
    card = Image.open(SHARE_MASTER).convert("RGB")
    if card.size != OG_SIZE:
        card = card.resize(OG_SIZE, Image.LANCZOS)
    save_png(card, OG_IMAGE_OUT)


def build_favicon_sets() -> None:
    """Browser icons from the square On mark. 16, 32, and 64 stay as exported."""
    print("Favicons")
    master = Image.open(FAVICON_MASTER_SRC).convert("RGBA")
    if master.size != FAVICON_MASTER_SIZE:
        master = master.resize(FAVICON_MASTER_SIZE, Image.LANCZOS)
    save_png(on_white(master), FAVICON_MASTER_OUT)
    shipped = {16: LOGOS / "favicon-16.png", 32: LOGOS / "favicon-32.png", 64: LOGOS / "favicon-64.png"}
    for size in FAVICON_PNG_SIZES:
        dest = PUBLIC / "images" / f"favicon-{size}x{size}.png"
        if size in shipped and shipped[size].exists():
            save_png(Image.open(shipped[size]).convert("RGBA"), dest)
            continue
        save_png(master.resize((size, size), Image.LANCZOS), dest)
    save_png(on_white(master.resize((APPLE_TOUCH_SIZE,) * 2, Image.LANCZOS)), PUBLIC / "apple-touch-icon.png")
    save_png(on_white(master.resize((PWA_ICON_SIZE,) * 2, Image.LANCZOS)), PUBLIC / "icon.png")
    ico = LOGOS / "favicon.ico"
    FAVICON_ICO_OUT.write_bytes(ico.read_bytes())
    print(f"  {FAVICON_ICO_OUT.relative_to(MY_APP)}  {FAVICON_ICO_OUT.stat().st_size // 1024}KB")


def main() -> None:
    build_transparent_marks()
    build_schema_logo()
    build_og_image()
    build_favicon_sets()
    print("Done.")


if __name__ == "__main__":
    main()
