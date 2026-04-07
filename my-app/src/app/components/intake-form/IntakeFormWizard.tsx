"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  intakeFormSchema,
  stepFields,
  STEP_COUNT,
  type IntakeFormData,
} from "./intake-form.types";
import ProgressBar from "./ProgressBar";
import ContactStep from "./steps/ContactStep";
import BusinessStep from "./steps/BusinessStep";
import ProblemStep from "./steps/ProblemStep";
import ScopeStep from "./steps/ScopeStep";
import AttributionStep from "./steps/AttributionStep";
import SuccessScreen from "./SuccessScreen";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_INTAKE_WEBHOOK_URL ??
  "https://oncode.app.n8n.cloud/webhook-test/68e0eeb7-0bda-4849-9ef1-c1039b731e5b";

const stepComponents = [
  ContactStep,
  BusinessStep,
  ProblemStep,
  ScopeStep,
  AttributionStep,
];

interface IntakeFormWizardProps {
  onClose?: () => void;
  variant?: "modal" | "page";
}

export default function IntakeFormWizard({
  onClose,
  variant = "modal",
}: IntakeFormWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const methods = useForm<IntakeFormData>({
    resolver: zodResolver(intakeFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      website: "",
      businessDescription: "",
      problemDescription: "",
      existingSystemUrl: "",
      referralName: "",
    },
  });

  const validateCurrentStep = async (): Promise<boolean> => {
    const fields = stepFields[currentStep];
    const result = await methods.trigger(fields);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;

    if (currentStep < STEP_COUNT - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (data: IntakeFormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        ...data,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Intake form submission failed:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitClick = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;
    methods.handleSubmit(handleSubmit)();
  };

  if (isSubmitted) {
    return <SuccessScreen onClose={onClose} />;
  }

  const StepComponent = stepComponents[currentStep];
  const isLastStep = currentStep === STEP_COUNT - 1;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div
      className={`w-full ${
        variant === "page" ? "max-w-xl mx-auto" : ""
      }`}
    >
      <ProgressBar currentStep={currentStep} />

      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="min-h-[340px] relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <StepComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                currentStep === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Back
            </button>

            {isLastStep ? (
              <button
                type="button"
                onClick={onSubmitClick}
                disabled={isSubmitting}
                className="px-6 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
