"use client";

import RedesignNav from "../RedesignNav";
import RedesignFooter from "../RedesignFooter";
import AnswerHero from "./AnswerHero";
import ProofSection from "./ProofSection";
import ExamplesSection from "./ExamplesSection";
import ComparisonTable from "./ComparisonTable";
import ConsultantFaq from "./ConsultantFaq";
import FinalCta from "./FinalCta";

/** Client shell for the AEO automation consultant page. */
export default function AutomationConsultantPage() {
  return (
    <div className="relative bg-white">
      <RedesignNav />
      <AnswerHero />
      <ProofSection />
      <ExamplesSection />
      <ComparisonTable />
      <ConsultantFaq />
      <FinalCta />
      <RedesignFooter />
    </div>
  );
}
