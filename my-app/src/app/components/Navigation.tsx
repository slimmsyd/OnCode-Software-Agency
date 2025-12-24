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
import { useRouter, usePathname } from "next/navigation";
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
  customLinks?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export default function Navigation({
  scrollToSection,
  refSection1,
  refSection2,
  refSection3,
  refSection4,
  textColor,
  customLinks,
}: NavigationProps) {
  const [showBG, setShowBG] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const showNavBG = () => {
    setShowBG(!showBG);
  };

  // Smart navigation handler
  const handleNavigation = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      // Navigate to home with section hash
      router.push(`/#${sectionId}`);
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on home page, just scroll to section
      if (scrollToSection) {
        scrollToSection(sectionId);
      }
    }
  };

  const mobileNavBtn = (id: string) => {
    handleNavigation(id);
    setShowBG(!showBG);
  };

  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [connectedAddress, setConnectedAddress] = useState<string>("");

  const { data: autoConnected, isLoading } = useAutoConnect({
    client,
    wallets,
  });
  //check if user is connected our not

  const activeAccount = useActiveAccount();

  useEffect(() => {
    setConnectedAddress(activeAccount?.address as string);
  }, [activeAccount]);

  useEffect(() => {
    if (connectedAddress) {
      setIsWalletConnected(true);
    }
  }, [connectedAddress]);

  return (
    <div className="relative top-0 left-0 w-full z-50 bg-transparent ">
      <div className="max-w-[1400px] mx-auto px-6 h-[72px] md:h-[96px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => router.push('/')}
            className="text-xl font-medium tracking-tight cursor-pointer text-black hover:opacity-80 transition-opacity"
          >
            OnCode
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {customLinks ? (
            // Render custom links for case studies
            customLinks.map((link, index) => (
              <div
                key={index}
                onClick={link.onClick}
                className="nav-link text-gray-600 hover:text-black cursor-pointer text-[15px] font-medium transition-colors"
              >
                {link.label}
              </div>
            ))
          ) : (
            // Render default navigation
            <>
              <div
                onClick={() => handleNavigation('home')}
                className="nav-link bg-white text-black border border-black rounded-full px-6 py-2.5 cursor-pointer transition-all duration-300 text-[15px] font-medium hover:bg-gray-50"
                style={{ borderWidth: '0.5px' }}
              >
                Home
              </div>
              {/* <div
                onClick={() => handleNavigation('ecosystem')}
                className="nav-link text-gray-600 hover:text-black cursor-pointer transition-colors duration-300 text-[15px] font-medium"
              >
                Ecosystem
              </div> */}
              <div
                onClick={() => handleNavigation('about')}
                className="nav-link bg-white text-black border border-black rounded-full px-6 py-2.5 cursor-pointer transition-all duration-300 text-[15px] font-medium hover:bg-gray-50"
                style={{ borderWidth: '0.5px' }}
              >
                About Us
              </div>
              <div
                onClick={() => handleNavigation('projects')}
                className="nav-link bg-white text-black border border-black rounded-full px-6 py-2.5 cursor-pointer transition-all duration-300 text-[15px] font-medium hover:bg-gray-50"
                style={{ borderWidth: '0.5px' }}
              >
                Projects
              </div>
            </>
          )}

          {/* Connect Wallet Button */}
          <div className="connect-wallet-wrapper ml-6 pl-6 border-l border-black/10 flex items-center">
            <ConnectButton
              client={client}
              wallets={wallets}
              theme={"light"}
              connectButton={{
                label: "Connect Wallet",
                className: "!bg-black !text-white !border !border-black !rounded-full !px-6 !py-2.5 !text-[15px] !font-medium hover:!bg-black/90 transition-all !h-auto"
              }}
              appMetadata={{
                name: "OnCode",
                url: "https://oncode.com",
              }}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-30 ml-auto">
          <button
            onClick={() => showNavBG()}
            className="mobile-nav-container z-30 w-8 h-8 flex items-center justify-center text-black hover:bg-black/5 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
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
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6">
            <button
              onClick={() => setShowBG(false)}
              className="absolute top-6 right-6 text-black p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="flex flex-col space-y-6">
              {customLinks ? (
                // Render custom links for case studies in mobile menu
                customLinks.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      link.onClick();
                      setShowBG(false);
                    }}
                    className="text-2xl font-medium text-gray-600 hover:text-black cursor-pointer"
                  >
                    {link.label}
                  </div>
                ))
              ) : (
                // Render default mobile navigation
                <>
                  <div
                    className="text-2xl font-medium text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => mobileNavBtn('home')}
                  >
                    Home
                  </div>
                  <div
                    className="text-2xl font-medium text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => mobileNavBtn('about')}
                  >
                    About Us
                  </div>
                  <div
                    className="text-2xl font-medium text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => mobileNavBtn('projects')}
                  >
                    Projects
                  </div>
                </>
              )}
            </div>

            <div className="mt-auto mb-12">
              <div className="connect-wallet-wrapper">
                <ConnectButton
                  client={client}
                  wallets={wallets}
                  theme={"light"}
                  connectButton={{
                    label: "Get started",
                    className: "!bg-black !text-white !border-none !rounded-full !px-6 !py-3 !text-lg !font-medium !w-full"
                  }}
                  appMetadata={{
                    name: "OnCode",
                    url: "https://oncode.com",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
