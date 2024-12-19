import React from 'react';
import Message from './Message';
import { Message as MessageType } from '../../lib/types/chat';

interface MessageListProps {
  messages: MessageType[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
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
  );
};

export default MessageList;