'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const generateMessage = () => {
    const messages = [
      "You're the CSS to my HTML",
      "My love for you is like a React state - always updating!",
      "You complete me like useEffect's dependency array",
      "Our love is more responsive than a Next.js app",
      "I would never console.log your heart",
      "You're my TypeScript to JavaScript - you give me type safety in this crazy world",
      "My love for you is a 404 error - it's never found an end",
      "You're my API endpoint - always the perfect response",
      "Our love is like Git - it just keeps committing",
      "You're my async/await - making everything worth waiting for",
      "My heart does a fresh Next.js build every time I see you",
      "You're my useState - essential to my component's existence",
      "Our love is like WebSocket - always connected",
      "You're my npm install - adding meaning to my codebase",
      "My love is like a Webpack config - complex but worth it for you",
      "You're my Lighthouse score - 100 in every category",
      "Our love is like Kubernetes - it scales infinitely",
      "You're my Chrome DevTools - helping me understand what matters",
      "My heart is your useState - you have complete control",
      "You're my favicon.ico - always on my tab's mind",
      "Our love is like a PWA - works offline too",
      "You're my SEO optimization - making me rank #1 in happiness",
      "My love is like a CDN - distributed globally but always close",
      "You're my Node modules - sometimes mysterious but absolutely essential",
      "Our love is like a blockchain - immutable and decentralized",
      "You're my GraphQL query - always getting exactly what I need",
      "My heart is your Vercel deployment - instantly live for you",
      "You're my CSS Grid - perfectly aligning my world",
      "Our love is like Docker - containerized and portable",
      "You're my package.json - defining all my dependencies",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setMessage(generateMessage());
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg transition-all
                   transform hover:scale-105 active:scale-95 font-semibold text-lg relative overflow-hidden"
      >
        {isOpen ? 'Close Love Letter' : 'Open Your Digital Love 💌'}
        <motion.div
          className="absolute inset-0 bg-white opacity-0"
          animate={{ opacity: isOpen ? 0 : [0, 0.2, 0] }}
          transition={{ duration: 0.5 }}
        />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-6 bg-pink-50 rounded-lg border-2 border-red-200 shadow-md"
        >
          <div className="text-center space-y-4">
            <motion.p
              key={message}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-red-800 text-xl font-dancing min-h-[120px] flex items-center justify-center"
            >
              {message}
            </motion.p>
            
            <button
              onClick={() => setMessage(generateMessage())}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full
                         text-sm flex items-center gap-2 mx-auto transition-colors"
            >
              <span>Another Sweet Message</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💖
              </motion.span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}