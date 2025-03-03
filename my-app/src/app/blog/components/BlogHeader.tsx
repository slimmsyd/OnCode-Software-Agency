'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlogHeader() {
  const pathname = usePathname();
  
  const isHomePage = pathname === '/blog';
  
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {isHomePage ? 'Our Blog' : 'Blog'}
        </h1>
        
        {isHomePage && (
          <p className="text-xl text-blue-100 max-w-2xl">
            Insights, updates, and stories from the OnCode team
          </p>
        )}
        
        <div className="mt-8">
          <Link 
            href="/"
            className="text-blue-100 hover:text-white mr-6"
          >
            Home
          </Link>
          <span className="text-blue-300 mx-2">•</span>
          <Link 
            href="/blog"
            className={`${isHomePage ? 'text-white font-medium' : 'text-blue-100 hover:text-white'}`}
          >
            Blog
          </Link>
          
          {!isHomePage && (
            <>
              <span className="text-blue-300 mx-2">•</span>
              <span className="text-white font-medium">Current Post</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 