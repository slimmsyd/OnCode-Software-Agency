import Navigation from "./Navigation";
import { RefObject } from "react";

interface Props {
  refSection1: RefObject<HTMLDivElement>;
  refSection2: RefObject<HTMLDivElement>;
  refSection3: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
  priceRef: RefObject<HTMLDivElement>;
}

export default function HeaderComponent({
  refSection1,
  refSection2,
  refSection3,
  refSection4,
  priceRef,
}: Props) {
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    console.log("Scroll to section is being clikec tho", ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="site-inner-container h-[120vh] md:h-[80vh]  ">
      <Navigation
        scrollToSection={scrollToSection}
        refSection1={refSection1}
        refSection2={refSection2}
        refSection4={refSection4}
        refSection3={refSection3}
      />

      <div className="flex flex-col h-[80%] items-center justify-start mt-[0px]">
        <div className="flex flex-col gap-[5px] items-start text-center w-[100%] text-white">
          <p className="font-light text-[14px]  text-white/50 ">staying on code...</p>

          <h1 className="font-medium text-left header-h1"> ENSURING THAT YOUR IDEA HAS THE ENGINEERING CAPACITY</h1>

          {/* <p className="font-light  text-white ">
            Your ultimate destination for expert-led education in blockchain,
            crypto, AI, and web3 technologies.
          </p> */}

          <div className="flex flex-row gap-[20px] mt-[20px]">

            <button
              onClick={() => scrollToSection(priceRef)}
              className="join-btn clear-bg"
            >
              Book A Call
            </button>


          </div>

          <div className="flex flex-col gap-[10px] w-[60%]">

          <p className="font-light  text-white mt-[50px] md:mt-[150px] text-left ">
            OnCode, why pay a co-founder to 50% equity, when you can retain 100% equity and pay us a fraction of the cost?
          </p>

 

          </div>

          <div className = "flex flex-row gap-[50px] mt-[20px] md:mt-[50px] w-[100%] mb-[10px] md:mb-[0px] ">

          <div className="flex items-center w-[100%] lg:w-[320px] justify-start gap-[10px]">
            <h2 className = "md:text-[28px] text-[18px]">Build</h2>
            <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
            </div>
          </div>

          <div className="flex items-center w-[100%] lg:w-[320px] justify-start gap-[10px]">
          <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
            </div>
            <h2 className = "md:text-[28px] text-[18px]">Innovate</h2>
            <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
            </div>
          </div>
        
          <div className="flex items-center w-[100%] lg:w-[320px] justify-start gap-[10px]">
          <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
            </div>
            <h2 className = "md:text-[28px] text-[18px]">Educare</h2>
           
          </div>
           
          </div>
          
    
        </div>

  

      </div>
    </section>
  );
}
