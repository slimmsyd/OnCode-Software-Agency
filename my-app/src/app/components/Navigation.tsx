"use client";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import {
  ConnectButton,
  useAutoConnect,
  useActiveAccount,
  useActiveWallet,
  useIsAutoConnecting,
  useWalletBalance,
} from "thirdweb/react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { client } from "../helper/client";
// import "@rainbow-me/rainbowkit/styles.css";

import { createWallet, inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
  refSection1: RefObject<HTMLDivElement>;
  refSection2: RefObject<HTMLDivElement>;
  refSection3: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
}

export default function Navigation({
  scrollToSection,
  refSection1,
  refSection2,
  refSection3,
  refSection4,
}: NavigationProps) {
  const [showBG, setShowBG] = useState<boolean>(false);

  const showNavBG = () => {
    setShowBG(!showBG);
  };

  const mobileNavBtn = (id: string) => {
    scrollToSection(id);

    setShowBG(!showBG);
  };

  useEffect(() => {
    console.log("Logging the Show BG show", showBG);
  }, [showBG]);

  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [connectedAddress, setConnectedAddress] = useState<string>("");

  const { data: autoConnected, isLoading } = useAutoConnect({
    client,
    wallets,
  });
  //check if user is connected our not

  const activeAccount = useActiveAccount();

  useEffect(() => {
    console.log("address", activeAccount?.address);
    setConnectedAddress(activeAccount?.address as string);
    console.log("Logging the connected addres before", connectedAddress);
  }, [connectedAddress]);

  useEffect(() => {
    console.log("IS wallet connect true or false", isWalletConnected);

    if (connectedAddress) {
      console.log("Logging the connected adddress address", connectedAddress);
      setIsWalletConnected(true);
    }
  }, [connectedAddress]);

  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Nav is in view, hide the button
        } else {
          setIsVisible(true); // Nav is out of view, show the button
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the nav is in view
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);


  return (
    <div className="flex flex-row nav-container  items-center" ref={navRef} >
      <h3>
      ONCODE
      </h3>
      <div className="flex flex-row w-full nav-wrapper text-white">
        <div onClick={() => scrollToSection("home")} className="nav-block  text-white">
       HOME
        </div>
        <div onClick={() => scrollToSection("home")} className="nav-block  text-white">
        ECOSYSTEM
        </div>
        <div onClick={() => scrollToSection("why")} className="nav-block  text-white">
        WHY US
        </div>
        <div onClick={() => scrollToSection("about")} className="nav-block  text-white">
        About us
        </div>
      
      </div>

      <div
        className={`p-[10px] lg:block hidden
        `}
      >
        <ConnectButton
          client={client}
          wallets={wallets}
          appMetadata={{
            name: "Black Web3",
            url: "https://example.com",
          }}
        />
      </div>

      <div
        className={`p-[10px] fixed transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ConnectButton
          client={client}
          wallets={wallets}
          appMetadata={{
            name: "Black Web3",
            url: "https://example.com",
          }}
        />
      </div>

      <div className="mobile-nav-wrapper flex flex-row gap-[15px] px-[1rem] items-center">
        {/* <button className = " w-full">Connect Wallet</button> */}
        <button onClick={() => showNavBG()} className="mobile-nav-container">
          <svg
            className={`${showBG ? "nav-svg" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`mobile-nav-div flex flex-col gap-[10px] ${
          showBG ? "show" : ""
        } text-black`}
      >
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Black Web3",
            url: "https://example.com",
          }}
        />

        {/* <button className="mobile-btn">Connect wallet</button> */}

        <span className="div-border-bottom"></span>

        <div className="flex flex-col gap-[5px] mt-[10px] ">
          <div className="flex flex-row gap-[10px] items-center ">
            <div
              onClick={() => mobileNavBtn("home")}
              className="text-[20px] cursor-pointer"
            >
HOME            </div>
            <div className="svg-div">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="fillCurrent"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8.9101 21.17C8.7201 21.17 8.5301 21.1 8.3801 20.95C8.0901 20.66 8.0901 20.18 8.3801 19.89L14.9001 13.37C15.3801 12.89 15.3801 12.11 14.9001 11.63L8.3801 5.11002C8.0901 4.82002 8.0901 4.34002 8.3801 4.05002C8.6701 3.76002 9.1501 3.76002 9.4401 4.05002L15.9601 10.57C16.4701 11.08 16.7601 11.77 16.7601 12.5C16.7601 13.23 16.4801 13.92 15.9601 14.43L9.4401 20.95C9.2901 21.09 9.1001 21.17 8.9101 21.17Z"></path>
              </svg>
            </div>
          </div>

          <p className="text-[14px] text-[#2b2b2b78]">
            {" "}
            AI, Defi, Blockhain Crypto....{" "}
          </p>
        </div>

        <div className="flex flex-col gap-[5px] ">
          <div className="flex flex-row gap-[10px] items-center ">
            <div
              className="text-[20px] cursor-pointer"
              onClick={() => mobileNavBtn("home")}
            >
              ECOYSTEM
            </div>
            <div className="svg-div">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="fillCurrent"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8.9101 21.17C8.7201 21.17 8.5301 21.1 8.3801 20.95C8.0901 20.66 8.0901 20.18 8.3801 19.89L14.9001 13.37C15.3801 12.89 15.3801 12.11 14.9001 11.63L8.3801 5.11002C8.0901 4.82002 8.0901 4.34002 8.3801 4.05002C8.6701 3.76002 9.1501 3.76002 9.4401 4.05002L15.9601 10.57C16.4701 11.08 16.7601 11.77 16.7601 12.5C16.7601 13.23 16.4801 13.92 15.9601 14.43L9.4401 20.95C9.2901 21.09 9.1001 21.17 8.9101 21.17Z"></path>
              </svg>
            </div>
          </div>

          <p className="text-[14px] text-[#2b2b2b78]">
            {" "}
            Decentralized Finance revolutionizes the...{" "}
          </p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <div className="flex flex-row gap-[10px] items-center ">
            <div
              className="text-[20px] cursor-pointer"
              onClick={() => mobileNavBtn("why")}
            >
              Why us
            </div>
            <div className="svg-div">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="fillCurrent"
                aria-hidden="true"
              >
                <path d="M8.9101 21.17C8.7201 21.17 8.5301 21.1 8.3801 20.95C8.0901 20.66 8.0901 20.18 8.3801 19.89L14.9001 13.37C15.3801 12.89 15.3801 12.11 14.9001 11.63L8.3801 5.11002C8.0901 4.82002 8.0901 4.34002 8.3801 4.05002C8.6701 3.76002 9.1501 3.76002 9.4401 4.05002L15.9601 10.57C16.4701 11.08 16.7601 11.77 16.7601 12.5C16.7601 13.23 16.4801 13.92 15.9601 14.43L9.4401 20.95C9.2901 21.09 9.1001 21.17 8.9101 21.17Z"></path>
              </svg>
            </div>
          </div>

          <p className="text-[14px] text-[#2b2b2b78]">
            Digital or virtual form of money that...
          </p>
        </div>

     
      </div>
    </div>
  );
}
