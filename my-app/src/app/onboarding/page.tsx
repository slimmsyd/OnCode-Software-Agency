"use client";

import OnboardingForm from "../components/onboarding/OnboardingForm";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function OnboardingPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              MVP Development Checklist
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Tell us about your product idea and we'll help you build the perfect Minimum Viable Product to validate your concept quickly and efficiently.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:mt-8">
              <div className="rounded-md bg-blue-50 px-4 py-2 border border-blue-100">
                <p className="text-sm text-blue-700">
                  Complete this checklist to receive a customized MVP development roadmap from our expert team
                </p>
              </div>
            </div>
          </div>
          
          <OnboardingForm />
        </div>
      </div>
    </QueryClientProvider>
  );
} 