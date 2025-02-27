"use client"
import React, { useRef } from "react";

const ContactPage = () => {
  const handleMouseMove = (e, ref) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.2;
    const y = (e.clientY - top - height / 2) * 0.2;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div className="min-h-screen bg-[#1C1D20] text-white flex flex-col justify-center items-center px-6">
      <div className="max-w-6xl w-full">
        <header className="flex justify-between items-center text-sm mb-10 mt-5">
          <span className="text-gray-400">&copy; Code by Ondrej</span>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="hover:underline">Work</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="#" className="hover:underline relative">
              Contact
              <span className="absolute -top-1 -right-3 w-1 h-1 bg-white rounded-full"></span>
            </a>
          </nav>
        </header>

        <main className="relative text-center md:text-left">
          <div className="md:hidden flex flex-col items-center mb-6">
            <img
              src="/assets/pictures/Sobota.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full mb-2"
            />
          </div>
          <h1 className="text-[12vw] md:text-[6vw] leading-tight mb-8">
            Let's start a <br />
            project together
          </h1>
          <div className="hidden md:flex justify-start items-center space-x-4">
            <img
              src="/assets/pictures/Sobota.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </main>

        <div className="lg:flex lg:gap-16 mt-12 md:mt-24">
          <section className="lg:w-2/3">
            {[
              "What's your name?",
              "What's your email?",
              "What's the name of your organization?",
              "What services are you looking for?",
              "Your message",
            ].map((label, index) => (
              <div key={index} className="border-t border-gray-800 py-8">
                <p className="text-gray-400 text-sm">0{index + 1}</p>
                <p className="text-3xl mt-2">{label}</p>
                <input
                  type="text"
                  placeholder={`${label} *`}
                  className="bg-transparent border-gray-600 w-full mt-6 text-xl py-2 focus:outline-none focus:border-white"
                />
              </div>
            ))}
          </section>

          <aside className="mt-12 lg:mt-0 lg:w-1/3">
            <div className="mb-10">
              <p className="font-semibold text-gray-400 text-sm mb-4">CONTACT DETAILS</p>
              <p className="text-white text-xl">ondrejzubek12@gmail.com</p>
              <p className="text-white text-xl">+421 903 935 613</p>
            </div>
            <div className="mt-12">
              <p className="font-semibold text-gray-400 text-sm mb-4">BUSINESS DETAILS</p>
              <p className="text-white text-xl">Ondrej Zubek CO.</p>
              <p className="text-white text-xl">Location: Slovakia</p>
            </div>
            <div className="mt-12">
              <p className="font-semibold text-gray-400 text-sm mb-4">SOCIALS</p>
              <ul className="mt-2 space-y-4 text-xl">
                {["Email ↗", "LinkedIn ↗", "Instagram →"].map((name, index) => {
                  const ref = useRef(null);
                  return (
                    <li
                      key={index}
                      ref={ref}
                      onMouseMove={(e) => handleMouseMove(e, ref)}
                      onMouseLeave={() => handleMouseLeave(ref)}
                      className="transition-transform duration-300 ease-out"
                    >
                      <a
                        href="#"
                        className="relative text-blue-600 hover:text-blue-400 transition-all duration-300 ease-in-out inline-block after:block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>

   <footer className="mt-20 text-gray-400 text-sm flex flex-col items-start">
  <div className="flex justify-between w-full mb-4">
    <p>2025 © Edition</p>
  </div>
</footer>
      </div>
    </div>
  );
};

export default ContactPage;
