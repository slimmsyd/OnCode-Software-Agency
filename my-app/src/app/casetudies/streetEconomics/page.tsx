import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function SolomonAI() {
  return (
    <>
      <Navigation textColor={true} />

      <section className="flex flex-col md:flex-row items-start justify-start text-black gap-[50px] py-[120px] px-[50px] md:px-[80px]">
        <div className="flex flex-col items-start justify-start w-[100%] flex-1 min-w-[500px] gap-6">
          <p className="text-[16px] text-blue-600 font-medium tracking-wide uppercase">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">We built a dashboard for Street Economics, transforming their community insights</h2>

          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-[16px] text-gray-500 font-medium">Key Deliverables:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Design Patterns for AI Agents</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Web Application Development</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Discord Bot Development</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:w-[45%]">
          <div className="w-full rounded-xl overflow-hidden shadow-2xl">
            <Video
              src="https://red-broken-ferret-951.mypinata.cloud/ipfs/bafybeifsyeosyutghfvz7aphm7wgdyezk6nfttanurc4ldyuiwsvs76yme"
              type="video/mp4"
              width="100%"
              height="auto"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={false}
              className="pointerEventsYes"
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-black py-[100px] px-[50px] md:px-[80px] flex flex-col gap-[80px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">Problem</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1">
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-[18px] text-white leading-relaxed">
                Street Economics struggled to get a clear view of their community's dynamics. Without data on when members were active, which channels were buzzing, or who was driving conversations, it was hard to make informed decisions about event timing, content focus, or member recognition.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">What We Did</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1 gap-6">
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-[18px] text-white leading-relaxed mb-6">
                We built a custom Discord analytics dashboard that tracks every interaction in their server. The dashboard captures:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Timestamps to show when messages are sent</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Channels to reveal where activity happens</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Users to identify who's contributing</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Messages to log what's being said</span>
                </li>
              </ul>
              <p className="text-[18px] text-white leading-relaxed mt-6">
                This dashboard turns raw data into clear insights, showing peak activity times, the most popular channels, and the top contributors—all in real time. It's simple to use, fast, and designed to give Street Economics the info they need without the fluff.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">Benefits</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Boost Engagement</h4>
                <p className="text-white">Schedule events or posts when their community is most active</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Focus Efforts</h4>
                <p className="text-white">Double down on high-traffic channels and spark life into quieter ones</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Reward Members</h4>
                <p className="text-white">Spotlight top contributors to build loyalty and encourage participation</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Plan Smarter</h4>
                <p className="text-white">Use data to shape content and moderation strategies that resonate with their audience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[40px] mt-[40px]">
          <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase text-center">
            Services We Provided
          </p>

          <div className="w-full h-[1px] bg-gray-800"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[20px] font-medium text-white mb-3">Analytics Development</h3>
              <p className="text-gray-400 leading-relaxed">
                We developed a comprehensive analytics system that tracks and visualizes community engagement metrics.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[20px] font-medium text-white mb-3">Discord Bot Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom bot development to collect and process real-time community data.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[20px] font-medium text-white mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Continuous optimization and feature development based on community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[70vh] bg-white py-[100px] px-[50px] text-black flex flex-col items-start justify-center">
        <h3 className="text-[16px] text-gray-500">
          "ONCODE's expertise in AI development has been transformative for Solomon AI. Their innovative approach and deep understanding of LLMs helped us create a product that truly resonates with our users. The ability to synthesize complex ideological data into coherent, holistic answers has set us apart in the market."
        </h3>
        <p className="text-[16px] text-gray-500">Solomon.AI</p>

        <div className="w-full h-[1px] mt-[40px] bg-gray-300"></div>

        <Link
          href="/casetudies/gliddy"
          className="text-[14px] mt-[20px] text-gray-500"
        >
          Next Case Study
        </Link>
      </section>

      <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Accelerate your business with AI
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
