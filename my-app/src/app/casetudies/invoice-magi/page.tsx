import Navigation from "@/app/components/Navigation";
import Video from "@/app/components/VideoComponent";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function SolomonAI() {
  return (
    <>
      <Navigation textColor={true} />

      <section className="flex flex-col md:flex-row items-start justify-start  text-black gap-[50px] py-[100px] px-[50px]">
        <div className="flex flex-col items-start justify-start w-[100%] flex-1 min-w-[500px]">
          <p>Case Studies</p>
          <h2>We built Invoice Magi AI, true testament to the power of Agentic AI</h2>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Design Patterns for AI Agents
            </p>
            <p>Web Application Development</p>
            <p>Prompt Engineering (CoT)</p>
            <p>Secure Headless Web Application</p>
            <p>Website Design</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <Video
                   src="https://teal-artistic-bonobo-612.mypinata.cloud/ipfs/Qmbai728AC9JdVS5rbNu4Rfwadx6jpxzCebMgm62WMmJub"
              type="video/mp4"
              width="90%"
              height="auto"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={false}
              className="pointerEventsYes m-[0px] md:m-auto"
            />
          </div>
        </div>
      </section>

      <section className="h-full md:h-[100vh] bg-black py-[100px] px-[50px] flex flex-col gap-[50px]">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start min-w-[300px]">
            <p className="text-[16px] text-gray-500">Problem</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Invoice Magi AI was a startup that desired to build a platform that would allow users to generate invoice, payment links, utilizing NLP for their customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start min-w-[300px]">
            <p className="text-[16px] text-gray-500">What We Did</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              We built a secure headless web application that would allow users to generate invoice, payment links, utilizing NLP for their customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start min-w-[300px]">
            <p className="text-[16px] text-gray-500">Results</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
              Invoice Magi AI was able to launch a product that was in high demand.
              Users were able to generate invoice, payment links, utilizing NLP for their customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[20px]  flex-1">
          <p className="text-[16px] text-gray-500 text-center">
            SERVICES WE PROVIDED
          </p>

          <div className="w-full h-[0.5px] bg-gray-500"></div>

          <div className="flex flex-row items-center justify-center gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[16px] font-medium text-white">Ai consulting</h3>
              <p className="text-[14px] text-gray-500">
                  We consulting with Solmon AI team, to help them build a innovate LLM product.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[16px] font-medium text-white">
                Generative AI Development
              </h3>
              <p className="text-[14px] text-gray-500">
              Our team of Prompt Engineeers was able to build and a tailor an AI to Solomon AI's needs.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[16px] font-medium text-white">
                Ongoing Feature Development
              </h3>
              <p className="text-[14px] text-gray-500">
              We continue to build additional features and functionality into the app.

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
