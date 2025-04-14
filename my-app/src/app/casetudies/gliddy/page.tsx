import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import GliddyMobileImage from '../../../../public/works/Gliddy_Mobile.jpg'
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function GliddyCase() {
  return (
    <>
      <Navigation textColor={true} />

      <section className="flex flex-col items-center justify-start text-black py-[120px] px-[50px] md:px-[80px]">
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-[80px]">
          <div className="flex flex-col items-start justify-start w-full md:w-[55%] gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-[16px] text-blue-600 font-medium tracking-wide uppercase">Case Studies</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Revolutionizing Event Management for the Modern Bartender</h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-[600px]">
              A comprehensive platform that bridges the gap between bartenders, venues, and event organizers through intelligent automation and seamless mobile integration.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-4">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-blue-600">2x</p>
                <p className="text-sm text-gray-600">Faster Event Setup</p>
              </div>
              {/* <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-sm text-gray-600">User Satisfaction</p>
              </div> */}
              {/* <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-blue-600">50K+</p>
                <p className="text-sm text-gray-600">Events Managed</p>
              </div> */}
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-600">Support Coverage</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[45%]">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-gray-50 p-8">
              <img 
                src="/assets/GliddyPng.png" 
                alt="Gliddy Web Interface" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-black py-[100px] px-[50px] md:px-[80px] flex flex-col gap-[80px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">Challenge</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1">
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-[18px] text-white leading-relaxed">
                Gliddy needed a comprehensive solution that would allow bartenders and companies to efficiently manage events across both mobile and web platforms. The challenge was to create a seamless experience that would work flawlessly on both iOS and Android devices while maintaining feature parity with the web application.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">Mobile Solution</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1 gap-8">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="flex-1">
                <div className="bg-gray-900 p-8 rounded-xl">
                  <p className="text-[18px] text-white leading-relaxed mb-6">
                    We developed a feature-rich React Native mobile application that includes:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Native iOS and Android support</span>
                    </li>
                    <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Push notifications for events</span>
                    </li>
                    <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Offline event management</span>
                    </li>
                    <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Camera integration for flyer scanning</span>
                    </li>
                    <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Real-time event updates</span>
                    </li>
                    <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Secure authentication</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-[350px] flex items-center justify-center">
                <div className="relative w-[300px] h-[600px] transform rotate-[-5deg] hover:rotate-0 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[40px] blur-xl"></div>
                  <Image
                    src={GliddyMobileImage}
                    alt="Gliddy Mobile App Interface"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-[40px] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">Technical Stack</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Mobile Development</h4>
                <p className="text-white">React Native with TypeScript, Redux for state management, and native module integration</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">AI Integration</h4>
                <p className="text-white">Microsoft Azure Cognitive Services for flyer scanning and text extraction</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Backend Services</h4>
                <p className="text-white">AWS infrastructure with serverless functions and real-time databases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[70vh] bg-white py-[100px] px-[50px] text-black flex flex-col items-start justify-center">
        <h3 className="text-[16px] text-gray-500 max-w-[800px]">
          "ONCODE's expertise in both web and mobile development has been instrumental in bringing Gliddy to life. Their efficient approach to React Native development helped us create a seamless experience across all platforms. The innovative AI features and robust architecture have positioned us perfectly for scaling."
        </h3>
        <p className="text-[16px] text-gray-500">Gliddy Team</p>

        <div className="w-full h-[1px] mt-[40px] bg-gray-300"></div>

        <Link
          href="/casetudies/universalLaw"
          className="text-[14px] mt-[20px] text-gray-500"
        >
          Next Case Study
        </Link>
      </section>

      <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Ready to build your mobile app?
        </h2>
        <Link
          href="/contact"
          className="bg-white text-black px-[20px] py-[10px] rounded-[5px] hover:bg-gray-200 transition-colors"
        >
          Get in touch
        </Link>
      </div>

      <Footer />
    </>
  );
}
