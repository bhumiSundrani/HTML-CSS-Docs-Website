// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoCode, IoColorPalette, IoRocket, IoSchool } from 'react-icons/io5';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5efeb]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#567C8D] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">WebChisel Documentation</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive guides and references for HTML and CSS to build beautiful, responsive websites
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/docs/html" 
                className="px-6 py-3 bg-white text-[#567C8D] font-bold rounded-md hover:bg-gray-100 transition duration-200"
              >
                HTML Docs
              </Link>
              <Link 
                to="/docs/css" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-[#567C8D] transition duration-200"
              >
                CSS Docs
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#567C8D] mb-12">Why Use Our Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-[#567C8D] text-4xl mb-4">
                  <IoCode />
                </div>
                <h3 className="text-xl font-bold text-[#567C8D] mb-2">Clear Examples</h3>
                <p className="text-gray-600">
                  Practical code examples with explanations to implement in your projects right away.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-[#567C8D] text-4xl mb-4">
                  <IoColorPalette />
                </div>
                <h3 className="text-xl font-bold text-[#567C8D] mb-2">Modern Design</h3>
                <p className="text-gray-600">
                  Learn the latest design techniques and CSS features for creating stunning websites.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-[#567C8D] text-4xl mb-4">
                  <IoRocket />
                </div>
                <h3 className="text-xl font-bold text-[#567C8D] mb-2">Fast Loading</h3>
                <p className="text-gray-600">
                  Optimize your websites for the best performance using our best practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-[#567C8D] text-4xl mb-4">
                  <IoSchool />
                </div>
                <h3 className="text-xl font-bold text-[#567C8D] mb-2">Beginner Friendly</h3>
                <p className="text-gray-600">
                  Step-by-step tutorials that make web development accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Start Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#567C8D] mb-8">Quick Start Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#567C8D] mb-4">HTML Basics</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                    <span>Document structure</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                    <span>Basic elements</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">3</span>
                    <span>Forms and inputs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">4</span>
                    <span>Semantic HTML</span>
                  </li>
                </ul>
                <Link 
                  to="/docs/html/introduction" 
                  className="inline-block px-4 py-2 bg-[#567C8D] text-white rounded hover:bg-[#456b7d] transition duration-200"
                >
                  Start Learning HTML
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#567C8D] mb-4">CSS Fundamentals</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                    <span>Selectors and specificity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                    <span>Box model and layout</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">3</span>
                    <span>Flexbox and grid systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#567C8D] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">4</span>
                    <span>Responsive design</span>
                  </li>
                </ul>
                <Link 
                  to="/docs/css/introduction" 
                  className="inline-block px-4 py-2 bg-[#567C8D] text-white rounded hover:bg-[#456b7d] transition duration-200"
                >
                  Start Learning CSS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold flex items-center">
                <span className="mr-2"><IoCode /></span>
                WebChisel
              </div>
              <p className="text-gray-400 mt-1">Comprehensive HTML & CSS Documentation</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/docs/html" className="hover:text-gray-300">HTML Docs</Link>
              <Link to="/docs/css" className="hover:text-gray-300">CSS Docs</Link>
              <Link to="/contacts" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WebChisel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;