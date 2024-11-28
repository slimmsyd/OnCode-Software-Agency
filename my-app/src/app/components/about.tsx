"use client"
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-black text-[28px] font-semibold">Stuck on an idea?</h2>
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <p className="text-[#767676]">
          Science to do our utmost toward increasing the performance of mankind. - Telsa
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-black ">
            Rapid development: Your MVP ready in 2-4 weeks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-black ">
            Complete package: Web application and landing page included. Everything you need to test your idea in the market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-black ">
            Modern technology: We use the latest technologies to ensure your product is fast, stable, and scalable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-black ">
            Experienced team: We know what we're doing thanks to having years of experience building successful startups.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-black ">
            SEO-optimized: Built-in search engine optimization to improve your product's visibility.            </p>
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