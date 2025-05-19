import React from 'react';

const Header = () => {
  return (
    <header id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-gray-700 dark:bg-gray-900" style={{ backgroundImage: "url('/avatars/francis.JPG')" }}> {/* Placeholder background */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="block uppercase mb-2">HI!</span>
          <span className="block">I am Francis Dugbe</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          CEO of <br className="sm:hidden"/> DELOVA LOGISTIC AND PARABAH E-COMMERCE
        </p>
        
        {/* Use an anchor tag for smooth scrolling */}
        <a 
          href="#portfolio" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Visit My Works
        </a>
      </div>
    </header>
  );
};

export default Header;

