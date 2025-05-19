import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, // Replaces circle-book-open
  PenTool, // Replaces microphone-alt
  BrainCircuit, // Replaces person-sign
  Search, // Replaces apartment
  Briefcase, // Replaces toolbox
  Handshake, // Replaces farm (Client Relations)
  Network // Replaces farm (Networking)
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Sales Strategist',
    description: 'I specialize in persuasive communication, using copywriting and strategic sales techniques to drive engagement and boost conversions.',
    Icon: Target,
  },
  {
    id: 2,
    title: 'Persuasive Writing',
    description: 'Crafting compelling copy that motivates readers to take action, such as making a purchase or signing up.',
    Icon: PenTool,
  },
  {
    id: 3,
    title: 'Behavioral Psychology',
    description: 'Using principles of psychology to understand consumer behavior and craft more persuasive messages.',
    Icon: BrainCircuit,
  },
  {
    id: 4,
    title: 'Market Research',
    description: 'Conducting research to identify customer pain points, desires, and preferences, allowing for better-targeted sales strategies.',
    Icon: Search,
  },
  {
    id: 5,
    title: 'Project Management',
    description: 'Leading and managing various projects to ensure they are completed on time and meet objectives.',
    Icon: Briefcase,
  },
  {
    id: 6,
    title: 'Client Relations',
    description: 'Building and maintaining strong relationships with clients to ensure satisfaction and repeat business.',
    Icon: Handshake,
  },
   {
    id: 7,
    title: 'Networking',
    description: 'Leveraging industry events, like the PENSA Dinner Awards, to build connections and grow the business.',
    Icon: Network,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="service" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">What I Do?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 text-white scale-105' : 'bg-white dark:bg-gray-700 hover:shadow-lg hover:-translate-y-1'}`}
              onClick={() => handleItemClick(index)}
              whileHover={{ scale: activeIndex !== index ? 1.03 : 1.05 }}
              layout // Animate layout changes
            >
              <service.Icon className={`h-10 w-10 mx-auto mb-4 ${activeIndex === index ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
              <h3 className={`text-xl font-semibold ${activeIndex === index ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{service.title}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait"> {/* Use mode="wait" for smoother transitions */}
          {activeIndex !== null && (
            <motion.div
              key={activeIndex} // Ensure re-render on index change
              className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-3xl mx-auto text-left md:text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h4 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{servicesData[activeIndex].title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{servicesData[activeIndex].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;

