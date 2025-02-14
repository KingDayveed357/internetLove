'use client';
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function personalisedMessage() {
  const [name, setName] = useState<string>('');
  const [customMessage, setCustomMessage] = useState<string>('');
  const [animationUrl, setAnimationUrl] = useState<string | null>(null);
  const getRandomElement = <T,>(array: T[]): T => 
    array[Math.floor(Math.random() * array.length)];
  const adjectives: string[] = [
    "Adorable", "Charming", "Radiant", "Lovely", "Enchanting", "Affectionate", "Alluring", "Ambrosial", "Angelic",
    "Attractive", "Breathtaking", "Beaming", "Blissful", "Captivating", "Cheerful", "Classy", "Cuddly", "Cute",
    "Dazzling", "Delightful", "Divine", "Dreamy", "Enchanting", "Endearing", "Ethereal", "Exquisite", "Fabulous",
    "Fascinating", "Flawless", "Glamorous", "Gorgeous", "Graceful", "Heavenly", "Heartwarming", "Lively", "Luminous",
    "Magical", "Mesmerizing", "Radiant", "Resplendent", "Sparkling", "Stunning", "Sweet", "Tender", "Vibrant",
    "Vivacious", "Winsome", "Wondrous", "Astonishing", "Blissful", "Charming", "Delectable", "Ebullient", "Elegant",
    "Exhilarating", "Fervent", "Glorious", "Heartening", "Incredible", "Jubilant", "Keen", "Loving", "Magnificent",
    "Nurturing", "Opulent", "Passionate", "Quixotic", "Radiant", "Sensational", "Tender", "Uplifting", "Vivid",
    "Whimsical", "Xenial", "Youthful", "Zestful",

  ];
  
  const endings: string[] = [
    "like a React hook!", "like a perfect function!", "like a well-placed prop!", "like a flawless UI component!",
    "like a perfectly optimized website!", "like an infinite loop of joy!", "like a CSS animation that never ends!",
    "like a bug-free JavaScript function!", "like an API that always returns 200!", "like a seamless user experience!",
    "like the best Git commit ever!", "like a well-styled Tailwind component!", "like a Redux store with perfect state!",
    "like a perfectly executed async function!", "like a beautiful piece of clean code!", "like a pull request with no conflicts!",
    "like a state update that makes everything better!", "like an animation that never lags!", "like a TypeScript function with zero errors!",
    "like a GitHub repo with 1000 stars!", "like an ultra-fast React app!", "like the most efficient SQL query!",
    "like a beautifully structured HTML document!", "like a component that auto-scales perfectly!",
    "like an elegant use of recursion!", "like a promise that always resolves!", "like a CSS flexbox that always aligns right!",
    "like a server with 0% downtime!", "like a well-documented API!", "like a smooth page transition!",
    "like a perfectly styled SVG icon!", "like a well-crafted design system!", "like a beautifully designed website!",
    
  ];
  
  const loveEmojis: string[] = [
    "💖", "💕", "💘", "💝", "❤️", "😍", "😘", "💗", "💓", "💞", "💟", "🌹", "🥰", "💙", "💚", "💛", "🧡", "💜",
    "💎", "🌸", "💌", "💖", "💫", "✨", "🌷", "💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "💍", "💏", "🎀", "💃", "🕺",
    "🎶", "🌈", "💃🏻", "🕺🏻", "🧸", "🥀", "🤍", "❣️", "💭", "🎊", "💃🏽", "🕺🏽", "🎉", "🍓", "🍫", "🍰", "🎁",
    "🏹", "💋", "🌼", "🌻", "🕊️", "🎵", "🌟", "🦢", "💌", "🩷", "🫀", "💓", "💗", "💖", "🪽", "💃🏼", "🕺🏼",
    "🎠", "💐", "🌺", "🥰", "💎", "💫", "🎶", "🎀",
    

  ];
  
  const loveAnimations: string[] = [
    "https://lottie.host/dcf88f3c-ee54-4c03-b75d-f47814b0c32b/7DfoQYUyHd.lottie",
    "https://lottie.host/ed03b583-8f96-426e-9836-b73e1d8c4c82/cz4yafiHjn.lottie",
    "https://lottie.host/b5f1ab20-874d-416e-81ae-3d34c5b04cb3/c0cHuN8isz.lottie",
    "https://lottie.host/9f6e7056-2110-484f-9e3d-d7ad20e68ec4/fCayoyppZg.lottie",
    "https://lottie.host/af9e413a-9a68-460c-b0a6-c0b4e42cd767/dLQl300F8h.lottie",
  ];

  const generateMessageAndAnimation = (): void => {
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];
    const randomLoveEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
    const message = `To my ${randomAdj} ${name || 'Love'}, you make my heart flutter ${randomEnding} ${randomLoveEmoji}`;

    setCustomMessage(message);
    setAnimationUrl(getRandomElement(loveAnimations));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-red-300 to-purple-300 p-4">
      <div className="space-y-4 p-8 bg-white bg-opacity-80 rounded-lg shadow-lg text-center">
        <input
          type="text"
          placeholder="Enter your loved one's name"
          className="border text-red-400 p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={generateMessageAndAnimation}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Generate Special Message
        </button>
        {customMessage && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <p className="text-red-800 italic">{customMessage}</p>
          </div>
        )}
        {animationUrl && (
          <div className="mt-4">
            <DotLottieReact src={animationUrl} loop autoplay style={{ height: 300, width: 300 }} />
          </div>
        )}
      </div>
    </div>
  );
}
