'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';

export default function AdminNav() {
  const pathname = usePathname();
  const { walletAddress } = useAuth();
  const [sessionAuth, setSessionAuth] = useState(false);
  
  useEffect(() => {
    // Check for session storage auth
    if (typeof window !== 'undefined') {
      const storedWalletAddress = sessionStorage.getItem('adminWalletAddress');
      if (storedWalletAddress) {
        setSessionAuth(true);
      }
    }
  }, []);
  
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };
  
  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Create Blog Post', path: '/admin/blog' },
    { name: 'Manage Blog Posts', path: '/admin/blog/manage' },
  ];
  
  // Format wallet address for display
  const formatWalletAddress = (address: string | null) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('adminWalletAddress');
      window.location.href = '/admin/login';
    }
  };
  
  return (
    <nav className="bg-gray-800 text-white mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl">
                Admin Panel
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {walletAddress && (
              <div className="text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded">
                {formatWalletAddress(walletAddress)}
              </div>
            )}
            {sessionAuth && (
              <div className="text-sm text-gray-300 bg-green-700 px-3 py-1 rounded">
                Session Auth
              </div>
            )}
            {(walletAddress || sessionAuth) && (
              <button
                onClick={handleLogout}
                className="text-sm text-red-300 hover:text-red-100"
              >
                Logout
              </button>
            )}
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Back to Site
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {walletAddress && (
            <div className="block px-3 py-2 text-sm text-gray-300">
              Connected: {formatWalletAddress(walletAddress)}
            </div>
          )}
          {sessionAuth && (
            <div className="block px-3 py-2 text-sm text-green-300">
              Session Auth Active
            </div>
          )}
          {(walletAddress || sessionAuth) && (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 text-sm text-red-300 hover:text-red-100"
            >
              Logout
            </button>
          )}
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Back to Site
          </Link>
        </div>
      </div>
    </nav>
  );
} 