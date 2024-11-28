"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Video from "./VideoComponent";
import HeaderComponent from "./HeaderComponent";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import LoadingComponent from "./loadingComponent";
import Footer from "./Footer";
import About from "./about";
import Process from "./process";
import Pricing from "./pricing";
import Works from "./works";
import Value from "./value";
import Founder from "./founder";

gsap.registerPlugin(ScrollTrigger);

import { RefObject } from "react";
import * as React from "react";

const Earth = dynamic(() => import("./earth/index"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" alt="Loading" />,
});

// //Web 3 Work
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { formatEther } from "viem/utils";
// import { useAccount, useBalance, useContractRead } from "wagmi";
// import { readContract, waitForTransaction, writeContract } from "wagmi/actions";

export default function HomePage() {
  //Wallet Connects

  // useEffect(() => {
  //   // Initialize Lenis for smooth scrolling
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smooth: true,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   } as any);

  //   const raf = (time: number) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   const mm = gsap.matchMedia();

  //   return () => {
  //     lenis.destroy();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  //Scroll to the correspoding container
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  const refSection1 = useRef<HTMLDivElement>(null);
  const refSection2 = useRef<HTMLDivElement>(null);
  const refSection3 = useRef<HTMLDivElement>(null);
  const refSection4 = useRef<HTMLDivElement>(null);
  const refSection5 = useRef<HTMLDivElement>(null);
  const refSectionHome = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      name: "Custom Web Application Development",
      description:
        "We build scalable and robust web applications tailored to your unique business needs.",
      image: "/assets/pastel_2.png",
    },
    {
      name: "UI/UX Design",
      description:
        "Our design experts create intuitive interfaces that provide exceptional user experiences.",
      image: "/assets/pastel3.png",
    },
    {
      name: "AI Tool Solutions and Consulting",
      description:
        "Leveraging the latest AI technologies, we develop intelligent solutions and offer consulting to keep you ahead of the curve.",
      image: "/assets/pastel_2.png",
    },
    {
      name: "Creative Content Editing with Generative AI",
      description:
        "Enhance your visual storytelling with AI-generated B-Roll and cutting-edge content editing.",
      image: "/assets/pastel3.png",
    },
  ];

  //Form submit on webhook

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
            phoneNumber,
            message,
            companyName,
          }),
        }
      );

      if (response.ok) {
        // Clear form fields after successful submission
        setFirstName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
        setCompanyName("");
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Add this before the return statement
  const articles = [
    {
      id: 1,
      image: "/blogAssets/Tech.png",
      title: "Article 1",
      link: "https://0ncode.substack.com/"
    },
    {
      id: 2,
      image: "/blogAssets/Information.jpg", // Update with your actual image path
      title: "Article 2",
      link: "https://0ncode.substack.com/"
    },
    {
      id: 3,
      image: "/blogAssets/Thoughts.png", // Update with your actual image path
      title: "Article 3",
      link: "https://0ncode.substack.com/"
    }
  ];



  return (
    <>
      {/* <PageLoader /> */}

      <div
        className="site-wrapper h-[100vh] md:h-[100vh] relative"
        ref={refSectionHome}
      >
        {/* <div className="overlayDark absolute"></div> */}
        {/* <div className="absolute video-bg">
          <Image
            src="/HomeAssets/Bg_Desktop_Image.png"
            alt="Background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div> */}



        <HeaderComponent
          refSection1={refSection1}
          refSection2={refSection2}
          refSection3={refSection3}
          refSection4={refSection4}
          priceRef={priceRef}
          scrollToSection={scrollToSection}
        />
      </div>
{/* 
      <div className="py-1 w-full flex flex-col items-center gap-[20px]  justify-center lg:p-8 px-0 bg-black">
        <p className="text-white/80 montserrat text-[12px]">
          Tech we work with
        </p>

        <div className="marquee w-full flex gap-[20px] items-center justify-between overflow-hidden whitespace-nowrap">
          <img
            src="https://cdn.prod.website-files.com/6564c816d808331339215960/656628cd52a692653ba4dad8_icon_openAI.png"
            alt="OpenAI logo"
            className="w-[100px]  h-[30px]"
          />
          <img
            src="https://cdn.prod.website-files.com/6564c816d808331339215960/66f38a2506d16f7bebd590f4_llamaindx_icon.png"
            alt="LlamaIndex logo"
            className="w-[100px]  h-[30px]"
          />

          <img
            src="https://cdn.prod.website-files.com/6564c816d808331339215960/65772de377bab5a434fb51a1_icon_LLaMA.png"
            alt="LLaMA logo"
            className="w-[100px]  h-[30px]"
          />

          <img
            src="https://cdn.prod.website-files.com/6564c816d808331339215960/65776f14d6312f05bf70fef4_icon_vercel.png"
            alt="Vercel logo"
            className="w-[100px]  h-[30px]"
          />
          <img
            src="https://cdn.prod.website-files.com/6564c816d808331339215960/656628cd73f2e9c08f5cba6c_icon_node.png"
            alt="Node.js logo"
            className="w-[100px]  h-[30px]"
          />
        </div>
      </div> */}

      <section
        id="home"
        className=" pt-[50px] px-[20px] relative"
        ref={refSectionHome}
      >
        {/* <div className="overlayDark absolute h-[100vh]"></div> */}
        <div className="absolute video-bg ">
          <Image
            src="/pastel.mp4"
            alt="Background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        <About />
        <Process />
        <Pricing />
        <Works />
        <Founder />
        <Value />
      <Footer />

        {/* <div className="w-full md:w-[70%] relative md:leading-[600%] items-center flex flex-row gap-[10px]">
          <h1 className="text-black z-10 afterH1">Glimpse Into Our Work</h1>
        </div>



        <ImageSlider scrollToSection={scrollToSection} /> */}
      </section>

    
    </>
  );
}

const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "ONCODE ";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        setTimeout(() => setOpacity(0), 500); // Wait 500ms after typing before fading
      }
    }, 200); // Adjust typing speed here (200ms between each letter)

    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2300); // Total duration: ~1.2s for typing + 0.5s pause + 0.3s fade out

    return () => {
      clearInterval(typingInterval);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ease-in-out"
      style={{ opacity }}
    >
      <LoadingComponent />
    </div>
  );
};

function ImageSlider({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [

    {
      src: "/images/Invoice.png",
      name: "Invoice Magi",
      rank: "01",
      description: "Agentic AI for Invoice Management",
      link: "https://www.invoicemagic.tech/",
    },
    {
      src: "/images/CreatureCube.png",
      name: "Creatures Cube",
      rank: "01",
      description: "Web3 NFT collection",
      link: "https://creaturecubes.art/",
      secondLink: "https://www.creature.world/",
    },
    {
      src: "/images/Solomon.png",
      name: "Solomon Chat App",
      rank: "02",
      description:
        "Cryptocurrency Consulting: Expert guidance on cryptocurrency investments, security, and blockchain integration.",
      link: "https://www.aisolomon.xyz/",
    },
    {
      src: "/assets/GliddyPng.png",
      name: "Gliddy",
      rank: "03",
      description:
        "End to End Event Management Platform, targeted to Bartenders",
      link: "https://www.meetgliddy.com/",
    },
    {
      src: "/images/Terrain.png",
      name: "Terrin Crypto Solutions",
      rank: "04",
      description:
        "Comprehensive support for users at all levels, from beginners to advanced, covering privacy, security, and advanced blockchain applications.",
      link: "https://www.terrapincrypto.us/",
    },
    {
      src: "/images/BlackWeb.png",
      name: "BlackW3B Crypto Solutions",
      rank: "05",
      description:
        " Custom blockchain applications, token development, and other tailored solutions.",
      link: "https://blackw3b.io/",
    },
    {
      src: "/images/Created3Grow.png",
      name: "Created 2 Grow | Shopify Agency",
      rank: "06",
      description: "Shopify Agency",
      link: "https://www.created2grow.com/",
    },
    {
      src: "/images/TSGO.png",
      name: "TSG Consulting",
      rank: "07",
      description: "Political Consulting Firm",
      link: "https://www.tsgco.com/",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden my-[100px] px-[20px]">
      <div
        className={`flex transition-transform duration-300 ease-in-out ${
          isMobile ? "" : "gap-[10px]"
        }`}
        style={{
          transform: `translateX(-${
            currentIndex * (isMobile ? 100 : 100 / 3)
          }%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "w-full" : "w-auto"
            } h-[500px] rounded-[19px] relative flex-shrink-0 group transition-all duration-300 ease-in-out`}
            style={{
              width: isMobile
                ? "100%"
                : hoveredIndex === index
                ? "55%"
                : hoveredIndex !== null
                ? "20%"
                : "33.333%",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="rounded-[19px] transition-all duration-300 p-10 absolute bg-black/50 top-0 left-0 w-full h-full justify-center flex flex-col items-start">
              <span className="text-[14px] opacity-1 group-hover:opacity-100 transition-opacity duration-300 absolute top-[10px] left-[15px] font-bold text-white">
                {service.rank}
              </span>

              <div className="flex flex-col gap-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[20px] font-bold text-white">
                  {service.name}
                </span>

                <span className="text-[20px] font-light text-white">
                  {service.description}
                </span>

                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white text-black px-[20px] py-[10px] w-[160px] rounded-[2px] hover:bg-gray-100 transition-colors duration-300"
                >
                  Get In Touch
                </button>

                <Link
                  href={service.link}
                  className="text-[14px] font-bold text-white"
                >
                  {" "}
                  Visit Site
                </Link>

                {service.secondLink && (
                  <Link
                    href={service.secondLink}
                    className="text-[14px] font-bold text-white"
                  >
                    Visit Second Site
                  </Link>
                )}
              </div>
            </div>

            <Image
              className={`h-[100%] servicesImage object-cover rounded-[19px] ${
                hoveredIndex === index ? "w-full" : "w-auto"
              }`}
              src={service.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />

            <div className="flex p-[10px] items-end justify-end absolute bottom-0 text-white">
              <p className="mt-2 text-center font-semibold">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute clickBtns left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute clickBtns right-2 bottom-2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}
