import React from 'react';

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Portfolio Item 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="path/to/mockup1.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Website Redesign for Restaurant</h3>
            <p className="text-gray-700 mt-2">A mockup redesign of a restaurant website, improving UX and mobile responsiveness.</p>
          </div>
          {/* Portfolio Item 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="path/to/mockup2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">E-commerce Web App</h3>
            <p className="text-gray-700 mt-2">A conceptual design for an e-commerce website focused on simplicity and functionality.</p>
          </div>
          {/* Portfolio Item 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="path/to/mockup3.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Fitness Tracker App</h3>
            <p className="text-gray-700 mt-2">A prototype for a fitness tracker mobile app with goal-setting features and progress tracking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
