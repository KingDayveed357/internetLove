import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentine's Love Hub 💖",
  description: "Celebrate love this Valentine’s season with personalized messages, countdowns, and heartfelt letters. Created with love by David Aniago.",
  keywords: ["Valentine", "Love", "Messages", "Internet love", "Internet Lover", "Proposal", "Countdown", "Heartfelt Letters"],
  authors: [{ name: "David Aniago", url: "https://aniago-david.vercel.app/" }],
  creator: "David Aniago",
  openGraph: {
    title: "Valentine's Love Hub 💖",
    description: "Express your love in unique ways! Send personalized messages, love letters, and more.",
    url: "https://internet-lover.vercel.app/",
    siteName: "Valentine's Love Hub, Internet Lover",
    images: [
      {
        url: "/love.jpg",
        width: 1200,
        height: 630,
        alt: "Valentine's Love Hub - Share love this season",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Love Hub 💖",
    description: "Make your Valentine special with personalized love messages and surprises!",
    images: ["/love.jpg"],
  },
  themeColor: "#FF69B4",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
