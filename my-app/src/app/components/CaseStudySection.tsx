"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  date: string;
  executiveSummary: string;
  background: string;
  challenge: string;
  solution: string;
  results: {
    metric1: {
      value: string;
      label: string;
      description: string;
    };
    metric2: {
      value: string;
      label: string;
      description: string;
    };
  };
  keyTakeaways: string[];
  imageSrc: string;
  caseStudyLink: string;
  timeline: {
    discovery: number;
    design: number;
    development: number;
  };
}

// Multiple case studies for the carousel
const caseStudies: CaseStudyProps[] = [
  {
    title: "CALL-MANAGEMENT DASHBOARD FOR PRMNT PRO",
    subtitle: "CASE STUDY",
    date: "APRIL 2024",
    executiveSummary: "PRMNT Pro provided a streamlined call tracking process to ensure all calls received were logged in a management dashboard.",
    background: "PRMNT Pro is a business solutions provider seeking to increase efficiency.",
    challenge: "Scattered call logs and missed follow-ups.",
    solution: "ONCODE developed a custom dashboard.",
    results: {
      metric1: {
        value: "90%",
        label: "Reduction in missed followups",
        description: "Improved tracking of client communications"
      },
      metric2: {
        value: "50%",
        label: "Improvement in call tracking",
        description: "Enhanced efficiency in sales operations"
      }
    },
    keyTakeaways: [
      "Centralized call logs",
      "Automated reminders",
      "Real-time analytics"
    ],
    imageSrc: "/works/DashboardImage.png",
    caseStudyLink: "/casetudies/prmntPro",
    timeline: {
      discovery: 33,
      design: 33,
      development: 34
    }
  },
  {
    title: "AI CONTRACT EXTRACTOR FOR PRMNT PRO",
    subtitle: "CASE STUDY",
    date: "MARCH 2024",
    executiveSummary: "An intelligent PDF Contract Extractor that leverages LangChain and OpenAI to analyze government contract documents.",
    background: "PRMNT Pro needed a solution to analyze complex government contracts efficiently.",
    challenge: "Manual contract review was time-consuming and error-prone.",
    solution: "ONCODE created an AI-powered document analysis system.",
    results: {
      metric1: {
        value: "75%",
        label: "Time saved on contract review",
        description: "Dramatically reduced manual review requirements"
      },
      metric2: {
        value: "95%",
        label: "Extraction accuracy",
        description: "High precision data extraction from complex documents"
      }
    },
    keyTakeaways: [
      "AI-powered document analysis",
      "Flexible page-by-page or full document processing",
      "Integration with existing workflows"
    ],
    imageSrc: "/works/Preem_Chat1.png",
    caseStudyLink: "/casetudies/prmntProExtractor",
    timeline: {
      discovery: 25,
      design: 35,
      development: 40
    }
  }
];

// Timeline component
function Timeline({ timeline }: { timeline: CaseStudyProps['timeline'] }) {
  return (
    <div className="mb-8">
      <h4 className="text-sm uppercase tracking-wider font-medium mb-4">TIMELINE</h4>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center text-xs tracking-wider text-gray-600">
          <span>Discovery</span>
          <span>Design</span>
          <span>Development</span>
        </div>
        <div className="relative h-14">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-200">
            <div className="absolute top-0 left-0 w-full h-full flex">
              <div className="h-full bg-amber-200" style={{ width: `${timeline.discovery}%` }}></div>
              <div className="h-full bg-amber-300" style={{ width: `${timeline.design}%` }}></div>
              <div className="h-full bg-black" style={{ width: `${timeline.development}%` }}></div>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 flex items-center h-full">
            <div className="h-2 w-[1px] bg-gray-400"></div>
          </div>
          
          <div className="absolute top-0 left-[33%] flex items-center h-full">
            <div className="h-2 w-[1px] bg-gray-400"></div>
          </div>
          
          <div className="absolute top-0 left-[66%] flex items-center h-full">
            <div className="h-2 w-[1px] bg-gray-400"></div>
          </div>
          
          <div className="absolute top-0 right-0 flex items-center h-full">
            <div className="h-2 w-[1px] bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCaseStudy = caseStudies[currentIndex];
  
  const nextCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };
  
  const prevCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };
  
  return (
    <section className="py-16 sm:py-24 w-full max-w-[1200px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-black text-[28px] font-semibold flex items-center gap-3">
            <div className="w-6 h-[2px] bg-black"></div>
            Featured Case Studies
          </h2>
          
          {/* Carousel Navigation */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prevCase}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous case study"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {caseStudies.length}
            </div>
            <button 
              onClick={nextCase}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next case study"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          {/* Case Study Card */}
          <div className="relative">
            {/* Abstract geometric patterns */}
            <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gray-200 -z-10"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gray-200 -z-10"></div>
            
            {/* Case Study Header */}
            <div className="bg-black text-white p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <span className="text-xs font-medium tracking-[0.2em] uppercase">{currentCaseStudy.subtitle}</span>
                <span className="text-xs font-medium tracking-wider mt-2 sm:mt-0">{currentCaseStudy.date}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">
                {currentCaseStudy.title}
              </h3>
              <p className="text-white/70 text-sm max-w-3xl">
                {currentCaseStudy.executiveSummary}
              </p>
            </div>
            
            {/* Case Study Content */}
            <div className="bg-white border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 p-8 sm:p-10">
                {/* Left Column */}
                <div className="md:col-span-4 space-y-10 relative">
                  {/* Vertical line for decoration */}
                  <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gray-100 hidden md:block"></div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-medium mb-3">BACKGROUND</h4>
                    <p className="text-gray-600">{currentCaseStudy.background}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-medium mb-3">THE CHALLENGE</h4>
                    <p className="text-gray-600">{currentCaseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-medium mb-3">WHAT WE DID</h4>
                    <p className="text-gray-600">{currentCaseStudy.solution}</p>
                  </div>
                  
                  <div className="hidden md:block">
                    <h4 className="text-sm uppercase tracking-wider font-medium mb-3">KEY TAKEAWAYS</h4>
                    <ul className="space-y-2">
                      {currentCaseStudy.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-1.5 mr-2"></span>
                          <span className="text-gray-600">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="md:col-span-8 space-y-10">
                  <div className="relative aspect-video overflow-hidden border border-gray-200 rounded-sm shadow-sm">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gray-300 z-10"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gray-300 z-10"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gray-300 z-10"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gray-300 z-10"></div>
                    
                    <Image
                      src={currentCaseStudy.imageSrc}
                      alt={currentCaseStudy.title}
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                  
                  {/* Timeline */}
                  <Timeline timeline={currentCaseStudy.timeline} />
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-medium mb-6">RESULTS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-sm border-l-2 border-black">
                        <span className="block text-4xl font-bold mb-2">{currentCaseStudy.results.metric1.value}</span>
                        <h5 className="font-medium mb-2">{currentCaseStudy.results.metric1.label}</h5>
                        <p className="text-gray-600 text-sm">{currentCaseStudy.results.metric1.description}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-sm border-l-2 border-black">
                        <span className="block text-4xl font-bold mb-2">{currentCaseStudy.results.metric2.value}</span>
                        <h5 className="font-medium mb-2">{currentCaseStudy.results.metric2.label}</h5>
                        <p className="text-gray-600 text-sm">{currentCaseStudy.results.metric2.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link
                      href={currentCaseStudy.caseStudyLink}
                      className="inline-flex items-center px-8 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors duration-200 group"
                    >
                      <span>View Full Case Study</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* KEY TAKEAWAYS (Mobile) */}
              <div className="md:hidden border-t border-gray-100 p-8 sm:p-10">
                <h4 className="text-sm uppercase tracking-wider font-medium mb-6">KEY TAKEAWAYS</h4>
                <div className="space-y-4">
                  {currentCaseStudy.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 border border-gray-200">
                        <span className="font-medium text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-600">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* ONCODE Signature */}
          <div className="flex justify-between items-center mt-10 mb-8 border-t border-gray-200 pt-6">
            <div className="font-medium text-gray-800">ONCODE</div>
            <div className="text-sm text-gray-500">info@oncode.com</div>
          </div>
        </motion.div>
        
        {/* Pagination Indicator */}
        <div className="flex justify-center mt-10 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Add alternating style case studies section description */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our detailed case studies to see how we've helped businesses transform their operations through custom development and intelligent automation.
          </p>
          <Link
            href="/casetudies"
            className="inline-flex items-center mt-6 px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            View all case studies
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
} 