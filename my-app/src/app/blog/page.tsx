'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog?published=true');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Function to extract a reading time estimate
  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Function to get a category tag from content (simplified)
  const getCategoryTag = (content: string) => {
    if (content.toLowerCase().includes('ai')) return 'AI';
    if (content.toLowerCase().includes('business')) return 'Business';
    if (content.toLowerCase().includes('tech')) return 'Technology';
    if (content.toLowerCase().includes('marketing')) return 'Marketing';
    return 'General';
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-pulse space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="h-7 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-6">
          {error}
        </div>
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {posts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">No blog posts found</h2>
          <p className="text-gray-600 mb-8">Check back soon for new content!</p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => {
            const category = getCategoryTag(post.content);
            const readingTime = getReadingTime(post.content);
            
            return (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      category === 'AI' ? 'bg-purple-100 text-purple-800' :
                      category === 'Business' ? 'bg-blue-100 text-blue-800' :
                      category === 'Technology' ? 'bg-green-100 text-green-800' :
                      category === 'Marketing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {category}
                    </span>
                    <span className="text-xs text-gray-500 ml-3">{readingTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  {post.publishedAt && (
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                  
                  {post.excerpt && (
                    <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
} 