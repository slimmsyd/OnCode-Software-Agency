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

    try {
      const response = await fetch(
        "https://hook.us1.make.com/weto5s8cei9yev2bt3kutqvcoqfzeajf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            email,
            phoneNumber: "",
            message: "eBook waitlist signup - Rise of Intelligent Businesses",
            companyName: "eBook Waitlist",
          }),
        }
      );

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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">OnCode</div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-blue-600 text-sm font-medium">📚 Digital Interactive Experience</span>
                </div>
                 */}
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Rise of Intelligent
                  <span className="block text-blue-600">Businesses</span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
                  Interactive eBook
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                How to architect a business where humans and tools co-evolve. A two-layer flywheel that compounds skill and capability so you save time, cut costs, and scale without a big tech team. <strong>Why? To improve your quality of life by having an intelligent partner at your side, used the right way.</strong>
                </p>
              </div>

              {/* Benefits Bullets */}
              <div className="space-y-4 max-w-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>See the system clearly</strong> — AI isn't a gimmick; it's a layer that learns with you.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Get your time back</strong> — automate the grind (docs, intake, scheduling) and cut hours into minutes.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Build systems that don't stagnate</strong> — every project sharpens your team and your tools.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Free your energy</strong> — stop drowning in busywork so you can focus on growth and improving your quality of life.
                  </p>
                </div>
              </div>


              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Right Content - Book Cover */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Book Cover */}
                <div className="relative w-96 h-[32rem] transition-transform duration-500 group-hover:scale-105">
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
                  
                  {/* Interactive badge */}
                  {/* <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    interactive
                  </div>
                   */}
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
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your first name"
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
          <div className="text-white text-2xl font-bold mb-4">OnCode</div>
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
