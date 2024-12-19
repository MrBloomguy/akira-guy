import React from 'react';
import { Send } from 'lucide-react';

interface SendButtonProps {
  disabled: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex items-center gap-2 bg-violet-600 text-white px-4 py-1 rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Send
      <Send size={16} />
    </button>
  );
};

export default SendButton;