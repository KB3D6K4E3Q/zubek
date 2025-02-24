"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useCallback } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export const HoverImageLinks = () => {
  return (
    <section className="bg-black p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <LinkComponent heading="About" subheading="Comming soon!" imgSrc="/assets/pictures/Passion.jpg" href="#" />
        <LinkComponent heading="Clients" subheading="Comming soon!" imgSrc="/assets/pictures/Idea.jpg" href="#" />
        <LinkComponent heading="Projects" subheading="My work speaks for itself" imgSrc="/assets/pictures/Projects.jpg" href="#chip" />
        <LinkComponent heading="Career" subheading="Dive into my start as a developer" imgSrc="/assets/pictures/Computer.jpg" href="/casestudies" />
        <LinkComponent heading="Fun" subheading="In case you're bored" imgSrc="/assets/pictures/Happy.jpg" href="/fun" />
      </div>
    </section>
  );
};

const LinkComponent = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const setRef = useCallback((node) => {
    if (node) ref.current = node;
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.div
        ref={setRef} // ✅ Corrected
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-neutral-50" />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default HoverImageLinks;
