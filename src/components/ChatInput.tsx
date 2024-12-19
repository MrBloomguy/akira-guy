import React, { useState } from 'react';
import { Image, Paperclip, Send } from 'lucide-react';
import { useAccount } from 'wagmi';
import { useChatStore } from '../lib/store';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const { address } = useAccount();
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !address) return;

    addMessage(message, address);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-4 py-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can Claude help you today?"
              className="w-full resize-none outline-none min-h-[100px]"
              rows={1}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <button type="button" className="p-1 hover:bg-gray-100 rounded">
                <Image size={20} />
              </button>
              <button type="button" className="p-1 hover:bg-gray-100 rounded">
                <Paperclip size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <select className="text-sm border rounded px-2 py-1">
                <option>Claude 3.5 Sonnet</option>
              </select>
              <button
                type="submit"
                disabled={!message.trim() || !address}
                className="flex items-center gap-2 bg-violet-600 text-white px-4 py-1 rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};