

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Who Am I?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Holder */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/avatars/francis.JPG" // Placeholder path - Put actual image in /public/avatars/
              alt="Francis Dugbe" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700"
              onError={(e) => { e.target.src = '/placeholder-avatar.png'; /* Fallback avatar */ }}
            />
          </div>
          
          {/* About Caption */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am Francis Dugbe, a passionate entrepreneur with over 12 years of experience in business. 
              My journey has been built on strong values — honesty, integrity, and transparency — guiding every decision I make. 
              As CEO of Delova Logistics and Parabah E-Commerce, I lead a team with over 60 years of combined expertise, committed to providing high-quality products at the best prices while protecting the interests of our clients. 
              My vision is to build Africa's leading e-commerce platform — one that redefines trust and value in online shopping.
            </p>
            {/* Optional: Download Resume Button (if CV is available) */}
            {/* <a 
              href="/path/to/your/cv.pdf" 
              download="Francis_Dugbe_CV.pdf"
              className="inline-block bg-transparent hover:bg-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:text-white dark:hover:text-white py-2 px-6 border border-blue-600 dark:border-blue-400 hover:border-transparent rounded-full transition duration-300"
            >
              Download Resume
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

