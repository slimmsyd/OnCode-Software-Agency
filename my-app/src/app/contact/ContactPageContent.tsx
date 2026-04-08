"use client";

import Navigation from "@/components/ui/header-2";
import Footer from "@/app/components/Footer";
import IntakeFormWizard from "@/app/components/intake-form/IntakeFormWizard";
import { IntakeFormProvider } from "@/app/context/IntakeFormContext";

export default function ContactPageContent() {
  return (
    <IntakeFormProvider>
      <Navigation textColor={true} />

      <div className="min-h-screen bg-white pt-32 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-semibold text-black mb-2 text-center">
            Tell us about your project
          </h1>
          <p className="text-gray-500 text-center mb-10">
            Fill out the form below and we&apos;ll get back to you within 24
            hours.
          </p>
          <IntakeFormWizard variant="page" />
        </div>
      </div>

      <Footer />
    </IntakeFormProvider>
  );
}
