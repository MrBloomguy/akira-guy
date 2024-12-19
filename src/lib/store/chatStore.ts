import { create } from 'zustand';
import { Message, ChatState } from '../types/chat';

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isGenerating: false,
  addMessage: (content, sender, role) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          timestamp: Date.now(),
          sender,
          role,
        },
      ],
    })),
  updateMessage: (id, updates) =>
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, ...updates } : msg
      ),
    })),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
}));