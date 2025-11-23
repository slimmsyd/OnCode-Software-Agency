import { NextResponse } from 'next/server';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
export async function GET() {
  try {
    // 1. Search for the Place ID
    const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=OnCode%20Software%20Agency&inputtype=textquery&fields=place_id&key=${GOOGLE_API_KEY}`;
    
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    console.log("Loggin search", searchUrl)
    console.log("Loggin search data", searchData)

    if (!searchData.candidates || searchData.candidates.length === 0) {
      return NextResponse.json({ error: 'Place not found' }, { status: 404 });
    }

    const placeId = searchData.candidates[0].place_id;

    // 2. Get Place Details (Reviews)
    // Fields: name, rating, reviews, user_ratings_total
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_API_KEY}`;

    console.log("Loggin details", detailsUrl)
    
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    if (!detailsData.result) {
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
