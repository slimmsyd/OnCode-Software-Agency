"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Navigation from "./Navigation";
import Video from "./VideoComponent";
import HeaderComponent from "./HeaderComponent";
import TestimonialContainer from "./TestimonialContainer";
import CryptoComponent from "./CryptoComponent";
import DecentralizedComponent from "./DecentralizedComponent";
import AIComponent from "./AIComponent";
import PriceContainer from "./PricingContainer";
import Footer from "./Footer";
import Head from "next/head";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import LoadingComponent from "./loadingComponent";

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

  //Check if the user wallet is connect, and its address using WAGMI hooks
  // const {address, isConnected} = useAccount();
  //State variable to know if the component has been moutned yet or not
  const [isMounted, setIsMounted] = useState<boolean>(false);
  //State vraible to show loading state when waitng tor wallet to connect?

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const mm = gsap.matchMedia();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
      description: "We build scalable and robust web applications tailored to your unique business needs.",
      image: "/assets/pastel_2.png"

    },
    {
      name: "UI/UX Design",
      description: "Our design experts create intuitive interfaces that provide exceptional user experiences.",
      image: "/assets/pastel3.png"

    },
    {
      name: "AI Tool Solutions and Consulting",
      description: "Leveraging the latest AI technologies, we develop intelligent solutions and offer consulting to keep you ahead of the curve.",
      image: "/assets/pastel_2.png"

    },
    {
      name: "Creative Content Editing with Generative AI",
      description: "Enhance your visual storytelling with AI-generated B-Roll and cutting-edge content editing.",
      image: "/assets/pastel3.png"

    },

  ]

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
          body: JSON.stringify({ firstName, email, phoneNumber, message , companyName}),
        }
      );

      // let responseData;
      // const contentType = response.headers.get("content-type");
      // if (contentType && contentType.includes("application/json")) {
      //   responseData = await response.json();
      // } else {
      //   responseData = await response.text();
      // }
  
      // console.log("Logging the webhook response:", responseData);
  
      if (response.ok) {
        // Clear form fields after successful submission
        setFirstName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
        setCompanyName("");
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.", );
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("An error occurred. Please try again later.");
    }
  };



  return (
    <>

    <PageLoader />

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
            className="relative h-[70vh] md:h-[120vh]"
          />
        </div>

        <div className="social-container">
          <div className="flex flex-col gap-[20px] fixed">
            <Link
              href="https://www.instagram.com/rio.brazy/"
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

            <Link
              href="https://exchange.art/lord-brazy"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                viewBox="0 0 28 28"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16.782 0.138605H2.32872C1.10891 0.138605 0.11644 1.13108 0.11644 2.35088V16.7709C0.11644 16.7709 0.116442 18.9832 2.0806 18.9832H4.07664C6.07129 18.9832 6.04912 16.8041 6.04912 16.8041L6.08377 6.17247L16.7487 6.13642C16.7487 6.13642 18.961 6.13643 18.961 4.15009V2.13187C18.961 0.115041 16.782 0.137217 16.782 0.137217V0.138605Z"
                  fill="white"
                ></path>
                <path
                  d="M11.0475 27.8614H25.5008C26.7206 27.8614 27.7131 26.8689 27.7131 25.6491V11.2291C27.7131 11.2291 27.7131 9.01685 25.7489 9.01685H23.7529C21.7582 9.01685 21.7804 11.1959 21.7804 11.1959L21.7457 21.8275L11.0808 21.8636C11.0808 21.8636 8.86852 21.8636 8.86852 23.8499V25.8681C8.86852 27.885 11.0475 27.8628 11.0475 27.8628V27.8614Z"
                  fill="white"
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

      <section
      id = "home"
      className=" pt-[50px] px-[20px] relative" ref={refSectionHome}>
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

        <div className="w-[70%] relative leading-[600%] items-center flex flex-row gap-[10px]">
          <h1 className="text-black z-10 afterH1">Explore our Ecosystem</h1>
        </div>

        <ImageSlider 
        scrollToSection={scrollToSection}
        />
      </section>

      <section className="relative  px-[20px] h-[80vh]">
        <div className="max-w-[850px] m-auto flex flex-col gap-[20px] items-start justify-center h-full text-black">
          <span className="custom-block block"></span>
          <h3 className="text-[44px]">
            OnCode is a Software service agency at serving Founders with the
            most quality, effective, and efficient outcome possible.
          </h3>
{/* 
          <button className="bg-black text-white px-[20px] py-[10px] rounded-[2px]">
            Demo Features
          </button> */}
        </div>
      </section>

      <section 
            id = "why"
            className=" h-[100vh] bg-black relative p-[20px]">
        
        <div className="pt-50px px-[20px]">
          <h2>Oncode</h2>
        </div>

        <Earth />

        <div className="text-white text-[12px] absolute bottom-[50px] left-[20px] w-[40%]">
          <p className="text-[14px]">
            Oncode acts to accelerate your time-to-market with our efficient development processes
          </p>
        </div>

        <div className="text-white  text-[12px]  absolute bottom-[50px] right-[5px] w-[30%]">
          <p className="text-[14px]">
            every founder must build products that enable a decentralized component, reaching the eyes of many
          </p>
        </div>
      </section>


    {/* WHat We DO */}
    <section 
                id = "about"

    className = "relative h-full bg-black">
    <div className="flex flex-col md:flex-row  relative w-full bg-[#0B0B0B]">
  {services.map((service, index) => (
    <div 
      key={index} 
      className="element-card w-[100%] h-[500px] relative flex flex-col justify-end p-[10px] items-start overflow-hidden group"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#0B0B0B] group-hover:opacity-0 transition-opacity duration-300"></div>
      <span className="text-[14px] transition-opacity duration-300 absolute top-[10px] left-[15px] font-bold text-white z-10">
        {String(index + 1).padStart(2, '0')}
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


    <footer className = "relative h-[70vh] md:h-[55vh] items-start justify-start  bg-white text-black py-[50px] px-[20px]">  
        <div className = "flex flex-row justify-between flex-wrap gap-[20px] md:gap-[0px]">
          <div className = "flex flex-col gap-[10px]">
            <p className = "">A mutliverse of happy Humans, get in contact</p>
            <form 
            onSubmit={submitContact}
            className="flex flex-col gap-[10px]">
              <div className = "flex flex-row gap-[10px]">
              <input 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Enter your email"
                className="border-b border-gray-300 pb-1 focus:outline-none"
              />
        
              </div>

              <input 
                onChange={(e) => setFirstName(e.target.value)}
                type="text" 
                placeholder="Name"
                className="border-b border-gray-300 pb-1 focus:outline-none"
              />
              <input 
                onChange={(e) => setCompanyName(e.target.value)}
                type="text" 
                placeholder="Company Name"
                className="border-b border-gray-300 pb-1 focus:outline-none"
              />
              <input 
              onChange={(e) => setPhoneNumber(e.target.value)}
                type="phone" 
                placeholder="Phone Number"
                className="border-b border-gray-300 pb-1 focus:outline-none"
              />

              <textarea
              onChange={(e) => setMessage(e.target.value)}
                placeholder="Reason for the contact?"
                className="border p-[10px] h-[150px] resize-none  border-gray-300 pb-1 focus:outline-none"
              />

<button className="bg-black text-white px-[20px] py-[10px] rounded-[2px]">
                See You!
              </button>

            </form>


          </div>


<div className = "flex flex-col gap-[10px]">

<div className = "flex flex-row gap-[10px] items-start justify-start">
          <button
          onClick={() => scrollToSection("home")}
          >
          HOME

          </button>
  
          <button
                    onClick={() => scrollToSection("home")}

          >
          ECOSYSTEM

          </button>
          <button
          onClick={() => scrollToSection("why")}
          >
          WHY US

          </button>
          <button>
          SOCIALS

          </button>

        </div>


  <svg xmlns="http://www.w3.org/2000/svg" width="132" height="37" viewBox="0 0 132 37" fill="none"><path d="M18.8197 36.074C8.91315 36.074 0.882812 28.0686 0.882812 18.062C0.882812 8.00532 8.91315 0 18.8197 0C28.7013 0 36.7316 8.00532 36.7316 18.062C36.7316 28.0686 28.7013 36.074 18.8197 36.074ZM18.8197 31.646C26.2497 31.646 32.1286 25.642 32.1286 18.062C32.1286 10.4319 26.2497 4.42794 18.8197 4.42794C11.3648 4.42794 5.48587 10.4319 5.48587 18.062C5.48587 25.642 11.3648 31.646 18.8197 31.646Z" fill="#111111"></path><path d="M53.9502 13.8378C55.0724 14.9606 55.6412 16.3252 55.6407 17.8936C55.6407 19.4615 55.0729 20.8332 53.9525 21.9701C52.8249 23.0811 51.4611 23.6415 49.8931 23.6415C48.3268 23.6415 46.9562 23.082 45.8191 21.978C44.7052 20.8306 44.1453 19.4599 44.1453 17.8936C44.1453 16.3262 44.7057 14.9626 45.8112 13.8403C46.9532 12.7146 48.3248 12.1463 49.8931 12.1463C51.4629 12.1463 52.8279 12.7155 53.9502 13.8378ZM53.6017 21.6246C54.6328 20.5783 55.1484 19.3352 55.1484 17.8941C55.1484 16.4539 54.6329 15.2183 53.6018 14.1867C52.5707 13.1551 51.3345 12.6396 49.894 12.6396C48.4535 12.6396 47.2097 13.1551 46.1634 14.1867C45.1471 15.2178 44.6389 16.4533 44.6389 17.8941C44.6389 19.3348 45.1471 20.5784 46.1634 21.6246C47.2098 22.6409 48.4528 23.1491 49.894 23.1491C51.3341 23.1491 52.5704 22.641 53.6017 21.6246ZM55.4669 12.3205C57.0288 13.8677 57.81 15.7259 57.8104 17.8939C57.8104 20.0931 57.0292 21.9513 55.4673 23.4673C53.935 25.0145 52.0778 25.7879 49.8939 25.7879C47.7101 25.7879 45.8519 25.0141 44.3205 23.4673C42.7734 21.9355 42 20.0778 42 17.8939C42 15.7253 42.7733 13.8677 44.3205 12.3205C45.8371 10.7734 47.6947 10 49.8939 10C52.0773 10 53.9351 10.7738 55.4669 12.3205ZM55.1173 23.1204C56.5999 21.6807 57.3175 19.9735 57.318 17.8941C57.318 15.8437 56.5994 14.1353 55.1208 12.6711C53.6683 11.2044 51.9599 10.4931 49.8944 10.4931C47.8135 10.4931 46.1057 11.2038 44.6729 12.6657C43.2051 14.1335 42.4934 15.8428 42.4934 17.8941C42.4934 19.9602 43.2046 21.6684 44.6679 23.117C46.1199 24.5833 47.8283 25.2945 49.8944 25.2945C51.9596 25.2945 53.6683 24.5832 55.1173 23.1204ZM70.6223 10.0003H73.2572V25.7883L60.1277 13.9912V10.0004L70.6224 19.4503L70.6223 10.0003ZM72.7643 24.6825V10.493H71.1151V20.5569L70.2925 19.8161L60.6204 11.1071V13.7711L72.7643 24.6825ZM79.757 14.1744C79.2868 14.6525 78.9112 15.21 78.6308 15.8468C78.3498 16.4841 78.2099 17.1657 78.2099 17.8942C78.2099 18.6216 78.3498 19.3043 78.6308 19.9411C78.9112 20.5784 79.2902 21.1358 79.7683 21.6134C80.2459 22.0915 80.8033 22.4661 81.4406 22.7391C82.0774 23.0126 82.7596 23.1487 83.4875 23.1487L86.5474 25.1729C85.5991 25.5825 84.5798 25.7875 83.4875 25.7875C82.3963 25.7875 81.3721 25.5785 80.4169 25.1615C79.4612 24.744 78.6233 24.1753 77.9026 23.4552C77.1826 22.7346 76.6138 21.8933 76.1968 20.9301C75.7793 19.9671 75.5708 18.9547 75.5708 17.8935C75.5708 16.8018 75.7793 15.7776 76.1968 14.8224C76.6138 13.8672 77.1826 13.0328 77.9026 12.3206C78.6232 11.6074 79.4616 11.043 80.4169 10.6261C81.3721 10.2086 82.3958 10.0001 83.4875 10.0001C84.5798 10.0001 85.599 10.2047 86.5474 10.6148C87.4952 11.0243 88.333 11.5926 89.061 12.3211L87.1959 14.1635C86.1495 13.1472 84.9135 12.639 83.4881 12.639C82.7601 12.639 82.0741 12.7755 81.4294 13.0486C80.7843 13.3216 80.2272 13.6969 79.757 14.1744ZM78.1798 20.1398C77.8727 19.4439 77.7169 18.6883 77.7169 17.8938C77.7169 17.0998 77.8731 16.3437 78.1802 15.6473C78.4828 14.9592 78.8949 14.3476 79.4055 13.8286C79.92 13.3061 80.5361 12.8911 81.2371 12.5944C81.9399 12.2967 82.6969 12.1459 83.4875 12.1459C84.8789 12.1459 86.119 12.5964 87.1802 13.4855L88.3502 12.3297C87.7558 11.8077 87.0856 11.3838 86.3517 11.067C85.4704 10.6865 84.5069 10.4933 83.4876 10.4933C82.4689 10.4933 81.5023 10.6899 80.6136 11.0773C79.7181 11.4681 78.9226 12.0043 78.2493 12.6707C77.5766 13.3361 77.0383 14.1262 76.6485 15.0192C76.2606 15.9074 76.0639 16.8744 76.0639 17.8937C76.0639 18.8829 76.2606 19.8386 76.6489 20.7345C77.0388 21.635 77.578 22.4335 78.2513 23.1071C78.925 23.7799 79.7201 24.3196 80.6142 24.7099C81.5028 25.0978 82.4699 25.2945 83.4877 25.2945C84.1688 25.2945 84.8254 25.2083 85.4494 25.0373L83.3369 23.6395C82.5996 23.6217 81.8972 23.4714 81.2466 23.1919C80.5541 22.8957 79.9395 22.4817 79.42 21.9617C78.9006 21.4432 78.4834 20.8303 78.1798 20.1398ZM102.198 13.8378C103.32 14.9606 103.889 16.3252 103.888 17.8936C103.888 19.4615 103.32 20.8332 102.2 21.9701C101.072 23.0811 99.7086 23.6415 98.1406 23.6415C96.5743 23.6415 95.2037 23.082 94.0666 21.978C92.9527 20.8306 92.3928 19.4599 92.3928 17.8936C92.3928 16.3262 92.9532 14.9626 94.0587 13.8403C95.2007 12.7146 96.5723 12.1463 98.1406 12.1463C99.7104 12.1463 101.075 12.7155 102.198 13.8378ZM101.849 21.6246C102.88 20.5783 103.396 19.3352 103.396 17.8941C103.396 16.4539 102.88 15.2183 101.849 14.1867C100.818 13.1551 99.582 12.6396 98.1415 12.6396C96.701 12.6396 95.4572 13.1551 94.4109 14.1867C93.3946 15.2178 92.8864 16.4533 92.8864 17.8941C92.8864 19.3348 93.3946 20.5784 94.4109 21.6246C95.4573 22.6409 96.7003 23.1491 98.1415 23.1491C99.5816 23.1491 100.818 22.641 101.849 21.6246ZM103.714 12.3205C105.276 13.8677 106.057 15.7259 106.058 17.8939C106.058 20.0931 105.277 21.9513 103.715 23.4673C102.183 25.0145 100.325 25.7879 98.1414 25.7879C95.9576 25.7879 94.0994 25.0141 92.568 23.4673C91.0208 21.9355 90.2475 20.0778 90.2475 17.8939C90.2475 15.7253 91.0208 13.8677 92.568 12.3205C94.0846 10.7734 95.9422 10 98.1414 10C100.325 10 102.183 10.7738 103.714 12.3205ZM103.365 23.1204C104.847 21.6807 105.565 19.9735 105.565 17.8941C105.565 15.8437 104.847 14.1353 103.368 12.6711C101.916 11.2044 100.207 10.4931 98.1419 10.4931C96.061 10.4931 94.3532 11.2038 92.9204 12.6657C91.4526 14.1335 90.7408 15.8428 90.7408 17.8941C90.7408 19.9602 91.4521 21.6684 92.9154 23.117C94.3674 24.5833 96.0758 25.2945 98.1419 25.2945C100.207 25.2945 101.916 24.5832 103.365 23.1204ZM118.191 14.8459C118.608 15.8017 118.817 16.8174 118.817 17.8934C118.817 18.9708 118.608 19.9866 118.191 20.9417C117.774 21.8974 117.209 22.7358 116.497 23.4557C115.783 24.1763 114.946 24.7446 113.983 25.1616C113.02 25.579 112 25.7875 110.923 25.7875H105.668L108.285 23.1488H110.924C111.651 23.1488 112.334 23.0122 112.97 22.7392C113.607 22.4662 114.165 22.0871 114.643 21.6017C115.12 21.1167 115.495 20.5553 115.768 19.9185C116.042 19.2812 116.178 18.607 116.178 17.8938C116.178 17.1816 116.042 16.5063 115.768 15.8695C115.495 15.2327 115.116 14.6714 114.631 14.1864C114.145 13.7009 113.585 13.3219 112.948 13.0488C112.311 12.7753 111.636 12.6393 110.924 12.6393H108.285L105.668 10.0005H110.923C112 10.0005 113.016 10.2095 113.971 10.6259C114.927 11.0434 115.764 11.6121 116.485 12.3322C117.205 13.0528 117.774 13.8909 118.191 14.8459ZM117.74 20.745C118.128 19.8569 118.324 18.8978 118.324 17.8943C118.324 16.8908 118.128 15.9312 117.74 15.0431C117.35 14.1495 116.811 13.355 116.137 12.6808C115.463 12.0075 114.668 11.4683 113.775 11.078C112.886 10.6901 111.927 10.4934 110.924 10.4934H106.851L108.49 12.1465H110.924C111.702 12.1465 112.448 12.2978 113.143 12.596C113.834 12.8918 114.452 13.3097 114.98 13.8376C115.508 14.3655 115.925 14.984 116.222 15.6755C116.52 16.3714 116.671 17.1176 116.671 17.8939C116.671 18.6702 116.52 19.4164 116.222 20.1128C115.926 20.8034 115.513 21.4209 114.994 21.9478C114.474 22.4761 113.859 22.8951 113.165 23.1923C112.469 23.4905 111.715 23.6418 110.924 23.6418H108.49L106.851 25.2949H110.924C111.928 25.2949 112.891 25.0982 113.787 24.7099C114.688 24.32 115.482 23.7818 116.147 23.1095C116.813 22.4362 117.349 21.6406 117.74 20.745ZM121.112 25.5706L123.728 23.1486H131.622V25.7875H121.112L121.112 25.5706ZM131.129 23.642H123.922L122.136 25.2951H131.129V23.642ZM121.112 10.0003H131.622V12.6392H123.728L121.112 10.0003ZM131.129 12.1463V10.4932H122.295L123.934 12.1463H131.129ZM121.112 19.2134V16.5972H131.621V19.2134H121.112ZM121.605 17.09V18.7205H131.129V17.09H121.605Z" fill="#111111"></path><path d="M63.6071 31.0563C63.6704 31.0563 63.7126 31.0984 63.7126 31.1617V35.8727C63.7126 35.929 63.6774 35.9712 63.6247 35.9782H63.0481C62.9918 35.9782 62.9497 35.9571 62.9215 35.9079L60.6574 32.0266V35.8727C60.6574 35.936 60.6152 35.9782 60.552 35.9782H60.1055C60.0422 35.9782 60 35.936 60 35.8727V31.1617C60 31.102 60.0352 31.0633 60.0914 31.0563H60.6645C60.7207 31.0563 60.7629 31.0773 60.791 31.1266L63.0551 35.0044V31.1617C63.0551 31.0984 63.0973 31.0563 63.1606 31.0563H63.6071ZM68.3288 35.3805C68.3921 35.3805 68.4343 35.4227 68.4343 35.486V35.8727C68.4343 35.936 68.3921 35.9782 68.3288 35.9782H65.3229C65.2596 35.9782 65.2174 35.936 65.2174 35.8727V31.1617C65.2174 31.0984 65.2596 31.0563 65.3229 31.0563H68.3218C68.3851 31.0563 68.4273 31.0984 68.4273 31.1617V31.5484C68.4273 31.6117 68.3851 31.6539 68.3218 31.6539H65.8749V33.1129H68.1354C68.1987 33.1129 68.2409 33.1551 68.2409 33.2184V33.6051C68.2409 33.6684 68.1987 33.7106 68.1354 33.7106H65.8749V35.3805H68.3288ZM73.1033 31.1406C73.1279 31.0773 73.1666 31.0563 73.2228 31.0563H73.6763C73.7537 31.0563 73.7888 31.1055 73.7607 31.1758L71.9747 35.8938C71.9536 35.9501 71.9044 35.9782 71.8482 35.9782H71.4052C71.349 35.9782 71.2997 35.9501 71.2786 35.8938L69.4927 31.1758C69.4646 31.1055 69.4997 31.0563 69.5771 31.0563H70.0306C70.0868 31.0563 70.1255 31.0773 70.1501 31.1406L71.6267 35.1555L73.1033 31.1406ZM78.0535 35.3805C78.1168 35.3805 78.159 35.4227 78.159 35.486V35.8727C78.159 35.936 78.1168 35.9782 78.0535 35.9782H75.0476C74.9843 35.9782 74.9421 35.936 74.9421 35.8727V31.1617C74.9421 31.0984 74.9843 31.0563 75.0476 31.0563H78.0465C78.1098 31.0563 78.152 31.0984 78.152 31.1617V31.5484C78.152 31.6117 78.1098 31.6539 78.0465 31.6539H75.5996V33.1129H77.8602C77.9234 33.1129 77.9656 33.1551 77.9656 33.2184V33.6051C77.9656 33.6684 77.9234 33.7106 77.8602 33.7106H75.5996V35.3805H78.0535ZM82.1213 34.0692L83.0635 35.8551C83.1022 35.929 83.0671 35.9782 82.9862 35.9782H82.5221C82.4659 35.9782 82.4272 35.9536 82.3991 35.9009L81.492 34.1465H81.3901H80.1983V35.8727C80.1983 35.936 80.1561 35.9782 80.0928 35.9782H79.6463C79.583 35.9782 79.5408 35.936 79.5408 35.8727V31.1617C79.5408 31.0984 79.583 31.0563 79.6463 31.0563H81.3901C82.6874 31.0563 83.162 31.6047 83.162 32.5996C83.162 33.3801 82.8702 33.8864 82.1213 34.0692ZM80.1983 31.6539V33.5489H81.4358C82.0897 33.5489 82.5256 33.3731 82.5256 32.5996C82.5256 31.8297 82.0897 31.6539 81.4358 31.6539H80.1983ZM88.7558 31.0563C90.4609 31.0563 91.3328 32.1285 91.3328 33.5172C91.3328 34.9024 90.4609 35.9782 88.7558 35.9782H87.578C87.5147 35.9782 87.4725 35.936 87.4725 35.8727V31.1617C87.4725 31.0984 87.5147 31.0563 87.578 31.0563H88.7558ZM88.7558 35.3805C90.032 35.3805 90.6648 34.6739 90.6648 33.5172C90.6648 32.3571 90.032 31.6539 88.7558 31.6539H88.13V35.3805H88.7558ZM95.6853 35.3805C95.7486 35.3805 95.7908 35.4227 95.7908 35.486V35.8727C95.7908 35.936 95.7486 35.9782 95.6853 35.9782H92.6794C92.6162 35.9782 92.574 35.936 92.574 35.8727V31.1617C92.574 31.0984 92.6162 31.0563 92.6794 31.0563H95.6783C95.7416 31.0563 95.7838 31.0984 95.7838 31.1617V31.5484C95.7838 31.6117 95.7416 31.6539 95.6783 31.6539H93.2314V33.1129H95.492C95.5553 33.1129 95.5974 33.1551 95.5974 33.2184V33.6051C95.5974 33.6684 95.5553 33.7106 95.492 33.7106H93.2314V35.3805H95.6853ZM100.46 31.1406C100.484 31.0773 100.523 31.0563 100.579 31.0563H101.033C101.11 31.0563 101.145 31.1055 101.117 31.1758L99.3313 35.8938C99.3102 35.9501 99.261 35.9782 99.2047 35.9782H98.7617C98.7055 35.9782 98.6563 35.9501 98.6352 35.8938L96.8492 31.1758C96.8211 31.1055 96.8562 31.0563 96.9336 31.0563H97.3871C97.4434 31.0563 97.482 31.0773 97.5066 31.1406L98.9832 35.1555L100.46 31.1406ZM105.603 31.6539H104.289V35.3805H105.603C105.667 35.3805 105.709 35.4227 105.709 35.486V35.8727C105.709 35.936 105.667 35.9782 105.603 35.9782H102.316C102.253 35.9782 102.211 35.936 102.211 35.8727V35.486C102.211 35.4227 102.253 35.3805 102.316 35.3805H103.631V31.6539H102.316C102.253 31.6539 102.211 31.6117 102.211 31.5484V31.1617C102.211 31.0984 102.253 31.0563 102.316 31.0563H105.603C105.667 31.0563 105.709 31.0984 105.709 31.1617V31.5484C105.709 31.6117 105.667 31.6539 105.603 31.6539ZM111.07 35.8587C111.099 35.929 111.063 35.9782 110.986 35.9782H110.533C110.476 35.9782 110.438 35.9571 110.413 35.8938L110.065 34.9481H107.808L107.46 35.8938C107.435 35.9571 107.397 35.9782 107.34 35.9782H106.887C106.809 35.9782 106.774 35.929 106.802 35.8587L108.588 31.1406C108.609 31.0844 108.659 31.0563 108.715 31.0563H109.158C109.214 31.0563 109.263 31.0844 109.284 31.1406L111.07 35.8587ZM108.022 34.368H109.851L108.936 31.8789L108.022 34.368ZM115.697 31.0563C115.761 31.0563 115.803 31.0984 115.803 31.1617V31.5484C115.803 31.6117 115.761 31.6539 115.697 31.6539H114.224V35.8727C114.224 35.936 114.182 35.9782 114.119 35.9782H113.672C113.609 35.9782 113.567 35.936 113.567 35.8727V31.6539H112.094C112.03 31.6539 111.988 31.6117 111.988 31.5484V31.1617C111.988 31.0984 112.03 31.0563 112.094 31.0563H115.697ZM120.349 31.6539H119.034V35.3805H120.349C120.412 35.3805 120.454 35.4227 120.454 35.486V35.8727C120.454 35.936 120.412 35.9782 120.349 35.9782H117.062C116.998 35.9782 116.956 35.936 116.956 35.8727V35.486C116.956 35.4227 116.998 35.3805 117.062 35.3805H118.376V31.6539H117.062C116.998 31.6539 116.956 31.6117 116.956 31.5484V31.1617C116.956 31.0984 116.998 31.0563 117.062 31.0563H120.349C120.412 31.0563 120.454 31.0984 120.454 31.1617V31.5484C120.454 31.6117 120.412 31.6539 120.349 31.6539ZM125.478 31.0563C125.542 31.0563 125.584 31.0984 125.584 31.1617V35.8727C125.584 35.929 125.549 35.9712 125.496 35.9782H124.919C124.863 35.9782 124.821 35.9571 124.793 35.9079L122.529 32.0266V35.8727C122.529 35.936 122.486 35.9782 122.423 35.9782H121.977C121.913 35.9782 121.871 35.936 121.871 35.8727V31.1617C121.871 31.102 121.906 31.0633 121.963 31.0563H122.536C122.592 31.0563 122.634 31.0773 122.662 31.1266L124.926 35.0044V31.1617C124.926 31.0984 124.968 31.0563 125.032 31.0563H125.478ZM131.592 33.3836C131.655 33.3836 131.698 33.4258 131.698 33.4891V33.7668C131.698 35.0641 130.847 36.0696 129.448 36.0696C128.031 36.0696 126.948 34.9376 126.948 33.5278C126.948 32.1215 128.038 31 129.437 31C130.112 31 130.664 31.2566 131.114 31.6715C131.163 31.7172 131.167 31.7699 131.118 31.8192L130.836 32.118C130.787 32.1672 130.738 32.1602 130.689 32.118C130.341 31.8227 129.947 31.6399 129.437 31.6399C128.428 31.6399 127.619 32.452 127.619 33.5278C127.619 34.6071 128.41 35.4262 129.448 35.4262C130.39 35.4262 131.037 34.818 131.065 33.9707H129.514C129.451 33.9707 129.409 33.9286 129.409 33.8653V33.4891C129.409 33.4258 129.451 33.3836 129.514 33.3836H131.592Z" fill="#111111"></path></svg>
</div>

  


        </div>

    </footer>



    </>
  );
}



const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'ONCODE ';

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



function ImageSlider({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      src: "/images/CreatureCube.png",
      name: "Creatures Cube",
      rank: "01",
      description:
        "Dedicated to supporting the Bitcoin network by processing transactions in real time.",
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
      src: "/images/Terrain.png",
      name: "Terrin Crypto Solutions",
      rank: "03",
      description:
        "Comprehensive support for users at all levels, from beginners to advanced, covering privacy, security, and advanced blockchain applications.",
      link: "https://www.terrapincrypto.us/",
    },
    {
      src: "/images/BlackWeb.png",
      name: "BlackW3B Crypto Solutions",
      rank: "04",
      description:
        " Custom blockchain applications, token development, and other tailored solutions.",
      link: "https://blackw3b.io/",
    },
    {
      src: "/images/Created3Grow.png",
      name: "BlackW3B Crypto Solutions",
      rank: "05",
      description:
        " Custom blockchain applications, token development, and other tailored solutions.",
      link: "https://www.created2grow.com/",
    },
    {
      src: "/images/TSGO.png",
      name: "BlackW3B Crypto Solutions",
      rank: "06",
      description:
        " Custom blockchain applications, token development, and other tailored solutions.",
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
