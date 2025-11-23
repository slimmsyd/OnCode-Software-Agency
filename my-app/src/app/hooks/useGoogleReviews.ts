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
