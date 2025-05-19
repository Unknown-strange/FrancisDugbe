import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [formStatus, setFormStatus] = useState(''); // To display success/error messages
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFormStatus(''); // Clear previous status

    try {
      const response = await fetch('https://potfolio-backend-vsoz.onrender.com/api/submit_contact_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus(`Success: ${result.message}`);
        setFormData({ name: '', email: '', comment: '' }); // Clear form
      } else {
        setFormStatus(`Error: ${result.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('Error: Could not connect to the server. Please try again later.');
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">How can you communicate?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">Let's Connect</h2>
        
        <div className="mb-12 text-gray-700 dark:text-gray-300">
          <p className="mb-2">Feel free to reach out:</p>
          <p><strong>Phone:</strong> 0548014321 / 0504725443</p>
          <p><strong>Email:</strong> <a href="mailto:francisdugbe967@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">francisdugbe967@gmail.com</a></p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" 
                placeholder="John Doe" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Enter Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" 
                placeholder="john.doe@example.com" 
                required 
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Write Something</label>
            <textarea 
              id="comment" 
              name="comment" 
              value={formData.comment}
              onChange={handleChange}
              rows="5" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" 
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {formStatus && (
            <p className={`mt-4 text-sm ${formStatus.startsWith('Error:') ? 'text-red-500 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

