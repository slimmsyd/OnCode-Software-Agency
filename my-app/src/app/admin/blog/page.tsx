'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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

  const generateExcerpt = (text: string, maxLength = 160) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleSubmit = async (e: React.FormEvent, publish = false) => {
    e.preventDefault();
    
    if (!title || !content) {
      setMessage('Title and content are required');
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    
    try {
      const slug = generateSlug(title);
      const excerpt = generateExcerpt(content);
      
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          slug,
          content,
          excerpt,
          published: publish,
          publishedAt: publish ? new Date().toISOString() : null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      const data = await response.json();
      
      setMessage(publish ? 'Blog post published successfully!' : 'Blog post saved as draft!');
      setMessageType('success');
      
      // Clear form after successful submission
      if (publish) {
        setTitle('');
        setContent('');
      }
      
      // Refresh the page to show updated data
      router.refresh();
    } catch (error) {
      console.error('Error creating blog post:', error);
      setMessage('Failed to create blog post');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Blog Post Admin</h1>
      
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
      
      <form onSubmit={(e) => handleSubmit(e, false)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog post title"
          />
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
        
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={isLoading}
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={isLoading}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
} 