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
          <h2>Building an Advanced AI intergrated Blockchain Platform, to store your family, history forever</h2>
          <Link href="https://www.kinnected.life/" target="_blank" className="text-[14px] my-[20px] text-gray-500">Visit Website</Link>

          <div className="flex flex-col items-start justify-start">
            
            <p className="text-[16px] text-gray-500">

            Design Patterns for Application Development
            </p>
            <p>Web Application Development</p>
            <p>Website Design</p>
            <p>Blockchain Development</p>
            <p>AI Integration/RAG Workflow</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <img src="/works/Kinnected.png" alt="kinnected" />
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
            Kinnected solves the problem of fragmented, impermanent digital family legacies by providing a secure, blockchain-powered             </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start min-w-[300px]">
            <p className="text-[16px] text-gray-500">What We Did</p>
          </div>

          <div className="flex flex-col items-start justify-start">
  <p className="text-[16px] text-gray-500">
    We built a blockchain-powered platform to unify and immortalize family legacies. Using <strong>Arweave</strong> for permanent, decentralized storage, Kinnected ensures photos, stories, and documents are preserved for generations, immune to data loss or corporate shutdowns.  

    <br />
    <br />

    Our team developed a custom <strong>GraphQL API</strong> layered with a <strong>Knowledge Graph AI</strong> to map and query complex family relationships. The AI organizes fragmented data into interactive timelines and surfaces hidden connections (e.g., linking a grandparent’s diary to a descendant’s DNA test).  

    <br />
    <br />

    To gamify kinship, we integrated reward mechanics for collaborative actions like filling family tree gaps or recording oral histories. Users earn tokens for contributions, redeemable for legacy-building tools (e.g., AI-generated ancestry documentaries).  
  </p>
        </div>

        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start min-w-[300px]">
            <p className="text-[16px] text-gray-500">Results</p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <p className="text-[16px] text-gray-500">
            Still in development, but the team is excited about the potential of this project.

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
              <h3 className="text-[16px] font-medium text-white">Web Application Development</h3>
              <p className="text-[14px] text-gray-500">
                      We built a secure headless web application that would allow users to manage their upcoming events.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[16px] font-medium text-white">
                Website Design
              </h3>
              <p className="text-[14px] text-gray-500">
              We designed a website that would allow users to manage their upcoming events.
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
          "ONCODE's expertise Web Application has been instrumental in bringing Gliddy to life. Their efficient approach and attention to detail helped us create a user-friendly platform that simplifies event management. The seamless integration of features and robust backend have positioned us well for future growth."
        </h3>
        <p className="text-[16px] text-gray-500"  >Gliddy Team</p>

        <div className="w-full h-[1px] mt-[40px] bg-gray-300"></div>

        <Link
          href="/casetudies/gliddy"
          target="_blank"
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
