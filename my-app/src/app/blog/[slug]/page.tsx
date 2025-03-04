'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

// Server component for fetching data
async function getBlogPost(slug: string) {
  const prisma = new PrismaClient();
  const post = await prisma.blogPost.findUnique({
    where: {
      slug,
      published: true,
    },
  });
  
  if (!post) {
    return null;
  }
  
  return post;
}

// Client component for rendering
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/blog?slug=${params.slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
        
        // Extract headings for table of contents
        const headingRegex = /^(#{1,3})\s+(.+)$/gm;
        const content = data.content || '';
        const headings: TableOfContentsItem[] = [];
        let match;
        
        while ((match = headingRegex.exec(content)) !== null) {
          const level = match[1].length;
          const text = match[2];
          const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
          headings.push({ id, text, level });
        }
        
        setToc(headings);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.slug]);

  // Set up intersection observer for headings
  useEffect(() => {
    if (toc.length === 0 || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66% 0px' }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      toc.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [toc]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{error}</p>
          <Link href="/blog" className="text-blue-600 hover:underline mt-2 inline-block">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-700">Post not found</p>
          <Link href="/blog" className="text-blue-600 hover:underline mt-2 inline-block">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Desktop */}
        {toc.length > 0 && (
          <div className="hidden md:block w-64 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li 
                      key={item.id} 
                      className={`${
                        item.level === 1 ? 'ml-0' : 
                        item.level === 2 ? 'ml-3' : 
                        'ml-6'
                      }`}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-blue-600 transition-colors ${
                          activeHeading === item.id 
                            ? 'text-blue-600 font-medium' 
                            : 'text-gray-600'
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <article className="flex-1 max-w-3xl">
          <div className="mb-8">
            <p className="text-gray-500 mb-2">{formattedDate}</p>
          </div>

          {/* Table of Contents - Mobile */}
          {toc.length > 0 && (
            <div className="md:hidden mb-6 bg-gray-50 p-4 rounded-lg">
              <details>
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
                  Table of Contents
                </summary>
                <nav className="mt-3">
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li 
                        key={item.id} 
                        className={`${
                          item.level === 1 ? 'ml-0' : 
                          item.level === 2 ? 'ml-3' : 
                          'ml-6'
                        }`}
                      >
                        <a
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </details>
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => {
                  const id = props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                  return <h1 id={id} className="text-3xl font-bold mt-8 mb-4" {...props} />;
                },
                h2: ({ node, ...props }) => {
                  const id = props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                  return <h2 id={id} className="text-2xl font-bold mt-8 mb-3" {...props} />;
                },
                h3: ({ node, ...props }) => {
                  const id = props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                  return <h3 id={id} className="text-xl font-bold mt-6 mb-3" {...props} />;
                },
                p: ({ node, ...props }) => <p className="my-4 leading-relaxed" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
                li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 bg-blue-50 rounded-r" {...props} />
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md my-4"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  );
                },
                a: ({ node, ...props }) => (
                  <a className="text-blue-600 hover:underline" {...props} />
                ),
                img: ({ node, ...props }) => (
                  <div className="my-6">
                    <img 
                      src={props.src || ''} 
                      alt={props.alt || ''} 
                      className="rounded-lg max-w-full h-auto mx-auto shadow-md" 
                    />
                    {props.alt && <p className="text-center text-gray-500 mt-2 text-sm">{props.alt}</p>}
                  </div>
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300" {...props} />
                  </div>
                ),
                th: ({ node, ...props }) => (
                  <th className="bg-gray-100 border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
} 