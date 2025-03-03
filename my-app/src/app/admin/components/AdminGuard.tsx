'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { client } from '../../helper/client';
import { inAppWallet, createWallet } from 'thirdweb/wallets';
import Link from 'next/link';

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { isAdmin, isLoading, walletAddress } = useAuth();
  const router = useRouter();
  const activeAccount = useActiveAccount();
  const [initialLoading, setInitialLoading] = useState(true);
  const [showConnectPrompt, setShowConnectPrompt] = useState(false);
  const [sessionAuth, setSessionAuth] = useState(false);

  useEffect(() => {
    // Check for session storage auth
    if (typeof window !== 'undefined') {
      const storedWalletAddress = sessionStorage.getItem('adminWalletAddress');
      const adminWalletAddress = '0xE8e9f88991b87Dc6cbeB227E956C2593897509B5';
      
      if (storedWalletAddress && storedWalletAddress.toLowerCase() === adminWalletAddress.toLowerCase()) {
        console.log("Admin authenticated via session storage");
        setSessionAuth(true);
      }
    }

    // Add a longer delay to give the wallet time to connect
    const timer = setTimeout(() => {
      setInitialLoading(false);
      
      // Only show connect prompt if no wallet is connected after the delay
      if (!activeAccount && !sessionAuth) {
        setShowConnectPrompt(true);
      }
    }, 3000); // 3 second delay

    return () => clearTimeout(timer);
  }, [activeAccount, sessionAuth]);

  // Show loading state during initial load
  if (initialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Connecting to wallet...</p>
          <p className="text-sm text-gray-500 mt-2">Please wait while we verify your credentials</p>
        </div>
      </div>
    );
  }

  // If authenticated via session storage, allow access
  if (sessionAuth) {
    return <>{children}</>;
  }

  if (showConnectPrompt && !activeAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Access Required</h1>
          <p className="mb-6 text-gray-600 text-center">
            Please connect your wallet to access the admin area.
          </p>
          <div className="flex justify-center mb-6">
            <ConnectButton
              client={client}
              wallets={wallets}
              appMetadata={{
                name: "OnCode Admin",
                url: "https://oncode.com",
              }}
            />
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Or login with your wallet address
            </p>
            <Link 
              href="/admin/login"
              className="text-blue-600 hover:text-blue-800"
            >
              Go to Login Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (activeAccount && !isAdmin && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center text-red-600">Access Denied</h1>
          <p className="mb-4 text-gray-600 text-center">
            The connected wallet does not have admin privileges.
          </p>
          <div className="bg-gray-100 p-4 rounded mb-6">
            <p className="text-sm text-gray-700 break-all">
              <span className="font-semibold">Connected wallet:</span> {walletAddress}
            </p>
            <p className="text-sm text-gray-700 break-all mt-2">
              <span className="font-semibold">Required wallet:</span> 0xE8e9f88991b87Dc6cbeB227E956C2593897509B5
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Home
            </button>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Or login with your wallet address
            </p>
            <Link 
              href="/admin/login"
              className="text-blue-600 hover:text-blue-800"
            >
              Go to Login Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If we have an active account and we're either admin or still loading the admin status,
  // show the children (the admin content)
  return <>{children}</>;
} 