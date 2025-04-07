import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { IoLink } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navigate = useNavigate()

  return (
    <nav className="bg-[#567C8D] p-4 sm:p-2 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className='text-[#f5efeb] text-center flex justify-center items-center flex-col text-xl sm:text-2xl cursor-pointer' onClick={() => navigate('/')}>
          <div className='text-2xl sm:text-3xl relative -bottom-1'><IoLink /></div>
          <h1 className='font-bold'>WebChisel</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} />
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:space-x-4 font-bold text-[#f5efeb] absolute md:relative bg-[#567C8D] md:text-[16.5px] md:bg-transparent w-full md:w-auto left-0 md:flex-row flex-col md:items-center transition-all duration-300 ease-in ${
            isOpen ? 'top-16' : 'top-[-200px]'
          } md:top-auto`}
        >
          <li>
            <Link to="/" className="block px-4 py-2 hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block px-4 py-2 hover:text-gray-300">
              About
            </Link>
          </li>

          {/* Docs Dropdown */}
          <li className="relative md:flex md:items-center dropdown-container">
            <button
              className="flex items-center px-4 py-2 font-bold hover:text-gray-300 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Docs{' '}
              <FiChevronDown
                className={`ml-2 transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`absolute top-full md:left-0 md:w-40 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link to="/docs/html" className="block px-4 py-2 font-bold text-[#567C8D] hover:bg-gray-100 rounded-t-lg">
                  HTML
                </Link>
              </li>
              <li>
                <Link to="/docs/css" className="block px-4 py-2 font-bold text-[#567C8D] rounded-b-lg hover:bg-gray-100">
                  CSS
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contacts" className="block px-4 py-2 hover:text-gray-300">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;