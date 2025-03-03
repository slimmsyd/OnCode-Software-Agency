'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useActiveAccount } from 'thirdweb/react';

// The authorized admin wallet address
const ADMIN_WALLET_ADDRESS = '0xE8e9f88991b87Dc6cbeB227E956C2593897509B5';

// For testing - set to true to bypass wallet check
const BYPASS_WALLET_CHECK = false;

interface AuthContextType {
  isAdmin: boolean;
  isLoading: boolean;
  walletAddress: string | null;
  checkIsAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(BYPASS_WALLET_CHECK);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  
  const activeAccount = useActiveAccount();
  
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      
      try {
        console.log("Active account:", activeAccount);
        
        // If we're bypassing the wallet check, just set isAdmin to true
        if (BYPASS_WALLET_CHECK) {
          console.log("Bypassing wallet check - granting admin access");
          setIsAdmin(true);
          setIsLoading(false);
          return;
        }
        
        if (activeAccount?.address) {
          const address = activeAccount.address.toLowerCase();
          console.log("Connected wallet address:", address);
          console.log("Admin wallet address:", ADMIN_WALLET_ADDRESS.toLowerCase());
          
          setWalletAddress(address);
          
          // Check if the connected wallet is the admin wallet (case insensitive)
          const isAdminWallet = address.toLowerCase() === ADMIN_WALLET_ADDRESS.toLowerCase();
          console.log("Is admin wallet?", isAdminWallet);
          
          setIsAdmin(isAdminWallet);
        } else {
          console.log("No wallet connected");
          setIsAdmin(false);
          setWalletAddress(null);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Add a delay before checking auth to give wallet time to connect
    const timer = setTimeout(() => {
      checkAuth();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [activeAccount]);
  
  const checkIsAdmin = (): boolean => {
    if (BYPASS_WALLET_CHECK) return true;
    if (!walletAddress) return false;
    const isAdminWallet = walletAddress.toLowerCase() === ADMIN_WALLET_ADDRESS.toLowerCase();
    console.log("checkIsAdmin result:", isAdminWallet);
    return isAdminWallet;
  };
  
  return (
    <AuthContext.Provider value={{ isAdmin, isLoading, walletAddress, checkIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 