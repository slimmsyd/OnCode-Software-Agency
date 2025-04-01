import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import NewImage from '../../../../public/works/Sales_Call_Dashboard.png'
export default function PRMNTPRO() {
  return (
    <>
      <Navigation textColor={false} />

      {/* Unconventional Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] left-[15%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-[40%] left-[30%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[35vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-[60%] right-[35%] w-[1px] h-[25vh] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-white/5 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 w-full absolute top-0 left-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-t border-white/5 w-full h-[8.33vh]"></div>
            ))}
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto relative z-10 pt-[20vh] px-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Left column - Case Study Tag */}
            <div className="col-span-12 md:col-span-3 lg:col-span-2 relative overflow-hidden">
              <div className="hidden md:block w-[1px] h-[120px] bg-white/20 absolute right-0 top-0"></div>
              <div className="transform -rotate-90 origin-top-left translate-y-[120px] md:translate-y-[180px] text-white/70 uppercase tracking-[0.2em] text-sm font-light">
                Case Study
              </div>
            </div>
            
            {/* Middle column - Main Title */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6 relative">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
                <span className="block">PRMNTPRO</span>
                <span className="block text-3xl md:text-5xl text-blue-400 mt-3">Sales Ecosystem</span>
              </h1>
              
              <div className="hidden md:block absolute top-[105%] left-0 w-[80%] h-[1px] bg-white/10"></div>
              
              <div className="mt-16 space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3">01.</span>
                  <span className="text-white/80">Custom CRM Development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3">02.</span>
                  <span className="text-white/80">Data Aggregation & Analytics</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3">03.</span>
                  <span className="text-white/80">Workflow Automation</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Image & Description */}
            <div className="col-span-12 md:col-span-4 lg:col-span-4 mt-16 md:mt-0">
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-blue-500 opacity-25 rounded-full blur-[60px]"></div>
                <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-purple-500 opacity-25 rounded-full blur-[50px]"></div>
                
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border border-white/20 z-10"></div>
                  <img 
                    src={NewImage.src}  
                    alt="PRMNTPRO CRM Dashboard" 
                    className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-[70%] aspect-square border border-blue-500/30"></div>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed">
                We developed a comprehensive sales ecosystem for PRMNTPRO that brings together fragmented data sources into a unified platform, eliminating process friction and providing unprecedented visibility.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-[5vh] left-[50%] transform -translate-x-1/2">
            <div className="w-[30px] h-[50px] border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-[2px] h-[10px] bg-white/50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Asymmetrical Problem-Solution Section */}
      <section className="relative bg-neutral-100 overflow-hidden">
        {/* Diagonal separator */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-black transform -skew-y-6 origin-top-left -translate-y-[50%]"></div>
        
        <div className="container mx-auto relative py-[180px] px-8">
          {/* Scattered horizontal lines */}
          <div className="absolute left-[10%] top-[20%] w-[100px] h-[1px] bg-neutral-300"></div>
          <div className="absolute right-[15%] top-[40%] w-[150px] h-[1px] bg-neutral-300"></div>
          <div className="absolute left-[20%] bottom-[25%] w-[120px] h-[1px] bg-neutral-300"></div>
          
          {/* Vertical axis line */}
          <div className="absolute left-[80px] md:left-[120px] top-[15%] bottom-[15%] w-[1px] bg-neutral-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[100px] md:gap-6">
            {/* Side column with phase labels */}
            <div className="hidden md:block md:col-span-3 lg:col-span-2 relative">
              <div className="sticky top-[30vh]">
                <div className="transform -rotate-90 origin-top-left translate-y-[80px] tracking-[0.2em] uppercase text-xs font-light text-neutral-500">
                  Business Challenge
                </div>
              </div>
            </div>
            
            {/* Main content column */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10">
              {/* Problem Block */}
              <div className="relative mb-[200px]">
                <div className="absolute left-[-80px] md:left-[-50px] top-[15px] flex items-center justify-center w-[40px] h-[40px]">
                  <div className="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
                </div>
                
                <span className="block font-mono text-blue-600 tracking-wider mb-4">PROBLEM</span>
                <h2 className="text-5xl font-bold mb-16 leading-tight max-w-3xl">Fragmented data created a disjointed sales process</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-t border-l border-neutral-300"></div>
                    <p className="pt-6 pl-6 text-neutral-600">
                      PRMNTPRO was struggling with data scattered across multiple platforms, creating information silos. Sales teams were unable to access a complete view of customer interactions, leading to missed opportunities and redundant outreach efforts.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-t border-l border-neutral-300"></div>
                    <p className="pt-6 pl-6 text-neutral-600">
                      Their team was spending up to 15 hours per week on manual data entry and reconciliation tasks. This administrative burden diverted valuable time from relationship building and closing deals, directly impacting revenue generation.
                    </p>
                  </div>
                </div>
                
                <div className="mt-20 flex items-center space-x-4">
                  <div className="w-[25px] h-[1px] bg-blue-500"></div>
                  <span className="text-blue-600 text-sm">Pain Points</span>
                </div>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="py-4 px-5 bg-white border-l-2 border-blue-500">
                    <span className="block text-neutral-800 font-medium">Data Fragmentation</span>
                  </div>
                  <div className="py-4 px-5 bg-white border-l-2 border-blue-500">
                    <span className="block text-neutral-800 font-medium">Manual Processes</span>
                  </div>
                  <div className="py-4 px-5 bg-white border-l-2 border-blue-500">
                    <span className="block text-neutral-800 font-medium">Visibility Gaps</span>
                  </div>
                </div>
              </div>
              
              {/* Solution Block */}
              <div className="relative mb-[200px]">
                <div className="absolute left-[-80px] md:left-[-50px] top-[15px] flex items-center justify-center w-[40px] h-[40px]">
                  <div className="w-[10px] h-[10px] bg-purple-500 rounded-full"></div>
                </div>
                
                <span className="block font-mono text-purple-600 tracking-wider mb-4">SOLUTION</span>
                <h2 className="text-5xl font-bold mb-16 leading-tight max-w-3xl">A unified sales ecosystem with intelligent automation</h2>
                
                <div className="relative aspect-video mb-16 overflow-hidden">
                  <div className="absolute inset-0 border border-neutral-200"></div>
                  <img 
                    src={NewImage.src} 
                    alt="PRMNTPRO CRM Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="relative">
                    <p className="text-neutral-600">
                      We developed a custom Sales CRM that integrated seamlessly with their existing tools. Using MAKE as the automation backbone, we created workflows that automatically captured and processed data from various sources including phone calls, emails, and meetings.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <p className="text-neutral-600">
                      Our solution included a custom web application with an intuitive dashboard that gave the sales team a holistic view of their pipeline. We implemented a tailored database architecture to ensure optimal performance and data integrity, allowing for real-time analytics and reporting.
                    </p>
                  </div>
                </div>
                
                <div className="mt-16">
                  <div className="inline-block relative">
                    <span className="block font-mono text-sm text-purple-600 tracking-wider mb-2">TECHNOLOGIES USED</span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-200"></div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-purple-500 rounded-full"></div>
                      <span className="text-neutral-600">MAKE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-purple-500 rounded-full"></div>
                      <span className="text-neutral-600">React</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-purple-500 rounded-full"></div>
                      <span className="text-neutral-600">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-purple-500 rounded-full"></div>
                      <span className="text-neutral-600">PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-purple-500 rounded-full"></div>
                      <span className="text-neutral-600">AWS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Block */}
              <div className="relative">
                <div className="absolute left-[-80px] md:left-[-50px] top-[15px] flex items-center justify-center w-[40px] h-[40px]">
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                </div>
                
                <span className="block font-mono text-green-600 tracking-wider mb-4">RESULTS</span>
                <h2 className="text-5xl font-bold mb-16 leading-tight max-w-3xl">Transformative outcomes with measurable impact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  <div className="relative pt-[60px]">
                    <div className="absolute top-0 left-0 text-[120px] font-bold text-neutral-100 leading-none z-0">01</div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-500 mb-2">40%</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">Productivity Boost</h3>
                      <p className="text-neutral-600 text-sm">
                        Sales team reclaimed 15+ hours weekly through automated data capture and processing
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pt-[60px]">
                    <div className="absolute top-0 left-0 text-[120px] font-bold text-neutral-100 leading-none z-0">02</div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-500 mb-2">30%</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">Higher Conversion</h3>
                      <p className="text-neutral-600 text-sm">
                        Improved lead conversion through better targeting and follow-up consistency
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pt-[60px]">
                    <div className="absolute top-0 left-0 text-[120px] font-bold text-neutral-100 leading-none z-0">03</div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-500 mb-2">60%</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">Less Admin Time</h3>
                      <p className="text-neutral-600 text-sm">
                        Dramatic reduction in manual data entry and reconciliation tasks
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative py-8 px-10 bg-white border border-neutral-200">
                  <div className="absolute top-[30px] left-[-10px] text-[140px] font-serif text-neutral-100 leading-none">"</div>
                  <p className="relative z-10 text-xl text-neutral-600 italic">
                    ONCODE transformed our sales process with their custom CRM solution. The automation workflows they built with MAKE saved our team countless hours of manual work, and the centralized dashboard gives us unprecedented visibility into our sales pipeline.
                  </p>
                  
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="w-[40px] h-[40px] bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">P</div>
                    <div>
                      <div className="font-medium text-neutral-800">PRMNTPRO Leadership Team</div>
                      <div className="text-sm text-neutral-500">Sales Operations</div>
                    </div>
                  </div>
                </div>
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

      {/* Technical Approach Section */}
      <section className="relative bg-black">
        {/* Diagonal separator */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-neutral-100 transform skew-y-6 origin-top-right -translate-y-[50%]"></div>
        
        <div className="container mx-auto relative z-10 py-[180px] px-8">
          <div className="mb-24 overflow-hidden">
            <div className="inline-block relative">
              <span className="block font-mono text-sm text-white/60 tracking-wider mb-2">TECHNICAL APPROACH</span>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">How we built it</h2>
              <div className="absolute -bottom-3 left-0 w-[80%] h-[1px] bg-white/20"></div>
            </div>
          </div>
          
          <div className="relative">
            {/* Technical services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative">
              {/* Service 1 */}
              <div className="group relative">
                <div className="absolute top-[-30px] left-0 text-[60px] font-bold text-white/5">01</div>
                
                {/* Line and dot */}
                <div className="absolute top-[10px] left-[-40px] w-[25px] h-[1px] bg-blue-500"></div>
                <div className="absolute top-[10px] left-[-40px] w-[5px] h-[5px] rounded-full bg-blue-500"></div>
                
                <div className="relative">
                  <h3 className="text-2xl text-white font-medium mb-6 group-hover:text-blue-400 transition-colors">
                    Custom CRM Architecture
                  </h3>
                  
                  <p className="text-white/70 mb-8">
                    We designed and built a tailored CRM solution from the ground up, creating a system that precisely aligned with PRMNTPRO's unique sales workflow and processes.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">User-centered design approach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Modular component structure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Extensible API architecture</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] left-0 w-[60%] h-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors"></div>
              </div>
              
              {/* Service 2 */}
              <div className="group relative">
                <div className="absolute top-[-30px] left-0 text-[60px] font-bold text-white/5">02</div>
                
                {/* Line and dot */}
                <div className="absolute top-[10px] left-[-40px] w-[25px] h-[1px] bg-purple-500"></div>
                <div className="absolute top-[10px] left-[-40px] w-[5px] h-[5px] rounded-full bg-purple-500"></div>
                
                <div className="relative">
                  <h3 className="text-2xl text-white font-medium mb-6 group-hover:text-purple-400 transition-colors">
                    MAKE Automation Suite
                  </h3>
                  
                  <p className="text-white/70 mb-8">
                    Using MAKE as the automation backbone, we created sophisticated workflows that eliminated repetitive tasks and ensured data consistency across all platforms.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Multi-source data integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Conditional logic workflows</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Error handling mechanisms</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] left-0 w-[60%] h-[1px] bg-white/10 group-hover:bg-purple-500/30 transition-colors"></div>
              </div>
              
              {/* Service 3 */}
              <div className="group relative">
                <div className="absolute top-[-30px] left-0 text-[60px] font-bold text-white/5">03</div>
                
                {/* Line and dot */}
                <div className="absolute top-[10px] left-[-40px] w-[25px] h-[1px] bg-cyan-500"></div>
                <div className="absolute top-[10px] left-[-40px] w-[5px] h-[5px] rounded-full bg-cyan-500"></div>
                
                <div className="relative">
                  <h3 className="text-2xl text-white font-medium mb-6 group-hover:text-cyan-400 transition-colors">
                    Database Architecture
                  </h3>
                  
                  <p className="text-white/70 mb-8">
                    We implemented a custom database setup optimized specifically for sales data structures, enabling powerful analytics while ensuring long-term scalability.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Normalized data schema</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Advanced indexing strategy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Performance optimization</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] left-0 w-[60%] h-[1px] bg-white/10 group-hover:bg-cyan-500/30 transition-colors"></div>
              </div>
            </div>
            
            {/* Technical diagram */}
            <div className="mt-32 relative">
              <h3 className="text-white/80 text-xl mb-12">System Architecture</h3>
              
              <div className="bg-white/5 border border-white/10 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-purple-500/10 rounded-full blur-[80px]"></div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Data Sources */}
                  <div className="border-r border-white/10 pr-8">
                    <div className="text-blue-400 uppercase tracking-wider text-sm mb-4">Data Sources</div>
                    
                    <div className="space-y-4">
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        CRM APIs
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Email Services
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Call Systems
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Calendar Services
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <div className="w-[30px] h-[1px] bg-blue-500/50"></div>
                    </div>
                  </div>
                  
                  {/* Processing */}
                  <div className="border-r border-white/10 px-8">
                    <div className="text-purple-400 uppercase tracking-wider text-sm mb-4">Processing</div>
                    
                    <div className="space-y-4">
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        MAKE Workflows
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Data Transformation
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Business Logic
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Custom APIs
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <div className="w-[30px] h-[1px] bg-purple-500/50"></div>
                    </div>
                  </div>
                  
                  {/* Output */}
                  <div className="pl-8">
                    <div className="text-cyan-400 uppercase tracking-wider text-sm mb-4">Output</div>
                    
                    <div className="space-y-4">
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Custom Dashboard
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Analytics Platform
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Alert Systems
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Reporting Tools
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector lines */}
                <div className="absolute top-[50%] left-[33%] w-[2px] h-[30px] bg-white/20"></div>
                <div className="absolute top-[50%] left-[66%] w-[2px] h-[30px] bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200"></div>
          <div className="absolute top-0 left-0 h-full w-[1px] bg-neutral-200"></div>
          <div className="absolute top-0 right-0 h-full w-[1px] bg-neutral-200"></div>
          
          <div className="absolute top-[25%] left-0 w-full h-[1px] bg-neutral-200"></div>
          <div className="absolute top-[50%] left-0 w-full h-[1px] bg-neutral-200"></div>
          <div className="absolute top-[75%] left-0 w-full h-[1px] bg-neutral-200"></div>
          
          <div className="absolute top-0 left-[25%] h-full w-[1px] bg-neutral-200"></div>
          <div className="absolute top-0 left-[50%] h-full w-[1px] bg-neutral-200"></div>
          <div className="absolute top-0 left-[75%] h-full w-[1px] bg-neutral-200"></div>
        </div>
        
        <div className="container mx-auto relative z-10 py-[120px] px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900">Ready to transform your sales process?</h2>
            
            <p className="text-xl text-neutral-600 mb-12">
              Let's discuss how our custom solutions can help streamline your operations and boost revenue.
            </p>
            
            <Link
              href="https://calendly.com/0ncode-info/30min?month=2025-04&date=2025-04-02"
              className="inline-flex items-center justify-center border border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors px-8 py-4 min-w-[200px] group relative overflow-hidden"
            >
              <span className="relative z-10 font-medium">Get in touch</span>
              <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 transform translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
            
            <div className="mt-16">
              <Link
                href="/casetudies/universalLaw"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <span>Explore next case study</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
