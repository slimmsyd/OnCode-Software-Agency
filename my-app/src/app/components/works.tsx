"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Work {
  title: string;
  description: string;
  image: string; // This can now be either an image or video URL
  link: string;
}

const works: Work[] = [

  {
    title: "PRMNT PRO | Contract Extraction AI Pipeline",
    description: "We built an intelligent PDF Contract Extractor that leverages LangChain and OpenAI to analyze government contract documents. The system can analyze entire contracts or extract information page by page, giving the team unprecedented flexibility in how they review documents.",
    image: "/works/Preem_Chat1.png", // Update with your actual image path
    link: "/casetudies/prmntProExtractor"

  },
  {
    title: "PRMNT PRO | Custom CRM",
    description: "Designed and Developed Custom CRM for PRMNT PRO, to handle SDR.",
    image: "/works/Sales_Call_Dashboard.png", // Update with your actual image path
    link: "/casetudies/prmntPro"

  },

  {
    title: "Kinnected(On-going)",
    description: "A platform using Blockhaing Technology, store your family, history forever, using the immutable nature of blockchain.",
    image: "/works/Kinnected.png", // Update with your actual image path
    link: "/casetudies/kinnected"
  },
  {
    title: "Street Economics Dashboard",
    description: "A dashboard for Street Economics,to manage community engagment, user interactions. to caputre data and analytics. To help the community grow and thrive.",
    image: "https://red-broken-ferret-951.mypinata.cloud/ipfs/bafybeifsyeosyutghfvz7aphm7wgdyezk6nfttanurc4ldyuiwsvs76yme", // Update with your actual image path
    link: "/casetudies/streetEconomics"
  },
  {
    title: "Universal Law AI Youtube Automation Channel",
    description: "A Youtube automation channel that uses AI Songs, Images, and Videos to create a new song every week.",
    image: "/works/Universal_Law.png", // Update with your actual image path
    link: "/casetudies/universalLaw"
  },
  {
    title: "Invoice Magi",
    description: "Implementation of your design. No design? No problem. We can assist.",
    image: "/works/invoice-magi.png", // Update with your actual image path
    link: "/casetudies/invoice-magi"
  },

  {
    title: "Solomon Gpt",
    description: "A GPT-4o powered AI sage that can help you guide your life and more deeper questions than ever.",
    image: "/works/solomon.png", // Update with your actual image path
    link: "/casetudies/solomonAI"
  },
  {
    title: "Creatures Cube",
    description: "Web application for an ERC-4047 NFT collection.",
    image: "/works/CreatureCubes.png", // Update with your actual image path
    link: "/casetudies/creaturecubes"
  },
  {
    title: "Gliddy",
    description: "A platform that allows you to meet people in your area. Booking events with people you meet is easy.",
    image: "/works/gliddy.png", // Update with your actual image path
    link: "/casetudies/gliddy"
  },
  {
    title: "Preeminent Professional Services",
    description: "A Discovery site build for Professional Managment Agency",
    image: "/works/PM.png", // Update with your actual image path
    link: "https://www.prmntpro.com/"
  },
  {
    title: "Generative AI, RAG, and LLM Discord Bot",
    description: "A Discord bot that can help you generate AI images, Query Crypto Prices, answer questions, and more.",
    image: "/works/Discord.png", // Update with your actual image path
    link: "https://github.com/slimmsyd/Discord_Bot_Main"
  },

  // Add more works as needed
];

// Add a helper function to determine if the URL is a video
const isVideoUrl = (url: string) => {
  // Check for common video extensions or IPFS URLs
  return url.includes('ipfs') || /\.(mp4|webm|ogg)$/i.test(url);
};

export default function Works() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-20 max-w-[1200px] m-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-[28px] font-semibold mb-12">Few of our works</h2>

        <div className="space-y-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#fdfbf7] to-[#f8f6f0] pointer-events-none" />
              
              <div className="flex flex-col md:flex-row relative">
                {/* Left Content */}
                <div className="p-8 md:w-1/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{work.title}</h3>
                    <p className="text-gray-600 text-sm">{work.description}</p>
                  </div>
                  
                  <button 
                    className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 group"
                    onClick={() => window.open(work.link, '_blank')}
                  >
                    Open case
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
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
        </div>
      </div>
    </section>
  );
} 