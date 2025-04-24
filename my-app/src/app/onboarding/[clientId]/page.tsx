"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingForm from "../../components/onboarding/OnboardingForm";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Sample client data - in production, this would come from a database
const clientData = {
  'JamesBooth': {
    name: 'James Booth ',
    industry: '',
    primaryColor: '#0891b2', // cyan-600
    defaultFormValues: {
      projectName: "Distributed Data Security Platform",
      primaryContact: "James Booth",
      email: "james.booth@example.com",
      problemStatement: "",
      targetAudience: "",
      coreSolution: "VISION: Use private deployments of IPFS and blockchain to collect metadata and store it in immutable ledgers with API access to allow for authoritative data to be queried by Access Control systems to give data level decryption and access of data anywhere and any environment.",
      techStack: "Frontend: NextJS\nBackend: Supabase (for MVP, likely need custom for full product)\nBusiness logic: IPFS & OpenTDF",
      deploymentModel: "cloud",
      timeline: "1-2 months"
    }
  },
  'default': {
    name: 'OnCode',
    industry: 'Technology',
    primaryColor: '#2563eb', // blue-600
  }
};

const queryClient = new QueryClient();

export default function ClientOnboardingPage({ params }: { params: { clientId: string } }) {
  const { clientId } = params;
  const router = useRouter();
  const [client, setClient] = useState<any>(clientData.default);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you'd fetch client data from an API or database
    // For this example, we're using the sample data above
    
    // Check if clientId is valid (case-insensitive)
    const clientIdLower = clientId.toLowerCase();
    const foundKey = Object.keys(clientData).find(key => key.toLowerCase() === clientIdLower);
    
    if (foundKey) {
      setClient(clientData[foundKey as keyof typeof clientData]);
    } else {
      // If invalid clientId, use default or redirect
      setClient(clientData.default);
    }
    
    setIsLoading(false);
    
    // Track client visit (in a real app, you'd send this to your analytics)
    console.log(`Client visit: ${clientId} at ${new Date().toISOString()}`);
    
  }, [clientId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div 
        className="min-h-screen bg-gray-50"
        style={{ 
          '--accent-color': client.primaryColor,
        } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <div className="mb-2 text-sm font-medium" style={{ color: client.primaryColor }}>
              Custom MVP Checklist for {client.name}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              MVP Development Checklist
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Tell us about your product idea and we'll help you build the perfect Minimum Viable Product to validate your concept quickly and efficiently.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:mt-8">
              <div className="rounded-md bg-blue-50 px-4 py-2 border border-blue-100">
                <p className="text-sm text-blue-700">
                  Complete this checklist to receive a customized MVP development roadmap tailored for your {client.industry.toLowerCase()} business
                </p>
              </div>
            </div>
          </div>
          
          <OnboardingForm 
            clientId={clientId} 
            defaultValues={client.defaultFormValues} 
          />
        </div>
      </div>
    </QueryClientProvider>
  );
} 