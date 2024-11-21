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
        className="site-wrapper h-[90vh] md:h-[120vh] relative"
        ref={refSectionHome}
      >
        <div className="overlayDark absolute"></div>
        <div className="absolute video-bg">
          <Video
            src="/Computer_Screen.mp4"
            type="video/mp4"
            width="100%"
            height="110vh"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true} // Ensure the video is muted for autoplay to work
            className="relative h-[100vh] md:h-[120vh]"
          />
        </div>

        <div className="social-container">
          <div className="flex flex-col gap-[20px] fixed">
            <Link
              href="https://www.instagram.com/0ncode/"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.82023 0.039C4.51336 0.0070909 4.73436 0 6.5 0C8.26564 0 8.48664 0.00768181 9.17918 0.039C9.87173 0.0703182 10.3445 0.180818 10.7581 0.340955C11.1912 0.504636 11.5842 0.7605 11.9092 1.09141C12.2401 1.41582 12.4954 1.80818 12.6585 2.24191C12.8192 2.65555 12.9291 3.12827 12.961 3.81964C12.9929 4.51395 13 4.73495 13 6.5C13 8.26564 12.9923 8.48664 12.961 9.17977C12.9297 9.87114 12.8192 10.3439 12.6585 10.7575C12.4954 11.1913 12.2397 11.5843 11.9092 11.9092C11.5842 12.2401 11.1912 12.4954 10.7581 12.6585C10.3445 12.8192 9.87173 12.9291 9.18036 12.961C8.48664 12.9929 8.26564 13 6.5 13C4.73436 13 4.51336 12.9923 3.82023 12.961C3.12886 12.9297 2.65614 12.8192 2.2425 12.6585C1.80873 12.4953 1.41571 12.2396 1.09082 11.9092C0.760134 11.5846 0.504231 11.1917 0.340955 10.7581C0.180818 10.3445 0.0709091 9.87173 0.039 9.18036C0.0070909 8.48604 0 8.26505 0 6.5C0 4.73436 0.00768181 4.51336 0.039 3.82082C0.0703182 3.12827 0.180818 2.65555 0.340955 2.24191C0.504473 1.80823 0.76057 1.41541 1.09141 1.09082C1.41584 0.760205 1.80846 0.504307 2.24191 0.340955C2.65555 0.180818 3.12827 0.0709091 3.81964 0.039H3.82023ZM9.12659 1.209C8.44114 1.17768 8.2355 1.17118 6.5 1.17118C4.7645 1.17118 4.55886 1.17768 3.87341 1.209C3.23936 1.23795 2.89545 1.34373 2.66618 1.43295C2.36305 1.55114 2.14618 1.69118 1.91868 1.91868C1.70303 2.12848 1.53706 2.38389 1.43295 2.66618C1.34373 2.89545 1.23795 3.23936 1.209 3.87341C1.17768 4.55886 1.17118 4.7645 1.17118 6.5C1.17118 8.2355 1.17768 8.44114 1.209 9.12659C1.23795 9.76064 1.34373 10.1045 1.43295 10.3338C1.53695 10.6157 1.703 10.8715 1.91868 11.0813C2.12845 11.297 2.38432 11.463 2.66618 11.567C2.89545 11.6563 3.23936 11.762 3.87341 11.791C4.55886 11.8223 4.76391 11.8288 6.5 11.8288C8.23609 11.8288 8.44114 11.8223 9.12659 11.791C9.76064 11.762 10.1045 11.6563 10.3338 11.567C10.637 11.4489 10.8538 11.3088 11.0813 11.0813C11.297 10.8715 11.463 10.6157 11.567 10.3338C11.6563 10.1045 11.762 9.76064 11.791 9.12659C11.8223 8.44114 11.8288 8.2355 11.8288 6.5C11.8288 4.7645 11.8223 4.55886 11.791 3.87341C11.762 3.23936 11.6563 2.89545 11.567 2.66618C11.4489 2.36305 11.3088 2.14618 11.0813 1.91868C10.8715 1.70304 10.6161 1.53708 10.3338 1.43295C10.1045 1.34373 9.76064 1.23795 9.12659 1.209ZM5.66977 8.50377C6.13343 8.69678 6.64972 8.72283 7.13046 8.57747C7.61119 8.43211 8.02655 8.12436 8.30559 7.70678C8.58463 7.2892 8.71003 6.7877 8.66039 6.28793C8.61075 5.78815 8.38914 5.32112 8.03341 4.96659C7.80664 4.73996 7.53244 4.56643 7.23056 4.4585C6.92868 4.35056 6.60662 4.31089 6.28757 4.34236C5.96851 4.37383 5.66041 4.47565 5.38543 4.64049C5.11045 4.80532 4.87544 5.02908 4.69732 5.29564C4.51919 5.5622 4.40238 5.86494 4.3553 6.18207C4.30823 6.49919 4.33204 6.82281 4.42505 7.12962C4.51805 7.43644 4.67792 7.71881 4.89315 7.95643C5.10839 8.19404 5.37362 8.38097 5.66977 8.50377ZM4.13755 4.13755C4.44779 3.8273 4.8161 3.58121 5.22145 3.4133C5.6268 3.2454 6.06125 3.15898 6.5 3.15898C6.93875 3.15898 7.3732 3.2454 7.77855 3.4133C8.1839 3.58121 8.55221 3.8273 8.86245 4.13755C9.1727 4.44779 9.41879 4.8161 9.58669 5.22145C9.7546 5.6268 9.84101 6.06125 9.84101 6.5C9.84101 6.93875 9.7546 7.3732 9.58669 7.77855C9.41879 8.1839 9.1727 8.55221 8.86245 8.86245C8.23589 9.48902 7.38609 9.84101 6.5 9.84101C5.61391 9.84101 4.76411 9.48902 4.13755 8.86245C3.51098 8.23589 3.15898 7.38609 3.15898 6.5C3.15898 5.61391 3.51098 4.76411 4.13755 4.13755ZM10.582 3.65655C10.6589 3.58402 10.7204 3.49681 10.763 3.40008C10.8056 3.30334 10.8283 3.19904 10.8298 3.09337C10.8314 2.98769 10.8117 2.88278 10.772 2.78484C10.7322 2.68691 10.6733 2.59794 10.5985 2.5232C10.5238 2.44847 10.4348 2.38949 10.3369 2.34976C10.2389 2.31003 10.134 2.29035 10.0284 2.29189C9.92268 2.29343 9.81839 2.31616 9.72165 2.35873C9.62492 2.4013 9.5377 2.46285 9.46518 2.53973C9.32414 2.68924 9.24692 2.88784 9.24991 3.09337C9.25291 3.29889 9.33589 3.49516 9.48123 3.6405C9.62657 3.78584 9.82283 3.86882 10.0284 3.87181C10.2339 3.87481 10.4325 3.79759 10.582 3.65655Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <HeaderComponent
          refSection1={refSection1}
          refSection2={refSection2}
          refSection3={refSection3}
          refSection4={refSection4}
          priceRef={priceRef}
          scrollToSection={scrollToSection}
        />
      </div>

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
      </div>

      <section
        id="home"
        className=" pt-[50px] px-[20px] relative"
        ref={refSectionHome}
      >
        {/* <div className="overlayDark absolute h-[100vh]"></div> */}
        <div className="absolute video-bg ">
          <Video
            src="/pastel.mp4"
            type="video/mp4"
            width="100%"
            height="100vh"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true} // Ensure the video is muted for autoplay to work
            className="relative h-[100vh]"
          />
        </div>

        <div className="w-full md:w-[70%] relative md:leading-[600%] items-center flex flex-row gap-[10px]">
          <h1 className="text-black z-10 afterH1">Glimpse Into Our Work</h1>
        </div>

        <ImageSlider scrollToSection={scrollToSection} />
      </section>

      <section className="relative  px-[20px] h-[80vh]">
        <div className="max-w-[850px] m-auto flex flex-col gap-[20px] items-start justify-center h-full text-black">
          <span className="custom-block block"></span>
          <h3 className="text-[44px]">
            OnCode: Your partner in quality, effective, and efficient software
            development for founders in every sector.
          </h3>
          <p className="lowercase text-[14px]">
            specalist and generalist, with the use of AI agency{" "}
          </p>
          <p className="lowercase text-[14px]">
            A jack of all trades is a master of none, but oftentimes better than
            a master of one{" "}
          </p>
          {/* 
          <button className="bg-black text-white px-[20px] py-[10px] rounded-[2px]">
            Demo Features
          </button> */}
        </div>
      </section>

      <section id="why" className=" h-[100vh] bg-black relative p-[20px]">
        <div className="pt-50px px-[20px]">
          <h2>Oncode</h2>
        </div>

        <Earth />

        <div className="text-white text-[12px] absolute bottom-[50px] left-[20px] w-[40%]">
          <p className="text-[14px]">
            Oncode acts to accelerate your time-to-market with our efficient
            development processes
          </p>
        </div>

        <div className="text-white  text-[12px]  absolute bottom-[50px] right-[5px] w-[30%]">
          <p className="text-[14px]">
            every founder must build products that enables scablity and excels
            industry stanards, be a distruter
          </p>
        </div>
      </section>

      {/* WHat We DO */}
      <section id="about" className="relative h-full bg-black ">
        <div className="flex flex-col md:flex-row  relative w-full bg-[#0B0B0B]">
          {services.map((service, index) => (
            <div
              key={index}
              className="element-card w-[100%] h-[500px] relative flex flex-col justify-end p-[10px] items-start overflow-hidden group"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-[#0B0B0B] group-hover:opacity-0 transition-opacity duration-300"></div>
              <span className="text-[14px] transition-opacity duration-300 absolute top-[10px] left-[15px] font-bold text-white z-10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-[10px] relative z-10">
                <span className="text-[20px] font-bold text-white">
                  {service.name}
                </span>
                <p className="text-white text-[14px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className = "element-card">
      <span className="text-[14px] opacity-1 group-hover:opacity-100 transition-opacity duration-300 absolute top-[10px] left-[15px] font-bold text-white">
                01
              </span>


              <div className="flex flex-col gap-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[20px] font-bold text-white">
                  

                  </span>


      </div>
      </div> */}
      </section>

      <section className="relative h-full bg-white text-black px-4 py-[100px]">
        <div className="flex flex-col gap-[20px] items-start justify-start h-full">

          <div
          className = "max-w-[850px]  "
          >
 <h2 className="text-[34px]">
            We research the AI space and always have our finger on the pulse
          </h2>
          </div>
         

          <div className="flex flex-row gap-[10px] items-center justify-center">
            <p className="text-[14px]">Read Our Insights Below</p>

            <svg
              className="relative transition-transform duration-0 group-hover:translate-x-20 group-hover:duration-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 24"
              aria-hidden="true"
              focusable="false"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M22.3536 12.3536C22.5488 12.1583 22.5488 11.8417 22.3536 11.6464L19.1716 8.46447C18.9763 8.26921 18.6597 8.26921 18.4645 8.46447C18.2692 8.65973 18.2692 8.97631 18.4645 9.17157L21.2929 12L18.4645 14.8284C18.2692 15.0237 18.2692 15.3403 18.4645 15.5355C18.6597 15.7308 18.9763 15.7308 19.1716 15.5355L22.3536 12.3536ZM2 12.5L22 12.5L22 11.5L2 11.5L2 12.5Z"
              ></path>
            </svg>
          </div>




          <div className="flex flex-row justify-start gap-[50px] mt-[30px] w-full">
            {articles.map((article) => (
              <div key={article.id} className="flex-1 h-[450px] max-w-[350px] rounded-[10px] group relative overflow-hidden">
                <Link href={article.link} target="_blank" className="block h-full">
                  <div className="w-full h-full relative rounded-[10px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-[10px] transition-all duration-300 group-hover:scale-110 group-hover:blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-3 rounded-md font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        READ HERE
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <div className="flex flex-col gap-[15px] items-center justify-center bg-black text-white py-16 px-4">
        <p className="text-[14px] text-gray-500">
          Sign up to receive updates on our latest projects and insights into
          the world of AI.
        </p>
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <Link
          target="_blank"
          href="https://0ncode.substack.com/"
          className="bg-white text-black px-[20px] py-[10px] rounded-[5px] hover:bg-gray-200 transition-colors"
        >
          Subscribe
        </Link>
      </div>

      <Footer />
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
