"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-400 to-pink-600 text-white p-6 relative">
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
        src="https://lottie.host/dcf88f3c-ee54-4c03-b75d-f47814b0c32b/7DfoQYUyHd.lottie"
        loop
        autoplay
        style={{ height: 300, width: 300 }}
      />

      {/* Main Text */}
      <h1 className="text-5xl font-extrabold text-center drop-shadow-lg">
        Welcome to <span className="text-yellow-300">David's</span> Valentine Hub! 💝
      </h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        Love is in the air, and so is **great web development**! I'm{" "}
        <span className="font-bold text-yellow-200">David Aniago</span>, a passionate full-stack
        web developer bringing creativity and tech together to build **beautiful** and **interactive**
        web experiences. This app is your ultimate **Valentine's Day companion**—so enjoy the magic! ✨
      </p>

      {/* Navigation Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/personalisedMessage">
          <button className="bg-white text-pink-600 px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:bg-pink-200 transition">
            💌 Personalised Message
          </button>
        </Link>

        <Link href="/countDownTimer">
          <button className="bg-white text-red-600 px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:bg-red-200 transition">
            ⏳ Countdown Timer
          </button>
        </Link>

        <Link href="/loveLetter">
          <button className="bg-white text-purple-600 px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:bg-purple-200 transition">
            💖 Write a Love Letter
          </button>
        </Link>

        <Link href="/valentineProposal">
          <button className="bg-white text-green-600 px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:bg-green-200 transition">
            ❤️ Valentine Proposal
          </button>
        </Link>
      </div>
    </div>
  );
}
