import { create } from 'zustand';

interface Message {
  id: string;
  content: string;
  timestamp: number;
  sender: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (content: string, sender: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (content, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          timestamp: Date.now(),
          sender,
        },
      ],
    })),
}));