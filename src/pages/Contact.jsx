import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-[#567C8D] mb-6">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[#567C8D] mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#567C8D]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[#567C8D] mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#567C8D]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-[#567C8D] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#567C8D]"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="flex items-center justify-center w-full bg-[#567C8D] text-white py-2 rounded-md hover:bg-[#4a6a7a] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-md">
          <h3 className="font-bold text-blue-700 mb-2">Contact Information</h3>
          <p className="text-blue-800 mb-4">
            Have questions or suggestions? We're here to help!
          </p>
          <ul className="space-y-1 text-blue-700">
            <li>• Email: support@webchisel.com</li>
            <li>• Phone: +91 8547957890</li>
            <li>• Office Hours: Mon-Fri, 9 AM - 5 PM IST</li>
          </ul>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} WebChisel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;