import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div  className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-600 to-pink-400 text-white">
      <Navbar />
      <div id="#HeroSection"> 
        <HeroSection />
      </div>
      <div id="#services" className="mt-20"> 
        <ServicesSection />
      </div>
      <div id="#portfolio" className="mt-20">
        <PortfolioSection />
      </div>
      <div id="#contact" className="mt-5">
        <ContactSection />
      </div>

      <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; 2025 Divine Software Solutions. All Rights Reserved.</p>
                <div>
                  {/* enter linkedin company website*/}
                    <a href="https://www.linkedin.com" className="mx-2 text-gray-300 hover:text-white">LinkedIn</a>
                    <a href="https://github.com/Jonwil7493" className="mx-2 text-gray-300 hover:text-white">GitHub</a>
                </div>
            </div>
        </footer>
    </div>

  );
}

export default App;
