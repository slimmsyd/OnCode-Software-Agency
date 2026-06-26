export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

export const reviews: Review[] = [
  {
    name: "SE HQ",
    username: "Verified Google Review",
    body: "Syd exceeds expectations and always makes a transformational impact when we work together. He always takes us to the next level. Excited to work with him every single time.",
    img: "https://avatar.vercel.sh/sehq",
  },
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
    body: "Syd is a professional and delivers in a timely manner. I've worked with him for years and only trust him when it comes to deliverables for high end clientele.",
    img: "https://avatar.vercel.sh/hueman",
  },
  {
    name: "Black W3B",
    username: "Verified Google Review",
    body: "Syd Sanders is an exceptional engineer and one of the strongest partners I've ever worked with. As the founder of Black W3B, I bring the vision and Syd turns that vision into real, scalable systems. His precision, speed, and technical mastery have accelerated our entire ecosystem. If you're building anything ambitious or innovative, Syd is the engineer you want. Highly recommended.",
    img: "https://avatar.vercel.sh/blackw3b",
  },
];

/** Featured in the hero proof band — single source of truth with Testimonials. */
export const HERO_PROOF_REVIEW_NAMES = [
  "Preeminent Professional",
  "Black W3B",
  "SE HQ",
] as const;

export function getHeroProofReviews(): Review[] {
  return HERO_PROOF_REVIEW_NAMES.map(
    (name) => reviews.find((r) => r.name === name)!
  );
}