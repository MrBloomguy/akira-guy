import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Header from './components/layout/Header';
import Greeting from './components/layout/Greeting';
import ChatInput from './components/chat/ChatInput';
import ChatHistory from './components/chat/ChatHistory';
import MobileDrawer from './components/layout/MobileDrawer';
import WalletProvider from './providers/WalletProvider';

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="fixed top-4 left-4 p-2 hover:bg-gray-100 rounded-full lg:hidden z-30"
        >
          <Menu size={24} />
        </button>

        {/* Mobile Drawer */}
        <MobileDrawer 
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />

        {/* Main Content */}
        <div className="lg:pl-72">
          <Header />
          <main className="max-w-5xl mx-auto px-4">
            <Greeting />
            <ChatInput />
            <ChatHistory />
          </main>
        </div>
      </div>
    </WalletProvider>
  );
};

export default App;