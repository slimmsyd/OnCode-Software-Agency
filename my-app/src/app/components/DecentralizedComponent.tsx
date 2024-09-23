"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";

import React, { RefObject } from "react";

interface Props {
  refSection2: RefObject<HTMLDivElement>;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  priceRef: RefObject<HTMLDivElement>;

}

export default function DecentralizedComponent({ refSection2,
  scrollToSection,
  priceRef

 }: Props) {
  return (
    <section
      ref={refSection2}
      className="h-full site-wrapper bg-white text-black overflow-hidden "
    >
      <div className="site-container h-full">
        <div className="my-[120px] px-[2rem] max-w-[750px] m-auto">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col items-center gap-[5px] mb-[20px] text-center">
              <span>what and why</span>
              <h2>Decentralized Finance </h2>
              <p className="text-[14px] text-[#b4b4b4] text-center ">
                Decentralized Finance (DeFi) is more than just digital
                currency—it's a revolutionary system that puts financial control
                back in your hands. Designed to be accessible and inclusive,
                DeFi bypasses traditional banking barriers, offering minority
                communities the opportunity to build wealth, access credit, and
                engage in a global economy without the need for intermediaries.
                With cryptocurrencies like Bitcoin and Ethereum, DeFi empowers
                you to take charge of your financial future, fostering economic
                equity and innovation."
              </p>
            </div>

            <div className="video-container relative">
              {/* <div className="overlayDark absolute"></div> */}
              <Video
                src="https://www.blackw3b.io/Defi_Video.mp4"
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

            <button
            onClick={ () => scrollToSection(priceRef)}
            className="large-btn">Book A Call</button>
          </div>
        </div>

        <div className="my-[120px] px-[2rem] max-w-[750px] m-auto">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col items-center gap-[5px] mb-[20px] text-center">
              <span>what and why</span>
              <h2>Artificial Intelligence In Blockchain </h2>
              <p className="text-[14px] text-[#b4b4b4] text-center ">
                Start your crypto journey as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
