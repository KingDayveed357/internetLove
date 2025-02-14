"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ValentineProposal() {
  const [response, setResponse] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-red-500 text-white p-6 relative">
      {/* Floating Hearts */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="absolute -top-10 left-10 text-6xl animate-bounce">❤️</div>
        <div className="absolute top-10 right-10 text-4xl animate-bounce">💖</div>
        <div className="absolute bottom-10 left-20 text-5xl animate-bounce">💕</div>
        <div className="absolute bottom-20 right-20 text-3xl animate-bounce">💘</div>
      </motion.div>

      {/* Lottie Animation */}
      <DotLottieReact
        src="https://lottie.host/ce4d77e5-dd10-4abf-b186-e73bc5cc886d/hTNRCvVNiY.lottie"
        loop
        autoplay
        style={{ height: 300, width: 300 }}
      />

      <h2 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
        Will You Be My Val? 🥹❤️
      </h2>

      {/* Buttons for Yes or No */}
      <div className="flex gap-6 mt-4">
        <button
          onClick={() => setResponse("Yay! 💕 Can't wait!")}
          className="bg-white text-pink-600 px-6 py-3 text-xl font-bold rounded-full shadow-lg hover:bg-pink-200 transition"
        >
          Yes! 💘
        </button>

        <motion.button
          onMouseEnter={(e) => {
            e.currentTarget.style.position = "absolute";
            e.currentTarget.style.left = `${Math.random() * 80}vw`;
            e.currentTarget.style.top = `${Math.random() * 80}vh`;
          }}
          className="bg-white text-gray-600 px-6 py-3 text-xl font-bold rounded-full shadow-lg hover:bg-gray-300 transition cursor-pointer"
        >
          No 😭
        </motion.button>
      </div>

      {/* Response Message with WhatsApp Link */}
      {response && (
        <motion.div
          className="mt-6 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-bold bg-white text-pink-600 px-6 py-3 rounded-lg shadow-lg">
            {response}
          </p>
          <a
            href="https://wa.link/d0jjk7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white text-purple-500 px-6 py-3 text-xl font-bold rounded-full shadow-lg hover:from-pink-400-to-red-500 transition"
          >
            Text me😂
          </a>
        </motion.div>
      )}
    </div>
  );
}
