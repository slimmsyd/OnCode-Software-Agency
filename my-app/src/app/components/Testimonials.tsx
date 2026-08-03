import React from "react";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import ReviewCard from "./ReviewCard";
import { GOOGLE_REVIEWS_URL, reviewRows } from "./reviews";

const [firstRow, secondRow] = reviewRows;

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto mb-20 max-w-7xl px-6 text-center md:px-12 lg:px-16">
        <h2 className="mb-6 text-4xl font-light tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Trusted by industry leaders
        </h2>
        <p className="mx-auto max-w-2xl text-xl font-light text-gray-600">
          Real results for businesses that demand excellence
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="py-4"
          style={{ "--duration": "30s", "--gap": "1.5rem" } as React.CSSProperties}
        >
          {firstRow.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              {...review}
              className="w-80 cursor-pointer"
            />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="py-4"
          style={{ "--duration": "30s", "--gap": "1.5rem" } as React.CSSProperties}
        >
          {secondRow.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}-rev`}
              {...review}
              className="w-80 cursor-pointer"
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" />
      </div>

      <div className="mt-20 text-center">
        <button
          onClick={() =>
            window.open(GOOGLE_REVIEWS_URL, "_blank", "noopener,noreferrer")
          }
          className="group relative inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black"
        >
          <span className="mr-2">Leave a real review</span>
          <Star className="h-4 w-4 transition-transform group-hover:rotate-12" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
