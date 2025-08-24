"use client"
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-10 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-black text-[28px] font-semibold">Meet The Founder?</h2>
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
            Test your idea quickly and affordably.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-black ">
            Greetings, I'm Syd. With years of experience leading engineers  . I’ve been doing this for far to long                 </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-black ">
            I've built several successful MVPs myself, and now I want to help 
you.
                                </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-black ">
            At OnCode, our mission is simple: turn your ideas and workflows into working software — fast. Whether you’re a founder testing an MVP, a contractor needing digital systems, or a service business stuck in paperwork, we build custom apps and AI workflows that save time, cut costs, and unlock growth.        
                                </p>
          </motion.div>



    
        </div>
      </div>
    </section>
  );
}