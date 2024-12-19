import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useChatStore } from '../../lib/store/chatStore';

const RecentChats: React.FC = () => {
  const messages = useChatStore((state) => state.messages);
  
  // Group messages by date
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  return (
    <div className="p-4">
      <div className="space-y-6">
        <section>
          <h3 className="text-xs font-semibold text-gray-500 mb-2">Today</h3>
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <MessageSquare size={16} className="text-gray-400" />
                <span className="text-sm">New chat</span>
              </div>
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-gray-500 mb-2">Previous 7 Days</h3>
          <div className="space-y-1">
            {messages.map((message) => (
              <button 
                key={message.id}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-gray-400" />
                  <span className="text-sm truncate">{message.content}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecentChats;