// src/pages/docs/HTMLDocs.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { IoBookmark, IoCode, IoConstruct, IoGrid } from 'react-icons/io5';

const HTMLDocs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#567C8D]">HTML Documentation</h1>
          <SearchBar />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
            <IoBookmark className="mr-2" /> Getting Started with HTML
          </h2>
          <p className="text-gray-700 mb-4">
            HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. 
            It defines the structure and content of your web pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link 
              to="/docs/html/introduction" 
              className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <h3 className="font-bold text-[#567C8D] mb-1">Introduction to HTML</h3>
              <p className="text-sm text-gray-600">Learn the basics of HTML and its purpose</p>
            </Link>
            <Link 
              to="/docs/html/elements" 
              className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <h3 className="font-bold text-[#567C8D] mb-1">HTML Elements</h3>
              <p className="text-sm text-gray-600">Understand the building blocks of HTML</p>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic HTML Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
              <IoCode className="mr-2" /> HTML Basics
            </h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/docs/html/introduction" 
                  className="text-[#567C8D] hover:underline"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/elements" 
                  className="text-[#567C8D] hover:underline"
                >
                  Elements
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/attributes" 
                  className="text-[#567C8D] hover:underline"
                >
                  Attributes
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/headings" 
                  className="text-[#567C8D] hover:underline"
                >
                  Headings
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/paragraphs" 
                  className="text-[#567C8D] hover:underline"
                >
                  Paragraphs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Advanced HTML Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
              <IoConstruct className="mr-2" /> Advanced HTML
            </h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/docs/html/semantic" 
                  className="text-[#567C8D] hover:underline"
                >
                  Semantic HTML
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/forms" 
                  className="text-[#567C8D] hover:underline"
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/tables" 
                  className="text-[#567C8D] hover:underline"
                >
                  Tables
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/meta-tags" 
                  className="text-[#567C8D] hover:underline"
                >
                  Meta Tags
                </Link>
              </li>
            </ul>
          </div>
          
          {/* HTML Examples Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
              <IoGrid className="mr-2" /> HTML Examples
            </h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/docs/html/examples/basic-layout" 
                  className="text-[#567C8D] hover:underline"
                >
                  Basic Layout
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/examples/contact-form" 
                  className="text-[#567C8D] hover:underline"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/html/examples/navigation" 
                  className="text-[#567C8D] hover:underline"
                >
                  Navigation Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Recommended Resources */}
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-md">
          <h3 className="font-bold text-blue-700 mb-2">Recommended Resources</h3>
          <p className="text-blue-800 mb-4">
            Looking for more in-depth information? Check out these external resources:
          </p>
          <ul className="space-y-1 text-blue-700">
            <li>• <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="underline">MDN Web Docs - HTML</a></li>
            <li>• <a href="https://www.w3.org/TR/html53/" target="_blank" rel="noopener noreferrer" className="underline">W3C HTML 5.3 Specification</a></li>
            <li>• <a href="https://web.dev/learn/html/" target="_blank" rel="noopener noreferrer" className="underline">web.dev - Learn HTML</a></li>
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

export default HTMLDocs;