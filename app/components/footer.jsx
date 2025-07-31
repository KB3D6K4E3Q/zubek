"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from './menu/Magnetic';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [90, 0]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            setIsVisible(scrollPosition >= documentHeight - 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            ref={container}
            style={{ y }}
            className="bg-black text-white py-12 px-6 md:px-20 flex flex-col gap-12 items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                        fill
                        alt="avatar"
                        src="/assets/pictures/Logo.png"
                    />
                </div>
                <h2 className="text-4xl font-semibold leading-tight">
                    Let’s work<br />together
                </h2>
                <motion.div style={{ rotate }}>
                    <a href="mailto:zubek.founder@gmail.com">
                        <button className="bg-[#4D5BFF] text-white px-8 py-4 rounded-full text-lg mt-4">
                            Get in touch
                        </button>
                    </a>
                </motion.div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 w-full max-w-md">
                <a href="mailto:zubek.founder@gmail.com" className="w-full border border-gray-600 py-3 rounded-full block">
                    <p>zubek.founder@gmail.com</p>
                </a>
                <a href="tel:+421903935613" className="w-full border border-gray-600 py-3 rounded-full block">
                    <p>+421 903 935 613</p>
                </a>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-10 text-sm">
                <div className="flex flex-col gap-4 text-left md:text-left">
                    <div>
                        <h3 className="text-gray-400">VERSION</h3>
                        <p>2025 © Edition</p>
                    </div>
                    <div>
                        <h3 className="text-gray-400">LOCAL TIME</h3>
                        <p>11:49 PM GMT+2</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-gray-400">SOCIALS</h3>
                    <div className="flex flex-wrap gap-4">
                        <Magnetic>
                            <a href="https://www.instagram.com/_ondrej.zubek_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.linkedin.com/in/ondrej-zubek-580b6534a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
