import BlogHeader from './components/BlogHeader';

export const metadata = {
  title: 'OnCode Blog',
  description: 'Insights, updates, and stories from the OnCode team',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <main className="pb-16">{children}</main>
    </div>
  );
} 