"use client"
import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";

export default function Pricing() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-black text-[28px] font-semibold mb-8">Pricing</h2>

        {/* Price Display */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <span className="text-gray-400 line-through text-2xl">$6,999 / MVP</span>
          <span className="text-black text-2xl font-semibold">$5,000 / MVP</span>
          <span className="text-red-500 text-lg">(1 spot left)</span>
        </div>

        {/* Features List */}
        <div className="space-y-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
            <span className="text-[#6b7280] text-lg">Web application and landing page</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start gap-3"
          >
            <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
            <span className="text-[#6b7280] text-lg">Implementation of your design. No design? No problem. We can assist.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
            <span className="text-[#6b7280] text-lg">Essential integrations: payments, authentication, databases, analytics.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start gap-3"
          >
            <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
            <span className="text-[#6b7280] text-lg">SEO (Search Engine Optimization).</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start gap-3"
          >
            <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
            <span className="text-[#6b7280] text-lg">Setup and deployment.</span>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/0ncode-info/30min"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#374151] rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a call
          </a>
          <a
            href="#start"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#374151] bg-[#F3F4F6] rounded-md hover:bg-gray-200 transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
} 