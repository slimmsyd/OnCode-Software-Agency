"use client"
import { motion } from "framer-motion";
import { useIntakeForm } from "../context/IntakeFormContext";
import { GetStartedButton } from "@/components/ui/get-started-button";

export default function About() {
  const { openIntakeForm } = useIntakeForm();
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-10 max-w-[500px] m-auto  text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-black text-[28px] font-semibold">Manual processes slowing you down?</h2>
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <p className="text-[#767676]">
            "Science to do our utmost toward increasing the performance of mankind." - Tesla
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
              <strong>Rapid delivery:</strong> Custom software solutions built in 2-4 weeks, whether it's your first MVP or your next business automation tool.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-black ">
              <strong>Complete solutions:</strong> From startup MVPs to enterprise automation systems, we build what your business actually needs to grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-black ">
              <strong>Modern technology:</strong> AI-powered workflows, robust databases, and scalable architecture that grows with your business.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-black ">
              <strong>Proven experience:</strong> From wellness centers to government contractors, we've built digital systems that save time, cut costs, and unlock growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-black ">
              <strong>Built to scale:</strong> Every system we create is designed to handle your growth, from prototype to production and beyond.
            </p>
          </motion.div>

          <div className="flex justify-start flex-row gap-4">
            <GetStartedButton onClick={openIntakeForm} />
          </div>
        </div>
      </div>
    </section>
  );
}