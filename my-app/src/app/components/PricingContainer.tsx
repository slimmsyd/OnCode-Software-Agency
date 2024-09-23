"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";
import { PricingCard } from "./subComponents/PricingCard";

import React, { RefObject } from "react";

interface Props {
  priceRef: RefObject<HTMLDivElement>;
}

export default function PriceContainer({ priceRef }: Props) {



  
  return (
    <section ref={priceRef} className="h-full site-wrapper bg-black">
      <div className="site-container h-full flex flex-col gap-[35px]  pb-[100px]">
        <div className="flex flex-col items-center gap-[5px] mb-[20px] text-center">
          <h2 className="text-[40px]">Get Started On Your Crypto Evolution</h2>
          <p className="text-[14px] text-[#3E3E3E]">
            Start your crypto journey as soon as possible.
          </p>
        </div>

        <div className="flex flex-row  flex-wrap justify-center gap-[30px] w-full px-[2rem]">
          <div className="pricing-card-container flex flex-col h-full">
            <div className="mb-[15px]">
              <h4 className="text-white">Free Consultation</h4>
            </div>

            <div className="flex flex-col  gap-[10px] flex-1">
              <div className="flex flex-row items-center gap-[8px]">
                <span className="text-[28px] text-white">Free</span>

                <span className="divider-line"> /</span>

                <span className="text-[16px] text-[#b4b4b4]">15 minutes</span>
              </div>

              <p className="text-[14px] text-[#b4b4b4] ">
                Essential features of this and that
              </p>
              <span className = "text-[14px]">
                General Consultation: I can provide an overview of Blockchain
                technology, explain key concepts, and help you understand how it
                can be applied to your specific use case
              </span>
            </div>

            <Link
              href="https://calendly.com/blckw3b"
              target="_blank"
              className="price-btn cursor-pointer flex items-center justify-center"
            >
              Book A Call
            </Link>
          </div>

        <PricingCard
            pricing={"$45"}
            timing={"30"}
            pricing2={"$75"}
            timing2={"60"}
            category={"Beginner"}
            minutes={"minutes"}
            text = {"Market Analysis,Wallet Setup and Security,Investment Guidance, Project Recommendations"}
          />
          <PricingCard
            pricing={"$75"}
            timing={"45"}
            pricing2={"$120"}
            timing2={"90"}
            category={"Intermediate"}
            minutes={"minutes"}
            text = {"Market Analysis,Wallet Setup and Security,Investment Guidance, Project Recommendations, Tokenomics Consultation, DeFi Strategies, Security Audits"}

          />
          <PricingCard
            pricing={"$125"}
            timing={"45"}
            pricing2={"$175"}
            timing2={"90"}
            category={"Expert"}
            minutes={"minutes"}
            text = {"Market Analysis,Wallet Setup and Security,Investment Guidance, Project Recommendations, Tokenomics Consultation, DeFi Strategies, Security Audits, Smart Contract Audits, Blockchain Development, Tokenomics Design, Web3 Integration"}
          />
        </div>
      </div>
    </section>
  );
}
