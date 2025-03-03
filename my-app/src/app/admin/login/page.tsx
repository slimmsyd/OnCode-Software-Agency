'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Check if the entered wallet address matches the admin wallet
    const adminWalletAddress = '0xE8e9f88991b87Dc6cbeB227E956C2593897509B5';
    
    if (walletAddress.toLowerCase() === adminWalletAddress.toLowerCase()) {
      // Set a session storage item to indicate admin login
      sessionStorage.setItem('adminWalletAddress', walletAddress);
      
      // Redirect to admin dashboard
      router.push('/admin');
    } else {
      setError('Invalid wallet address. Access denied.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Admin Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="0x..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Or connect with your wallet
          </p>
          <Link 
            href="/admin"
            className="text-blue-600 hover:text-blue-800"
          >
            Go to Admin Dashboard
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <Link 
            href="/"
            className="text-gray-600 hover:text-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 