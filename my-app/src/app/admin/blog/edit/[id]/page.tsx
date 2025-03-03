'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  published: boolean;
  publishedAt: string | null;
}

interface EditBlogPostPageProps {
  params: {
    id: string;
  };
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = params;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/blog/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      
      const data = await response.json();
      setPost(data);
      setTitle(data.title);
      setSlug(data.slug);
      setContent(data.content);
      setExcerpt(data.excerpt || '');
      setPublished(data.published);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setMessage('Failed to load blog post');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (text) {
      setContent(text);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setContent(event.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Only auto-update slug if it hasn't been manually edited
    if (slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle));
    }
  };

  const generateExcerpt = (text: string, maxLength = 160) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleSave = async (e: React.FormEvent, publishChange = false) => {
    e.preventDefault();
    
    if (!title || !slug || !content) {
      setMessage('Title, slug, and content are required');
      setMessageType('error');
      return;
    }

    setIsSaving(true);
    
    try {
      // If publishChange is true, toggle the published status
      const newPublishedStatus = publishChange ? !published : published;
      
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          slug,
          content,
          excerpt: excerpt || generateExcerpt(content),
          published: newPublishedStatus,
          publishedAt: newPublishedStatus && !post?.publishedAt ? new Date().toISOString() : post?.publishedAt,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog post');
      }

      const updatedPost = await response.json();
      setPost(updatedPost);
      setPublished(updatedPost.published);
      
      setMessage(publishChange 
        ? updatedPost.published ? 'Blog post published!' : 'Blog post unpublished!' 
        : 'Blog post updated successfully!');
      setMessageType('success');
      
      // Refresh the page to show updated data
      router.refresh();
    } catch (error) {
      console.error('Error updating blog post:', error);
      setMessage('Failed to update blog post');
      setMessageType('error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      return;
    }
    
    setIsSaving(true);
    
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog post');
      }
      
      router.push('/admin/blog/manage');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      setMessage('Failed to delete blog post');
      setMessageType('error');
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
        <div className="bg-red-100 text-red-800 p-4 rounded mb-6">
          Blog post not found
        </div>
        <Link 
          href="/admin/blog/manage"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to All Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
        <div className="flex gap-2">
          <Link 
            href="/admin/blog/manage"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </Link>
          {published && (
            <Link 
              href={`/blog/${slug}`}
              target="_blank"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
            >
              View Post
            </Link>
          )}
        </div>
      </div>
      
      {message && (
        <div 
          className={`p-4 mb-6 rounded ${
            messageType === 'success' ? 'bg-green-100 text-green-800' : 
            messageType === 'error' ? 'bg-red-100 text-red-800' : ''
          }`}
        >
          {message}
        </div>
      )}
      
      <form onSubmit={(e) => handleSave(e)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog post title"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="slug" className="block text-sm font-medium mb-1">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="enter-url-slug"
          />
          <p className="text-sm text-gray-500 mt-1">
            This will be used in the URL: /blog/{slug}
          </p>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Content
          </label>
          <div
            className={`w-full h-64 p-4 border-2 border-dashed ${
              content ? 'border-gray-300' : 'border-blue-300'
            } rounded mb-2 overflow-auto`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleTextDrop}
            onClick={() => fileInputRef.current?.click()}
            style={{ cursor: 'pointer' }}
          >
            {content ? (
              <div className="whitespace-pre-wrap">{content}</div>
            ) : (
              <div className="text-gray-400 h-full flex items-center justify-center">
                Drop text here or click to upload a file
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".txt,.md"
            className="hidden"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-64"
            placeholder="Or type your content here"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
            Excerpt (optional)
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="Enter a short excerpt for this post"
          />
          <p className="text-sm text-gray-500 mt-1">
            If left empty, an excerpt will be automatically generated from the content.
          </p>
        </div>
        
        <div className="flex gap-4 justify-between">
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
              disabled={isSaving}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={(e) => handleSave(e, true)}
              className={`px-4 py-2 rounded disabled:opacity-50 ${
                published 
                  ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={isSaving}
            >
              {published ? 'Unpublish' : 'Publish'}
            </button>
          </div>
          
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
            disabled={isSaving}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
} 