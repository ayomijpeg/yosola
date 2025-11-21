import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, User } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

enum LoadingState {
  IDLE,
  LOADING,
  ERROR
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! I am the Yosola School Assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userText = input;
    const userMessage: ChatMessage = {
      role: 'user',
      text: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      // Logic: Remove welcome message for API context
      const historyMessages = messages.slice(1); 
      const historyForApi = historyMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(userText, historyForApi);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText || "I'm having trouble answering that. Please contact the office.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "Connection error. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoadingState(LoadingState.IDLE);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window Container */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300 ring-1 ring-black/5">
          
          {/* PREMIUM HEADER: Gradient Background */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-5 flex justify-between items-center text-white shadow-lg z-10">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Sparkles size={20} className="text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-base tracking-wide">Yosola  AI</h3>
                <div className="flex items-center space-x-1.5 opacity-80">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium">Online</span>
                </div>
              </div>
            </div>
            <button 
            title="Close Chat"
              onClick={() => setIsOpen(false)} 
              className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Bot Avatar (Only show for bot) */}
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Sparkles size={14} className="text-indigo-600" />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[80%] p-4 text-[15px] leading-relaxed shadow-sm relative group ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl rounded-br-none shadow-indigo-200' // PREMIUM USER BUBBLE
                      : 'bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-bl-none' // CLEAN BOT BUBBLE
                  }`}
                >
                  {msg.text}
                  
                  {/* Tiny Timestamp */}
                  <span className={`text-[10px] block mt-2 opacity-70 ${msg.role === 'user' ? 'text-indigo-100' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {/* User Avatar (Only show for user) */}
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <User size={14} className="text-indigo-600" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Loading Bubble */}
            {loadingState === LoadingState.LOADING && (
              <div className="flex items-end gap-2">
                 <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Sparkles size={14} className="text-indigo-600" />
                  </div>
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* PREMIUM INPUT AREA */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about admission, fees, or location..."
                className="w-full bg-slate-50 text-slate-700 placeholder:text-slate-400 text-sm rounded-full py-3.5 pl-5 pr-12 border border-slate-200 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all outline-none shadow-inner"
              />
              <button
                title="Send Message"
                onClick={handleSend}
                disabled={loadingState === LoadingState.LOADING || !input.trim()}
                className={`absolute right-2 p-2 rounded-full transition-all duration-300 ${
                    input.trim() 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md hover:shadow-lg transform hover:scale-105' 
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {loadingState === LoadingState.LOADING ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
            <div className="text-center mt-3">
                <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                    <Sparkles size={10} /> AI Assistant can make mistakes
                </p>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-gradient-to-r from-slate-900 to-slate-800 hover:from-indigo-900 hover:to-blue-900 text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Open Chat"
      >
        {/* Notification Dot */}
        {!isOpen && <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>}
        
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;
