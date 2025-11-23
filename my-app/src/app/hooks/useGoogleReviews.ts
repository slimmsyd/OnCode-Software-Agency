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
    name: "Sarah Jenkins",
    rating: 5,
    text: "Absolutely incredible service! The team went above and beyond to ensure everything was perfect. I couldn't be happier with the results.",
    date: "2 weeks ago",
    avatar: "S"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Professional, efficient, and transparent. They explained every step of the process and delivered exactly what was promised.",
    date: "1 month ago",
    avatar: "M"
  },
  {
    name: "Jessica Williams",
    rating: 5,
    text: "Best experience I've had in a long time. The attention to detail is unmatched. Highly recommend to anyone looking for quality work.",
    date: "3 weeks ago",
    avatar: "J"
  }
];

export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [businessRating, setBusinessRating] = useState<BusinessRating>({ rating: 0, totalReviews: 0 });
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
      
      setReviews(data.reviews);
      setBusinessRating(data.businessRating);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load reviews");
      // Fallback to mock data on error
      setBusinessRating({ rating: 4.9, totalReviews: 128 });
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
