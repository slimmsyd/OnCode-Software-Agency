import { useState, useEffect } from 'react';

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
  avatar?: string;
}

export interface BusinessRating {
  rating: number;
  totalReviews: number;
}

const MOCK_REVIEWS: Review[] = [
  {
    name: "Robert Dunn",
    rating: 5,
    text: "Oncode and Sydney have been great to work with. Sydney knows his business and is a master at keeping projects on track. We've hit every milestone early or on time. He is flexible with his communication and patient when priorities change.",
    date: "just now",
    avatar: "R"
  },
  {
    name: "Preeminent Professional",
    rating: 5,
    text: "Before working with Sydney, we had no online presence and were losing opportunities. In under a week, he built us a professional site, set up our Google Business profile, added automation for client communication, and even integrated a 24/7 chatbot. It has already started saving us time and improving how clients engage with us. If you need to get your business visible and running smarter, OnCode is the partner to call.",
    date: "3 months ago",
    avatar: "P"
  },
  {
    name: "BARCODE DAO",
    rating: 5,
    text: "We are extremely pleased with the team at OSA. Sydney provided excellent communication throughout the process and successfully delivered a clean, user-friendly site for our community.",
    date: "3 weeks ago",
    avatar: "B"
  },
  {
    name: "the Hueman",
    rating: 5,
    text: "Great experience working with OnCode. They understood our vision perfectly and delivered a high-quality product that exceeded our expectations. Professional, responsive, and highly skilled agency.",
    date: "18 hours ago",
    avatar: "H"
  }
];

export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [businessRating, setBusinessRating] = useState<BusinessRating>({ rating: 5, totalReviews: 5 });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/google-reviews');
      
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }

      const data = await response.json();
      
      // Only update if we actually got reviews back
      if (data.reviews && data.reviews.length > 0) {
        setReviews(data.reviews);
        setBusinessRating(data.businessRating);
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load reviews");
      // Fallback to mock data on error
      setBusinessRating({ rating: 5, totalReviews: 2 });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    businessRating,
    isLoading,
    error,
    refetch: fetchReviews
  };
};
