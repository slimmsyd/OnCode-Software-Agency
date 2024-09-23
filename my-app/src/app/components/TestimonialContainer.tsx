import Image from "next/image";
import CornerImage from "../../../public/HomeAssets/borderPics.png";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import QuoteComponent from "./subComponents/quoteComponent";
import Syd from "../../../public/HomeAssets/Sydney_Photo.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function TestimonialContainer() {
  const textRefs = useRef<(HTMLElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Duration of fade-out
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500); // Duration of fade-out
  };

  const quotes = [
    {
      quote:
        "Rio broke down the innerstanding and overstanding of Blockchain flawlessly, onboarded me very quickly.",
      author: "Sydney Sanders",
      image: Syd,
    },
    {
      quote:
        "Rio demystified the complexities of DeFi with precision, guiding me through the nuances effortlessly. Gaining me 19% interest on my asset",
      author: "Tristen",

    },
    {
      quote:
        "Rio provided unparalleled clarity on Crypto, Dropping gold gems, knows what he is talking about",
        author: "Mike",


    },
  ];

  useEffect(() => {
    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 50, // Start position (50px below the original position)
          opacity: 0, // Start opacity
        },
        {
          y: 0, // End position (original position)
          opacity: 1, // End opacity
          duration: 4, // Increase duration for slower animation (2 seconds in this case)
          ease: "power3.out", // Easing function
          scrollTrigger: {
            trigger: el, // Trigger the animation when this element enters the viewport
            start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
            end: "top 60%", // Animation ends when the top of the element reaches 60% of the viewport
            scrub: true, // Smoothly animate the scroll progress
          },
        }
      );
    });
  }, []);

  return (
    <section className="md:h-full h-full site-wrapper bg-white overflow-hidden">
      <div className="cornerImageContainer">
        <Image
          src={CornerImage}
          width={100}
          height={100}
          alt="Testimoinal Pics"
        />
      </div>

      <div className="testimonal-header flex flex-col w-full ">
        <div className="borderDiv px-[25px] ">
          <h1 className="lg:text-[40px] text-[40px] text-black lineHeight">
          Let us help you navigate the world of crypto and web3 
          </h1>

          <p className="text-[#4c4c4c] text-[16px] font-light">
            Hear not From me, but from those I have served
          </p>
        </div>
        <div className="testimonal-container items-center  px-[5px] md:px-[25px] pt-[100px] pb-[100px] flex flex-col">
          <div className="md:w-[70%] w-full">
            <QuoteComponent />

            <div
              className={`quote-container mb-[50px] transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-black md:text-[36px] text-[24px] self-start">
                {`“${quotes[currentIndex].quote}”`}
              </h1>

              <QuoteComponent className="svg-rotate" />

              <div className="flex flex-row gap-[20px] flex-1 mt-[50px] items-center">
                <div className="social-container-image">
                  {quotes[currentIndex].image && (
                    <Image
                      src={quotes[currentIndex].image}
                      width={20}
                      height={20}
                      layout="responsive"
                      objectFit="contain"
                      quality={100}
                      alt={`${quotes[currentIndex].author} Photo`}
                    />
                  )}
                </div>

                <div className="flex flex-row">
                  <span className="text-black">
                    {quotes[currentIndex].author}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-[20px] mt-[30px] items-center justify-end">
              <button
                onClick={handlePrevious}
                className="move-back items-end rotate-[-90deg]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="black"
                    fill-rule="evenodd"
                    d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <button onClick={handleNext} className="move-forward rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="black"
                    fill-rule="evenodd"
                    d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <div
            className="md:w-[70%] w-full ml-auto flex flex-row-reverse items-start justify-start gap-[20px]"
            ref={(el) => {
              textRefs.current[1] = el;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="159"
              viewBox="0 0 179 159"
              fill="none"
              className="h-[40px]"
            >
              <path
                d="M0 159V78.0954C0 27.9046 22.6322 2.06007 67.8965 0.561829L77.4357 0V38.7668H68.4577C52.372 40.265 44.3292 52.2509 44.3292 74.7244V83.7138H77.4357V159H0ZM179 38.7668H170.022C153.936 40.265 145.893 52.2509 145.893 74.7244V83.7138H179V159H102.125V78.0954C102.125 28.2791 124.571 2.43462 169.461 0.561829L179 0V38.7668Z"
                fill="url(#paint0_linear_61_43)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_61_43"
                  x1="89.2933"
                  y1="118.499"
                  x2="208.5"
                  y2="0.150533"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EDE7DC" />
                  <stop offset="1" stop-color="#EDE7DC" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-black md:text-[36px] text-[20px] self-end text-right ">
              "Rio provided unparalleled clarity on NFTs, transforming my
              understanding and positioning me for success in the space."
            </h1>
          </div>
          <div
            className="md:w-[70%] w-full flex flex-row items-start justify-start gap-[20px]"
            ref={(el) => {
              textRefs.current[2] = el;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="159"
              viewBox="0 0 179 159"
              fill="none"
              className="h-[40px]"
            >
              <path
                d="M0 159V78.0954C0 27.9046 22.6322 2.06007 67.8965 0.561829L77.4357 0V38.7668H68.4577C52.372 40.265 44.3292 52.2509 44.3292 74.7244V83.7138H77.4357V159H0ZM179 38.7668H170.022C153.936 40.265 145.893 52.2509 145.893 74.7244V83.7138H179V159H102.125V78.0954C102.125 28.2791 124.571 2.43462 169.461 0.561829L179 0V38.7668Z"
                fill="url(#paint0_linear_61_43)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_61_43"
                  x1="89.2933"
                  y1="118.499"
                  x2="208.5"
                  y2="0.150533"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EDE7DC" />
                  <stop offset="1" stop-color="#EDE7DC" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-black text-[20px] md:text-[36px] self-start">
              "Rio demystified the complexities of DeFi with precision, guiding
              me through the nuances effortlessly."
            </h1>
          </div> */}
        </div>
      </div>

      <div className="cornerImageContainer">
        <Image
          src={CornerImage}
          width={100}
          height={100}
          alt="Testimoinal Pics"
        />
      </div>
    </section>
  );
}
