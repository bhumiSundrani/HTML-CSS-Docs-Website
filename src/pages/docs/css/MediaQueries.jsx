// src/pages/docs/css/MediaQueries.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSMediaQueries = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Media Queries</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            CSS Media Queries are a powerful tool for creating responsive designs. They allow you to apply different styles based on device characteristics like screen size, resolution, orientation, and more.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Media Query Basics</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A media query consists of an optional media type and one or more expressions that check for specific media features.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Basic Syntax</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">@media</code> rule is used to apply different styles for different media types/devices:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@media media-type and (media-feature-rule) {
  /* CSS rules to be applied */
}

/* Example */
@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
  
  .container {
    width: 100%;
    padding: 0 15px;
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Media Types</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Media types describe the general category of a device:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <code className="bg-gray-100 px-1 py-0.5 rounded">all</code> - Suitable for all devices (default if omitted)
              </li>
              <li>
                <code className="bg-gray-100 px-1 py-0.5 rounded">screen</code> - For computer screens, tablets, and smartphones
              </li>
              <li>
                <code className="bg-gray-100 px-1 py-0.5 rounded">print</code> - For printers and print preview mode
              </li>
              <li>
                <code className="bg-gray-100 px-1 py-0.5 rounded">speech</code> - For screen readers that "read" the page out loud
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Common Media Features</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Width and Height</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              These features target the viewport dimensions:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Styles for viewports with width ≤ 768px */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Styles for viewports with width ≥ 769px and ≤ 1024px */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Styles for viewports with width ≥ 1025px */
@media (min-width: 1025px) {
  /* Desktop styles */
}

/* Target viewport height */
@media (min-height: 600px) {
  /* Styles for tall viewports */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Orientation</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">orientation</code> feature detects whether the device is in landscape or portrait mode:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Portrait mode */
@media (orientation: portrait) {
  .gallery {
    flex-direction: column;
  }
}

/* Landscape mode */
@media (orientation: landscape) {
  .gallery {
    flex-direction: row;
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Display Quality</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Features that target the pixel density of the display:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* High-resolution displays (Retina) */
@media (-webkit-min-device-pixel-ratio: 2), 
       (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: 100px 100px;
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Pointer and Hover</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Features that detect input method capabilities:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Devices with fine pointer (mouse) */
@media (pointer: fine) {
  .button {
    padding: 8px 12px;
  }
}

/* Devices with coarse pointer (touch) */
@media (pointer: coarse) {
  .button {
    padding: 12px 24px; /* Larger touch target */
  }
}

/* Devices that can hover */
@media (hover: hover) {
  .nav-item:hover {
    background-color: #f5f5f5;
  }
}

/* Devices that cannot hover (most touchscreens) */
@media (hover: none) {
  .dropdown {
    /* Alternative to hover for touch devices */
  }
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Logical Operators</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Media queries support logical operators to create more complex conditions:
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">AND Operator</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Use the <code className="bg-gray-100 px-1 py-0.5 rounded">and</code> keyword to combine multiple features:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* Apply styles only for tablets */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">OR Operator</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Use commas to create a list of queries where any matching condition will apply the styles:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@media (max-width: 768px), (orientation: portrait) {
  /* Apply styles if either condition is true */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">NOT Operator</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Use <code className="bg-gray-100 px-1 py-0.5 rounded">not</code> to negate a media query:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@media not screen and (max-width: 768px) {
  /* Apply styles to everything except small screens */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Common Breakpoints</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            While breakpoints should be determined by your content, these are commonly used sizes:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
            <pre className="font-mono">{`/* Mobile first approach */
/* Base styles for mobile */

/* Small devices (landscape phones) */
@media (min-width: 576px) {
  /* Small device styles */
}

/* Medium devices (tablets) */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Large devices (desktops) */
@media (min-width: 992px) {
  /* Desktop styles */
}

/* Extra large devices (large desktops) */
@media (min-width: 1200px) {
  /* Large desktop styles */
}`}</pre>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Best Practice:</strong> Use a mobile-first approach by writing base styles for mobile devices, then use <code className="bg-gray-100 px-1 py-0.5 rounded">min-width</code> media queries to enhance the layout for larger screens.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Responsive Design Patterns</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Responsive Grid</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Creating a responsive grid that adapts to different screen sizes:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Responsive Navigation</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              A common pattern for navigation menus:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Mobile hamburger menu */
.nav {
  position: relative;
}

.nav-menu {
  display: none;
  flex-direction: column;
  width: 100%;
}

.nav-toggle {
  display: block;
}

.nav-menu.active {
  display: flex;
}

/* Desktop navigation */
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .nav-toggle {
    display: none;
  }
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Media Queries in Different Contexts</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">In CSS Files</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The standard way to include media queries in your CSS:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* styles.css */
.container {
  width: 100%;
  padding: 15px;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">In HTML</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Using the <code className="bg-gray-100 px-1 py-0.5 rounded">media</code> attribute with <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;link&gt;</code> to conditionally load stylesheets:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="tablet.css" media="(min-width: 768px)">
<link rel="stylesheet" href="desktop.css" media="(min-width: 1024px)">
<link rel="stylesheet" href="print.css" media="print">`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">With JavaScript</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Using <code className="bg-gray-100 px-1 py-0.5 rounded">window.matchMedia()</code> to detect media query matches in JavaScript:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`const mobileQuery = window.matchMedia('(max-width: 768px)');

function handleMobileChange(e) {
  if (e.matches) {
    // Mobile view
    console.log('Mobile view active');
  } else {
    // Desktop view
    console.log('Desktop view active');
  }
}

// Initial check
handleMobileChange(mobileQuery);

// Listen for changes
mobileQuery.addEventListener('change', handleMobileChange);`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Accessibility Considerations</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Media queries can be used to improve accessibility:
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Reduced Motion</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Respect user preferences for reduced animation:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Default animation */
.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.1);
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
  
  .button:hover {
    transform: none;
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Color Scheme Preferences</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Support light and dark mode based on system preferences:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`:root {
  --text-color: #333;
  --bg-color: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #f5f5f5;
    --bg-color: #121212;
  }
}

body {
  color: var(--text-color);
  background-color: var(--bg-color);
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Mobile-first approach</strong> - Write base styles for mobile, then enhance for larger screens using <code className="bg-gray-100 px-1 py-0.5 rounded">min-width</code> queries.
            </li>
            <li>
              <strong>Use relative units</strong> - Prefer <code className="bg-gray-100 px-1 py-0.5 rounded">em</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">rem</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">%</code>, and <code className="bg-gray-100 px-1 py-0.5 rounded">vw/vh</code> over fixed <code className="bg-gray-100 px-1 py-0.5 rounded">px</code> units for better scaling.
            </li>
            <li>
              <strong>Content-based breakpoints</strong> - Set breakpoints based on where your content needs to adapt, not based on specific devices.
            </li>
            <li>
              <strong>Organize media queries</strong> - Either group media queries at the end of your CSS or place them immediately after the relevant element styles for better maintainability.
            </li>
            <li>
              <strong>Test thoroughly</strong> - Test your design on various devices, orientations, and window sizes.
            </li>
            <li>
              <strong>Consider meta viewport tag</strong> - Always include <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> in your HTML.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Additional Resources</h2>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                MDN Web Docs: Media Queries
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://css-tricks.com/a-complete-guide-to-css-media-queries/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                CSS-Tricks: A Complete Guide to CSS Media Queries
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://www.w3.org/TR/mediaqueries-5/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                W3C Media Queries Level 5 Specification
              </a>
            </li>
          </ul>
        </section>
      </article>
    </DocLayout>
  );
};

export default CSSMediaQueries;