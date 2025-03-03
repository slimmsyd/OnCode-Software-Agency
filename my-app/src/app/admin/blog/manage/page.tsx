'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function ManageBlogPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/blog');
      
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
  };

  const handlePublishToggle = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/blog/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          published: !post.published,
          publishedAt: !post.published ? new Date().toISOString() : null,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update blog post');
      }
      
      // Refresh the posts list
      fetchPosts();
      router.refresh();
    } catch (error) {
      console.error('Error updating blog post:', error);
      setError('Failed to update blog post');
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not published';
    
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">Manage Blog Posts</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">Manage Blog Posts</h1>
        <div className="bg-red-100 text-red-800 p-4 rounded mb-6">
          {error}
        </div>
        <button 
          onClick={fetchPosts}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
        <Link 
          href="/admin/blog"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create New Post
        </Link>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded">
          <p className="text-xl text-gray-600 mb-4">No blog posts found</p>
          <Link 
            href="/admin/blog"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Your First Post
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Created</th>
                <th className="py-3 px-4 text-left">Published</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-gray-200">
                  <td className="py-3 px-4">
                    <Link 
                      href={`/admin/blog/edit/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-500">{post.slug}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span 
                      className={`inline-block px-2 py-1 text-xs rounded ${
                        post.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    {formatDate(post.publishedAt)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Link 
                        href={`/admin/blog/edit/${post.id}`}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handlePublishToggle(post)}
                        className={`px-3 py-1 rounded text-sm ${
                          post.published
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {post.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <Link 
                        href={post.published ? `/blog/${post.slug}` : '#'}
                        className={`px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 text-sm ${
                          !post.published ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={(e) => !post.published && e.preventDefault()}
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 