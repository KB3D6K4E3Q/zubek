'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, slideUp } from '../animations/anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height: 0});
    const [isComplete, setIsComplete] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect(() => {
        if(index == words.length - 1) {
            setTimeout(() => {
                setIsComplete(true);
            }, 1000);
            return;
        }
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
        }
    }

    if (!mounted) return null;

    return (
        <AnimatePresence mode="wait">
            {!isComplete && (
                <motion.div 
                    variants={slideUp} 
                    initial="initial" 
                    exit="exit" 
                    className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-[#141516]"
                    style={{ transform: 'none' }}
                >
                    {dimension.width > 0 && 
                    <>
                        <motion.p 
                            variants={opacity} 
                            initial="initial" 
                            animate="enter"
                            exit="exit"
                            className="flex text-white text-[42px] items-center absolute z-[1]"
                        >
                            <span className="block w-[10px] h-[10px] bg-white rounded-full mr-[10px]"></span>
                            {words[index]}
                        </motion.p>
                        <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
                            <motion.path 
                                variants={curve} 
                                initial="initial" 
                                exit="exit"
                                fill="#141516"
                            ></motion.path>
                        </svg>
                    </>
                    }
                </motion.div>
            )}
        </AnimatePresence>
    )
} 