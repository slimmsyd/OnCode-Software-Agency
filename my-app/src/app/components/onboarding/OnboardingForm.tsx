"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ChatPopup from "../ChatPopup";



interface OnboardingFormProps {
  clientId?: string;
  defaultValues?: {
    projectName?: string;
    primaryContact?: string;
    email?: string;
    phone?: string;
    problemStatement?: string;
    targetAudience?: string;
    coreSolution?: string;
    coreFeatures?: string;
    successMetrics?: string;
    mustHaveFeatures?: string;
    niceToHaveFeatures?: string;
    techStack?: string;
    deploymentModel?: string;
    timeline?: string;
    budget?: string;
    additionalNotes?: string;
  };
}

export default function OnboardingForm({ clientId = 'default', defaultValues = {} }: OnboardingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Client tracking info
    clientId: clientId,
    submissionDate: new Date().toISOString(),
    
    // Step 1: Basic Project Information
    projectName: defaultValues.projectName || "",
    primaryContact: defaultValues.primaryContact || "",
    email: defaultValues.email || "",
    phone: defaultValues.phone || "",
    
    // Step 2: Problem & Solution
    problemStatement: defaultValues.problemStatement || "",
    targetAudience: defaultValues.targetAudience || "",
    coreSolution: defaultValues.coreSolution || "",
    
    // Step 3: MVP Requirements & Features
    coreFeatures: defaultValues.coreFeatures || "",
    successMetrics: defaultValues.successMetrics || "",
    mustHaveFeatures: defaultValues.mustHaveFeatures || "",
    niceToHaveFeatures: defaultValues.niceToHaveFeatures || "",
    
    // Step 4: Technical & Timeline
    techStack: defaultValues.techStack || "",
    deploymentModel: defaultValues.deploymentModel || "",
    timeline: defaultValues.timeline || "",
    budget: defaultValues.budget || "",
    additionalNotes: defaultValues.additionalNotes || ""
  });
  const router = useRouter();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Log phone field changes
    if (name === 'phone') {
      console.log("Phone field changed:", value);
    }
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    console.log("Phone value:", formData.phone);
    
    // Store in localStorage for demo purposes
    localStorage.setItem("onboardingData", JSON.stringify(formData));
    
    // Send data to Make.com webhook
    fetch("https://hook.us1.make.com/asyohb1n2p93mooqkdm7x3sax4ihnw8s", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        // Ensure phone is explicitly included
        phone: formData.phone || ""
      }),
    })
      .then((response) => {
        console.log("Webhook response:", response);
        // Redirect to success page with clientId (preserving original URL casing)
        router.push(`/onboarding/${clientId}/success`);
      })
      .catch((error) => {
        console.error("Webhook error:", error);
        // Still redirect even if webhook fails
        router.push(`/onboarding/${clientId}/success`);
      });
  };

  const calculateProgress = () => {
    return (step / 4) * 100;
  };

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <ChatPopup />
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            {step === 1 && "Project Information"}
            {step === 2 && "Problem & Solution"}
            {step === 3 && "MVP Requirements"}
            {step === 4 && "Technical & Timeline"}
          </h2>
          <p className="text-gray-600 mt-1">
            {step === 1 && "Basic information about your project"}
            {step === 2 && "Define the problem and your solution"}
            {step === 3 && "Core features and success metrics"}
            {step === 4 && "Technical details and timeline"}
          </p>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full" 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            {/* Step 1: Basic Project Information */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What do you call your project?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Contact Name
                  </label>
                  <input
                    type="text"
                    name="primaryContact"
                    value={formData.primaryContact}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Who is the main point of contact?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                    pattern="[0-9\-\+\s\(\)]*"
                    title="Please enter a valid phone number"
                    inputMode="tel"
                  />
                </div>
              </>
            )}
            
            {/* Step 2: Problem & Solution */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Problem Statement
                  </label>
                  <textarea
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    placeholder="What specific problem does your product solve?"
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Clearly define the problem your MVP will address
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Audience
                  </label>
                  <textarea
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    placeholder="Who are the primary users of your product?"
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Describe your ideal users, their demographics, and pain points
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Core Solution
                  </label>
                  <textarea
                    name="coreSolution"
                    value={formData.coreSolution}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    placeholder="How does your product solve the problem?"
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Describe your solution in 1-2 paragraphs
                  </p>
                </div>
              </>
            )}
            
            {/* Step 3: MVP Requirements & Features */}
            {step === 3 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Core Features
                  </label>
                  <textarea
                    name="coreFeatures"
                    value={formData.coreFeatures}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    placeholder="List the 3-5 most critical features of your MVP"
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Focus on the absolute minimum features needed to solve the core problem
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Success Metrics
                  </label>
                  <textarea
                    name="successMetrics"
                    value={formData.successMetrics}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    placeholder="How will you measure the success of your MVP?"
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Define key metrics, e.g., user engagement, conversion rate, etc.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Must-Have Features
                    </label>
                    <textarea
                      name="mustHaveFeatures"
                      value={formData.mustHaveFeatures}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                      placeholder="Essential features that must be included"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nice-to-Have Features
                    </label>
                    <textarea
                      name="niceToHaveFeatures"
                      value={formData.niceToHaveFeatures}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                      placeholder="Features that could be added later"
                    ></textarea>
                  </div>
                </div>
              </>
            )}
            
            {/* Step 4: Technical & Timeline */}
            {step === 4 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Technology Stack
                  </label>
                  <textarea
                    name="techStack"
                    value={formData.techStack}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-20"
                    placeholder="Any specific technologies you want to use?"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    If you don't have preferences, our team will recommend the best options for your MVP
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deployment Model
                  </label>
                  <select
                    name="deploymentModel"
                    value={formData.deploymentModel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select deployment preference</option>
                    <option value="cloud">Cloud (AWS, Azure, GCP)</option>
                    <option value="on-premise">On-Premise</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="blockchain">Blockchain/Web3</option>
                    <option value="undecided">Not Sure/Need Guidance</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline Expectations
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your expected timeline</option>
                    <option value="1-4 weeks">1-4 weeks (Very minimal MVP)</option>
                    <option value="1-2 months">1-2 months (Standard MVP)</option>
                    <option value="3-6 months">3-6 months (Complex MVP)</option>
                    <option value="flexible">Flexible/Not sure</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                    <option value="flexible">Flexible/Not sure</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-20"
                    placeholder="Any other details you'd like to share about your MVP project"
                  ></textarea>
                </div>
              </>
            )}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 flex justify-between">
            {step > 1 && (
              <button 
                type="button" 
                onClick={prevStep}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Previous
              </button>
            )}
            {step < 4 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button 
                type="submit"
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      
      {/* Link to PRD document */}
      <div className="mt-6 text-center">
        <Link 
          href={clientId.toLowerCase() === 'jamesbooth' 
            ? "https://sage-fifth-adf.notion.site/Core-MVP-Requirements-1de4a79ac6b780f686b7ff1306b38834?pvs=73"
            : "/documents/OnboardingProcess-PRD.md"}
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          View Product Requirements Document
        </Link>
      </div>
    </div>
  );
} 