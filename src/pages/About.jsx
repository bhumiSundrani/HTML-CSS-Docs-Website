import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-[#567C8D] mb-6">About WebChisel</h1>
          
          <div className="text-gray-700 space-y-4">
            <p>
              WebChisel is a dedicated platform for web development learning and documentation. 
              Our mission is to provide clear, comprehensive, and practical resources for developers 
              of all skill levels.
            </p>
            
            <h2 className="text-xl font-semibold text-[#567C8D] mt-4">Our Vision</h2>
            <p>
              We believe in empowering developers by offering high-quality, accessible documentation 
              and tutorials across web technologies. From beginner guides to advanced techniques, 
              WebChisel is your trusted companion in web development.
            </p>
            
            <h2 className="text-xl font-semibold text-[#567C8D] mt-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive documentation for web technologies</li>
              <li>Step-by-step tutorials and practical examples</li>
              <li>Up-to-date resources covering the latest web development trends</li>
              <li>Community-driven content and insights</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-md">
          <h3 className="font-bold text-blue-700 mb-2">Our Team</h3>
          <p className="text-blue-800 mb-4">
            WebChisel is built by passionate developers who want to make learning web technologies easier and more accessible.
          </p>
          <div className="flex gap-4">
            <div className="bg-white flex-wrap items-center justify-center flex-1  p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-[#567C8D] mb-2">Bhumi Sundrani</h4>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
            <div className="bg-white flex-1  p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-[#567C8D] mb-2">Bhoomi Bajaj</h4>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>
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

export default About;