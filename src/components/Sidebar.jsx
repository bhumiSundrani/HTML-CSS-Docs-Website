// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

const Sidebar = ({ docType }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    basics: true,
    advanced: false,
    examples: false
  });

  // Define content based on docType (HTML or CSS)
  const sidebarContent = {
    html: {
      basics: [
        { title: 'Introduction', path: '/docs/html/introduction' },
        { title: 'Elements', path: '/docs/html/elements' },
        { title: 'Attributes', path: '/docs/html/attributes' },
        { title: 'Headings', path: '/docs/html/headings' },
        { title: 'Paragraphs', path: '/docs/html/paragraphs' }
      ],
      advanced: [
        { title: 'Forms', path: '/docs/html/forms' },
        { title: 'Tables', path: '/docs/html/tables' },
      ],
      examples: [
        { title: 'Basic Layout', path: '/docs/html/examples/basic-layout' },
        { title: 'Contact Form', path: '/docs/html/examples/contact-form' },
        { title: 'Navigation Menu', path: '/docs/html/examples/navigation' }
      ]
    }
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const content = sidebarContent[docType.toLowerCase()] || sidebarContent.html;

  return (
    <div className="w-64 bg-gray-50 h-screen overflow-y-auto border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#567C8D] mb-4">{docType} Documentation</h2>
        
        {/* Basics Section */}
        <div className="mb-4">
          <button 
            className="flex items-center justify-between w-full px-2 py-2 text-left font-medium text-[#567C8D] bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => toggleSection('basics')}
          >
            Basics
            {expandedSections.basics ? <FiChevronDown /> : <FiChevronRight />}
          </button>
          
          {expandedSections.basics && (
            <ul className="mt-2 space-y-1 pl-2">
              {content.basics.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-2 py-1 rounded-md ${
                      location.pathname === item.path
                        ? 'bg-[#567C8D] text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Advanced Section */}
        <div className="mb-4">
          <button 
            className="flex items-center justify-between w-full px-2 py-2 text-left font-medium text-[#567C8D] bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => toggleSection('advanced')}
          >
            Advanced
            {expandedSections.advanced ? <FiChevronDown /> : <FiChevronRight />}
          </button>
          
          {expandedSections.advanced && (
            <ul className="mt-2 space-y-1 pl-2">
              {content.advanced.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-2 py-1 rounded-md ${
                      location.pathname === item.path
                        ? 'bg-[#567C8D] text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Examples Section */}
        <div className="mb-4">
          <button 
            className="flex items-center justify-between w-full px-2 py-2 text-left font-medium text-[#567C8D] bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => toggleSection('examples')}
          >
            Examples
            {expandedSections.examples ? <FiChevronDown /> : <FiChevronRight />}
          </button>
          
          {expandedSections.examples && (
            <ul className="mt-2 space-y-1 pl-2">
              {content.examples.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-2 py-1 rounded-md ${
                      location.pathname === item.path
                        ? 'bg-[#567C8D] text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;