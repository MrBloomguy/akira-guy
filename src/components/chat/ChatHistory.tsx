import React from 'react';
import { useChatStore } from '../../lib/store/chatStore';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';

const ChatHistory: React.FC = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="max-w-3xl mx-auto my-8 px-4 lg:px-0">
      <ChatHeader />
      <MessageList messages={messages} />
    </div>
  );
};

export default ChatHistory;