"use client"
import { motion } from "framer-motion";
import { FileText, Bell, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-black text-[28px] font-semibold">A Natural Process</h2>
          <span className="text-[#767676] text-[14px]">Smooth like butter</span>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mt-8 relative">
          <div className="absolute left-[25px] top-[60px] bottom-[60px] w-[2px] border-l-2 border-dashed border-gray-300 z-0"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 items-start"
          >
            <div className="w-[50px] aspect-square rounded-full bg-white flex items-center justify-center shadow-md z-10">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Specification</h3>
              <p className="text-gray-600">We discuss your idea and create a detailed specification.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8 items-start"
          >
            <div className="w-[50px] aspect-square rounded-full bg-white flex items-center justify-center shadow-md z-10">
              <Bell className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Watch your MVP take shape with regular updates.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 items-start"
          >
            <div className="w-[50px] aspect-square rounded-full bg-white flex items-center justify-center shadow-md z-10">
              <Rocket className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">We deploy your product and provide training so that you have full confidence in running it on your own.</p>
            </div>
          </motion.div>
        </div>

        {/* Buttons */}
        {/* <div className="flex justify-start flex-row gap-4 mt-8">
          <a
            href="#contact"
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
        </div> */}
      </div>
    </section>
  );
}