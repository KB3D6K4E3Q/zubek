"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonContent } from "./buttonContent.jsx";
import { BentoGridDemo } from "./bentoGrid.jsx";


const HowItWorks = () => {
  const imageRef = useRef(null);
  const videoRef = useRef();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(imageRef.current,
      { scale: 1 },
      {
        scale: 1.2, // Zoom in effect
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%', // Trigger animation when the top of the image is 80% from the top of the viewport
          end: 'top 30%', // Stop when the image reaches 30% from the top of the viewport
          scrub: 1, // Smooth animation while scrolling
        },
        duration: 1.5, // Duration of the zoom effect
        ease: 'power2.inOut', // Ease effect for smooth zoom
      }
    );
  }, []);

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src='/Logo2.png' alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Built for performance.
            <br />Designed for impact.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest evolution in the future of digital experiences.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src='Frame.png'
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src='/frameVideo.mp4' type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">NextGenMedia: SMMA Company</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              <span className="text-white">
                NextGen Media - Powering the Future of Digital Marketing. {''}
              </span>A cutting-edge website designed for
            </p>

            <p className="hiw-text g_fadeIn">
              NextGen Media, a results-driven SMMA company. Built with speed, precision, and a seamless
              user experience, this platform
              showcases their expertise in social media marketing, branding, and content strategy.{''}
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Engage.</p>
            <p className="hiw-bigtext">Convert.</p>
            <p className="hiw-text">Dominate.</p>
          </div>
        </div>

        <div className="flex justify-center mt-6 p-10"> {/* Flex container to center the button */}
          <button
            className="relative px-6 py-3 text-lg font-medium text-white bg-neutral-900 rounded-full transition-all duration-300 ease-in-out shadow-md overflow-hidden group"
            onClick={handleShowMore}
          >
            <span className="absolute inset-0 bg-neutral-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20"></span>
            <span className="relative z-10">Wanna see more?</span>
          </button>
        </div>

        {showMore && (

            <BentoGridDemo />
        )}
      </div>
    </section>
  )
}

export default HowItWorks;
