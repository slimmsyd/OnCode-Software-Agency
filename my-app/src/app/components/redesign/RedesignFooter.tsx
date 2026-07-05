"use client";

import Image from "next/image";

export default function RedesignFooter() {
  return (
    <footer
      data-screen-label="Footer"
      className="mx-auto w-full max-w-[500px] border-t border-black/5 px-4 pb-20 pt-12 text-black"
    >
      <Image
        src="/redesign/oncode-wordmark.png"
        alt="OnCode"
        width={786}
        height={236}
        className="h-8 w-auto object-contain"
      />
      <div className="mt-8 flex flex-col gap-6">
        <p className="text-[18px] text-black">
          Custom software and AI consultation: diagnosed first, built right,
          managed after.
        </p>
        <p className="text-[14px] text-[#767676]">
          © 2026 Oncode, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
