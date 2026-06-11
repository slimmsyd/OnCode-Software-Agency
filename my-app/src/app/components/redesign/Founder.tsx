"use client";

import Image from "next/image";

export default function Founder() {
  return (
    <section
      id="founder"
      data-screen-label="Founder"
      className="relative mx-auto w-full max-w-[500px] px-4 py-16 text-black"
    >
      <h2 className="section-heading mb-8">Meet The Founder</h2>

      <div className="flex flex-col gap-6">
        <p className="text-[18px] font-medium leading-[1.5] text-black">
          Transform your business with purpose-built software.
        </p>
        <p className="text-[18px] font-light leading-[1.55] text-black">
          Greetings, I&apos;m Sydney. With years of experience leading
          engineering teams and building systems for everything from wellness
          centers to government contractors, I&apos;ve seen what separates
          successful software from expensive failures.
        </p>
        <p className="text-[18px] font-light leading-[1.55] text-black">
          I&apos;ve built automation systems that saved businesses thousands of
          hours, MVPs that solved real problems for their users, and AI tools
          that transformed entire workflows.
        </p>
        <p className="text-[18px] leading-[1.55] text-black">
          <strong className="font-medium">
            At OnCode, our mission is simple:
          </strong>{" "}
          turn your biggest operational challenges into automated advantages.
          Whether you&apos;re launching your first product or scaling your
          tenth, we build the exact systems you need.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Image
          src="/redesign/people/sydney-sanders.jpeg"
          alt="Sydney Sanders, Founder of OnCode"
          width={360}
          height={360}
          className="h-auto w-full max-w-[360px] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
        />
      </div>
    </section>
  );
}
