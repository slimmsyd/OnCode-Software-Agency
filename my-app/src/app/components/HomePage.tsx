"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Video from "./VideoComponent";
import HeaderComponent from "./HeaderComponent";
import CaseStudySection from "./CaseStudySection";

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
import ChatPopup from "./ChatPopup";
import CTA from "./CTA";
import LogoCarousel from "./LogoCarousel";
import ProjectShowcase from "./ProjectShowcase";

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
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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
      name: "Business Process Automation",
      description:
        "Transform manual workflows into intelligent systems. From SOAP notes to contract analysis, we automate what slows you down.",
      image: "/assets/pastel_2.png",
    },
    {
      name: "MVP & Product Development",
      description:
        "Launch your startup idea or next product feature. Rapid development that gets you to market fast with a foundation that scales.",
      image: "/assets/pastel3.png",
    },
    {
      name: "AI Integration & Custom Tools",
      description:
        "Custom AI workflows that solve real problems. Document processing, data analysis, and intelligent automation tailored to your business.",
      image: "/assets/pastel_2.png",
    },
    {
      name: "Enterprise Software Solutions",
      description:
        "Scalable systems for growing businesses. Custom dashboards, data management, and workflow optimization that grows with you.",
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
      {/* <ChatPopup /> */}

      <div
        className="  relative"
        ref={refSectionHome}
      >



        <HeaderComponent
          refSection1={refSection1}
          refSection2={refSection2}
          refSection3={refSection3}
          refSection4={refSection4}
          priceRef={priceRef}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Project Showcase */}
      <div id="projects">
        <ProjectShowcase />
      </div>

      <main className="relative">


        <div id="ecosystem" ref={refSection1}>
          <About />
        </div>




        {/* 
        <div>

          <CTA />
        </div>
 */}


        <div id="about" ref={refSection2}>
          <Process />
        </div>



        <div ref={refSection5}>
          <Value />
        </div>

        <div ref={priceRef}>
          <Pricing />
        </div>

        <div>
          <Founder />
        </div>



        <Footer />
      </main>


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
      link: "/casetudies/solomonAI",
    },
    {
      src: "/assets/GliddyPng.png",
      name: "Gliddy",
      rank: "03",
      description:
        "End to End Event Management Platform, targeted to Bartenders",
      link: "/casetudies/gliddy",
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
        className={`flex transition-transform duration-300 ease-in-out ${isMobile ? "" : "gap-[10px]"
          }`}
        style={{
          transform: `translateX(-${currentIndex * (isMobile ? 100 : 100 / 3)
            }%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`${isMobile ? "w-full" : "w-auto"
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
              className={`h-[100%] servicesImage object-cover rounded-[19px] ${hoveredIndex === index ? "w-full" : "w-auto"
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
