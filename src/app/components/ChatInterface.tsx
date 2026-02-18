import { useState, useRef, useEffect } from 'react';
import { Send, Plus, Settings, MessageSquare, Menu, Pencil } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const sampleConversations = [
  { id: '1', title: 'Getting started with React Hooks', date: 'Today' },
  { id: '2', title: 'CSS Grid vs Flexbox explained', date: 'Today' },
  { id: '3', title: 'TypeScript best practices 2025', date: 'Yesterday' },
  { id: '4', title: 'Building a REST API with Node.js', date: 'Yesterday' },
  { id: '5', title: 'Docker container setup guide', date: 'Last week' },
  { id: '6', title: 'State management in React', date: 'Last week' },
];

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello! I'm your AI assistant. I'm here to help you with questions, analysis, writing, coding, and much more. How can I help you today?",
  },
];

export function ChatInterface({ onOpenSettings }: { onOpenSettings: () => void }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeConv, setActiveConv] = useState('1');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I understand you're asking about "${input}". This is a thoughtful question. In a real deployment, this would connect to an AI backend to provide a meaningful, contextual answer based on your query and any relevant history from your sessions.`,
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 160) + 'px';
  };

  const grouped = [
    { label: 'Today', items: sampleConversations.filter(c => c.date === 'Today') },
    { label: 'Yesterday', items: sampleConversations.filter(c => c.date === 'Yesterday') },
    { label: 'Last week', items: sampleConversations.filter(c => c.date === 'Last week') },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="w-64 bg-[#171717] flex flex-col flex-shrink-0 select-none">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-3 pt-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Close sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => { setMessages(initialMessages); setInput(''); }}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="New chat"
            >
              <Pencil className="w-5 h-5" />
            </button>
          </div>

          {/* New chat button */}
          <div className="px-3 pb-2">
            <button
              onClick={() => { setMessages(initialMessages); setInput(''); }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              New chat
            </button>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto px-2 py-1">
            {grouped.map(group => (
              <div key={group.label} className="mb-4">
                <p className="text-xs text-gray-500 px-3 py-1 mb-0.5">{group.label}</p>
                {group.items.map(conv => (
                  <button
                    key={conv.id}
                    onClick={() => setActiveConv(conv.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors truncate ${
                      activeConv === conv.id
                        ? 'bg-white/15 text-white'
                        : 'text-gray-400 hover:bg-white/10 hover:text-gray-200'
                    }`}
                  >
                    {conv.title}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Sidebar footer */}
          <div className="p-3 border-t border-white/10">
            <button
              onClick={onOpenSettings}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center gap-2 ml-1">
            <div className="w-6 h-6 rounded-full bg-[#6155f5] flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">AI Assistant</span>
          </div>
          {!sidebarOpen && (
            <button
              onClick={onOpenSettings}
              className="ml-auto p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto py-6">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#6155f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-[#6155f5] text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input area */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-[#6155f5] focus-within:shadow-[0_0_0_3px_rgba(97,85,245,0.08)] transition-all">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Message AI Assistant..."
                rows={1}
                className="flex-1 bg-transparent resize-none outline-none text-sm text-gray-800 placeholder-gray-400 leading-relaxed"
                style={{ maxHeight: '160px' }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="w-8 h-8 bg-[#6155f5] rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:bg-[#4f46e5] disabled:opacity-40 disabled:cursor-not-allowed mb-0.5"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              AI can make mistakes. Consider verifying important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}