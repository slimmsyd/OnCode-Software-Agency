import { NextResponse } from 'next/server';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!GOOGLE_PLACE_ID || !GOOGLE_API_KEY) {
      return NextResponse.json({ error: 'Missing API Key or Place ID' }, { status: 500 });
    }

    // Direct fetch using the verified Place ID
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_API_KEY}`;
    
    const detailsRes = await fetch(detailsUrl, { cache: 'no-store' });
    const detailsData = await detailsRes.json();

    if (!detailsData.result) {
      console.error("Google Details API Error:", detailsData.status, detailsData.error_message);
      return NextResponse.json({ error: 'Failed to fetch details' }, { status: 500 });
    }

    const result = detailsData.result;

    // Transform data to match our frontend interface
    const reviews = result.reviews?.map((review: any) => ({
      name: review.author_name,
      rating: review.rating,
      text: review.text,
      date: review.relative_time_description,
      profilePhoto: review.profile_photo_url,
      avatar: review.author_name.charAt(0)
    })) || [];

    const businessRating = {
      rating: result.rating || 0,
      totalReviews: result.user_ratings_total || 0
    };

    return NextResponse.json({ reviews, businessRating });

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

