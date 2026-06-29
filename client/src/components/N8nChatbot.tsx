import { useEffect } from 'react';

export default function N8nChatbot() {
  useEffect(() => {
    // Inject n8n chat CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // Inject Triohub override styles
    const style = document.createElement('style');
    style.textContent = `
      /* ── Launcher Button ── */
      .n8n-chat .chat-window-toggle {
        background: linear-gradient(135deg, #9333ea, #8b5cf6, #7c3aed) !important;
        border: none !important;
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(139, 92, 246, 0.3) !important;
        width: 56px !important;
        height: 56px !important;
        border-radius: 14px !important;
        transition: all 0.3s ease !important;
      }
      .n8n-chat .chat-window-toggle:hover {
        box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(139, 92, 246, 0.5) !important;
        transform: scale(1.05) !important;
      }
      .n8n-chat .chat-window-toggle svg {
        color: #ffffff !important;
        width: 24px !important;
        height: 24px !important;
      }

      /* ── Chat Window ── */
      .n8n-chat .chat-window {
        border-radius: 16px !important;
        border: 1px solid rgba(168, 85, 247, 0.3) !important;
        box-shadow: 0 0 30px rgba(168, 85, 247, 0.25), 0 25px 50px rgba(0,0,0,0.12) !important;
        overflow: hidden !important;
        font-family: 'Inter', sans-serif !important;
      }

      /* ── Header ── */
      .n8n-chat .chat-window-header {
        background: linear-gradient(135deg, #9333ea, #8b5cf6, #7c3aed) !important;
        padding: 16px 20px !important;
        border-bottom: none !important;
      }
      .n8n-chat .chat-window-header h1,
      .n8n-chat .chat-window-header h2,
      .n8n-chat .chat-window-header p,
      .n8n-chat .chat-window-header span,
      .n8n-chat .chat-window-header button {
        color: #ffffff !important;
      }
      .n8n-chat .chat-window-header .close-button,
      .n8n-chat .chat-window-header button svg {
        color: rgba(255,255,255,0.8) !important;
      }
      .n8n-chat .chat-window-header button:hover svg {
        color: #ffffff !important;
      }

      /* ── Welcome Screen ── */
      .n8n-chat .welcome-screen {
        background: #faf5ff !important;
      }
      .n8n-chat .welcome-screen h1,
      .n8n-chat .welcome-screen h2 {
        font-family: 'Space Grotesk', sans-serif !important;
        background: linear-gradient(135deg, #9333ea, #7c3aed) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      .n8n-chat .welcome-screen p {
        color: #6b21a8 !important;
      }
      .n8n-chat .new-conversation-button,
      .n8n-chat .welcome-screen button {
        background: linear-gradient(135deg, #9333ea, #8b5cf6) !important;
        border: none !important;
        border-radius: 10px !important;
        color: #ffffff !important;
        font-family: 'Inter', sans-serif !important;
        font-weight: 500 !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 12px rgba(147, 51, 234, 0.35) !important;
      }
      .n8n-chat .new-conversation-button:hover,
      .n8n-chat .welcome-screen button:hover {
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.5) !important;
        transform: translateY(-1px) !important;
      }

      /* ── Messages Area ── */
      .n8n-chat .chat-messages-list {
        background: #faf5ff !important;
        padding: 16px !important;
      }

      /* Bot messages */
      .n8n-chat .chat-message.bot .chat-message-bubble,
      .n8n-chat .chat-message-from-bot .chat-message-bubble {
        background: #ffffff !important;
        border: 1px solid rgba(168, 85, 247, 0.25) !important;
        color: #1a1a2e !important;
        border-radius: 14px 14px 14px 4px !important;
        box-shadow: 0 2px 8px rgba(147, 51, 234, 0.08) !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
      }

      /* User messages */
      .n8n-chat .chat-message.user .chat-message-bubble,
      .n8n-chat .chat-message-from-user .chat-message-bubble {
        background: linear-gradient(135deg, #9333ea, #8b5cf6) !important;
        border: none !important;
        color: #ffffff !important;
        border-radius: 14px 14px 4px 14px !important;
        box-shadow: 0 2px 12px rgba(147, 51, 234, 0.35) !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
      }

      /* Typing indicator */
      .n8n-chat .chat-message-typing .chat-message-bubble {
        background: #ffffff !important;
        border: 1px solid rgba(168, 85, 247, 0.25) !important;
      }
      .n8n-chat .chat-message-typing .dot {
        background: #9333ea !important;
      }

      /* ── Input Area ── */
      .n8n-chat .chat-input {
        background: #ffffff !important;
        border-top: 1px solid rgba(168, 85, 247, 0.2) !important;
        padding: 12px 16px !important;
      }
      .n8n-chat .chat-input textarea,
      .n8n-chat .chat-input input {
        background: #f5f0fe !important;
        border: 1px solid rgba(168, 85, 247, 0.3) !important;
        border-radius: 10px !important;
        color: #1a1a2e !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 14px !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      .n8n-chat .chat-input textarea:focus,
      .n8n-chat .chat-input input:focus {
        border-color: #9333ea !important;
        box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.15) !important;
        outline: none !important;
      }
      .n8n-chat .chat-input textarea::placeholder,
      .n8n-chat .chat-input input::placeholder {
        color: #a78bfa !important;
      }

      /* Send button */
      .n8n-chat .chat-input button[type="submit"],
      .n8n-chat .chat-input .send-button {
        background: linear-gradient(135deg, #9333ea, #8b5cf6) !important;
        border: none !important;
        border-radius: 10px !important;
        color: #ffffff !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3) !important;
      }
      .n8n-chat .chat-input button[type="submit"]:hover,
      .n8n-chat .chat-input .send-button:hover {
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.5) !important;
        transform: scale(1.05) !important;
      }
      .n8n-chat .chat-input button[type="submit"] svg,
      .n8n-chat .chat-input .send-button svg {
        color: #ffffff !important;
      }

      /* ── Footer branding ── */
      .n8n-chat .chat-window-footer,
      .n8n-chat .powered-by {
        background: #ffffff !important;
        border-top: 1px solid rgba(168, 85, 247, 0.15) !important;
        color: #a78bfa !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 11px !important;
      }
      .n8n-chat .powered-by a {
        color: #9333ea !important;
      }

      /* ── Scrollbar ── */
      .n8n-chat .chat-messages-list::-webkit-scrollbar {
        width: 6px !important;
      }
      .n8n-chat .chat-messages-list::-webkit-scrollbar-track {
        background: #faf5ff !important;
      }
      .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb {
        background: #9333ea !important;
        border-radius: 9999px !important;
      }
      .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb:hover {
        background: #7c3aed !important;
      }
    `;
    document.head.appendChild(style);

    // Load and init n8n chat
    const chatBundleUrl = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    import(/* @vite-ignore */ chatBundleUrl).then(({ createChat }) => {
      createChat({
        webhookUrl: 'https://n8n.yieldautomations.online/webhook/fd6b85aa-bae0-4012-bdf0-735aaf520182/chat',

        // ADDED: Opening messages when chat is first opened
        initialMessages: [
          'Hi there! 👋',
          'My name is Riyu. How can I assist you today?',
        ],

        // ADDED: Text labels for the chat UI
        i18n: {
          en: {
            title: 'Riyu',                              // Name shown in the chat header
            subtitle: "Start a chat. We're here to help you 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
          },
        },
      });
    });

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
