"use client"
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-10 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
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
            You'll receive a response within 24 hours of booking along with a free MVP checklist to review before our call. If your project is a good fit, we'll schedule a call to discuss the details and work process.
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