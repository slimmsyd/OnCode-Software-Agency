'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AdminBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [published, setPublished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle text drop
  const handleDrop = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text');
    if (text) {
      const textarea = contentRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newContent = content.substring(0, start) + text + content.substring(end);
        setContent(newContent);
      }
    }
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith('image/')) {
      setError('Only image files are supported');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      
      // Insert image markdown at cursor position
      const textarea = contentRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const imageMarkdown = `![${file.name}](${data.url})`;
        const newContent = content.substring(0, start) + imageMarkdown + content.substring(end);
        setContent(newContent);
      }

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    }
  };

  // Generate slug from title
  const generateSlug = () => {
    const newSlug = title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    setSlug(newSlug);
  };

  // Generate excerpt from content
  const generateExcerpt = () => {
    // Strip markdown syntax for plain text excerpt
    const plainText = content
      .replace(/#+\s+(.*)/g, '$1') // Remove headings
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .replace(/!\[(.*?)\]\(.*?\)/g, '') // Remove images
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/>\s+(.*)/g, '$1') // Remove blockquotes
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim();

    const newExcerpt = plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');
    setExcerpt(newExcerpt);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          slug,
          excerpt,
          published,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create blog post');
      }

      setSuccess('Blog post created successfully!');
      
      // Clear form after successful submission
      setTitle('');
      setContent('');
      setSlug('');
      setExcerpt('');
      setPublished(false);
      
      // Redirect to blog list after a short delay
      setTimeout(() => {
        router.push('/admin/blog/list');
      }, 2000);
    } catch (error) {
      console.error('Error creating blog post:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Insert markdown template
  const insertMarkdownTemplate = () => {
    const template = `# Main Heading

## Introduction
This is an introduction paragraph. Write a brief overview of what this post is about.

## Section 1
This is the first section of your blog post. You can **bold text** or *italicize it*.

### Subsection
- List item 1
- List item 2
- List item 3

## Section 2
Here's a quote:

> This is a blockquote. It's great for highlighting important information or quotes from other sources.

## Code Example
\`\`\`javascript
// This is a code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Conclusion
Summarize your post here and provide any final thoughts.

![Image Description](https://example.com/image.jpg)

[Link Text](https://example.com)
`;
    setContent(template);
  };

  // Insert markdown formatting at cursor position
  const insertFormatting = (formatType: string) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    let formattedText = '';
    let cursorOffset = 0;

    switch (formatType) {
      case 'bold':
        formattedText = `**${selectedText || 'bold text'}**`;
        cursorOffset = selectedText ? 0 : 9;
        break;
      case 'italic':
        formattedText = `*${selectedText || 'italic text'}*`;
        cursorOffset = selectedText ? 0 : 11;
        break;
      case 'heading1':
        formattedText = `# ${selectedText || 'Heading 1'}`;
        cursorOffset = selectedText ? 0 : 9;
        break;
      case 'heading2':
        formattedText = `## ${selectedText || 'Heading 2'}`;
        cursorOffset = selectedText ? 0 : 9;
        break;
      case 'heading3':
        formattedText = `### ${selectedText || 'Heading 3'}`;
        cursorOffset = selectedText ? 0 : 9;
        break;
      case 'link':
        formattedText = `[${selectedText || 'link text'}](url)`;
        cursorOffset = selectedText ? 1 : 10;
        break;
      case 'image':
        formattedText = `![${selectedText || 'image alt text'}](url)`;
        cursorOffset = selectedText ? 2 : 16;
        break;
      case 'code':
        formattedText = `\`${selectedText || 'code'}\``;
        cursorOffset = selectedText ? 0 : 4;
        break;
      case 'codeblock':
        formattedText = `\`\`\`\n${selectedText || 'code block'}\n\`\`\``;
        cursorOffset = selectedText ? 0 : 10;
        break;
      case 'quote':
        formattedText = `> ${selectedText || 'blockquote'}`;
        cursorOffset = selectedText ? 0 : 10;
        break;
      case 'list':
        formattedText = `- ${selectedText || 'list item'}`;
        cursorOffset = selectedText ? 0 : 9;
        break;
      case 'orderedlist':
        formattedText = `1. ${selectedText || 'ordered list item'}`;
        cursorOffset = selectedText ? 0 : 17;
        break;
      default:
        return;
    }

    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);

    // Set cursor position after the operation
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + formattedText.length - cursorOffset;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Create Blog Post</h1>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
          <p className="text-green-700">{success}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={generateSlug}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
            Slug
          </label>
          <div className="flex">
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={generateSlug}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
            >
              Generate
            </button>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={insertMarkdownTemplate}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Insert Template
              </button>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {showPreview ? 'Edit Mode' : 'Preview Mode'}
              </button>
            </div>
          </div>
          
          {/* Markdown Toolbar */}
          <div className="flex flex-wrap gap-1 mb-2 p-2 bg-gray-50 rounded border border-gray-300">
            <button
              type="button"
              onClick={() => insertFormatting('heading1')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Heading 1"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('heading2')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Heading 2"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('heading3')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Heading 3"
            >
              H3
            </button>
            <span className="mx-1 text-gray-300">|</span>
            <button
              type="button"
              onClick={() => insertFormatting('bold')}
              className="p-1 hover:bg-gray-200 rounded font-bold"
              title="Bold"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('italic')}
              className="p-1 hover:bg-gray-200 rounded italic"
              title="Italic"
            >
              I
            </button>
            <span className="mx-1 text-gray-300">|</span>
            <button
              type="button"
              onClick={() => insertFormatting('link')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Link"
            >
              🔗
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('image')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Image"
            >
              🖼️
            </button>
            <span className="mx-1 text-gray-300">|</span>
            <button
              type="button"
              onClick={() => insertFormatting('list')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Bullet List"
            >
              •
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('orderedlist')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Numbered List"
            >
              1.
            </button>
            <span className="mx-1 text-gray-300">|</span>
            <button
              type="button"
              onClick={() => insertFormatting('code')}
              className="p-1 hover:bg-gray-200 rounded font-mono"
              title="Inline Code"
            >
              `code`
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('codeblock')}
              className="p-1 hover:bg-gray-200 rounded font-mono"
              title="Code Block"
            >
              ```
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('quote')}
              className="p-1 hover:bg-gray-200 rounded"
              title="Blockquote"
            >
              "
            </button>
          </div>
          
          {/* File Upload */}
          <div className="mb-2">
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center w-full p-2 border border-dashed border-gray-300 rounded cursor-pointer hover:bg-gray-50"
            >
              <span className="text-sm text-gray-600">Click or drag to upload an image</span>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
                ref={fileInputRef}
              />
            </label>
          </div>
          
          {showPreview ? (
            <div className="border border-gray-300 rounded-md p-4 min-h-[300px] prose prose-sm max-w-none bg-white">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {content || '*No content yet. Start writing or switch to edit mode.*'}
              </ReactMarkdown>
            </div>
          ) : (
            <textarea
              id="content"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onDrop={handleDrop}
              onBlur={generateExcerpt}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              rows={15}
              required
            />
          )}
        </div>
        
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
            Excerpt
          </label>
          <div className="flex">
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              required
            />
            <button
              type="button"
              onClick={generateExcerpt}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
            >
              Generate
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {excerpt.length}/150 characters
          </p>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
            Publish immediately
          </label>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Saving...' : 'Save Blog Post'}
          </button>
        </div>
      </form>
      
      <div className="mt-12 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Markdown Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Formatting</p>
            <ul className="space-y-1 mt-1">
              <li><code className="bg-gray-100 px-1 rounded"># Heading 1</code></li>
              <li><code className="bg-gray-100 px-1 rounded">## Heading 2</code></li>
              <li><code className="bg-gray-100 px-1 rounded">**Bold**</code></li>
              <li><code className="bg-gray-100 px-1 rounded">*Italic*</code></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Elements</p>
            <ul className="space-y-1 mt-1">
              <li><code className="bg-gray-100 px-1 rounded">[Link](url)</code></li>
              <li><code className="bg-gray-100 px-1 rounded">![Image](url)</code></li>
              <li><code className="bg-gray-100 px-1 rounded">- List item</code></li>
              <li><code className="bg-gray-100 px-1 rounded">> Blockquote</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 