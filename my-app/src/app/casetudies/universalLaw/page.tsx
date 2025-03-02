import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function UniversalLaw() {
  return (
    <>
      <Navigation textColor={true} />

      <section className="flex flex-col md:flex-row items-start justify-start text-black gap-[50px] py-[120px] px-[50px] md:px-[80px]">
        <div className="flex flex-col items-start justify-start w-[100%] flex-1 min-w-[500px] gap-6">
          <p className="text-[16px] text-blue-600 font-medium tracking-wide uppercase">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Automating Universal Law's YouTube Content Creation with AI</h2>

          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-[16px] text-gray-500 font-medium">Key Deliverables:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">AI Content Generation</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Workflow Automation</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Music Generation</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Video Production</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:w-[45%]">
          <div className="w-full rounded-xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/zFZooXB8wzA"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
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
                Universal Law needed a way to create engaging YouTube content consistently without spending hours on production. The traditional content creation process was time-consuming and resource-intensive, limiting their ability to maintain a strong online presence.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
          <div className="flex flex-col items-start justify-start md:w-[200px]">
            <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase">Our Process</p>
          </div>

          <div className="flex flex-col items-start justify-start flex-1 gap-6">
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-[18px] text-white leading-relaxed mb-6">
                We developed a streamlined, five-step automation workflow that transformed their content creation process:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">1</span>
                  <span>Generate Lyrics with Lyrical AI</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">2</span>
                  <span>Create Images with Midjourney</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">3</span>
                  <span>Transform Images to Video with Vidiu</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3">
                  <span className="text-blue-400">4</span>
                  <span>Generate Music with SUNO AI</span>
                </li>
                <li className="bg-black p-4 rounded-lg text-white flex items-center gap-3 md:col-span-2">
                  <span className="text-blue-400">5</span>
                  <span>Combine and Upload Final Content</span>
                </li>
              </ul>
              <p className="text-[18px] text-white leading-relaxed mt-6">
                This automated workflow reduced content creation time from hours to just 30 minutes, while maintaining high-quality output and consistency.
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
                <h4 className="text-blue-400 font-medium mb-3">Speed & Efficiency</h4>
                <p className="text-white">Reduced content creation time from hours to just 30 minutes per video</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">AI-Driven Solutions</h4>
                <p className="text-white">Leveraged four powerful AI tools to automate the entire production process</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Consistent Quality</h4>
                <p className="text-white">Maintained high production standards through automated workflows</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-blue-400 font-medium mb-3">Resource Optimization</h4>
                <p className="text-white">Minimized manual effort while maximizing content output and creativity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[40px] mt-[40px]">
          <p className="text-[16px] text-blue-400 font-medium tracking-wide uppercase text-center">
            Technologies Used
          </p>

          <div className="w-full h-[1px] bg-gray-800"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[20px] font-medium text-white mb-3">AI Content Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                Integrated Lyrical AI and Midjourney for automated content and image creation
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[20px] font-medium text-white mb-3">Video Production</h3>
              <p className="text-gray-400 leading-relaxed">
                Utilized Vidiu for automated video generation and enhancement
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[20px] font-medium text-white mb-3">
                Music Generation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Implemented SUNO AI for custom music creation and audio production
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[70vh] bg-white py-[100px] px-[50px] text-black flex flex-col items-start justify-center">
        <h3 className="text-[16px] text-gray-500 max-w-[800px]">
          "OnCode's innovative approach to content automation has transformed our YouTube presence. Their solution not only saved us countless hours but also maintained the quality and authenticity of our content. The automated workflow they developed is exactly what we needed to scale our online presence efficiently."
        </h3>
        <p className="text-[16px] text-gray-500">Universal Law</p>

        <div className="w-full h-[1px] mt-[40px] bg-gray-300"></div>

        <Link
          href="/casetudies/streetEconomics"
          className="text-[14px] mt-[20px] text-gray-500"
        >
          Next Case Study
        </Link>
      </section>

      <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Ready to automate your content creation?
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
