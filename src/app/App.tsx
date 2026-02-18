import { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { SettingsPage } from './components/SettingsPage';

export default function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <ChatInterface onOpenSettings={() => setShowSettings(true)} />
      {showSettings && (
        <SettingsPage onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}
