// src/pages/docs/html/examples/Navigation.js
import React from 'react';
import DocLayout from '../../../../layouts/HTMLDocLayout';

const HTMLNavigation = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Navigation Examples</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Navigation is a critical component of web interfaces. Here are examples of different HTML navigation patterns for various use cases.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Horizontal Navigation Bar</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<nav class="main-nav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>

<style>
  .main-nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .main-nav li {
    margin-right: 20px;
  }
  
  .main-nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Dropdown Navigation</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<nav class="dropdown-nav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle">Products</a>
      <ul class="dropdown-menu">
        <li><a href="product1.html">Product 1</a></li>
        <li><a href="product2.html">Product 2</a></li>
        <li><a href="product3.html">Product 3</a></li>
      </ul>
    </li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>

<style>
  .dropdown-nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .dropdown-nav li {
    position: relative;
    margin-right: 20px;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    flex-direction: column;
  }
  
  .dropdown:hover .dropdown-menu {
    display: flex;
  }
  
  .dropdown-menu li {
    margin: 0;
  }
  
  .dropdown-menu a {
    padding: 12px 16px;
    display: block;
  }
</style>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Responsive Mobile Menu</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<nav class="mobile-nav">
  <button class="menu-toggle">☰</button>
  <ul class="menu-items">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>

<style>
  .mobile-nav {
    position: relative;
  }
  
  .menu-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
  }
  
  .menu-items {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .menu-items li {
    margin-right: 20px;
  }
  
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
    
    .menu-items {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #f9f9f9;
      flex-direction: column;
    }
    
    .menu-items.active {
      display: flex;
    }
    
    .menu-items li {
      margin: 0;
    }
    
    .menu-items a {
      padding: 12px 16px;
      display: block;
    }
  }
</style>

<script>
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
  });
</script>`}</pre>
          </div>
        </section>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <h3 className="font-bold text-yellow-700 mb-2">Accessibility Tips</h3>
          <ul className="list-disc pl-6 text-yellow-700">
            <li>Use ARIA attributes for enhanced accessibility (aria-expanded, aria-controls)</li>
            <li>Ensure navigation is keyboard accessible</li>
            <li>Add skip-to-content links for screen reader users</li>
            <li>Test your navigation with screen readers</li>
          </ul>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/examples/contact-form" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: Contact Form Example
            </a>
          </div>
        </div>
      </article>
    </DocLayout>
  );
};

export default HTMLNavigation;