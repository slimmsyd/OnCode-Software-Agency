import type { Metadata } from "next";
import NewsletterPreviewClient from "./NewsletterPreviewClient";

export const metadata: Metadata = {
  title: "Newsletter popup preview",
  description: "Internal comparison of the newsletter popup directions.",
  robots: { index: false, follow: false },
};

export default function NewsletterPreviewPage() {
  return <NewsletterPreviewClient />;
}
