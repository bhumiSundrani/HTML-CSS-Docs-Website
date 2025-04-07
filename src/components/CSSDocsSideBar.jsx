import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

const CSSDocsSidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    basics: true,
    advanced: false,
    examples: false
  });

  const sidebarContent = {
    basics: [
      { title: 'Introduction', path: '/docs/css/introduction' },
      { title: 'Selectors', path: '/docs/css/selectors' },
      { title: 'Colors', path: '/docs/css/colors' },
      { title: 'Box Model', path: '/docs/css/box-model' },
      { title: 'Typography', path: '/docs/css/typography' }
    ],
    advanced: [
      { title: 'Flexbox', path: '/docs/css/flexbox' },
      { title: 'Grid', path: '/docs/css/grid' },
      { title: 'Animations', path: '/docs/css/animations' },
      { title: 'Media Queries', path: '/docs/css/media-queries' }
    ],
    examples: [
      { title: 'Responsive Layout', path: '/docs/css/examples/responsive-layout' },
      { title: 'Card Design', path: '/docs/css/examples/card-design' },
      { title: 'Custom Buttons', path: '/docs/css/examples/custom-buttons' }
    ]
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="w-64 bg-gray-50 h-screen overflow-y-auto border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#567C8D] mb-4">CSS Documentation</h2>
        
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
              {sidebarContent.basics.map((item) => (
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
              {sidebarContent.advanced.map((item) => (
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
              {sidebarContent.examples.map((item) => (
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

export default CSSDocsSidebar;