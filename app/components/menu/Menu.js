"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import Magnetic from './Magnetic';
import Link from 'next/link';

export default function AvaroMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isAnimating = useRef(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const linkRefs = useRef([]);
  const socialRefs = useRef([]);
  const videoRef = useRef(null);
  const headerRef = useRef(null);

  // Handle scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      'hop',
      'M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1'
    );

    // split header text into spans
    if (headerRef.current) {
      const text = headerRef.current.innerText;
      headerRef.current.innerHTML = text
        .split('')
        .map((char) => `<span>${char === ' ' ? '&nbsp;&nbsp;' : char}</span>`)
        .join('');
    }

    // initial animation states
    gsap.set(linkRefs.current, { y: 30, opacity: 0 });
    gsap.set(socialRefs.current, { y: 30, opacity: 0 });
    if (videoRef.current) {
      gsap.set(videoRef.current.parentElement, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      });
    }
    if (headerRef.current) {
      gsap.set(headerRef.current.querySelectorAll('span'), {
        y: 500,
        rotateY: 90,
        scale: 0.8,
        transformOrigin: 'bottom',
      });
    }
  }, []);

  const toggleMenu = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsOpen((open) => !open);

    const menu = menuRef.current;
    const links = linkRefs.current;
    const socials = socialRefs.current;
    const videoWrapper = videoRef.current?.parentElement;
    const spans = headerRef.current?.querySelectorAll('span');

    if (!menu) return;

    if (!isOpen) {
      // opening
      gsap.to(menu, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'hop',
        duration: 1.5,
        onStart: () => (menu.style.pointerEvents = 'all'),
        onComplete: () => (isAnimating.current = false),
      });
      gsap.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.to(socials, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: 'power3.out',
      });
      if (videoWrapper) {
        gsap.to(videoWrapper, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'hop',
          duration: 1.5,
          delay: 0.5,
        });
      }
      if (spans) {
        gsap.to(spans, {
          rotateY: 0,
          y: 0,
          scale: 1,
          stagger: 0.05,
          delay: 0.75,
          duration: 1.5,
          ease: 'power4.out',
        });
      }
    } else {
      // closing
      gsap.to(menu, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        ease: 'hop',
        duration: 1.5,
        onComplete: () => {
          menu.style.pointerEvents = 'none';
          gsap.set(menu, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
          gsap.set(links, { y: 30, opacity: 0 });
          gsap.set(socials, { y: 30, opacity: 0 });
          if (videoWrapper) {
            gsap.set(videoWrapper, {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            });
          }
          if (spans) {
            gsap.set(spans, { y: 500, rotateY: 90, scale: 0.8 });
          }
          isAnimating.current = false;
        },
      });
    }
  };

  return (
    <div className="w-full h-screen bg-cover bg-center relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-8 text-black font-[Schabo] text-6xl font-light uppercase">
        <a href="#">Zubek</a>
      </div>

      {/* Toggle */}
      <Magnetic>
        <div
          ref={toggleRef}
          onClick={toggleMenu}
          className={`fixed top-8 right-8 h-[60px] rounded-full bg-black z-[9999] cursor-pointer transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
            isOpen ? 'w-[60px]' : 'w-[120px]'
          }`}
          style={{ transformOrigin: 'right', transitionTimingFunction: 'cubic-bezier(0.075,0.82,0.165,1)' }}
        >
          <div
            className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white uppercase text-xs font-medium pointer-events-none"
            style={{ transition: 'left 0.5s cubic-bezier(0.075,0.82,0.165,1)' }}
          >
            Menu
          </div>
          <div
            className="absolute right-0 w-[60px] h-full bg-yellow-300 rounded-full flex items-center justify-center transform"
            style={{
              clipPath: isOpen ? 'circle(50% at 50% 50%)' : 'circle(10% at 50% 50%)',
              transition: 'clip-path 0.5s cubic-bezier(0.075,0.82,0.165,1)',
            }}
          >
            <div
              className="relative w-7 h-7 flex flex-col justify-center items-center transition-all duration-1000 ease-in-out"
              style={{ top: isOpen ? '0' : '20%', opacity: isOpen ? 1 : 0 }}
            >
              <div
                className="w-[15px] h-[2px] bg-black mb-1 transform transition-transform duration-250"
                style={{ transform: isOpen ? 'rotate(45deg) scaleX(1.05)' : 'translateY(-3px)' }}
              />
              <div
                className="w-[15px] h-[2px] bg-black transform transition-transform duration-250"
                style={{ transform: isOpen ? 'rotate(-45deg) scaleX(1.05)' : 'translateY(3px)' }}
              />
            </div>
          </div>
        </div>
      </Magnetic>

      {/* Menu Overlay */}
      <div
      ref={menuRef}
      className={`fixed inset-0 flex bg-black z-[9998] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)'
      }}
      >

        <div className="flex-1 flex flex-col justify-between p-8 pt-40 text-right relative">
          <div className="absolute top-8 left-8 text-white font-[Schabo] text-6xl font-light uppercase">
            <a href="#">Zubek</a>
          </div>
          <div className="space-y-4">
  {[
    { text: 'Career', href: '/career' },
    { text: 'About', href: '/about' },
    { text: 'Hire-Me', href: '/hire-me' },
  ].map(({ text, href }, i) => (
    <div
      key={i}
      ref={(el) => (linkRefs.current[i] = el)}
      className="text-4xl font-light text-white uppercase"
    >
      <Link
        href={href}
        onClick={() => {
          // Optional: close menu when navigating
          setIsOpen(false);
        }}
      >
        {text}
      </Link>
    </div>
  ))}
</div>

          <div className="w-full aspect-video bg-gray-900 overflow-hidden" ref={(el) => el && (videoRef.current = el.firstChild)}>
            <video className="w-full h-full object-cover" src="/assets/video.mp4" autoPlay muted loop />
          </div>
        </div>
        <div className="flex-2 flex flex-col justify-between p-8 pt-40 text-white uppercase text-xs font-mono">
          <div className="flex space-x-8">
            <div className="space-y-1">
              {['Zubek','Nam. Najsv. Trojice 635', 'Slovakia', '', 'zubek.founder@gmail.com', '+421 903-935-613'].map((line, i) => (
                <p key={i} ref={(el) => (socialRefs.current[i] = el)}>{line}</p>
              ))}
            </div>
            <div className="space-y-1">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook', '', '01 62 31 82 42'].map((line, i) => (
                <p key={i + 7} ref={(el) => (socialRefs.current[i + 7] = el)}>{line}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden h-[400px]">
            <h1 ref={headerRef} className="font-[Schabo] text-[20rem] font-light leading-none break-words">
              Zubek
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
