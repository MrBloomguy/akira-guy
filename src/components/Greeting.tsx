import React from 'react';
import { Sun } from 'lucide-react';
import { useAccount } from 'wagmi';
import { truncateAddress } from '../lib/utils';

const Greeting = () => {
  const { address } = useAccount();

  return (
    <div className="flex items-center justify-center gap-2 text-4xl font-serif text-gray-800 mt-12 mb-8">
      <Sun className="text-orange-400" size={32} />
      <h1>
        Good evening, {address ? truncateAddress(address) : 'Connect your wallet'}
      </h1>
    </div>
  );
};