import React from 'react';
import { Image, Paperclip } from 'lucide-react';

const ChatControls: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Image size={20} />
      </button>
      <button type="button" className="p-1 hover:bg-gray-100 rounded">
        <Paperclip size={20} />
      </button>
    </div>
  );
};

export default ChatControls;