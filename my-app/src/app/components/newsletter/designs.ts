import type { ComponentType } from "react";
import {
  DEFAULT_NEWSLETTER_DESIGN,
  NEWSLETTER_DESIGN_IDS,
  type NewsletterDesignId,
} from "@/lib/newsletter";
import FieldNoteDialog, {
  FIELD_NOTE_TITLE_ID,
} from "./designs/FieldNoteDialog";
import SignalDialog, { SIGNAL_TITLE_ID } from "./designs/SignalDialog";

export interface NewsletterDialogProps {
  onClose: () => void;
  source?: string;
}

export interface NewsletterDesignMeta {
  id: NewsletterDesignId;
  label: string;
  summary: string;
  /** id of the heading the modal should point aria-labelledby at. */
  titleId: string;
  Dialog: ComponentType<NewsletterDialogProps>;
}

export const NEWSLETTER_DESIGN_REGISTRY: Record<
  NewsletterDesignId,
  NewsletterDesignMeta
> = {
  "field-note": {
    id: "field-note",
    label: "Field Note",
    summary:
      "Editorial. White paper beside a black counterfoil, serif masthead, both fields visible.",
    titleId: FIELD_NOTE_TITLE_ID,
    Dialog: FieldNoteDialog,
  },
  signal: {
    id: "signal",
    label: "Signal",
    summary:
      "Dark instrument panel. One field first, optional name behind a toggle, live readout.",
    titleId: SIGNAL_TITLE_ID,
    Dialog: SignalDialog,
  },
};

export const NEWSLETTER_DESIGN_LIST = NEWSLETTER_DESIGN_IDS.map(
  (id) => NEWSLETTER_DESIGN_REGISTRY[id],
);

export function getNewsletterDesign(
  id: NewsletterDesignId = DEFAULT_NEWSLETTER_DESIGN,
): NewsletterDesignMeta {
  return NEWSLETTER_DESIGN_REGISTRY[id] ?? NEWSLETTER_DESIGN_REGISTRY[DEFAULT_NEWSLETTER_DESIGN];
}
