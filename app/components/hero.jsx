"use client";
import Lenis from "@studio-freight/lenis";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

const SECTION_HEIGHT = 1500;

export const SmoothScrollHero = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Lenis
        root
        options={{
          lerp: 0.05,
          infinite: false, // Prevent infinite loop causing missing bottom content
          syncTouch: true,
        }}
      >
        <Nav />
        <Hero />
        <Schedule />
      </Lenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/50 backdrop-blur-md text-white">
      <SiSpacex className="text-3xl" />
      <button
        onClick={() => {
          const scheduleSection = document.getElementById("launch-schedule");
          if (scheduleSection) {
            scheduleSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

export const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full bg-black"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-center bg-no-repeat z-0"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/assets/pictures/Logo.png)",
      }}
    />
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/assets/pictures/Prequel.png"
        alt="Space launch"
        start={-200}
        end={200}
        className="w-1/3 rounded-3xl"
      />
      <ParallaxImg
        src="/assets/pictures/CarePulse.png"
        alt="Space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-3xl"
      />
      <ParallaxImg
        src="/assets/pictures/Portfolio.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-3xl"
      />
      <ParallaxImg
        src="/assets/pictures/CarePulse2.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-3xl"
      />
    </div>
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 bg-black text-white relative z-20"
      style={{ minHeight: "100vh" }}
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
