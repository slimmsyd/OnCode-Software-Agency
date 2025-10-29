"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Star, ArrowRight, Zap, TrendingUp, Rocket, Link } from 'lucide-react';

const ShopifyStorePage = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Launch',
      price: '$500',
      timeline: '2–4 weeks',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Get The Omni Collection online quickly with a clean, functional Shopify store.',
      features: [
        'Shopify theme installation + light customization',
        'Initial setup of up to 8 products (additional uploads available)',
        'Payment + shipping setup',
        'Domain + email connection',
        'About, Contact, and FAQ pages',
        'Social media links (Instagram, TikTok)',
        'Mobile optimization',
        'Basic SEO (titles, alt text, meta tags)',
        '1-on-1 admin training (30 mins)'
      ],
      addOn: {
        title: 'Ongoing Management — $50/month (first 3 months)',
        features: [
          'Up to 10 product updates/month',
          'Homepage refresh (featured product, banner updates)',
          'Light analytics reporting',
          'Priority support for edits'
        ]
      },
      value: 'A credible, functional online storefront — fast, clean, and ready for sales.',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-400'
    },
    {
      id: 'growth',
      name: 'Branded Shopify Experience',
      price: '$950',
      originalPrice: '$1,200',
      timeline: '3–4 weeks',
      icon: <TrendingUp className="w-8 h-8" />,
      recommended: true,
      description: 'Launch a fully branded, automated Shopify store built to look premium and run on autopilot.',
      features: [
        'Everything in Starter +',
        'Up to 25 products organized into collections',
        'Branded layout (colors, fonts, banners, hero design)',
        'AI-generated mockups of clothing',
        'Shopify Payments + PayPal setup',
        'Newsletter setup (Shopify Email or Klaviyo)',
        'SMS setup (Shopify SMS or Postscript)',
        'Welcome flow automation',
        'Abandoned cart recovery',
        'Order confirmation + thank-you email',
        'Instagram & Facebook Shop sync',
        'Analytics setup (Google + Meta Pixel)',
        'Homepage optimization for conversions',
        'Basic SEO tagging & keyword setup',
        'Admin walkthrough for adding/editing products',
        '30-day light support after launch'
      ],
      addOn: {
        title: 'Ongoing Management — $50/month (first 3 months)',
        features: [
          'Product uploads (up to 10 new/month)',
          'Monthly newsletter blast template',
          'Banner + homepage refresh',
          'Basic sales report & product performance insights'
        ]
      },
      value: 'A real, branded eCommerce foundation — looks professional, drives conversions, and sets the business up for scaling.',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:border-purple-400'
    },
    {
      id: 'scale',
      name: 'Automated Commerce Ecosystem',
      price: '$2,000',
      timeline: '4–5 weeks',
      icon: <Zap className="w-8 h-8" />,
      description: 'Turn The Omni Collection into a fully automated, data-driven eCommerce brand with advanced marketing tools.',
      features: [
        'Everything in Growth +',
        'Up to 50 products with detailed organization',
        'Advanced SMS + email marketing flows (win-back, VIP, etc.)',
        'Newsletter design + first campaign setup',
        'Customer segmentation for targeting',
        'Loyalty/rewards app integration',
        'Blog setup for SEO content',
        'Analytics dashboard with performance reporting',
        'Fulfillment or shipping app integration (if needed)',
        '30-day support post-launch'
      ],
      addOn: {
        title: 'Ongoing Management — $50/month (first 3 months)',
        features: [
          '10 product uploads/month',
          '1 newsletter + SMS campaign/month',
          'Homepage & featured product refresh',
          'Monthly performance summary'
        ]
      },
      value: 'A hands-free, automated retail system that manages itself and scales with every drop.',
      borderColor: 'border-emerald-200',
      hoverColor: 'hover:border-emerald-400'
    }
  ];

  const comparisonData = [
    { package: 'Starter Launch', setup: '$500', delivery: '2–4 weeks', ongoing: '$50/mo' },
    { package: 'Growth Store', setup: '$950', delivery: '3–4 weeks', ongoing: '$50/mo' },
    { package: 'Scale Store', setup: '$2,000', delivery: '4–5 weeks', ongoing: '$50/mo' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto  py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-6 py-2 mb-6">
            <span className="text-2xl">🛍</span>
            <span className="text-gray-700 font-medium">The Omni Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Shopify Store Packages
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Professional eCommerce solutions designed to transform your vision into a thriving online business
          </p>
          
          <div className="mb-6">
            <a 
              href="https://cal.com/oncode-software-kuxhkk/30min?overlayCalendar=true" 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <span>Schedule Consultation</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            by <span className="text-black font-semibold">OnCode</span>
          </div>
        </motion.div>

        {/* Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">See What We Create</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-3">
              From professional 3D product mockups to complete branded store experiences
            </p>
            <p className="text-sm text-gray-500 italic">
              *These are design mockups and examples to showcase our capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
            {/* 3D Product Mockup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                <img 
                  src="/shopifyAssets/8bdcc9ac-d79d-45d5-9d1c-39dcf182b8bd.png" 
                  alt="3D Product Mockup - Traditional Patterned Vest" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">AI-Generated 3D Mockups</h3>
              <p className="text-gray-600 text-sm">
                Example of professional product visualization with realistic lighting and textures - custom mockups created for each client's products.
              </p>
            </div>

            {/* Store Design Mockup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                <img 
                  src="/shopifyAssets/Image of  9.jpeg" 
                  alt="Shopify Store Design - Omi Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Complete Store Experience</h3>
              <p className="text-gray-600 text-sm">
                Sample design showing fully branded Shopify stores with custom layouts, professional photography, and optimized user experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group cursor-pointer transition-all duration-500"
              onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
            >
              {/* Clean Card */}
              <div className={`relative bg-white border-2 ${pkg.borderColor} ${pkg.hoverColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                selectedPackage === pkg.id ? 'transform scale-105 shadow-2xl' : ''
              }`}>
                
                {/* Recommended Badge */}
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-md">
                      <Star className="w-3 h-3 fill-current" />
                      Recommended
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="text-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pkg.icon}
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-black">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{pkg.timeline}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{pkg.description}</p>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {pkg.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.features.length > 3 && (
                    <div className="text-gray-500 text-sm pl-8">
                      +{pkg.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Expand Button */}
                <button className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 text-black font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:border-gray-300">
                  {selectedPackage === pkg.id ? 'Show Less' : 'View Details'}
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    selectedPackage === pkg.id ? 'rotate-90' : ''
                  }`} />
                </button>

                {/* Expanded Content */}
                {selectedPackage === pkg.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="pt-6 border-t border-gray-200 overflow-hidden"
                  >
                    {/* All Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-black font-semibold mb-3">Complete Feature List:</h4>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Add-On */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                      <h4 className="text-black font-semibold mb-2 flex items-center gap-2">
                        🔁 {pkg.addOn.title}
                      </h4>
                      <div className="space-y-2">
                        {pkg.addOn.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                      <h4 className="text-black font-semibold mb-2">Value:</h4>
                      <p className="text-gray-700 text-sm italic">{pkg.value}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 mb-16 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Positioning Summary</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-black font-semibold py-4 px-4">Package</th>
                  <th className="text-left text-black font-semibold py-4 px-4">Setup Fee</th>
                  <th className="text-left text-black font-semibold py-4 px-4">Delivery</th>
                  <th className="text-left text-black font-semibold py-4 px-4">Ongoing (First 3 Months)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                    <td className="py-4 px-4 text-black font-medium">{row.package}</td>
                    <td className="py-4 px-4 text-black">{row.setup}</td>
                    <td className="py-4 px-4 text-gray-700">{row.delivery}</td>
                    <td className="py-4 px-4 text-gray-700">{row.ongoing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 mb-16 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center flex items-center justify-center gap-3">
            ⚙️ Tech Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Shopify', 'Shopify Email / Klaviyo', 'Shopify SMS / Postscript', 'Meta + Google Analytics', 'AI Mockup Tools'].map((tech, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-300">
                <span className="text-gray-800 text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Launch Your Store?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your vision into a thriving eCommerce business with our professional Shopify solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <a href="https://cal.com/oncode-software-kuxhkk/30min?overlayCalendar=true" target="_blank" className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105">
               <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShopifyStorePage;
