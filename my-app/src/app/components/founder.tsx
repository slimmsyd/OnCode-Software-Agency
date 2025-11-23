"use client"
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-10 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-black text-[28px] font-semibold">Meet The Founder</h2>
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
              <strong>Transform your business with purpose-built software.</strong>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-black ">
              Greetings, I'm Sydney. With years of experience leading engineering teams and building systems for everything from wellness centers to government contractors, I've seen what separates successful software from expensive failures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-black ">
              I've built automation systems that saved businesses thousands of hours, MVPs that solved real problems for their users, and AI tools that transformed entire workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-black ">
              At OnCode, our mission is simple: <strong>turn your biggest operational challenges into automated advantages.</strong> Whether you're launching your first product or scaling your tenth, we build the exact systems you need to accelerate growth and eliminate bottlenecks.
            </p>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <div className="relative w-full max-w-md">
              <img
                src="/Personal/SydneySandersFounder.jpeg"
                alt="Sydney Sanders - Founder of OnCode"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}