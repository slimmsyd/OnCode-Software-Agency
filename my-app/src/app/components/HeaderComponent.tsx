import Link from "next/link";
import Navigation from "./Navigation";
import { RefObject } from "react";

interface Props {
  refSection1: RefObject<HTMLDivElement>;
  refSection2: RefObject<HTMLDivElement>;
  refSection3: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
  priceRef: RefObject<HTMLDivElement>;
  scrollToSection: (sectionId: string) => void;
}

export default function HeaderComponent({
  refSection1,
  refSection2,
  refSection3,
  refSection4,
  priceRef,
  scrollToSection,
}: Props) {
  return (
    <section className="site-inner-container h-[120vh] md:h-[80vh]  ">
      <Navigation
        scrollToSection={scrollToSection}
        refSection1={refSection1}
        refSection2={refSection2}
        refSection4={refSection4}
        refSection3={refSection3}
      />

      <div className="flex flex-col h-[80%] items-center justify-center mt-[150px]">
        <div className="flex flex-col gap-[5px] items-center text-center w-[100%] text-white">
          <p className="font-light text-[14px]  text-white/50 ">
            Generative AI Software Development
          </p>

          <h1 className="font-medium text-center header-h1 tracking-[-1px]">
            BUILD YOUR MVP IN WEEKS, NOT MONTHS
          </h1>

          <p className="font-light  text-white text-left !text-[16px] max-w-[70%] md:max-w-[100%] ">
            Turning ideas into reality, fast. Let us take your idea from concept
            to a market-ready MVP in just a few weeks.
          </p>

          <div className="flex flex-row gap-[20px] mt-[20px]">
            <Link
              href="https://calendly.com/0ncode-info/30min"
              // onClick={() => scrollToSection("about")}
              className="bg-white text-black flex flex-row gap-[10px] items-center px-[20px] py-[10px] rounded-[2px] hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-calendar w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Book A Call
            </Link>
          </div>

          <div className="flex flex-col gap-[10px] w-[60%]">
            <p className="font-light text-[16px]  text-white mt-[50px] md:mt-[150px] text-left ">
              we become your strategic partner. While you save equity by not
              bringing on a co-founder CTO, you gain a team that is entirely
              invested in the success of your product. We are as dedicated to
              realizing your vision as any co-founder would be, providing you
              with expert guidance, innovative solutions, and unwavering support
              throughout your journey.
            </p>
          </div>

          <div className=" mobileBanner flex flex-row gap-[50px] mt-[20px] md:mt-[50px] w-[100%] mb-[10px] md:mb-[0px] ">
            <div className="flex items-center w-[100%] lg:w-[320px] justify-start gap-[10px]">
              <h2 className="md:text-[28px] text-[18px]">Build</h2>
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex items-center w-[100%] lg:w-[320px] justify-start gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
              <h2 className="md:text-[28px] text-[18px]">Innovate</h2>
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex items-center w-[100%] lg:w-[320px] justify-start gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
              <h2 className="md:text-[28px] text-[18px]">Educare</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
