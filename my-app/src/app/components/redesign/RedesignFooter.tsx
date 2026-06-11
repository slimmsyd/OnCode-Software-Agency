"use client";

export default function RedesignFooter() {
  return (
    <footer
      data-screen-label="Footer"
      className="mx-auto w-full max-w-[500px] border-t border-black/5 px-4 pb-20 pt-12 text-black"
    >
      <h2 className="text-[28px] font-semibold text-black">oncode</h2>
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
