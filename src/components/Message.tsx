import React from 'react';
import { formatTimestamp, truncateAddress } from '../lib/utils';

interface MessageProps {
  content: string;
  timestamp: number;
  sender: string;
}

const Message: React.FC<MessageProps> = ({ content, timestamp, sender }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-medium text-gray-600">
          {truncateAddress(sender)}
        </span>
        <span className="text-xs text-gray-400">
          {formatTimestamp(timestamp)}
        </span>
      </div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default Message;