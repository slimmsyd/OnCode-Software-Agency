import React from "react";
import { Star, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
    {
        name: "Cameren Downs",
        username: "Verified Google Review",
        body: "Great guy to work with, communicates well, get the work done fast and always on time. Never have issues when working with him and his work is good!",
        img: "https://avatar.vercel.sh/cameren",
    },
    {
        name: "Abdoulaye Gassama",
        username: "Verified Google Review",
        body: "Love this brothers professionalism and his knowledge on what he actually does. He was extremely effective in our project and looking forward to building another website with him!",
        img: "https://avatar.vercel.sh/abdoulaye",
    },
    {
        name: "Preeminent Professional",
        username: "Verified Google Review",
        body: "Before working with Sydney, we had no online presence and were losing opportunities. In under a week, he built us a professional site, set up our Google Business profile, added automation for client communication, and even integrated a 24/7 chatbot. It has already started saving us time and improving how clients engage with us. If you need to get your business visible and running smarter, OnCode is the partner to call.",
        img: "https://avatar.vercel.sh/pp",
    },
    {
        name: "BARCODE DAO",
        username: "Verified Google Review",
        body: "We are extremely pleased with the team at OSA. Sydney provided excellent communication throughout the process and successfully delivered a clean, user-friendly site for our community.",
        img: "https://avatar.vercel.sh/barcode",
    },
    {
        name: "the Hueman",
        username: "Verified Google Review",
        body: "Syd is a professional and delivers in a timely manner. I’ve worked with him for years and only trust him when it comes to deliverables for high end clientele.",
        img: "https://avatar.vercel.sh/hueman",
    },
    {
        name: "Black W3B",
        username: "Verified Google Review",
        body: `Syd Sanders is an exceptional engineer and one of the strongest partners I’ve ever worked with. As the founder of Black W3B, I bring the vision and Syd turns that vision into real, scalable systems. His precision, speed, and technical mastery have accelerated our entire ecosystem.

If you’re building anything ambitious or innovative, Syd is the engineer you want. Highly recommended.

Founder of Black W3B`,
        img: "https://avatar.vercel.sh/blackw3b",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-bold text-sm">
                    {name.charAt(0)}
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
                        {name}
                    </figcaption>
                    <div className="flex items-center gap-1">
                        <p className="text-[10px] font-medium text-gray-500 uppercase tracking-tight">{username}</p>
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-current" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 italic">
                "{body}"
            </blockquote>
        </figure>
    );
};

const Testimonials = () => {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                    Trusted by industry leaders
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                    Real results for businesses that demand excellence
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee
                    pauseOnHover
                    className="py-4"
                    style={{ '--duration': '30s', '--gap': '1.5rem' } as React.CSSProperties}
                >
                    {firstRow.map((review, i) => (
                        <ReviewCard key={`${review.name}-${i}`} {...review} />
                    ))}
                </Marquee>
                <Marquee
                    reverse
                    pauseOnHover
                    className="py-4"
                    style={{ '--duration': '30s', '--gap': '1.5rem' } as React.CSSProperties}
                >
                    {secondRow.map((review, i) => (
                        <ReviewCard key={`${review.name}-${i}-rev`} {...review} />
                    ))}
                </Marquee>

                {/* Gradient Overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>

            <div className="text-center mt-20">
                <button
                    onClick={() => window.open('https://www.google.com/search?q=Oncode+Software+Agency+Reviews&cid=9298536943231896564', '_blank')}
                    className="group relative inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:bg-black hover:scale-105 shadow-xl"
                >
                    <span className="mr-2">Leave a real review</span>
                    <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
