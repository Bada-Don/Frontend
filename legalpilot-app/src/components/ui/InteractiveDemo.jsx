// src/components/ui/InteractiveDemo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../common/Icon';
import Button from '../common/Button'; // Assuming you might want to use your Button component

const ChatBubble = ({ children, sender = 'user', className = '' }) => {
  const isUser = sender === 'user';
  const bubbleStyles = isUser
    ? 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-2xl' // Matches original style
    : 'bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl ml-auto max-w-2xl'; // Matches original style

  // For theming, these gradients and opacities would ideally come from theme.css
  // e.g., --color-bg-chat-user, --color-bg-chat-ai-start, --color-bg-chat-ai-end

  return (
    <motion.div
      className={`${bubbleStyles} text-text-inverted ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const InteractiveDemo = () => {
  return (
    // glass-card styles:
    // background: rgba(255, 255, 255, 0.1);
    // backdrop-filter: blur(20px);
    // border: 1px solid rgba(255, 255, 255, 0.2);
    // border-radius: 20px; -> rounded-2xl
    // box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); -> shadow-card
    <motion.div
      className="bg-bg-glass-card backdrop-filter backdrop-blur-xl border border-border-glass rounded-3xl shadow-card p-8 md:p-12" // Adjusted rounded-2xl to rounded-3xl for a bit larger radius, or keep 2xl
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center mb-6">
        {/* This gradient is from Tailwind, themeable if needed */}
        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shrink-0">
          <Icon name="smart_toy" className="text-text-inverted" size="xl" />
        </div>
        <div>
          <p className="font-semibold text-text-inverted text-lg">LegalPilot AI Assistant</p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-status rounded-full mr-2"></div>
            <p className="text-sm text-green-300">Online & Ready</p> {/* text-green-300 is specific, could be themed */}
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <ChatBubble sender="user">
          <p>"I need to draft a comprehensive NDA for my tech startup. Can you help me create one that covers intellectual property and includes specific clauses for remote work?"</p>
        </ChatBubble>
        <ChatBubble sender="ai">
          <p>✨ Absolutely! I'll create a customized NDA template for your tech startup. Based on your requirements, I'll include:</p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li>IP protection clauses</li>
            <li>Remote work provisions</li>
            <li>Duration and termination terms</li>
          </ul>
        </ChatBubble>
      </div>

      <div className="flex items-center">
        <input
          className="flex-grow p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-full text-text-inverted placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          placeholder="Ask me anything about contracts..."
          type="text"
        />
        {/* Using a motion.button directly here for specific styling, or adapt Button component */}
        <motion.button
          className="ml-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-800 px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          // This is the gradient-accent from theme.css if 'from-yellow-400 to-pink-400' is themeable.
          // For now, using direct Tailwind class.
          whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(250, 204, 21, 0.4)" }} // yellow-400 with alpha
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="send" size="md" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InteractiveDemo;