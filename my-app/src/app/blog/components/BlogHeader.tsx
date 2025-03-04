'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function BlogHeader() {
  const pathname = usePathname();
  const [postTitle, setPostTitle] = useState<string | null>(null);
  
  const isHomePage = pathname === '/blog';
  
  // Fetch the post title if we're on a single post page
  useEffect(() => {
    if (!isHomePage && pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      
      async function fetchPostTitle() {
        try {
          const response = await fetch(`/api/blog?slug=${slug}`);
          if (response.ok) {
            const post = await response.json();
            setPostTitle(post.title);
          }
        } catch (error) {
          console.error('Error fetching post title:', error);
        }
      }
      
      fetchPostTitle();
    }
  }, [pathname, isHomePage]);
  
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
               backgroundSize: '30px 30px'
             }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="flex items-center mb-4">
          <Link 
            href="/"
            className="text-blue-100 hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="text-blue-300 mx-2">•</span>
          <Link 
            href="/blog"
            className={`${isHomePage ? 'text-white font-medium' : 'text-blue-100 hover:text-white transition-colors'}`}
          >
            Blog
          </Link>
          
          {!isHomePage && postTitle && (
            <>
              <span className="text-blue-300 mx-2">•</span>
              <span className="text-white font-medium truncate max-w-xs">{postTitle}</span>
            </>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          {isHomePage ? 'Our Blog' : postTitle || 'Blog Post'}
        </h1>
        
        {isHomePage && (
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Insights, updates, and stories from the OnCode team. Discover the latest in technology, business, and innovation.
          </p>
        )}
        
        {isHomePage && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link 
              href="/blog?category=ai"
              className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full text-sm font-medium transition-colors"
            >
              AI
            </Link>
            <Link 
              href="/blog?category=business"
              className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full text-sm font-medium transition-colors"
            >
              Business
            </Link>
            <Link 
              href="/blog?category=technology"
              className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full text-sm font-medium transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="/blog?category=marketing"
              className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full text-sm font-medium transition-colors"
            >
              Marketing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 