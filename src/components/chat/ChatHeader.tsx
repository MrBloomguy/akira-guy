import React from 'react';
import { MessageSquare, ChevronRight } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <MessageSquare className="text-gray-400" size={20} />
        <span className="text-gray-600">Your messages</span>
      </div>
      <button className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
        View all
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default ChatHeader;