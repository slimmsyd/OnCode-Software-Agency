"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OnboardingSuccess() {
  // In a real app, you might want to fetch confirmation details
  // or perform other actions on page load
  useEffect(() => {
    // Optional: Analytics tracking or other side effects
  }, []);

  return (
    <div className="container max-w-3xl mx-auto py-20 px-4 text-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight">MVP Checklist Complete!</h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Thank you for completing the MVP project assessment. Your information has been received and our team is ready to help turn your idea into reality.
        </p>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">The MVP Development Process</h2>
          <ul className="text-left max-w-md mx-auto space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</div>
              <div>
                <span className="font-medium">Initial Consultation</span>
                <p className="text-sm text-gray-600">We'll review your MVP requirements and schedule a kickoff call within 48 hours</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">2</div>
              <div>
                <span className="font-medium">Solution Design</span>
                <p className="text-sm text-gray-600">Our team will create a detailed project plan and technical architecture</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">3</div>
              <div>
                <span className="font-medium">Development Sprints</span>
                <p className="text-sm text-gray-600">We'll build your MVP in short, iterative cycles with regular demos</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">4</div>
              <div>
                <span className="font-medium">Testing & Launch</span>
                <p className="text-sm text-gray-600">Quality assurance, user acceptance testing, and deployment</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">5</div>
              <div>
                <span className="font-medium">Post-Launch Support</span>
                <p className="text-sm text-gray-600">Feedback collection, analytics review, and iteration planning</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mt-10 p-4 border border-blue-200 bg-blue-50 rounded-md max-w-md mx-auto">
          <h3 className="font-medium text-blue-800 mb-2">Your MVP Checklist Insights</h3>
          <p className="text-sm text-blue-700">
            Based on your responses, we'll recommend the optimal approach for your MVP development, 
            focusing on core functionality while ensuring scalability for future growth.
          </p>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          <Link 
            href="/"
            className="flex-1 px-6 py-3 text-white font-medium bg-black hover:bg-gray-800 rounded-md text-center"
          >
            Return Home
          </Link>
          <Link 
            href="https://calendly.com/0ncode-info/30min"
            className="flex-1 px-6 py-3 text-black font-medium bg-transparent border border-black hover:bg-gray-100 rounded-md text-center"
            target="_blank"
          >
            Schedule Call
          </Link>
        </div>
      </div>
    </div>
  );
} 