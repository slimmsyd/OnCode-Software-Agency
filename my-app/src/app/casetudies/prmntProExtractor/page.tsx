import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import NewImage from '../../../../public/works/Preem_Chat2.png'
import NewImage2 from '../../../../public/works/Preem_Chat1.png'

export default function PRMNTPROExtractor() {
  return (
    <>
      <Navigation textColor={false} />

      {/* Unconventional Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Geometric patterns - hidden on small screens */}
        <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
          <div className="absolute top-[20%] left-[15%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-[40%] left-[30%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[35vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-[60%] right-[35%] w-[1px] h-[25vh] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
        </div>
        
        {/* Grid pattern - simplified on mobile */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`border-l border-white/5 h-full ${i >= 4 ? 'hidden sm:block' : ''} ${i >= 8 ? 'hidden md:block' : ''}`}></div>
            ))}
          </div>
          <div className="grid grid-rows-6 sm:grid-rows-8 md:grid-rows-12 w-full absolute top-0 left-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`border-t border-white/5 w-full ${i >= 6 ? 'hidden sm:block' : ''} ${i >= 8 ? 'hidden md:block' : ''}`} style={{ height: `${100 / (i >= 8 ? 12 : i >= 6 ? 8 : 6)}vh` }}></div>
            ))}
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto relative z-10 pt-[15vh] sm:pt-[20vh] px-4 sm:px-8">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {/* Left column - Case Study Tag */}
            <div className="col-span-12 md:col-span-3 lg:col-span-2 relative overflow-hidden">
              <div className="hidden md:block w-[1px] h-[120px] bg-white/20 absolute right-0 top-0"></div>
              <div className="transform origin-top-left text-white/70 uppercase tracking-[0.2em] text-sm font-light md:transform md:-rotate-90 md:translate-y-[180px]">
                Case Study
              </div>
            </div>
            
            {/* Middle column - Main Title */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6 relative mt-6 md:mt-0">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 sm:mb-12 leading-tight">
                <span className="block">PRMNTPRO</span>
                <span className="block text-2xl sm:text-3xl md:text-5xl text-green-400 mt-2 sm:mt-3">PDF Contract Extractor</span>
              </h1>
              
              <div className="hidden md:block absolute top-[105%] left-0 w-[80%] h-[1px] bg-white/10"></div>
              
              <div className="mt-8 sm:mt-16 space-y-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 w-6 flex-shrink-0">01.</span>
                  <span className="text-white/80">AI-Powered Contract Analysis</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 w-6 flex-shrink-0">02.</span>
                  <span className="text-white/80">Real-time Compliance Checking</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 w-6 flex-shrink-0">03.</span>
                  <span className="text-white/80">Winning Bid Intelligence</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Image & Description */}
            <div className="col-span-12 md:col-span-4 lg:col-span-4 mt-12 md:mt-0">
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-green-500 opacity-25 rounded-full blur-[60px]"></div>
                <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-blue-500 opacity-25 rounded-full blur-[50px]"></div>
                
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border border-white/20 z-10"></div>
                  <img 
                    src={NewImage.src}  
                    alt="PDF Contract Extractor Dashboard" 
                    className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-[70%] aspect-square border border-green-500/30"></div>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed">
                We developed an AI-powered PDF Contract Extractor for PRMNTPRO that analyzes contract documents, extracts key requirements, and provides actionable insights to ensure compliance for winning government bids.
              </p>
            </div>
          </div>
          
          <div className="hidden sm:block absolute bottom-[5vh] left-[50%] transform -translate-x-1/2">
            <div className="w-[30px] h-[50px] border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-[2px] h-[10px] bg-white/50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem-Solution Section */}
      <section className="relative bg-neutral-100 overflow-hidden">
        {/* Diagonal separator */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-black transform -skew-y-6 origin-top-left -translate-y-[50%]"></div>
        
        <div className="container mx-auto relative py-[120px] sm:py-[180px] px-4 sm:px-8">
          {/* Scattered horizontal lines - hidden on mobile */}
          <div className="absolute left-[10%] top-[20%] w-[100px] h-[1px] bg-neutral-300 hidden sm:block"></div>
          <div className="absolute right-[15%] top-[40%] w-[150px] h-[1px] bg-neutral-300 hidden sm:block"></div>
          <div className="absolute left-[20%] bottom-[25%] w-[120px] h-[1px] bg-neutral-300 hidden sm:block"></div>
          
          {/* Vertical axis line - adjusted for mobile */}
          <div className="absolute left-[20px] sm:left-[80px] md:left-[120px] top-[15%] bottom-[15%] w-[1px] bg-neutral-800 hidden sm:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px] sm:gap-[100px] md:gap-6">
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
              <div className="relative mb-[100px] sm:mb-[200px]">
                {/* Dot indicator - adjusted for mobile */}
                <div className="absolute left-0 sm:left-[-50px] top-[15px] flex items-center justify-center w-[40px] h-[40px] -ml-[20px] sm:ml-0">
                  <div className="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
                </div>
                
                <span className="block font-mono text-blue-600 tracking-wider mb-4 ml-[30px] sm:ml-0">PROBLEM</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 leading-tight max-w-3xl ml-[30px] sm:ml-0">Time-consuming manual contract analysis created compliance risks</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 ml-[30px] sm:ml-0">
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-t border-l border-neutral-300"></div>
                    <p className="pt-6 pl-6 text-neutral-600">
                      PRMNTPRO was dedicating extensive hours to manually analyze complex government contract documents. Their team had to carefully review multi-page PDFs to identify minimum requirements, understand solicitor codes, and ensure all compliance elements were addressed.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-t border-l border-neutral-300"></div>
                    <p className="pt-6 pl-6 text-neutral-600">
                      The manual review process was not only time-consuming but prone to human error. Missing a single critical requirement in these densely packed documents could result in disqualification from lucrative government contract bids, directly impacting their bottom line.
                    </p>
                  </div>
                </div>
                
                <div className="mt-16 sm:mt-20 flex items-center space-x-4 ml-[30px] sm:ml-0">
                  <div className="w-[25px] h-[1px] bg-blue-500"></div>
                  <span className="text-blue-600 text-sm">Pain Points</span>
                </div>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 ml-[30px] sm:ml-0">
                  <div className="py-4 px-5 bg-white border-l-2 border-blue-500">
                    <span className="block text-neutral-800 font-medium">Time-Intensive Reviews</span>
                  </div>
                  <div className="py-4 px-5 bg-white border-l-2 border-blue-500">
                    <span className="block text-neutral-800 font-medium">Compliance Uncertainty</span>
                  </div>
                  <div className="py-4 px-5 bg-white border-l-2 border-blue-500">
                    <span className="block text-neutral-800 font-medium">Missed Requirements</span>
                  </div>
                </div>
              </div>
              
              {/* Solution Block */}
              <div className="relative mb-[100px] sm:mb-[200px]">
                {/* Dot indicator - adjusted for mobile */}
                <div className="absolute left-0 sm:left-[-50px] top-[15px] flex items-center justify-center w-[40px] h-[40px] -ml-[20px] sm:ml-0">
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                </div>
                
                <span className="block font-mono text-green-600 tracking-wider mb-4 ml-[30px] sm:ml-0">SOLUTION</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 leading-tight max-w-3xl ml-[30px] sm:ml-0">AI-powered contract analysis with actionable insights</h2>
                
                <div className="relative aspect-video mb-8 sm:mb-16 overflow-hidden ml-[30px] sm:ml-0">
                  <div className="absolute inset-0 border border-neutral-200"></div>
                  <img 
                    src={NewImage2.src} 
                    alt="PDF Contract Analyzer Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 ml-[30px] sm:ml-0">
                  <div className="relative">
                    <p className="text-neutral-600">
                      We built an intelligent PDF Contract Extractor that leverages LangChain and OpenAI to analyze government contract documents. The system can analyze entire contracts or extract information page by page, giving the team unprecedented flexibility in how they review documents.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <p className="text-neutral-600">
                      Our solution included a custom web interface that displays summarized requirements, interprets complex solicitor codes, and automatically identifies compliance gaps. The real-time analysis provides actionable insights on exactly what needs to be addressed to meet all contract requirements.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 sm:mt-16 ml-[30px] sm:ml-0">
                  <div className="inline-block relative">
                    <span className="block font-mono text-sm text-green-600 tracking-wider mb-2">TECHNOLOGIES USED</span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-200"></div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                      <span className="text-neutral-600">LangChain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                      <span className="text-neutral-600">OpenAI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                      <span className="text-neutral-600">React</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                      <span className="text-neutral-600">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                      <span className="text-neutral-600">PDF.js</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Block */}
              <div className="relative ml-[30px] sm:ml-0">
                {/* Dot indicator - adjusted for mobile */}
                <div className="absolute left-0 sm:left-[-50px] top-[15px] flex items-center justify-center w-[40px] h-[40px] -ml-[20px] sm:ml-0">
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                </div>
                
                <span className="block font-mono text-green-600 tracking-wider mb-4">RESULTS</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 leading-tight max-w-3xl">Significant efficiency gains and improved bid success</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-12 sm:mb-16">
                  <div className="relative pt-[60px]">
                    <div className="absolute top-0 left-0 text-[90px] sm:text-[120px] font-bold text-neutral-100 leading-none z-0">01</div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-500 mb-2">70%</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">Review Time Reduction</h3>
                      <p className="text-neutral-600 text-sm">
                        Contract review time dramatically decreased, allowing the team to process more opportunities
                      </p>
                    </div>
                  </div>
                  
                  {/* <div className="relative pt-[60px]">
                    <div className="absolute top-0 left-0 text-[90px] sm:text-[120px] font-bold text-neutral-100 leading-none z-0">02</div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-500 mb-2">35%</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">Higher Win Rate</h3>
                      <p className="text-neutral-600 text-sm">
                        Increased success in winning government bids through improved compliance checks
                      </p>
                    </div>
                  </div>
                   */}
                  <div className="relative pt-[60px]">
                    <div className="absolute top-0 left-0 text-[90px] sm:text-[120px] font-bold text-neutral-100 leading-none z-0">03</div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">Compliance Assurance</h3>
                      <p className="text-neutral-600 text-sm">
                        Virtually eliminated bid disqualifications due to missed compliance requirements
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative py-8 px-6 sm:px-10 bg-white border border-neutral-200">
                  <div className="absolute top-[30px] left-[-10px] text-[100px] sm:text-[140px] font-serif text-neutral-100 leading-none hidden sm:block">"</div>
                  <p className="relative z-10 text-lg sm:text-xl text-neutral-600 italic">
                    The AI-powered contract analyzer ONCODE developed has completely transformed how we approach government bids. We can now rapidly identify requirements and ensure our proposals are fully compliant. This has significantly improved our efficiency and win rate.
                  </p>
                  
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="w-[40px] h-[40px] bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">P</div>
                    <div>
                      <div className="font-medium text-neutral-800">PRMNTPRO Leadership Team</div>
                      <div className="text-sm text-neutral-500">Business Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach Section */}
      <section className="relative bg-black">
        {/* Diagonal separator */}
        <div className="absolute top-0 left-0 w-full h-[150px] sm:h-[200px] bg-neutral-900 transform skew-y-6 origin-top-right -translate-y-[50%]"></div>
        
        <div className="container mx-auto relative z-10 py-[100px] sm:py-[180px] px-4 sm:px-8">
          <div className="mb-16 sm:mb-24 overflow-hidden">
            <div className="inline-block relative">
              <span className="block font-mono text-sm text-white/60 tracking-wider mb-2">TECHNICAL APPROACH</span>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">How we built it</h2>
              <div className="absolute -bottom-3 left-0 w-[80%] h-[1px] bg-white/20"></div>
            </div>
          </div>
          
          <div className="relative">
            {/* Technical services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative">
              {/* Service 1 */}
              <div className="group relative pl-[30px] sm:pl-0">
                <div className="absolute top-[-30px] left-[30px] sm:left-0 text-[60px] font-bold text-white/5">01</div>
                
                {/* Line and dot - hidden on mobile */}
                <div className="absolute top-[10px] left-[-40px] w-[25px] h-[1px] bg-green-500 hidden sm:block"></div>
                <div className="absolute top-[10px] left-[-40px] w-[5px] h-[5px] rounded-full bg-green-500 hidden sm:block"></div>
                
                {/* Mobile dot */}
                <div className="absolute top-[10px] left-0 w-[5px] h-[5px] rounded-full bg-green-500 sm:hidden"></div>
                <div className="absolute top-[10px] left-[5px] w-[15px] h-[1px] bg-green-500 sm:hidden"></div>
                
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl text-white font-medium mb-4 sm:mb-6 group-hover:text-green-400 transition-colors">
                    PDF Document Processing
                  </h3>
                  
                  <p className="text-white/70 mb-6 sm:mb-8">
                    We developed a robust document processing engine that preserves the structure of complex PDF contracts while extracting text in a format optimal for AI analysis.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-green-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Structured text extraction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-green-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Page-level processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-green-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Metadata preservation</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] left-0 w-[60%] h-[1px] bg-white/10 group-hover:bg-green-500/30 transition-colors"></div>
              </div>
              
              {/* Service 2 */}
              <div className="group relative pl-[30px] sm:pl-0">
                <div className="absolute top-[-30px] left-[30px] sm:left-0 text-[60px] font-bold text-white/5">02</div>
                
                {/* Line and dot - hidden on mobile */}
                <div className="absolute top-[10px] left-[-40px] w-[25px] h-[1px] bg-blue-500 hidden sm:block"></div>
                <div className="absolute top-[10px] left-[-40px] w-[5px] h-[5px] rounded-full bg-blue-500 hidden sm:block"></div>
                
                {/* Mobile dot */}
                <div className="absolute top-[10px] left-0 w-[5px] h-[5px] rounded-full bg-blue-500 sm:hidden"></div>
                <div className="absolute top-[10px] left-[5px] w-[15px] h-[1px] bg-blue-500 sm:hidden"></div>
                
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl text-white font-medium mb-4 sm:mb-6 group-hover:text-blue-400 transition-colors">
                    LangChain Integration
                  </h3>
                  
                  <p className="text-white/70 mb-6 sm:mb-8">
                    Using LangChain's powerful framework, we created a sophisticated analysis pipeline that effectively processes and understands complex contract language.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Custom prompt engineering</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Context-aware processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Chain-of-thought reasoning</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] left-0 w-[60%] h-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors"></div>
              </div>
              
              {/* Service 3 */}
              <div className="group relative pl-[30px] sm:pl-0">
                <div className="absolute top-[-30px] left-[30px] sm:left-0 text-[60px] font-bold text-white/5">03</div>
                
                {/* Line and dot - hidden on mobile */}
                <div className="absolute top-[10px] left-[-40px] w-[25px] h-[1px] bg-purple-500 hidden sm:block"></div>
                <div className="absolute top-[10px] left-[-40px] w-[5px] h-[5px] rounded-full bg-purple-500 hidden sm:block"></div>
                
                {/* Mobile dot */}
                <div className="absolute top-[10px] left-0 w-[5px] h-[5px] rounded-full bg-purple-500 sm:hidden"></div>
                <div className="absolute top-[10px] left-[5px] w-[15px] h-[1px] bg-purple-500 sm:hidden"></div>
                
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl text-white font-medium mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                    Intelligent UI
                  </h3>
                  
                  <p className="text-white/70 mb-6 sm:mb-8">
                    We created an intuitive user interface that transforms complex AI outputs into clear, actionable insights that guide the team's contract response strategy.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Interactive highlighting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Requirement tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-[4px] h-[4px] bg-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">Compliance dashboards</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] left-0 w-[60%] h-[1px] bg-white/10 group-hover:bg-purple-500/30 transition-colors"></div>
              </div>
            </div>
            
            {/* Technical diagram - made responsive */}
            <div className="mt-20 sm:mt-32 relative">
              <h3 className="text-white/80 text-xl mb-8 sm:mb-12">System Architecture</h3>
              
              <div className="bg-white/5 border border-white/10 p-4 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-green-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-blue-500/10 rounded-full blur-[80px]"></div>
                
                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
                  {/* Input - full width on mobile */}
                  <div className="md:border-r md:border-white/10 md:pr-8">
                    <div className="text-green-400 uppercase tracking-wider text-sm mb-4">Input</div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        PDF Documents
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Document Parser
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Text Chunking
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Metadata Extraction
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <div className="w-[30px] h-[1px] bg-green-500/50"></div>
                    </div>
                    
                    {/* Mobile connector - only visible on mobile */}
                    <div className="flex justify-center my-4 md:hidden">
                      <div className="w-[1px] h-[30px] bg-white/20"></div>
                    </div>
                  </div>
                  
                  {/* Processing - full width on mobile */}
                  <div className="md:border-r md:border-white/10 md:px-8">
                    <div className="text-blue-400 uppercase tracking-wider text-sm mb-4">Processing</div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        LangChain Framework
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        OpenAI Integration
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Requirement Extraction
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Compliance Analysis
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <div className="w-[30px] h-[1px] bg-blue-500/50"></div>
                    </div>
                    
                    {/* Mobile connector - only visible on mobile */}
                    <div className="flex justify-center my-4 md:hidden">
                      <div className="w-[1px] h-[30px] bg-white/20"></div>
                    </div>
                  </div>
                  
                  {/* Output - full width on mobile */}
                  <div className="md:pl-8">
                    <div className="text-purple-400 uppercase tracking-wider text-sm mb-4">Output</div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Requirement Summary
                      </div>
                      {/* <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Code Interpretation
                      </div> */}
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Gap Analysis
                      </div>
                      <div className="p-3 border border-white/10 text-white/80 text-sm">
                        Actionable Insights
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector lines - hidden on mobile */}
                <div className="absolute top-[50%] left-[33%] w-[2px] h-[30px] bg-white/20 hidden md:block"></div>
                <div className="absolute top-[50%] left-[66%] w-[2px] h-[30px] bg-white/20 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-[100px] px-[50px] bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-green-50 p-12 rounded-2xl shadow-xl relative">
            <div className="absolute top-8 left-8 text-9xl text-green-200 opacity-30">"</div>
            
            <div className="relative z-10">
              <p className="text-xl text-slate-700 mb-8 italic leading-relaxed">
                The AI-powered contract analyzer ONCODE built has transformed our approach to government bids. We used to spend days meticulously combing through contract documents to ensure compliance. Now, the system can process a document in minutes, identify all requirements, and tell us exactly what we need to address. This has dramatically improved our efficiency and significantly increased our win rate on government contracts.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
                <div>
                  <h4 className="font-bold text-slate-900">PRMNTPRO Leadership Team</h4>
                  <p className="text-slate-500">Business Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-20">
          <div className="w-full h-[1px] bg-slate-200 mb-8"></div>
          
          <Link
            href="/casetudies/prmntPro"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
          >
            <span>Explore other PRMNTPRO case study</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background grid - simplified for mobile */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200"></div>
          <div className="absolute top-0 left-0 h-full w-[1px] bg-neutral-200"></div>
          <div className="absolute top-0 right-0 h-full w-[1px] bg-neutral-200"></div>
          
          {/* Horizontal lines - reduced for mobile */}
          <div className="absolute top-[33.33%] left-0 w-full h-[1px] bg-neutral-200 sm:top-[25%]"></div>
          <div className="absolute top-[66.66%] left-0 w-full h-[1px] bg-neutral-200 sm:top-[50%]"></div>
          <div className="absolute top-[75%] left-0 w-full h-[1px] bg-neutral-200 hidden sm:block"></div>
          
          {/* Vertical lines - reduced for mobile */}
          <div className="absolute top-0 left-[33.33%] h-full w-[1px] bg-neutral-200 sm:left-[25%]"></div>
          <div className="absolute top-0 left-[66.66%] h-full w-[1px] bg-neutral-200 sm:left-[50%]"></div>
          <div className="absolute top-0 left-[75%] h-full w-[1px] bg-neutral-200 hidden sm:block"></div>
        </div>
        
        <div className="container mx-auto relative z-10 py-[80px] sm:py-[120px] px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-neutral-900">Ready to transform your document processing?</h2>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 sm:mb-12">
              Let's discuss how our AI solutions can help streamline your operations and give you a competitive edge.
            </p>
            
            <Link
              href="https://calendly.com/0ncode-info/30min?month=2025-04&date=2025-04-02"
              className="inline-flex items-center justify-center border border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors px-6 sm:px-8 py-3 sm:py-4 min-w-[180px] sm:min-w-[200px] group relative overflow-hidden"
            >
              <span className="relative z-10 font-medium">Get in touch</span>
              <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 transform translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
            
            <div className="mt-12 sm:mt-16">
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