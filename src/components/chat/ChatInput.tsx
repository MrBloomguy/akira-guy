import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useChatStore } from '../../lib/store/chatStore';
import ChatControls from './ChatControls';
import SendButton from './SendButton';

const ChatInput: React.FC = () => {
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
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 p-4 lg:static"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-4 py-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can Akira help you today?"
              className="w-full resize-none outline-none min-h-[100px]"
              rows={1}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
            <ChatControls />
            <div className="flex items-center gap-2">
              <select className="text-sm border rounded px-2 py-1">
                <option>Akira-01</option>
              </select>
              <SendButton disabled={!message.trim() || !address} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
