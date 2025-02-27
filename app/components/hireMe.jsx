"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HireMe = () => {
  return (
    <div className="flex items-center justify-center bg-black px-8 py-24 text-white">
      <BlockInTextCard
        tag="/ Hire Me"
        text={
          <>
            <strong>Looking for top-notch work?</strong> Let's build something amazing together!
          </>
        }
        examples={[
          "NNeed a creative developer?",
          "LLooking to build your dream app?",
          "Want stunning animations?",
          "HHire me today!",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-gray-400">{tag}</p>
        <hr className="border-gray-600" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed text-white">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-gray-700" />
      </div>
      <a
   href="/hireme"
   className="w-full flex justify-center rounded-full border border-white py-3 px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#1C1D20] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1D20]"
 >
   Hire Me
 </a>
    </div>
  );
};

const LETTER_DELAY = 0.05;
const SWAP_DELAY_IN_MS = 3000;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentChar = 0;
    const interval = setInterval(() => {
      if (currentChar < examples[exampleIndex].length) {
        setDisplayText((prev) => prev + examples[exampleIndex][currentChar]);
        currentChar++;
      } else {
        setTimeout(() => {
          setDisplayText("");
          currentChar = 0;
          setExampleIndex((prev) => (prev + 1) % examples.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [exampleIndex, examples]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-gray-500">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3">EXAMPLE: {displayText}</span>
    </p>
  );
};

export default HireMe;
