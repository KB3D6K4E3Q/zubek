'use client'
import Image from 'next/image'
import { useRef,useEffect,  useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { slideUp } from '../animations/animation'


export default function Home() {
  const firstText = useRef<HTMLParagraphElement>(null)
  const secondText = useRef<HTMLParagraphElement>(null)
  const slider = useRef<HTMLDivElement>(null)
  let xPercent = 0
  let direction = -1

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (self) => {
          direction = self.direction * -1
        }
      },
      x: '-500px'
    })

    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }

    gsap.set(firstText.current, { xPercent })
    gsap.set(secondText.current, { xPercent })

    xPercent += 0.1 * direction
    requestAnimationFrame(animate)
  }

  return (

    <motion.main
        initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
      className="relative flex h-screen overflow-hidden"
    >
      <Image
        src="/assets/pictures/Landing.jpg"
        alt="background"
        fill
        className="object-cover"
      />

      {/* Sliding text */}
      <div
        className="absolute"
        style={{ top: 'calc(100vh - 350px)' }}
      >
        <div
          ref={slider}
          className="relative whitespace-nowrap"
        >
          <p
            ref={firstText}
            className="relative m-0 text-white text-[80px] md:text-[150px] lg:text-[230px] font-medium pr-[50px]"
          >
            Ondrej Zubek -
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 text-white text-[80px] md:text-[150px] lg:text-[230px] font-medium pr-[50px]"
          >
            Ondrej Zubek -
          </p>
        </div>
      </div>

      {/* Description block */}
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="absolute top-[35%] left-[50%] md:left-[65%] text-white text-[18px] md:text-[24px] font-light px-4 md:px-0"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-200 mb-[50px] md:mb-[100px]"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p className="m-0 mb-2.5">Freelance</p>
        <p className="m-0 mb-2.5">Designer &amp; Developer</p>
      </div>
    </motion.main>
  )
}
