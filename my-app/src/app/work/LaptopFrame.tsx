import Image from "next/image";

interface LaptopFrameProps {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}

export default function LaptopFrame({
  src,
  alt,
  fit = "cover",
}: LaptopFrameProps) {
  return (
    <figure className="m-0 transition-transform duration-200 ease-out motion-reduce:transition-none group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
      <div className="bg-[#1c1c1c] p-3.5 pb-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_18px_40px_rgba(0,0,0,0.12)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#f3f4f6]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 800px) 100vw, 540px"
            className={
              fit === "contain"
                ? "object-contain object-center p-3"
                : "object-cover object-top"
            }
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative mx-[9%] h-3.5 bg-gradient-to-b from-[#ececec] to-[#cfcfcf] shadow-[0_16px_28px_rgba(0,0,0,0.08)]"
      >
        <span className="absolute left-1/2 top-0 h-[5px] w-[22%] -translate-x-1/2 bg-[#d8d8d8]" />
      </div>
    </figure>
  );
}
