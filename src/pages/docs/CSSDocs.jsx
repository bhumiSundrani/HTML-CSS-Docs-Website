// src/pages/docs/CSSDocs.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { IoColorPalette, IoLayers, IoApps, IoExtensionPuzzle } from 'react-icons/io5';

const CSSDocs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#567C8D]">CSS Documentation</h1>
          <SearchBar />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
            <IoColorPalette className="mr-2" /> Getting Started with CSS
          </h2>
          <p className="text-gray-700 mb-4">
            CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. 
            CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link 
              to="/docs/css/introduction" 
              className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <h3 className="font-bold text-[#567C8D] mb-1">Introduction to CSS</h3>
              <p className="text-sm text-gray-600">Learn the basics of CSS and styling web pages</p>
            </Link>
            <Link 
              to="/docs/css/selectors" 
              className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <h3 className="font-bold text-[#567C8D] mb-1">CSS Selectors</h3>
              <p className="text-sm text-gray-600">Understand how to target HTML elements</p>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic CSS Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
              <IoLayers className="mr-2" /> CSS Basics
            </h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/docs/css/introduction" 
                  className="text-[#567C8D] hover:underline"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/selectors" 
                  className="text-[#567C8D] hover:underline"
                >
                  Selectors
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/colors" 
                  className="text-[#567C8D] hover:underline"
                >
                  Colors
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/box-model" 
                  className="text-[#567C8D] hover:underline"
                >
                  Box Model
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/typography" 
                  className="text-[#567C8D] hover:underline"
                >
                  Typography
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Advanced CSS Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
              <IoApps className="mr-2" /> Advanced CSS
            </h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/docs/css/flexbox" 
                  className="text-[#567C8D] hover:underline"
                >
                  Flexbox
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/grid" 
                  className="text-[#567C8D] hover:underline"
                >
                  Grid
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/animations" 
                  className="text-[#567C8D] hover:underline"
                >
                  Animations
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/media-queries" 
                  className="text-[#567C8D] hover:underline"
                >
                  Media Queries
                </Link>
              </li>
            </ul>
          </div>
          
          {/* CSS Examples Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#567C8D] mb-4 flex items-center">
              <IoExtensionPuzzle className="mr-2" /> CSS Examples
            </h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/docs/css/examples/responsive-layout" 
                  className="text-[#567C8D] hover:underline"
                >
                  Responsive Layout
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/examples/card-design" 
                  className="text-[#567C8D] hover:underline"
                >
                  Card Design
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs/css/examples/custom-buttons" 
                  className="text-[#567C8D] hover:underline"
                >
                  Custom Buttons
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
            <li>• <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="underline">MDN Web Docs - CSS</a></li>
            <li>• <a href="https://www.w3.org/TR/CSS/" target="_blank" rel="noopener noreferrer" className="underline">W3C CSS Specifications</a></li>
            <li>• <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer" className="underline">CSS-Tricks</a></li>
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

export default CSSDocs;