// src/components/SearchBar.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from your content
  const searchData = [
    // HTML docs
    { title: 'HTML Introduction', path: '/docs/html/introduction', category: 'HTML' },
    { title: 'HTML Elements', path: '/docs/html/elements', category: 'HTML' },
    { title: 'HTML Attributes', path: '/docs/html/attributes', category: 'HTML' },
    { title: 'HTML Headings', path: '/docs/html/headings', category: 'HTML' },
    { title: 'HTML Paragraphs', path: '/docs/html/paragraphs', category: 'HTML' },
    { title: 'Semantic HTML', path: '/docs/html/semantic', category: 'HTML' },
    { title: 'HTML Forms', path: '/docs/html/forms', category: 'HTML' },
    { title: 'HTML Tables', path: '/docs/html/tables', category: 'HTML' },
    { title: 'HTML Meta Tags', path: '/docs/html/meta-tags', category: 'HTML' },
    
    // CSS docs
    { title: 'CSS Introduction', path: '/docs/css/introduction', category: 'CSS' },
    { title: 'CSS Selectors', path: '/docs/css/selectors', category: 'CSS' },
    { title: 'CSS Colors', path: '/docs/css/colors', category: 'CSS' },
    { title: 'CSS Box Model', path: '/docs/css/box-model', category: 'CSS' },
    { title: 'CSS Typography', path: '/docs/css/typography', category: 'CSS' },
    { title: 'CSS Flexbox', path: '/docs/css/flexbox', category: 'CSS' },
    { title: 'CSS Grid', path: '/docs/css/grid', category: 'CSS' },
    { title: 'CSS Animations', path: '/docs/css/animations', category: 'CSS' },
    { title: 'CSS Media Queries', path: '/docs/css/media-queries', category: 'CSS' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery]);

  const handleToggleSearch = () => {
    setIsOpen(!isOpen);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0].path);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        className="p-2 text-[#567C8D] hover:bg-gray-100 rounded-full"
        onClick={handleToggleSearch}
        aria-label="Search"
      >
        <FiSearch size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-md shadow-lg z-10">
          <div className="p-2 border-b">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search documentation..."
                className="flex-1 p-2 outline-none"
              />
              <button 
                type="button" 
                onClick={handleToggleSearch}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <FiX size={18} />
              </button>
            </form>
          </div>
          
          {searchResults.length > 0 && (
            <ul className="max-h-80 overflow-y-auto">
              {searchResults.map((result) => (
                <li key={result.path} className="border-b last:border-b-0">
                  <button 
                    onClick={() => handleResultClick(result.path)}
                    className="w-full text-left p-3 hover:bg-gray-100 flex items-center"
                  >
                    <span className="flex-1">{result.title}</span>
                    <span className="text-xs bg-gray-200 rounded px-2 py-1 text-gray-700">
                      {result.category}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          
          {searchQuery.trim() !== '' && searchResults.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;