// src/pages/docs/css/examples/ResponsiveLayout.js
import React from 'react';
import DocLayout from '../../../../layouts/CSSDocLayout';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CSSResponsiveLayout = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/docs/css" className="inline-flex items-center text-blue-600 hover:underline">
            <FiArrowLeft className="mr-2" />
            Back to CSS Documentation
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">Example: Responsive Layout</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            This example demonstrates a complete responsive layout using CSS Grid and Flexbox. The layout adapts seamlessly from mobile to desktop views using media queries.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Demo</h2>
          
          <div className="border border-gray-300 rounded-md p-4 mb-6">
            <div className="bg-gray-100 p-4 mb-4">
              <div className="bg-[#567C8D] text-white p-4 mb-4">Header</div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="md:col-span-1">
                  <div className="bg-gray-200 p-4 h-full">Sidebar</div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="bg-gray-200 p-4 mb-4">Main Content</div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-300 p-4">Card 1</div>
                    <div className="bg-gray-300 p-4">Card 2</div>
                    <div className="bg-gray-300 p-4">Card 3</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#567C8D] text-white p-4">Footer</div>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              Resize your browser window to see the responsive behavior
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">HTML Structure</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
            <pre className="font-mono">{`<div class="layout">
  <header class="header">
    Header
  </header>
  
  <div class="main-container">
    <aside class="sidebar">
      Sidebar
    </aside>
    
    <main class="main-content">
      <section class="content-section">
        Main Content
      </section>
      
      <section class="card-grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </section>
    </main>
  </div>
  
  <footer class="footer">
    Footer
  </footer>
</div>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">CSS Implementation</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
            <pre className="font-mono">{`/* Base styles (mobile first) */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.header {
  background-color: #567C8D;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  margin-bottom: 1rem;
}

.sidebar {
  background-color: #f0f0f0;
  padding: 1rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}

.content-section {
  background-color: #f0f0f0;
  padding: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.card {
  background-color: #e0e0e0;
  padding: 1rem;
  border-radius: 4px;
}

.footer {
  background-color: #567C8D;
  color: white;
  padding: 1rem;
  margin-top: auto;
}

/* Small screens (tablets) */
@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Medium screens (small desktops) */
@media (min-width: 768px) {
  .main-container {
    flex-direction: row;
  }
  
  .sidebar {
    width: 25%;
    max-width: 250px;
  }
  
  .main-content {
    width: 75%;
  }
}

/* Large screens (large desktops) */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Key Responsive Features</h2>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Mobile-first approach</strong> - Base styles are for mobile, with media queries enhancing the layout for larger screens.
            </li>
            <li>
              <strong>Flexible sidebar placement</strong> - Sidebar stacks above content on mobile, moves to the left on larger screens.
            </li>
            <li>
              <strong>Responsive card grid</strong> - Cards change from 1 to 2 to 3 columns as the screen width increases.
            </li>
            <li>
              <strong>Fluid container</strong> - Layout container has a max-width but scales down on smaller screens.
            </li>
            <li>
              <strong>Sticky footer</strong> - Footer always stays at the bottom of the viewport, even when content is short.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Implementation Notes</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flexbox vs. Grid</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              This example uses both Flexbox and Grid layout techniques:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Flexbox</strong> is used for the overall page layout and the main container with sidebar.</li>
              <li><strong>CSS Grid</strong> is used for the card layout to create a responsive grid of items.</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Media Query Breakpoints</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The layout uses three common breakpoints:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>640px</strong> - Small tablets and large phones</li>
              <li><strong>768px</strong> - Tablets and small desktops</li>
              <li><strong>1024px</strong> - Desktops and larger screens</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Tip:</strong> When implementing responsive layouts, always test on real devices when possible, not just by resizing your browser window.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Browser Compatibility</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            This layout uses modern CSS techniques that are well-supported in current browsers:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Flexbox:</strong> Supported in all modern browsers including IE11+ (with some limitations)</li>
            <li><strong>CSS Grid:</strong> Supported in all modern browsers including Edge, Chrome, Firefox, and Safari</li>
            <li><strong>Media Queries:</strong> Widely supported in all modern browsers</li>
          </ul>
          
          <p className="mt-4 text-gray-700 leading-relaxed">
            For older browsers, consider a fallback strategy or using a CSS grid polyfill.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Related Resources</h2>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="/docs/css/MediaQueries" className="text-blue-600 hover:underline">
                CSS Media Queries
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                A Complete Guide to CSS Grid
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                A Complete Guide to Flexbox
              </a>
            </li>
          </ul>
        </section>
      </article>
    </DocLayout>
  );
};

export default CSSResponsiveLayout;