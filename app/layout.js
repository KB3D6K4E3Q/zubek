"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Header from "./header/index.jsx";
import Preloader from './components/Preloader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
<meta name="google-site-verification" content="LrJFY3rjL0-MjvKr0DPI8J6UzVHOsUF2BxmJegNCXEw" />      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>

        <AnimatePresence mode="wait">
          <Preloader />
        </AnimatePresence>
        <div key={pathname} className="overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
