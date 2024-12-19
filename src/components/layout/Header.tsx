import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="text-xl font-serif text-gray-700">Akira-AQ</div>
      <div className="flex items-center gap-4">
        <div className="text-sm bg-gray-100 rounded-full px-4 py-1 flex items-center gap-2">
          AKR
          <button className="text-violet-600 hover:text-violet-700 font-medium">
            $0.09
          </button>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
