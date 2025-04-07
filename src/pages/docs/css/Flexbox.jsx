// src/pages/docs/css/Flexbox.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSFlexbox = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Flexbox</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for arranging items in rows or columns. It provides a more efficient and predictable way to distribute space and align items, even when their size is unknown or dynamic.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Flex Container Basics</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            To start using Flexbox, you first define a flex container:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`.container {
  display: flex; /* Creates a flex container */
  /* or */
  display: inline-flex; /* Creates an inline flex container */
}`}</pre>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Direction</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex-direction</code> property establishes the main axis, determining the direction flex items are placed:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  flex-direction: row; /* Default: left to right */
  /* or */
  flex-direction: row-reverse; /* right to left */
  /* or */
  flex-direction: column; /* top to bottom */
  /* or */
  flex-direction: column-reverse; /* bottom to top */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Wrap</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex-wrap</code> property controls whether items are forced onto a single line or can wrap onto multiple lines:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  flex-wrap: nowrap; /* Default: all items on one line */
  /* or */
  flex-wrap: wrap; /* items wrap to multiple lines */
  /* or */
  flex-wrap: wrap-reverse; /* items wrap to multiple lines in reverse */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Flow Shorthand</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex-flow</code> property is a shorthand for combining <code className="bg-gray-100 px-1 py-0.5 rounded">flex-direction</code> and <code className="bg-gray-100 px-1 py-0.5 rounded">flex-wrap</code>:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  flex-flow: row nowrap; /* default */
  /* or */
  flex-flow: column wrap;
  /* or */
  flex-flow: row-reverse wrap-reverse;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Alignment and Justification</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Justify Content</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">justify-content</code> property aligns items along the main axis:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  justify-content: flex-start; /* Default: items at the start */
  /* or */
  justify-content: flex-end; /* items at the end */
  /* or */
  justify-content: center; /* items centered */
  /* or */
  justify-content: space-between; /* items evenly distributed, first at start, last at end */
  /* or */
  justify-content: space-around; /* items evenly distributed with equal space around them */
  /* or */
  justify-content: space-evenly; /* items evenly distributed with equal space between them */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Align Items</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">align-items</code> property aligns items along the cross axis:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  align-items: stretch; /* Default: items stretch to fill the container */
  /* or */
  align-items: flex-start; /* items aligned to the start */
  /* or */
  align-items: flex-end; /* items aligned to the end */
  /* or */
  align-items: center; /* items centered */
  /* or */
  align-items: baseline; /* items aligned by their baselines */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Align Content</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">align-content</code> property aligns flex lines within the container when there is extra space on the cross axis:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  /* Only applies when there are multiple lines (flex-wrap: wrap) */
  align-content: flex-start; /* lines packed at the start */
  /* or */
  align-content: flex-end; /* lines packed at the end */
  /* or */
  align-content: center; /* lines packed at the center */
  /* or */
  align-content: space-between; /* lines evenly distributed */
  /* or */
  align-content: space-around; /* lines evenly distributed with equal space around each line */
  /* or */
  align-content: stretch; /* Default: lines stretch to take up the remaining space */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Flex Item Properties</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Order</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">order</code> property controls the order in which flex items appear:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.item {
  order: 0; /* Default: items are laid out in source order */
  /* Negative values allowed; lower values appear first */
}

/* Example of reordering */
.first {
  order: 1;
}
.second {
  order: 2;
}
.third {
  order: 3;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Grow</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex-grow</code> property defines the ability for a flex item to grow if necessary:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.item {
  flex-grow: 0; /* Default: item will not grow */
}

.growing-item {
  flex-grow: 1; /* Item will grow and take up available space */
}

/* Distribution of space according to ratios */
.item-1 {
  flex-grow: 1; /* Takes 1/4 of the remaining space */
}
.item-2 {
  flex-grow: 3; /* Takes 3/4 of the remaining space */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Shrink</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex-shrink</code> property defines the ability for a flex item to shrink if necessary:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.item {
  flex-shrink: 1; /* Default: item will shrink */
}

.not-shrinking {
  flex-shrink: 0; /* Item will not shrink */
}

/* Different shrink ratios */
.item-1 {
  flex-shrink: 1;
}
.item-2 {
  flex-shrink: 2; /* Shrinks twice as much as item-1 when needed */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Basis</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex-basis</code> property defines the default size of an element before the remaining space is distributed:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.item {
  flex-basis: auto; /* Default: uses the item's width/height */
}

.item-specific {
  flex-basis: 200px; /* Sets initial main size to 200px */
}

.item-percentage {
  flex-basis: 25%; /* Sets initial main size to 25% of container */
}

.fill-container {
  flex-basis: 0; /* Combined with flex-grow: 1, item will grow to fill container */
}

.content-based {
  flex-basis: content; /* Bases size on item's content */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Flex Shorthand</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">flex</code> property is a shorthand for <code className="bg-gray-100 px-1 py-0.5 rounded">flex-grow</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">flex-shrink</code>, and <code className="bg-gray-100 px-1 py-0.5 rounded">flex-basis</code>:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.item {
  flex: 0 1 auto; /* Default: don't grow, do shrink, use auto basis */
}

.flexible-item {
  flex: 1; /* Same as flex: 1 1 0; - grow, shrink, zero basis */
}

.fixed-width-flexible {
  flex: 1 1 300px; /* Grow, shrink, 300px basis */
}

.inflexible-item {
  flex: 0 0 auto; /* Don't grow, don't shrink, use auto basis */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Align Self</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">align-self</code> property allows the default alignment (set by <code className="bg-gray-100 px-1 py-0.5 rounded">align-items</code>) to be overridden for individual flex items:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  align-items: flex-start; /* Default alignment for all items */
}

.item {
  align-self: auto; /* Default: follows the container's align-items */
}

.item-start {
  align-self: flex-start; /* Align to start edge of cross axis */
}

.item-end {
  align-self: flex-end; /* Align to end edge of cross axis */
}

.item-center {
  align-self: center; /* Center align on cross axis */
}

.item-stretch {
  align-self: stretch; /* Stretch to fill container */
}

.item-baseline {
  align-self: baseline; /* Align by item baseline */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Practical Examples</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Centering Elements</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              One of the most useful aspects of Flexbox is easily centering content:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.center-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 300px;
}

/* Perfect centering for a single element */
.center-element {
  /* No additional properties needed for basic centering */
  /* Add margin, padding, etc. as needed */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Navigation Bar</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Creating a responsive navigation bar with Flexbox:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
}

.logo {
  /* Logo styles */
}

.nav-links {
  display: flex;
  gap: 1rem; /* Space between nav items */
}

.nav-link {
  color: white;
  text-decoration: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
  
  .nav-links {
    margin-top: 1rem;
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Card Layout</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Creating a responsive card layout with equal height cards:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, 300px basis */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.card-header {
  /* Header styles */
}

.card-content {
  flex: 1; /* Takes up all available space */
  /* Content styles */
}

.card-footer {
  margin-top: auto; /* Pushes footer to bottom */
  /* Footer styles */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Browser Compatibility</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Flexbox is well-supported in all modern browsers. Some older versions of browsers might require vendor prefixes or have partial support.
          </p>
          
          <table className="min-w-full border-collapse border border-gray-200 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Browser</th>
                <th className="border border-gray-200 px-4 py-2">Version Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Chrome</td>
                <td className="border border-gray-200 px-4 py-2">29+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Firefox</td>
                <td className="border border-gray-200 px-4 py-2">22+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Safari</td>
                <td className="border border-gray-200 px-4 py-2">9+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Edge</td>
                <td className="border border-gray-200 px-4 py-2">All versions</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">IE</td>
                <td className="border border-gray-200 px-4 py-2">11 (partial support)</td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-sm text-gray-600">
            For a more detailed and up-to-date compatibility table, visit <a href="#" className="text-blue-500 hover:text-blue-700 inline-flex items-center">Can I Use <FiExternalLink className="ml-1" /></a>.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Flexbox vs. Grid</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            While Flexbox and CSS Grid are both powerful layout tools, they serve different purposes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#567C8D] mb-2">Flexbox</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>One-dimensional layout (row OR column)</li>
                <li>Content-first design approach</li>
                <li>Best for component layouts</li>
                <li>Great for distributing space and aligning items</li>
                <li>Works well for dynamic or unknown sizes</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#567C8D] mb-2">CSS Grid</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Two-dimensional layout (rows AND columns)</li>
                <li>Layout-first design approach</li>
                <li>Best for overall page layouts</li>
                <li>Precise placement control</li>
                <li>Works well with defined structure</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            In practice, Flexbox and Grid are complementary. Use Grid for the overall page layout, and Flexbox for components and UI elements within that layout.
          </p>
        </section>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Further Resources</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                A Complete Guide to Flexbox - CSS Tricks <FiExternalLink className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                MDN Web Docs: Flexbox <FiExternalLink className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Flexbox Froggy - A game for learning Flexbox <FiExternalLink className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                What The Flexbox!? - Free video course <FiExternalLink className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </DocLayout>
  );
};

export default CSSFlexbox;