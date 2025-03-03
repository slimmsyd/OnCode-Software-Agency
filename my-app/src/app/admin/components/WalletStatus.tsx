'use client';

import { useAuth } from '../../context/AuthContext';

export default function WalletStatus() {
  const { isAdmin, walletAddress } = useAuth();
  
  // Format wallet address for display
  const formatWalletAddress = (address: string | null) => {
    if (!address) return '';
    return address;
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Wallet Status</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Connected Wallet</p>
          <p className="font-mono text-sm break-all bg-gray-100 p-2 rounded">
            {walletAddress ? formatWalletAddress(walletAddress) : 'Not connected'}
          </p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-1">Admin Status</p>
          <div className={`flex items-center ${isAdmin ? 'text-green-600' : 'text-red-600'}`}>
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${isAdmin ? 'bg-green-600' : 'bg-red-600'}`}></span>
            <p>{isAdmin ? 'Verified Admin' : 'Not Admin'}</p>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-1">Expected Admin Wallet</p>
          <p className="font-mono text-sm break-all bg-gray-100 p-2 rounded">
            0xE8e9f88991b87Dc6cbeB227E956C2593897509B5
          </p>
        </div>
      </div>
    </div>
  );
} 