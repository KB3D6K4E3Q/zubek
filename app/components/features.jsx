"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { animateWithGsap } from '../utils/animations';


const Features = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

   animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 })
      animateWithGsap(
        '.g_text',
        { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
      )

    // Optionally, you can trigger animations for the video too if needed
    gsap.to(videoRef.current, { opacity: 1, duration: 1, delay: 2 }); // Example animation
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Discover </h2>
            <h2 className='text-5xl lg:text-7xl font-semibold'>Innovation</h2>
          </div>
          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video
                playinline='true'
                id='exploreVideo'
                className='w-full h-[400px] object-cover object-center rounded-2xl'
                preload='none'
                muted
                autoPlay
                ref={videoRef} // Ref to the video element
              >
                <source src='/assets/videos/Hero.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='flex flex-col w-full relative'>
              <div className='feature-video-container'>
                <div className='overflow-hidden flex-1 h-[50vh] rounded-2xl'>
                  <img src='/assets/pictures/explore4.png' alt='titanium' className='feature-video g_grow' />
                </div>
                <div className='overflow-hidden flex-1 h-[50vh] rounded-2xl'>
                  <img src='/assets/pictures/explore3.png' alt='titanium' className='feature-video g_grow' />
                </div>
              </div>
                <div className='feature-text-container'>
                  <div className='flex-1 flex-center'>
                    <p className='feature-text g_text'>
                    Built with precision. Designed for impact. {' '}
                      <span className='text-white'>
                      Every project is a blend of innovation, performance, and seamless experience. {' '}
                      </span>
                      From code to creation, every detail has a purpose.
                      This isn't just development—it's a vision brought to life.
                    </p>
                  </div>

                  <div className='flex-1 flex-center'>
                    <p className='feature-text g_text'>
                      <span className='text-white'>
                      Every line of code tells a story. {' '}
                      </span>
                      Each project is a step forward—crafted with precision, built for performance, and designed to push boundaries.
                      Innovation isn't just a goal. It's the foundation.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
