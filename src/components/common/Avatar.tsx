import React from 'react';
import { generateRandomSeed, getDicebearUrl } from '../../lib/utils/avatar';

interface AvatarProps {
  seed?: string;
  size?: number;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  seed = generateRandomSeed(),
  size = 32,
  className = ''
}) => {
  return (
    <img
      src={getDicebearUrl(seed)}
      alt="Avatar"
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
};

export default Avatar;