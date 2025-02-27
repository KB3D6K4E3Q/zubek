"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AppleCards from "../components/AppleCards.jsx";
import Footer from "../components/footer.jsx";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const page = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between bg-white text-black p-8">
      <header className="flex justify-between items-center">
        <span className="text-sm">© Code by Ondrej</span>
      </header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 flex flex-col md:flex-row justify-between items-center text-5xl md:text-6xl font-medium leading-tight min-h-[100vh]"
      >
        <motion.div variants={fadeIn}>
          <h1>Helping brands thrive</h1>
          <h1>in the digital world</h1>

          <div className="max-w-md text-sm mt-8">
            <p>I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</p>
            <p className="text-gray-400 mt-4">Always exploring.</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <img
            src="/assets/pictures/about.jpg"
            alt="About me"
            className="w-[50vw] sm:w-[75vw] md:w-[35vw] h-auto shadow-2xl rounded-lg"
          />
        </motion.div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mt-16 md:mt-24 pb-16 px-8 md:px-16"
      >
        <h2 className="text-4xl font-medium mb-8">I can help you with ...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Design", "Development", "✨ The full package"].map((title, index) => (
            <motion.div key={index} variants={fadeIn}>
              <h3 className="text-lg font-medium">{`0${index + 1} ${title}`}</h3>
              <p className="text-sm mt-2">
                {index === 0 && "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)"}
                {index === 1 && "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Building with Webflow (or Kirby CMS)."}
                {index === 2 && "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <AppleCards />
      <Footer />
    </section>
  );
};

export default page;
