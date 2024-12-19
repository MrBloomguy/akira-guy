import React from 'react';
import WalletConnect from './WalletConnect';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="text-xl font-semibold text-gray-700">Claude</div>
      <div className="flex items-center gap-4">
        <div className="text-sm bg-gray-100 rounded-full px-4 py-1 flex items-center gap-2">
          Using limited free plan
          <button className="text-violet-600 hover:text-violet-700 font-medium">
            Upgrade
          </button>
        </div>
        <WalletConnect />
      </div>
    </header>
  );
};