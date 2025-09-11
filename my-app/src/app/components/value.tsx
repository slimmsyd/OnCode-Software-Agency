"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-10 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Digital Foundations Package */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Package Image */}
          <div className="flex justify-center mb-8">
            <Image
              src="/HomeAssets/DigitalFoundsPackage.png"
              alt="Digital Foundations Package"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Package Content */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Digital Foundations Package</h3>
              <div className="text-3xl font-bold text-black mb-2">$550</div>
              <p className="text-gray-600">Perfect for SMBs looking to get online quickly with all essentials</p>
            </div>

            {/* Problem & Promise Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* The Problem */}
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-4">The Problem</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• No website = invisible online</li>
                  <li>• No Google Business Profile = can't be found locally</li>
                  <li>• No automations = missed leads</li>
                  <li>• Outdated presence = lost trust</li>
                </ul>
              </div>

              {/* The Promise */}
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">The Promise</h4>
                <p className="text-gray-700">
                  In less than 5 days, we give you a modern online presence that builds credibility, 
                  captures leads, and works for you 24/7.
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">What's Included</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>4–6 page responsive website (Home, About, Services, Contact, Case Studies)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Modern design, mobile-optimized</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Google Business Profile setup (local SEO + maps)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Submission/contact forms</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Automations (client confirmations + follow-ups)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>24/7 AI chatbot assistant</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Basic SEO setup (meta, tags, structure)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Hosting + launch support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>AI-Powered Visuals for Branding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <a
                href="https://calendly.com/0ncode-info/30min"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started - $550
              </a>
            </div>
          </div>
        </motion.div>

        <h2 className="text-black text-[28px] font-semibold">Remember to stay OnCode</h2>
        {/* Quote */}
     

        {/* Main Content */}
        <div className="space-y-8">
   
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-black ">
            You'll receive a response within 24 hours of booking. We specialize in generative AI software and operational solutions that help businesses save time and improve quality of life. If your project is a good fit, we'll schedule a call to discuss how we can streamline your operations.
            Book a call to get started           
                 </p>
          </motion.div>

        
      


          <div className="flex justify-start flex-row gap-4">
            <a
              href="https://calendly.com/0ncode-info/30min"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Book a Call
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#B5B5B5] border border-[#B5B5B5] rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              See pricing
            </a>
          </div>
    
        </div>
      </div>
    </section>
  );
}