import React from 'react';

function HeroSection() {
    return (
      <section id="HeroSection" className="flex flex-col items-center justify-center text-center h-[100vh] p-6 bg-gradient-to-r from-blue-900 via-blue-600 to-pink-400 text-white pt-24">
        <h2 className="text-5xl font-extrabold mb-4">
          Bringing Divine Precision to Digital Solutions
        </h2>
        <p className="text-lg max-w-xl mb-6">
          Empowering businesses through expert web development and seamless automation services.
        </p>
        <button className="bg-yellow-400 text-black py-2 px-6 rounded-full font-bold hover:bg-yellow-500 transition">
          Get Started
        </button>
      </section>
    );
  }
  

export default HeroSection;