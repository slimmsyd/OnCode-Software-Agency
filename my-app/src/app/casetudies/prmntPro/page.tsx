import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function PRMNTPRO() {
  return (
    <>
      <Navigation textColor={true} />

      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden py-[120px] px-[50px] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-blue-400 blur-[80px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-purple-500 blur-[100px]"></div>
          <div className="absolute top-[40%] right-[30%] w-[20%] h-[20%] rounded-full bg-cyan-400 blur-[70px]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[50px]">
            <div className="flex flex-col items-start justify-start w-[100%] max-w-[600px]">
              <p className="text-blue-300 font-medium tracking-wider mb-2">CASE STUDY</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                PRMNTPRO Sales CRM
              </h1>
              <p className="text-lg text-blue-50 mb-8">
                We developed a comprehensive sales management system to unify fragmented data and streamline the entire sales process.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Custom CRM Development</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Data Aggregation & Analytics</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Workflow Automation</span>
              </div>
            </div>
            
            <div className="relative w-full max-w-[500px] aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/20 backdrop-blur">
              <img 
                src="/assets/prmntpro-dashboard.png" 
                alt="PRMNTPRO CRM Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section with Timeline */}
      <section className="py-[100px] px-[50px] bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">The PRMNTPRO Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-blue-200"></div>
            
            {/* Problem Block */}
            <div className="relative mb-24">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-[45%] p-6 md:p-8 bg-white rounded-xl shadow-lg md:mr-[10%] z-10 transform hover:scale-[1.02] transition-transform">
                  <div className="absolute top-[50%] md:right-[-20px] w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">1</div>
                  <h3 className="text-blue-600 font-bold text-xl mb-4">The Challenge</h3>
                  <p className="text-slate-700">
                    PRMNTPRO was struggling with fragmented sales data across multiple platforms, making it difficult to track customer interactions and manage their sales pipeline effectively. Their team was spending excessive time on administrative tasks instead of focusing on relationship building and closing deals.
                  </p>
                </div>
                
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>
            
            {/* Solution Block */}
            <div className="relative mb-24">
              <div className="flex flex-col md:flex-row items-center">
                <div className="hidden md:block md:w-[45%]"></div>
                
                <div className="md:w-[45%] p-6 md:p-8 bg-white rounded-xl shadow-lg md:ml-[10%] z-10 transform hover:scale-[1.02] transition-transform">
                  <div className="absolute top-[50%] md:left-[-20px] w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold">2</div>
                  <h3 className="text-purple-600 font-bold text-xl mb-4">Our Approach</h3>
                  <p className="text-slate-700">
                    We developed a custom Sales CRM that integrated seamlessly with their existing tools. Using MAKE as the automation backbone, we created workflows that automatically captured and processed data from various sources including phone calls, emails, and meetings.
                  </p>
                  <p className="text-slate-700 mt-4">
                    Our solution included a custom web application with an intuitive dashboard that gave the sales team a holistic view of their pipeline. We implemented a tailored database architecture to ensure optimal performance and data integrity, allowing for real-time analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Results Block */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-[45%] p-6 md:p-8 bg-white rounded-xl shadow-lg md:mr-[10%] z-10 transform hover:scale-[1.02] transition-transform">
                  <div className="absolute top-[50%] md:right-[-20px] w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">3</div>
                  <h3 className="text-green-600 font-bold text-xl mb-4">The Impact</h3>
                  <p className="text-slate-700">
                    The implementation of our custom CRM solution led to a 40% increase in sales team productivity and a 30% improvement in lead conversion rates. By automating routine tasks and providing actionable insights through the centralized dashboard, PRMNTPRO was able to focus more on building client relationships and less on administrative work.
                  </p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 bg-green-50 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-green-600">40%</span>
                      <span className="text-sm text-slate-600">Productivity Boost</span>
                    </div>
                    <div className="flex-1 bg-blue-50 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-blue-600">30%</span>
                      <span className="text-sm text-slate-600">Higher Conversion</span>
                    </div>
                    <div className="flex-1 bg-purple-50 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-purple-600">60%</span>
                      <span className="text-sm text-slate-600">Less Admin Time</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Cards */}
      <section className="py-[100px] px-[50px] bg-slate-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Technical Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-xl shadow-xl border border-blue-500/20 transform hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">Custom CRM Development</h3>
              <p className="text-slate-300">
                We designed and built a tailored CRM solution that addressed PRMNTPRO's unique sales process and requirements, creating a system that aligned perfectly with their team's workflow.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-purple-900 p-8 rounded-xl shadow-xl border border-purple-500/20 transform hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-200">Automation Implementation</h3>
              <p className="text-slate-300">
                Using MAKE, we created sophisticated automation workflows that streamlined data collection and processing, eliminating repetitive manual tasks and ensuring data consistency across platforms.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-cyan-900 p-8 rounded-xl shadow-xl border border-cyan-500/20 transform hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-200">Database Architecture</h3>
              <p className="text-slate-300">
                We designed and implemented a custom database setup optimized for their sales data and reporting needs, enabling powerful analytics and ensuring scalability as their business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-[100px] px-[50px] bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-2xl shadow-xl relative">
            <div className="absolute top-8 left-8 text-9xl text-blue-200 opacity-30">"</div>
            
            <div className="relative z-10">
              <p className="text-xl text-slate-700 mb-8 italic leading-relaxed">
                ONCODE transformed our sales process with their custom CRM solution. The automation workflows they built with MAKE saved our team countless hours of manual work, and the centralized dashboard gives us unprecedented visibility into our sales pipeline. Their technical expertise and understanding of our business needs resulted in a system that perfectly aligns with how we work.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
                <div>
                  <h4 className="font-bold text-slate-900">PRMNTPRO Leadership Team</h4>
                  <p className="text-slate-500">Sales Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-20">
          <div className="w-full h-[1px] bg-slate-200 mb-8"></div>
          
          <Link
            href="/casetudies/universalLaw"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Explore next case study</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your sales process?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Let's discuss how our custom CRM solutions can help you streamline operations and boost revenue.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
