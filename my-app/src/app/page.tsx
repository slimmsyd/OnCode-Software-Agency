import type { Metadata } from "next";
import JsonLd, { buildFaqPageSchema } from "./components/JsonLd";
import RedesignHome from "./components/redesign/RedesignHome";
import { HOME_FAQ } from "./components/redesign/aeo/faq-home";

const HOME_URL = "https://www.0ncode.com";

export const metadata: Metadata = {
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    url: HOME_URL,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={buildFaqPageSchema(HOME_FAQ)} />
      <RedesignHome />
    </>
  );
}
