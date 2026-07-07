"use client"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Sparkles, Minus } from "lucide-react";
import { useState } from "react";

interface Work {
  title: string;
  description: string;
  image: string; // This can now be either an image or video URL
  link?: string;
  package: string;
}

const works: Work[] = [
  {
    title: "BlackW3B / Obsidian Protocol",
    description:
      "Digital infrastructure and CRM automation for a leading-edge DeFi tokenization protocol, converting 1:1 gold-backed assets into digital tokens on the Solana blockchain.",
    image: "/Projects/ObsidianProtocol.jpeg",
    link: "https://www.w3bs.fun/",
    package: "Digital Infrastructure Package",
  },
  {
    title: "Naturally Radiant | Digital SOAP Notes System",
    description: "We built a custom SOAP notes interface that allows practitioners to log client sessions digitally, submit assessments and recommendations, and sync everything into Airtable. This centralized client history, streamlined practitioner workflows, and replaced paper-based records with a scalable digital system.",
    image: "/works/SoapNotes.png",

    package: "Workflow Automation Package"
  },

  {
    title: "Tint Labs – Car Dealership Website", 
    description: "Designed and developed an agency website showcasing performance-based marketing services, case studies, and client results. Features clean agency-style UI, mobile optimization, and dynamic content integration from IG/TikTok.",
    image: "/works/TintLabVideo.mov", // Video showcase of https://www.tintlab.net/
    link: "https://www.tintlab.net/",
    package: "Digital Foundation Package"
  },


  {
    title: "PRMNT PRO | Contract Extraction AI Pipeline",
    description: "We built an intelligent PDF Contract Extractor that leverages LangChain and OpenAI to analyze government contract documents. The system can analyze entire contracts or extract information page by page, giving the team unprecedented flexibility in how they review documents.",
    image: "/works/Preem_Chat1.png", // Update with your actual image path

    package: "AI Integration Package"
  },
  // {
  //   title: "PRMNT PRO | Custom CRM",
  //   description: "Designed and Developed Custom CRM for PRMNT PRO, to handle SDR.",
  //   image: "/works/Sales_Call_Dashboard.png", // Update with your actual image path
  //   link: "/casestudies/prmntPro"

  // },

  // {
  //   title: "Kinnected(On-going)",
  //   description: "A platform using Blockhaing Technology, store your family, history forever, using the immutable nature of blockchain.",
  //   image: "/works/Kinnected.png", // Update with your actual image path
  //   link: "/casestudies/kinnected"
  // },
  // {
  //   title: "Street Economics Dashboard",
  //   description: "A dashboard for Street Economics,to manage community engagment, user interactions. to caputre data and analytics. To help the community grow and thrive.",
  //   image: "https://red-broken-ferret-951.mypinata.cloud/ipfs/bafybeifsyeosyutghfvz7aphm7wgdyezk6nfttanurc4ldyuiwsvs76yme", // Update with your actual image path
  //   link: "/casestudies/streetEconomics"
  // },
  // {
  //   title: "Universal Law AI Youtube Automation Channel",
  //   description: "A Youtube automation channel that uses AI Songs, Images, and Videos to create a new song every week.",
  //   image: "/works/Universal_Law.png", // Update with your actual image path
  //   link: "/casestudies/universalLaw"
  // },
  // {
  //   title: "Invoice Magi",
  //   description: "Implementation of your design. No design? No problem. We can assist.",
  //   image: "/works/invoice-magi.png", // Update with your actual image path
  //   link: "/casestudies/invoice-magi"
  // },

  // {
  //   title: "Solomon Gpt",
  //   description: "A GPT-4o powered AI sage that can help you guide your life and more deeper questions than ever.",
  //   image: "/works/solomon.png", // Update with your actual image path
  //   link: "/casestudies/solomonAI"
  // },
  {
    title: "Creatures Cube",
    description: "Web application for an ERC-4047 NFT collection.",
    image: "/works/CreatureCubes.png", // Update with your actual image path
    link: "https://creaturecubes.art/",
    package: "Web3 Development Package"
  },
  {
    title: "Gliddy",
    description: "We built Gliddy from the ground up - first as a React web app, then converted it into a fully native iOS and Android mobile application using React Native. The platform connects bartenders and users, with features like profiles, QR codes, notifications, and event booking.",
    image: "/works/gliddy.png", // Update with actual image path

    package: "Mobile Development Package"
  },
  
  {
    title: "Preeminent Professional Services",
    description: "A Discovery site build for Facilitimes Management Company",
    image: "/works/PM.png", // Update with your actual image path
    link: "https://www.prmntpro.com/",
    package: "Digital Foundation Package"
  },
  {
    title: "KY Engineering – Website & Business Profile Setup",
    description: "Built a professional 5-6 page website with AI chatbot, booking calendar, and SEO optimization. Guided client through Google Business Profile setup. Took KY Engineering from zero to professional online presence in under a week.",
    image: "/works/Ky_Engineering.png", // Update with your actual image path

    package: "Digital Foundation Package"
  },


  // Add more works as needed
];

// Add a helper function to determine if the URL is a video
const isVideoUrl = (url: string) => {
  // Check for common video extensions or IPFS URLs
  return url.includes('ipfs') || /\.(mp4|webm|ogg|mov)$/i.test(url);
};

export default function Works() {
  const [visibleWorks, setVisibleWorks] = useState(3);
  const WORKS_PER_LOAD = 3;

  const showMoreWorks = () => {
    setVisibleWorks(prev => Math.min(prev + WORKS_PER_LOAD, works.length));
  };

  const closeWorks = () => {
    setVisibleWorks(3);
  };

  const hasMoreWorks = visibleWorks < works.length;

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-20 max-w-[1200px] m-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-[28px] font-semibold mb-12">Few of our works</h2>

        <div className="space-y-8">
          <AnimatePresence>
            {works.slice(0, visibleWorks).map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index >= 3 ? (index - 3) * 0.15 : index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#fdfbf7] to-[#f8f6f0] pointer-events-none" />
                
                <div className="flex flex-col md:flex-row relative">
                  {/* Left Content */}
                  <div className="p-8 md:w-1/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{work.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{work.description}</p>
                      
                      {/* Package Badge */}
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        {work.package}
                      </div>
                    </div>
                    
                    {work.link && (
                      <button
                        className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 group"
                        onClick={() => window.open(work.link, "_blank")}
                      >
                        View project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>

                  {/* Right Image */}
                  <div className="md:w-2/3 relative h-[400px] bg-gray-100 m-4 md:m-10 rounded-[10px] border border-[#DDDBDB]">
                    <div className="aspect-w-16 aspect-h-9">
                      {isVideoUrl(work.image) ? (
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={work.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover rounded-[10px]"
                          quality={100}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Elegant Show More Button */}
        {hasMoreWorks && (
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={showMoreWorks}
              className="group relative bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
              >
                <Sparkles className="absolute top-2 right-3 w-4 h-4 text-white animate-pulse" />
                <Sparkles className="absolute bottom-3 left-4 w-3 h-3 text-white animate-pulse delay-300" />
              </motion.div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-3 font-medium">
                <motion.div
                  className="bg-white/20 p-2 rounded-full"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus className="w-4 h-4" />
                </motion.div>
                <span className="text-sm tracking-wide">Show More Works</span>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        )}
        
        {/* Close Works Button & Completion message */}
        {!hasMoreWorks && works.length > 3 && (
          <motion.div 
            className="flex flex-col items-center gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Close Works Button */}
            <motion.button
              onClick={closeWorks}
              className="group relative bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Button content */}
              <div className="relative flex items-center gap-2 font-medium">
                <motion.div
                  className="bg-white/20 p-1.5 rounded-full"
                  whileHover={{ rotate: -180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Minus className="w-3 h-3" />
                </motion.div>
                <span className="text-xs tracking-wide">Close Works</span>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>

            {/* Completion message */}
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">You've seen all our works!</p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 