import React from 'react';
import { MessageSquare, ChevronRight } from 'lucide-react';
import { useChatStore } from '../lib/store';
import Message from './Message';

const ChatHistory = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="max-w-3xl mx-auto my-8">
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
      <div className="space-y-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
            sender={message.sender}
          />
        ))}
      </div>
    </div>
  );
};