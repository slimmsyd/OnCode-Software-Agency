"use client"
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-10 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-black text-[28px] font-semibold">oncode</h2>
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
           Transform, your idea into a market-ready MVP in weeks.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-black ">

        © 2024 Oncode, All Rights Reserved. 
                 </p>
          </motion.div>

      


    
        </div>
      </div>
    </section>
  );
}