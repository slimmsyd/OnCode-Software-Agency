'use client';

import { CheckCircle, Phone, ExternalLink, MessageSquare, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
};

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-24 px-6"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center space-y-16"
            variants={fadeInUp}
          >
            <div className="space-y-8">
              <h1 className="text-8xl md:text-[12rem] font-thin tracking-tight text-black leading-none">
                WEBSITE UPGRADE
              </h1>
              <div className="w-px h-24 bg-black mx-auto"></div>
              <div className="text-lg tracking-widest uppercase text-gray-600 space-y-4">
                <p>For Anita's FXBG</p>
                <p>by Sydney Sanders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        className="py-32 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="space-y-12">
            <h2 className="text-6xl font-thin text-black">Overview</h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-800">
              <p>
                I recently rebuilt the Anita's FXBG website to showcase what's possible when your brand meets modern digital presentation. The goal? Help more customers find you, engage with your business online, and experience your cafe before they even walk through the door.
              </p>
              
              <div className="pt-8">
                <span className="text-sm uppercase tracking-widest text-gray-500">Live Demo</span>
                <div className="mt-2">
                  <a 
                    href="https://anitas-cafe.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-black hover:text-gray-600 transition-colors border-b border-black hover:border-gray-600"
                  >
                    anitas-cafe.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-32 px-6 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-6xl font-thin text-black mb-20"
            variants={fadeInUp}
          >
            Features
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-16"
            variants={staggerContainer}
          >
            {[
              { title: "Website Rebuild", desc: "Complete redesign with modern layout and structure" },
              { title: "Mobile Responsive", desc: "Optimized experience across all devices" },
              { title: "Performance", desc: "Enhanced load speeds for better conversions" },
              { title: "SEO Foundation", desc: "Basic optimization for search visibility" },
              { title: "Brand Refresh", desc: "Clean photography and navigation" },
              { title: "24/7 Chatbot", desc: "Automated assistance for customer inquiries" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="space-y-4"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-medium text-black">{feature.title}</h3>
                <div className="w-12 h-px bg-black"></div>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Chatbot Section */}
      <motion.section 
        className="py-32 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="space-y-12">
            <h2 className="text-6xl font-thin text-black">Chatbot Value</h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-800">
              <p>
                The integrated chatbot provides 24/7 assistance, handling common inquiries and capturing leads while your team focuses on in-person service.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="space-y-4">
                  <div className="text-base text-black">• Answers frequently asked questions</div>
                  <div className="text-base text-black">• Handles catering and event inquiries</div>
                  <div className="text-base text-black">• Engages digital-native customers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-32 px-6 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-6xl font-thin text-black mb-20"
            variants={fadeInUp}
          >
            Services
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            {[
              { service: "Website Maintenance", description: "Monthly updates and content management", price: "$30/month" },
              { service: "SEO Enhancement", description: "Local optimization and search visibility", price: "$250" },
              { service: "Website Rebuild", description: "Complete redesign and development", price: "$500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="grid md:grid-cols-3 gap-8 py-8 border-b border-gray-200 last:border-b-0"
                variants={fadeInUp}
              >
                <div className="text-xl font-medium text-black">{item.service}</div>
                <div className="text-gray-600">{item.description}</div>
                <div className="text-xl text-black">{item.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Offer Section */}
      <motion.section 
        className="py-32 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="space-y-12">
            <h2 className="text-6xl font-thin text-black">The Offer</h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto">
              <p className="text-2xl font-light">
                You already have the finished product.
              </p>
              
              <p>
                If you'd like to continue working together, I'd love to maintain and grow this digital foundation for Anita's FXBG.
              </p>
              
              <p className="text-gray-500 italic">
                No pressure. Just value delivered and an open door for what's next.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Other Services Section */}
      <motion.section 
        className="py-32 px-6 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-6xl font-thin text-black mb-20"
            variants={fadeInUp}
          >
            Other Things
          </motion.h2>
          
          <motion.div 
            className="space-y-16"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h3 className="text-2xl font-light text-black">Video Production</h3>
              <div className="w-24 h-px bg-black"></div>
              <p className="text-lg text-gray-600 max-w-2xl">
                Creating engaging video content for social media, marketing campaigns, and brand storytelling.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { title: "", video: "/Videos/TintLabs_Promo.mp4" },
                { title: "", video: "/Videos/Tint_Labs_Promo_2.mp4" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="space-y-6"
                  variants={fadeInUp}
                >
                  <div className="aspect-[9/16] bg-black rounded-sm overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium text-black">{item.title}</h4>
                    <div className="w-12 h-px bg-gray-400"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-32 px-6 bg-black text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="space-y-12">
            <h2 className="text-6xl font-thin">Connect</h2>
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
                Ready to discuss maintenance, growth, or future upgrades? Let's schedule a conversation.
              </p>
              
              <div className="space-y-4 pt-8">
                <div className="text-2xl font-light">Sydney Sanders</div>
                <div className="text-gray-400">Software Engineer</div>
                <div className="text-xl">423-033-5112</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 