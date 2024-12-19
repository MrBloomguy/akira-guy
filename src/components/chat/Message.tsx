import React from 'react';
import { formatTimestamp } from '../../lib/utils/time';
import { truncateAddress } from '../../lib/utils/address';
import Avatar from '../common/Avatar';

interface MessageProps {
  content: string;
  timestamp: number;
  sender: string;
  role: 'user' | 'assistant';
  pending?: boolean;
}

const Message: React.FC<MessageProps> = ({ 
  content, 
  timestamp, 
  sender, 
  role,
  pending 
}) => {
  const isAssistant = role === 'assistant';

  return (
    <div className={`flex gap-4 ${isAssistant ? 'bg-gray-50' : 'bg-white'} rounded-lg shadow-sm p-4`}>
      <Avatar 
        seed={isAssistant ? 'assistant' : sender} 
        size={32} 
        className={pending ? 'animate-pulse' : ''}
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-gray-600">
            {isAssistant ? 'Claude' : truncateAddress(sender)}
          </span>
          <span className="text-xs text-gray-400">
            {formatTimestamp(timestamp)}
          </span>
        </div>
        <p className={`text-gray-800 ${pending ? 'animate-pulse' : ''}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Message;