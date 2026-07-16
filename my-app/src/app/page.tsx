import JsonLd, { buildFaqPageSchema } from "./components/JsonLd";
import RedesignHome from "./components/redesign/RedesignHome";
import { HOME_FAQ } from "./components/redesign/aeo/faq-home";

export default function Home() {
  return (
    <>
      <JsonLd data={buildFaqPageSchema(HOME_FAQ)} />
      <RedesignHome />
    </>
  );
}
