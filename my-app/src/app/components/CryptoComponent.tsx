"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";
import React, { RefObject } from "react";
import Image from "next/image";

import ImageOne from "../../../public/HomeAssets/Bitcoin_ONe.png";
import ImageTwo from "../../../public/HomeAssets/AI_one.png";
import ImageThree from "../../../public/HomeAssets/AI.png";

interface CryptoComponentProps {
  refSection1: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  priceRef: RefObject<HTMLDivElement>;
}

export default function CryptoComponent({
  refSection1,
  refSection4,
  scrollToSection,
  priceRef,
}: CryptoComponentProps) {
  return (
    <>
      <section className="h-full site-wrapper bg-black ">
        <div className="site-container h-full">
          <div className="my-[88px] md:px-[2rem] px-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[5px] mb-[20px] text-white">
                <span className="text-white">what and why</span>
                <h2 className="text-white">Black W3B?</h2>
                <button
                  onClick={() => scrollToSection(priceRef)}
                  className="join-btn clear-bg"
                >
                  Book A Call
                </button>
              </div>

              <div className="text-[18px] font-thin flex flex-col gap-[5px] text-white  ">
                <p>
                  When it comes to crypto, scams may be your first thought. But
                  that's not the whole story. Crypto is the solution to
                  inflation, a way to invest and access your money instantly.
                  It's the future universal currency. Banks can't give you
                  massive returns in 24 hours, but we can. Don't miss out on
                  being on the right side of history. Let us help you navigate
                  the world of crypto and web3 for a brighter financial future.
                </p>
                <br />
                <p>
                  Access and activate the full potential of a decentralized
                  financial future with the
                  <span className="text-[#6042F3]">"BlackW3B"</span>- your
                  ultimate destination for expert-led education in blockchain,
                  crypto, AI, and web3 technologies, empowering you to thrive in
                  the
                  <span className="text-[#6042F3]"> top 0.1% of people </span>
                  in this newly emerging and innovative financial digital
                  revolution.
                </p>
              </div>

              <div className="flex lg:flex-row flex-col justify-between gap-[20px] mt-[100px]">
                <div className="flex flex-col gap-[10px] image-wrapper">
                  <Link
                    href="https://critty-combo.medium.com/exploring-web3-the-future-of-the-internet-9be05c8d73eb"
                    className="image-container"
                    target="_blank"
                  >
                    <Image
                      alt="Image Banner"
                      src={ImageOne}
                      height={300} // Adjust the height based on container size
                      width={300} // Adjust the width based on container size
                      layout="responsive"
                      objectFit="cover" // Ensures the image covers the container without distortion
                      quality={100}
                    />
                  </Link>

                  <div className="h-[80px]">
                    <h3 className="text-white">Exploring Web3</h3>
                  </div>

                  <p>
                    Web3, or Web 3.0, represents the next evolution of the
                    Internet.
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] justify-between   image-wrapper">
                  <Link
                    href="https://medium.com/investbegin/exploring-solana-the-blockchain-revolution-beyond-bitcoin-and-ethereum-c7ffd1979922"
                    className="image-container"
                    target="_blank"
                  >
                    {" "}
                    <Image
                      alt="Image Banner"
                      src={ImageTwo}
                      height={300} // Adjust the height based on container size
                      width={300} // Adjust the width based on container size
                      layout="responsive"
                      objectFit="cover" // Ensures the image covers the container without distortion
                      quality={100}
                    />
                  </Link>

                  <div className="h-[80px]">
                    <h3 className="text-white"> Exploring Solona</h3>
                  </div>
                  <p>
                    Behind the Rise of SOL: Understanding Solana's Growing
                    Popularity
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] justify-between  image-wrapper">
                  <Link
                    href="https://nes-tech.medium.com/2023-roundup-series-the-dawn-of-ai-and-blockchain-integration-237d2e74c57c"
                    className="image-container"
                    target="_blank"
                  >
                    {" "}
                    <Image
                      alt="Image Banner"
                      src={ImageThree}
                      height={300} // Adjust the height based on container size
                      width={300} // Adjust the width based on container size
                      layout="responsive"
                      objectFit="cover" // Ensures the image covers the container without distortion
                      quality={100}
                    />
                  </Link>

                  <div className="h-[80px]">
                    <h3 className="text-white">
                      The Dawn of AI and Blockchain
                    </h3>
                  </div>

                  <p>
                    Crypto markets lack a clear anchor and are susceptible to
                    continued position adjustments based on traditional finance
                    markets, one analyst said.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full site-wrapper bg-black">
        <div className="site-container h-full">
          <div className="my-[88px] md:px-[2rem] px-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col items-center gap-[5px] mb-[20px]">
                <span>what and why</span>
                <h2 ref={refSection4}>Blockchain</h2>
                <p className="text-[14px] text-[#b4b4b4] text-center ">
                  watch video
                </p>
              </div>
              <div className="video-container relative">
                {/* <div className="overlayDark absolute"></div> */}
                <Video
                  src="https://www.blackw3b.io/Bitcoin_Vid.mp4"
                  type="video/mp4"
                  width="100%"
                  height="100vh"
                  controls={true}
                  autoPlay={false}
                  loop={true}
                  muted={false}
                  className="relative"
                />
              </div>

              <div
                ref={refSection1}
                className="max-w-[500px] m-auto text-center mt-[20px] items-center text-[14px] flex flex-col gap-[20px]"
              >
                <p className="text-[14px] text-[#b4b4b4]">
                  Blockchain is a digital ledger technology that securely
                  records transactions across a network of computers. Each
                  transaction is added to a chain of blocks, creating an
                  unchangeable and transparent record.
                </p>

                <button
                  onClick={() => scrollToSection(priceRef)}
                  className="join-btn clear-bg"
                >
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full site-wrapper bg-black">
        <div className="site-container h-full">
          <div className="my-[88px] px-[2rem] flex flex-col gap-[25px]">
            <div className="flex md:flex-row lg:gap-[75px] flex-col-reverse gap-[10px]">
              <div className="text-container relative overflow-hidden">
                <div className="absolute">
                  <pre className="opacity-[20%]">
                    <code>
                      {`
              ___
              |_|_|
              |_|_|              _____
              |_|_|     ____    |*_*_*|
         _______   _\\__\\___/ __ \\____|_|_   _______
        / ____  |=|      \\  <_+>  /      |=|  ____ \\
        ~|    |\\|=|======\\\\______//======|=|/|    |~
         |_   |    \\      |      |      /    |    |
          \\==-|     \\     |  2D  |     /     |----|~~/
          |   |      |    |      |    |      |____/~/
          |   |       \\____\\____/____/      /    / /
          |   |         {----------}       /____/ /
          |___|        /~~~~~~~~~~~~\\     |_/~|_|/
           \\_/        |/~~~~~||~~~~~\\|     /__|\\
           | |         |    ||||    |     (/|| \\)
           | |        /     |  |     \\       \\\\
           |_|        |     |  |     |
                      |_____|  |_____|
                      (_____)  (_____)
                      |     |  |     |
                      |     |  |     |
                      |/~~~\\|  |/~~~\\|
                      /|___|\\  /|___|\\
                     <_______><_______>
          `}
                    </code>
                  </pre>
                </div>

                <h4 className="text-[28px] text-white">Understanding Crypto</h4>

                <div className="flex-col flex gap-[25px]">
                  <div className="flex flex-col gap-[5px] mt-[20px]">
                    <span className="text-[20px] text-[#6042F3]">
                      What you learn
                    </span>
                    <p className="text-[14px] text-[#b4b4b4] ">
                      {" "}
                      You will gain a comprehensive overview of blockchain,
                      cryptocurrency, and decentralized finance (DeFi). You'll
                      understand how blockchain technology creates secure,
                      transparent records, how cryptocurrencies function as
                      digital money, and how DeFi is revolutionizing financial
                      services by providing open access to everyone.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[20px] text-[#6042F3]">
                      Why you must
                    </span>
                    <p className="text-[14px] text-[#b4b4b4] ">
                      {" "}
                      Understanding these technologies is crucial for staying
                      ahead in the digital age. For minority communities, this
                      knowledge empowers you to access new financial
                      opportunities, ensure your data privacy, and participate
                      in a global economy that's increasingly decentralized and
                      inclusive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[5px] text-div text-center md:text-left">
                <h2 className="text-white">
                  Future is here, is in your sight to take control of it.
                </h2>
                <p className="text-[14px] text-[#b4b4b4] ">
                  Staying ahead of financial trends is key to protecting your
                  future. By understanding and leveraging blockchain and
                  cryptocurrency, you’ll position yourself to take advantage of
                  emerging opportunities, safeguard your wealth, and be part of
                  a financial system that’s designed to be more equitable and
                  inclusive for all.
                </p>

                <button

                onClick={() => scrollToSection(priceRef)}

                className="mt-[20px] text-[#6042F3] text-left">
                  Book A Call
                </button>
              </div>
            </div>

            <div className="text-container relative overflow-hidden  !pb-[4rem] !w-full  !max-w-full">
              <div className="absolute right-0">
                <pre className="opacity-[20%] ">
                  <code>
                    {`
              ___
              |_|_|
              |_|_|              _____
              |_|_|     ____    |*_*_*|
         _______   _\\__\\___/ __ \\____|_|_   _______
        / ____  |=|      \\  <_+>  /      |=|  ____ \\
        ~|    |\\|=|======\\\\______//======|=|/|    |~
         |_   |    \\      |      |      /    |    |
          \\==-|     \\     |  2D  |     /     |----|~~/
          |   |      |    |      |    |      |____/~/
          |   |       \\____\\____/____/      /    / /
          |   |         {----------}       /____/ /
          |___|        /~~~~~~~~~~~~\\     |_/~|_|/
           \\_/        |/~~~~~||~~~~~\\|     /__|\\
           | |         |    ||||    |     (/|| \\)
           | |        /     |  |     \\       \\\\
           |_|        |     |  |     |
                      |_____|  |_____|
                      (_____)  (_____)
                      |     |  |     |
                      |     |  |     |
                      |/~~~\\|  |/~~~\\|
                      /|___|\\  /|___|\\
                     <_______><_______>
          `}
                  </code>
                </pre>
              </div>

              <h4 className="text-[28px]">Blockchain to build yourself.</h4>

              <div className="flex-col flex gap-[25px]">
                <div className="flex flex-col gap-[5px] mt-[20px]">
                  <span className="text-[20px] text-[#6042F3]">
                    Protecting your future
                  </span>
                  <p className="text-[14px] text-[#b4b4b4] ">
                    {" "}
                    Empower yourself with a technology that safeguards your
                    tomorrow. Blockchain is a secure digital ledger that records
                    every transaction transparently and immutably, ensuring your
                    data and assets are protected for the long haul."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
