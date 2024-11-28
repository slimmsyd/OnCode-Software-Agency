"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Work {
  title: string;
  description: string;
  image: string;
  link: string;
}

const works: Work[] = [
  {
    title: "Invoice Magi",
    description: "Implementation of your design. No design? No problem. We can assist.",
    image: "/works/invoice-magi.png", // Update with your actual image path
    link: "https://invoicemagic.com"
  },

  {
    title: "Solomon Gpt",
    description: "A GPT-4o powered AI sage that can help you guide your life and more deeper questions than ever.",
    image: "/works/solomon.png", // Update with your actual image path
    link: "https://aislomon.xyz"
  },
  {
    title: "Gliddy",
    description: "A platform that allows you to meet people in your area. Booking events with people you meet is easy.",
    image: "/works/gliddy.png", // Update with your actual image path
    link: "https://meetgliddy.com"
  },

  // Add more works as needed
];

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
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover rounded-[10px]"
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 