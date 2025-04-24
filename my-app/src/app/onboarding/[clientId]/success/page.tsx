"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

// Sample client data - in production, this would come from a database
const clientData = {

  'JamesBooth': {
    name: 'James Booth ',
    industry: '',
    primaryColor: '#0891b2', // cyan-600
    contactEmail: 'james.booth@example.com',
    contactName: 'James Booth'
  },
  'default': {
    name: 'OnCode',
    industry: 'Technology',
    primaryColor: '#2563eb', // blue-600
    contactEmail: 'hello@oncode.com',
    contactName: 'OnCode Team'
  }
};

export default function ClientSuccessPage({ params }: { params: { clientId: string } }) {
  const { clientId } = params;
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
      // If invalid clientId, use default
      setClient(clientData.default);
    }
    
    setIsLoading(false);
    
    // Get form data from localStorage (if available)
    const formData = localStorage.getItem('onboardingData');
    if (formData) {
      console.log('Submitted form data:', JSON.parse(formData));
      // In a real app, you'd send this data to your server
    }
    
  }, [clientId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container max-w-3xl mx-auto py-20 px-4 text-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="p-4 rounded-full" style={{ backgroundColor: `${client.primaryColor}15` }}>
          <CheckCircle className="h-16 w-16" style={{ color: client.primaryColor }} />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight">MVP Checklist Complete!</h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Thank you for completing the MVP project assessment for <span className="font-medium" style={{ color: client.primaryColor }}>{client.name}</span>. Your information has been received and our team is ready to help turn your idea into reality.
        </p>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">The MVP Development Process</h2>
          <ul className="text-left max-w-md mx-auto space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3" 
                   style={{ backgroundColor: `${client.primaryColor}15`, color: client.primaryColor }}>1</div>
              <div>
                <span className="font-medium">Initial Consultation</span>
                <p className="text-sm text-gray-600">We'll review your MVP requirements and schedule a kickoff call within 48 hours</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3"
                   style={{ backgroundColor: `${client.primaryColor}15`, color: client.primaryColor }}>2</div>
              <div>
                <span className="font-medium">Solution Design</span>
                <p className="text-sm text-gray-600">Our team will create a detailed project plan and technical architecture</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3"
                   style={{ backgroundColor: `${client.primaryColor}15`, color: client.primaryColor }}>3</div>
              <div>
                <span className="font-medium">Development Sprints</span>
                <p className="text-sm text-gray-600">We'll build your MVP in short, iterative cycles with regular demos</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3"
                   style={{ backgroundColor: `${client.primaryColor}15`, color: client.primaryColor }}>4</div>
              <div>
                <span className="font-medium">Testing & Launch</span>
                <p className="text-sm text-gray-600">Quality assurance, user acceptance testing, and deployment</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3"
                   style={{ backgroundColor: `${client.primaryColor}15`, color: client.primaryColor }}>5</div>
              <div>
                <span className="font-medium">Post-Launch Support</span>
                <p className="text-sm text-gray-600">Feedback collection, analytics review, and iteration planning</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mt-10 p-4 border rounded-md max-w-md mx-auto" 
             style={{ borderColor: `${client.primaryColor}30`, backgroundColor: `${client.primaryColor}10` }}>
          <h3 className="font-medium mb-2" style={{ color: client.primaryColor }}>Your MVP Checklist Insights</h3>
          <p className="text-sm" style={{ color: `${client.primaryColor}90` }}>
            Based on your responses, we'll recommend the optimal approach for your {client.industry.toLowerCase()} MVP development, 
            focusing on core functionality while ensuring scalability for future growth.
          </p>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Your dedicated contact is {client.contactName} ({client.contactEmail})
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          {/* <Link 
            href="/"
            className="flex-1 px-6 py-3 text-white font-medium rounded-md text-center"
            style={{ backgroundColor: client.primaryColor, 
                    boxShadow: `0 4px 6px -1px ${client.primaryColor}30, 0 2px 4px -1px ${client.primaryColor}20` }}
          >
            Return Home
          </Link> */}
          <Link 
            href="https://calendly.com/sydcodes/30min"
            className="flex-1 px-6 py-3 font-medium bg-transparent border rounded-md text-center"
            style={{ color: client.primaryColor, borderColor: client.primaryColor }}
            target="_blank"
          >
            Schedule Call
          </Link>
        </div>
      </div>
    </div>
  );
} 