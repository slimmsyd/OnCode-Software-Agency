"use client";

import HomeNavigation from "@/app/components/redesign/HomeNavigation";
import RedesignFooter from "@/app/components/redesign/RedesignFooter";
import IntakeFormWizard from "@/app/components/intake-form/IntakeFormWizard";

export default function ContactPageContent() {
  return (
    <div className="relative min-h-screen bg-white">
      <HomeNavigation variant="inner" />

      <div className="px-4 pb-20 pt-28 min-[701px]:pt-36">
        <div className="mx-auto max-w-xl">
          <h1 className="mb-2 text-center text-3xl font-semibold text-black">
            Tell us about your project
          </h1>
          <p className="mb-10 text-center text-gray-500">
            Fill out the form below and we&apos;ll get back to you within 24
            hours.
          </p>
          <IntakeFormWizard variant="page" />
        </div>
      </div>

      <RedesignFooter />
    </div>
  );
}
