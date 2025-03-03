import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import WalletStatus from './components/WalletStatus';

const prisma = new PrismaClient();

async function getDashboardStats() {
  const totalPosts = await prisma.blogPost.count();
  const publishedPosts = await prisma.blogPost.count({
    where: { published: true },
  });
  const draftPosts = await prisma.blogPost.count({
    where: { published: false },
  });
  
  return {
    totalPosts,
    publishedPosts,
    draftPosts,
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Blog Posts</h2>
          <p className="text-4xl font-bold text-blue-600">{stats.totalPosts}</p>
          <Link 
            href="/admin/blog/manage"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            View all posts →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Published Posts</h2>
          <p className="text-4xl font-bold text-green-600">{stats.publishedPosts}</p>
          <Link 
            href="/blog"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            target="_blank"
          >
            View blog →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Draft Posts</h2>
          <p className="text-4xl font-bold text-yellow-600">{stats.draftPosts}</p>
          <Link 
            href="/admin/blog"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Create new post →
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <WalletStatus />
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            <Link 
              href="/admin/blog"
              className="bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 text-center"
            >
              Create New Blog Post
            </Link>
            <Link 
              href="/admin/blog/manage"
              className="bg-gray-200 text-gray-800 py-3 px-4 rounded hover:bg-gray-300 text-center"
            >
              Manage Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 