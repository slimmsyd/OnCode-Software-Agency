import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function Gliddy() {
  return (
    <>
      <Navigation textColor={true} />

      <section className="flex flex-col md:flex-row items-start justify-start  text-black gap-[50px] py-[100px] px-[50px]">
        <div className="flex flex-col items-start justify-start w-[100%] flex-1 min-w-[500px]">
          <p>Case Studies</p>
          <h2>We built Solomon AI, and their customers are content about it</h2>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Design Patterns for AI Agents
            </p>
            <p>Retrieval Augmented Generation (RAG)</p>
            <p>Prompt Engineering (CoT)</p>
            <p>Secure Headless Web Application</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <Video
              src="https://www.aisolomon.xyz/video_introduction.mp4"
              type="video/mp4"
              width="90%"
              height="auto"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={false}
              className="pointerEventsYes m-auto"
            />
          </div>
        </div>
      </section>

      <section className="h-[100vh] bg-black py-[100px] px-[50px] flex flex-col gap-[50px]">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start">
            <p>Problem</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Lexii.ai went through many pivots on its way to find product
              market fit.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start">
            <p>What We Did</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Lexii.ai went through many pivots on its way to find product
              market fit.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start">
            <p>What We Did</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Lexii.ai went through many pivots on its way to find product
              market fit.
            </p>
          </div>
        </div>

        <p className="text-[16px] text-gray-500 text-center">
          SERVICES WE PROVIDED
        </p>

        <div className="flex flex-row items-center justify-center gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-[20px] font-medium">Product Design</h3>
            <p className="text-[14px] text-gray-500">
              We explicitly adopted a lean innovation approach to product
              development, exploring many ideas quickly.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-[20px] font-medium">Product Design</h3>
            <p className="text-[14px] text-gray-500">
              We explicitly adopted a lean innovation approach to product
              development, exploring many ideas quickly.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-[20px] font-medium">Product Design</h3>
            <p className="text-[14px] text-gray-500">
              We explicitly adopted a lean innovation approach to product
              development, exploring many ideas quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="h-[70vh] bg-white py-[100px] px-[50px] text-black flex flex-col items-start justify-center">
        <h3>
          "Lexii is different: from the ease of use to the ridiculously high
          output quality, we've not encountered a tool more vital to our work."
        </h3>
        <p>Lexii.ai</p>

        <div className="w-full h-[1px] mt-[40px] bg-gray-300"></div>

        <Link href="/" target="_blank" className="text-[14px] mt-[20px] text-gray-500">
            Next Case Study
        </Link>
      </section>

      <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Accelerate your business with AI</h2>
        <Link href="/contact" className="bg-white text-black px-[20px] py-[10px] rounded-[5px] hover:bg-gray-200 transition-colors">
          Get in touch
        </Link>
      </div>


      <Footer />
    </>
  );
}
