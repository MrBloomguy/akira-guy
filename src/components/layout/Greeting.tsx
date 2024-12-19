import React from 'react';
import { useWalletGreeting } from '../../lib/hooks/useWalletGreeting';
import Avatar from '../common/Avatar';

const Greeting: React.FC = () => {
  const { greeting } = useWalletGreeting();

  return (
    <div className="flex items-center justify-center gap-3 text-4xl font-serif text-gray-800 mt-12 mb-8">
      <Avatar size={40} className="animate-pulse" />
      <h1>Hey there, {greeting}</h1>
    </div>
  );
};

export default Greeting;
