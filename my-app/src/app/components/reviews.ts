export const GOOGLE_REVIEWS_URL =
  "https://g.page/r/CfQLL4gVCguBEAE/review";

export interface Review {
  name: string;
  username: string;
  body: string;
  /** Optional profile / business URL — linked on the reviewer name for SEO & entity signals */
  url?: string;
}

export const reviews: Review[] = [
  {
    name: "PhaseWorks Engineering",
    username: "Verified Google Review",
    body: "Such a pleasure working with Oncode. Fast responses. Quality deliverables. Extremely easy to work with. 100% will use again!",
    url: "https://phaseworksengineering.com",
  },
  {
    name: "Robert Dunn",
    username: "Verified Google Review",
    body: "Oncode and Sydney have been great to work with. Sydney knows his business and is a master at keeping projects on track. We've hit every milestone early or on time. He is flexible with his communication and patient when priorities change.",
  },
  {
    name: "SE HQ",
    username: "Verified Google Review",
    body: "Syd exceeds expectations and always makes a transformational impact when we work together. He always takes us to the next level. Excited to work with him every single time.",
  },
  {
    name: "Cameren Downs",
    username: "Verified Google Review",
    body: "Great guy to work with, communicates well, get the work done fast and always on time. Never have issues when working with him and his work is good!",
  },
  {
    name: "Abdoulaye Gassama",
    username: "Verified Google Review",
    body: "Love this brothers professionalism and his knowledge on what he actually does. He was extremely effective in our project and looking forward to building another website with him!",
  },
  {
    name: "Preeminent Professional",
    username: "Verified Google Review",
    body: "Before working with Sydney, we had no online presence and were losing opportunities. In under a week, he built us a professional site, set up our Google Business profile, added automation for client communication, and even integrated a 24/7 chatbot. It has already started saving us time and improving how clients engage with us. If you need to get your business visible and running smarter, OnCode is the partner to call.",
  },
  {
    name: "BARCODE DAO",
    username: "Verified Google Review",
    body: "We are extremely pleased with the team at OSA. Sydney provided excellent communication throughout the process and successfully delivered a clean, user-friendly site for our community.",
  },
  {
    name: "Obsidian",
    username: "Verified Google Review",
    body: "Syd Sanders is an exceptional engineer and one of the strongest partners I've ever worked with. As the founder of Obsidian, I bring the vision and Syd turns that vision into real, scalable systems. His precision, speed, and technical mastery have accelerated our entire ecosystem. If you're building anything ambitious or innovative, Syd is the engineer you want. Highly recommended.",
  },
  {
    name: "the Hueman",
    username: "Verified Google Review",
    body: "Syd is a professional and delivers in a timely manner. I've worked with him for years and only trust him when it comes to deliverables for high end clientele.",
  },
  {
    name: "Yaadin Franklin",
    username: "Verified Google Review",
    body: "Syd did an excellent job! Curated my website very well, and the conversation didn't take long for the vision to manifest. Job well done.",
  },
  {
    name: "Stacey Rogers",
    username: "Verified Google Review",
    body: "Sydney, does phenomenal work and pays close attention to every aspect of customer satisfaction. He is an excellent choice for building your domain and growing your online presence. If you want the best, forget the rest and contact Oncode Software. You will not be disappointed, and you will never regret investing in your business with their team. Oncode Software is among the best in the industry.",
  },
];

const reviewSplitIndex = Math.ceil(reviews.length / 2);
export const reviewRows = [
  reviews.slice(0, reviewSplitIndex),
  reviews.slice(reviewSplitIndex),
] as const;
