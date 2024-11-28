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
  scrollToSection?: (sectionId: string) => void;
  refSection1?: RefObject<HTMLDivElement>;
  refSection2?: RefObject<HTMLDivElement>;
  refSection3?: RefObject<HTMLDivElement>;
  refSection4?: RefObject<HTMLDivElement>;
  textColor?: boolean;
}

export default function Navigation({
  scrollToSection,
  refSection1,
  refSection2,
  refSection3,
  refSection4,
  textColor,
}: NavigationProps) {
  const [showBG, setShowBG] = useState<boolean>(false);

  const showNavBG = () => {
    setShowBG(!showBG);
  };

  const mobileNavBtn = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    }

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showDropdown, setShowDropdown] = useState<boolean>(false); // State to manage dropdown visibility

  return (
    <div className={`
      fixed top-[25px] left-1/2 transform -translate-x-1/2 z-50 w-full
      ${isVisible ? 'max-w-[93%]' : 'max-w-[80%]'}
      transition-all duration-300 ease-in-out
    `}>
      <div className="flex items-center justify-between px-8 h-[48px] py-4 w-full border border-[#F0F0F0] rounded-[10px] bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <h3 className="text-xl font-semibold">OnCode</h3>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="nav-link hover:text-gray-300 cursor-pointer">Home</div>
          <div className="nav-link hover:text-gray-300 cursor-pointer">Ecosytem</div>
          <div className="nav-link hover:text-gray-300 cursor-pointer">About us</div>
          <div className="nav-link hover:text-gray-300 cursor-pointer">Case Studies</div>
        </div>

        {/* Connect Wallet Button */}
        <div className="hidden md:block">
          <ConnectButton
            client={client}
            wallets={wallets}
            appMetadata={{
              name: "Black Web3",
              url: "https://example.com",
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => showNavBG()} className="mobile-nav-container">
            <svg
              className={`${showBG ? "nav-svg" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showBG && (
          <div className="absolute top-16 left-0 right-0 bg-white p-4 md:hidden">
            {/* ... existing mobile menu content ... */}
          </div>
        )}
      </div>
    </div>
  );
}
