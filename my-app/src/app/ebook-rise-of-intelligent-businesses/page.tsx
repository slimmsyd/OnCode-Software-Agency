"use client";
import { useState } from "react";
import Image from "next/image";

export default function EBookRise() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Determine webhook URL based on environment
    const isProduction = process.env.NODE_ENV === 'production';
    const webhookUrl = isProduction 
      ? 'https://goldmine.app.n8n.cloud/webhook/90eca099-9ded-4cdf-a5d6-88d66539f42a'
      : 'https://goldmine.app.n8n.cloud/webhook-test/90eca099-9ded-4cdf-a5d6-88d66539f42a';

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName || "", // firstName is optional
          email, // email is required
          source: "eBook waitlist signup - Rise of Intelligent Businesses",
          timestamp: new Date().toISOString(), // Capture exact signup time
          signupDate: new Date().toLocaleDateString(), // Human-readable date
          signupTime: new Date().toLocaleTimeString(), // Human-readable time
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFirstName("");
        setEmail("");
      } else {
        alert("Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/Personal/OnCodeLogoNew.png"
                alt="OnCode Logo"
                width={140}
                height={47}
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl font-bold text-gray-800">OnCode</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title and Subtitle - Top */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Rise of Intelligent
                <span className="block text-blue-600">Businesses</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600">
                Interactive eBook
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                How to architect a business where humans and tools co-evolve. A two-layer flywheel that compounds skill and capability so you save time, cut costs, and scale without a big tech team. <strong>Why? To improve your quality of life by having an intelligent partner at your side, used the right way.</strong>
              </p>
            </div>

            {/* Book Cover - Center */}
            <div className="relative flex justify-center mb-12">
              <div className="relative group">
                {/* Book Cover */}
                <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] transition-transform duration-500 group-hover:scale-105">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg blur-xl opacity-20 scale-110"></div>
                  
                  {/* Actual Book Cover Image */}
                  <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden">
                    <Image
                      src="/Ebook/CoverPage.png"
                      alt="Rise of Intelligent Businesses - Book Cover"
                      width={384}
                      height={512}
                      className="w-full h-full object-cover rounded-lg"
                      priority
                    />
                  </div>
                  
                  {/* New Release badge */}
                  <div className="absolute -bottom-3 left-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    New Release
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-30 animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-40 animate-float delay-75"></div>
              </div>
            </div>

            {/* Benefits Bullets - Bottom */}
            <div className="space-y-4 max-w-2xl mx-auto mb-8">
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>See the system clearly</strong> — AI isn't a gimmick; it's a layer that learns with you.
                </p>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Get your time back</strong> — automate the grind (docs, intake, scheduling) and cut hours into minutes.
                </p>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Build systems that don't stagnate</strong> — every project sharpens your team and your tools.
                </p>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Free your energy</strong> — stop drowning in busywork so you can focus on growth and improving your quality of life.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('email')?.focus()}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
                <span>Join Waitlist</span>
              </button>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-800 leading-relaxed">
                Wholeness Builder,
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Sydney Sanders here.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Three months ago, I made a decision that changed my business forever.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                I stopped fighting with outdated workflows and started building alongside a new kind of teammate: generative AI.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                And the results were wild.
              </p>
              
              <div className="space-y-3 my-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Projects that once took weeks started finishing in days.<br/>
                  Clients who were drowning in paperwork and manual tasks got organized, automated systems that saved them hours every week.<br/>
                  Even app founders — with no tech team, no venture capital — got their products in hand, faster than they thought possible.
                </p>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                And here's the crazy part:
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>The more I built, the smarter the tools themselves became.</strong>
              </p>
              
              <div className="space-y-3 my-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                  This wasn't just me improving.<br/>
                  The tech itself was improving too.<br/>
                  Human learning + tool learning = exponential output.
                </p>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                That's when it hit me:<br/>
                We're not just doing business anymore.<br/>
                <strong>We're entering an age of Intelligent Business — where your systems evolve with you.</strong>
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                The shift no one is talking about!
              </h3>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                For decades, business improvement meant:
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed ml-4">
                More staff, more hours, more overhead.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed ml-4">
                Service models that stayed flat until you forced them to grow.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                But today…
              </p>
              
              <div className="space-y-2 ml-4">
                <p className="text-lg text-gray-800 leading-relaxed">You can build digital assistants that never sleep.</p>
                <p className="text-lg text-gray-800 leading-relaxed">You can turn paper stacks into dashboards.</p>
                <p className="text-lg text-gray-800 leading-relaxed">You can answer customers 24/7 without lifting a finger.</p>
                <p className="text-lg text-gray-800 leading-relaxed">You can even turn raw ideas into apps in weeks, not years.</p>
                <p className="text-lg text-gray-800 leading-relaxed">You can draft Jazz, Hip-hop, or Pop songs with a text prompt — and refine them into tracks that sound studio-made.</p>
                <p className="text-lg text-gray-800 leading-relaxed">You can generate images with your voice — and see your words turn into visuals in seconds.</p>
                <p className="text-lg text-gray-800 leading-relaxed">You can storyboard and produce short films with AI — giving creators Hollywood-style tools at their fingertips.</p>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                And the best part?<br/>
                You don't need a tech team.<br/>
                <strong>You just need to learn how to work with AI the right way.</strong>
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Two kinds of business owners:
              </h3>
              
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                The 95% still…
              </p>
              
              <div className="space-y-2 ml-4">
                <p className="text-lg text-gray-800 leading-relaxed">Pushing paper and spreadsheets.</p>
                <p className="text-lg text-gray-800 leading-relaxed">Spending hours on tasks a bot could do in seconds.</p>
                <p className="text-lg text-gray-800 leading-relaxed">Losing clients because they can't keep up.</p>
                <p className="text-lg text-gray-800 leading-relaxed">Waiting for "the right time" to modernize.</p>
              </div>
              
              <p className="text-lg font-semibold text-gray-900 leading-relaxed mt-6">
                The 5% already…
              </p>
              
              <div className="space-y-2 ml-4">
                <p className="text-lg text-gray-800 leading-relaxed">Automating the grunt work.</p>
                <p className="text-lg text-gray-800 leading-relaxed">Building systems that scale as they sleep.</p>
                <p className="text-lg text-gray-800 leading-relaxed">Winning clients because they move faster.</p>
                <p className="text-lg text-gray-800 leading-relaxed">Turning ideas into digital products that create new revenue streams.</p>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                The only difference?<br/>
                <strong>They embraced the Intelligent Business mindset early.</strong>
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Why I wrote Rise of Intelligent Businesses
              </h3>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                I didn't just want to show the tech.<br/>
                I wanted to give fellow founders a framework, a philosophy, and real examples to prove this is not hype, it's happening now.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                This eBook breaks down:
              </p>
              
              <div className="space-y-2 ml-4">
                <p className="text-lg text-gray-800 leading-relaxed">✅ The two flywheels powering intelligent businesses (human learning + tool learning).</p>
                <p className="text-lg text-gray-800 leading-relaxed">✅ Why generative AI is different from every tool before it.</p>
                <p className="text-lg text-gray-800 leading-relaxed">✅ How SMBs, contractors, and even solo founders are already saving hours and scaling with AI.</p>
                <p className="text-lg text-gray-800 leading-relaxed">✅ Practical examples (health clinics, contractors, gov firms, founders) you can copy.</p>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                This isn't about theory.<br/>
                <strong>It's about giving you time back, fewer costs, and a real path to scale — without needing a tech team.</strong>
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Ready to see how this applies to you?
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Download the free eBook → Rise of Intelligent Businesses
              </p>
              
              <div className="my-8">
                <button 
                  onClick={() => document.getElementById('email')?.focus()}
                  className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Get the Free eBook
                </button>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Because the choice is here:
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Keep working the old way.<br/>
                Or step into the new era of Intelligent Business.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                I know which side I'm on.<br/>
                — Sydney
              </p>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to experience the future of business transformation. Get notified when 
              "Rise of Intelligent Businesses" launches and receive your free copy instantly.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your first name (optional)"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join the Waitlist"}
                </button>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">You're on the list!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for joining the waitlist. We'll notify you as soon as 
                  "Rise of Intelligent Businesses" is available.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Join another email
                </button>
              </div>
            )}
            
            <p className="text-sm text-gray-500 mt-6">
              No spam, ever. We respect your privacy and will only send updates about the book.
            </p>
          </div>
        </section>


        {/* Author Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/Personal/SydneySanders.png"
                    alt="Sydney Sanders"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Author</h2>
              <h3 className="text-xl text-blue-600 mb-6">Sydney Sanders, CEO of OnCode</h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Sydney has helped dozens of businesses transform their operations through intelligent automation. 
                As the founder of OnCode Software Agency, he's witnessed firsthand the dramatic impact that 
                well-implemented AI solutions can have on business growth, efficiency, and competitive advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Businesses Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
                <div className="text-gray-600">Hours in Time Savings Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">10x</div>
                <div className="text-gray-600">Average Efficiency Improvement</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Image
              src="/Personal/OnCodeLogoNew.png"
              alt="OnCode Logo"
              width={180}
              height={60}
              className="h-14 w-auto filter brightness-0 invert"
            />
            <span className="text-white text-2xl font-bold">OnCode</span>
          </div>
          <p className="text-gray-400 mb-6">Building the future of intelligent businesses</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/onboarding" className="hover:text-white transition-colors">Get Started</a>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
