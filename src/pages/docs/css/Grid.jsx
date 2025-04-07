// src/pages/docs/css/Grid.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSGrid = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Grid</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            CSS Grid Layout is a two-dimensional layout system designed specifically for creating grid-based user interfaces. It allows you to arrange items into rows and columns, offering unprecedented control over how elements are sized and positioned.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Grid Container Basics</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            To start using CSS Grid, you first define a grid container:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`.container {
  display: grid; /* Creates a grid container */
  /* or */
  display: inline-grid; /* Creates an inline grid container */
}`}</pre>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Grid Template Columns and Rows</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">grid-template-columns</code> and <code className="bg-gray-100 px-1 py-0.5 rounded">grid-template-rows</code> properties define the columns and rows of the grid:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  /* Define 3 columns with different sizes */
  grid-template-columns: 200px 1fr 2fr;
  
  /* Define 2 rows */
  grid-template-rows: 100px 200px;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">The fr Unit</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">fr</code> unit represents a fraction of the available space:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  /* First column is 1/4 of available space, second is 3/4 */
  grid-template-columns: 1fr 3fr;
  
  /* Three equal columns */
  grid-template-columns: 1fr 1fr 1fr;
  /* Same as above, using repeat() function */
  grid-template-columns: repeat(3, 1fr);
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Grid Template Areas</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">grid-template-areas</code> property defines named grid areas:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar content aside"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Grid Gap</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">gap</code> property (and its <code className="bg-gray-100 px-1 py-0.5 rounded">row-gap</code> and <code className="bg-gray-100 px-1 py-0.5 rounded">column-gap</code> components) creates space between grid items:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Individual gaps */
  row-gap: 20px;
  column-gap: 10px;
  
  /* Shorthand */
  gap: 20px 10px; /* row-gap column-gap */
  
  /* Equal gaps */
  gap: 15px; /* Same gap for rows and columns */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Grid Item Placement</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Grid Lines</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Grid items can be placed using grid line numbers:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.item {
  /* Start at column line 1, span 2 columns */
  grid-column: 1 / span 2;
  /* Same as: grid-column: 1 / 3; */
  
  /* Start at row line 2, end at row line 4 */
  grid-row: 2 / 4;
}

/* Shorthand for both column and row */
.item-positioned {
  /* grid-row-start / grid-column-start / grid-row-end / grid-column-end */
  grid-area: 2 / 1 / 4 / 3;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Named Lines</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              You can name grid lines when defining the grid:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 200px 
    [sidebar-end content-start] 1fr 
    [content-end];
  grid-template-rows: 
    [header-start] 100px 
    [header-end content-start] 1fr 
    [content-end footer-start] 100px 
    [footer-end];
}

.header {
  grid-column: sidebar-start / content-end;
  grid-row: header-start / header-end;
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
  grid-row: content-start / content-end;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Auto Placement</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Grid offers powerful auto-placement capabilities:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}

/* Items will automatically be placed in available grid cells */
.item {
  /* No explicit positioning needed */
}

/* Some items can be explicitly positioned */
.featured-item {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Alignment and Justification</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Grid Container Alignment</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Aligning all grid items within the container:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  height: 500px;
  
  /* Horizontal alignment (column axis) */
  justify-content: start; /* Default */
  /* or: end, center, stretch, space-around, space-between, space-evenly */
  
  /* Vertical alignment (row axis) */
  align-content: start; /* Default */
  /* or: end, center, stretch, space-around, space-between, space-evenly */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Grid Item Alignment</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Aligning items within their grid cells:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Align all items horizontally within their cells */
  justify-items: stretch; /* Default */
  /* or: start, end, center */
  
  /* Align all items vertically within their cells */
  align-items: stretch; /* Default */
  /* or: start, end, center */
}

/* Individual item alignment */
.item {
  /* Horizontal self-alignment */
  justify-self: center;
  
  /* Vertical self-alignment */
  align-self: start;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Advanced Grid Features</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Implicit Grid</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              When items are placed outside the explicitly defined grid, an implicit grid is created:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Explicit columns */
  grid-template-rows: repeat(2, 100px); /* Explicit rows */
  
  /* Define size for any automatically created rows */
  grid-auto-rows: 150px;
  
  /* Define size for any automatically created columns */
  grid-auto-columns: 200px;
  
  /* Control how auto-placement works */
  grid-auto-flow: row; /* Default: fill by rows */
  /* or: column, dense, row dense, column dense */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">minmax() Function</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">minmax()</code> function sets a minimum and maximum size for grid tracks:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  
  /* Columns that are at least 200px but can expand to 1fr */
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  
  /* Rows that are at least 100px but expand to fit content */
  grid-auto-rows: minmax(100px, auto);
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">auto-fill and auto-fit</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Create responsive grids that automatically adjust the number of columns:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.container {
  display: grid;
  
  /* As many 200px columns as will fit, growing to fill space */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
  /* Similar to auto-fill, but collapses empty tracks */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Practical Examples</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Holy Grail Layout</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The classic "holy grail" layout with header, footer, main content, and two sidebars:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.holy-grail {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "left main right"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.left-sidebar { grid-area: left; }
.main-content { grid-area: main; }
.right-sidebar { grid-area: right; }
.footer { grid-area: footer; }

/* Responsive adjustment */
@media (max-width: 768px) {
  .holy-grail {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "left"
      "right"
      "footer";
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Image Gallery</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              A responsive image gallery with varied sized items:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Featured items spanning multiple grid cells */
.featured-wide {
  grid-column: span 2;
}

.featured-tall {
  grid-row: span 2;
}

.featured-large {
  grid-column: span 2;
  grid-row: span 2;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Dashboard Layout</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              A grid-based dashboard layout with widgets:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
  padding: 20px;
}

.widget {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.widget-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.widget-small {
  grid-column: span 1;
  grid-row: span 1;
}

.widget-medium {
  grid-column: span 2;
  grid-row: span 1;
}

.widget-large {
  grid-column: span 2;
  grid-row: span 2;
}

.widget-full {
  grid-column: 1 / -1; /* Spans full width */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Browser Compatibility</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS Grid is well-supported in all modern browsers. Some older versions may have limited support.
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
                <td className="border border-gray-200 px-4 py-2">57+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Firefox</td>
                <td className="border border-gray-200 px-4 py-2">52+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Safari</td>
                <td className="border border-gray-200 px-4 py-2">10.1+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Edge</td>
                <td className="border border-gray-200 px-4 py-2">16+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">IE</td>
                <td className="border border-gray-200 px-4 py-2">Not supported (partial support with prefixes in IE11)</td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-sm text-gray-600">
            For a more detailed and up-to-date compatibility table, visit <a href="#" className="text-blue-500 hover:text-blue-700 inline-flex items-center">Can I Use <FiExternalLink className="ml-1" /></a>.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Grid vs. Flexbox</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS Grid and Flexbox serve different layout needs:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Use Grid for the overall page structure and Flexbox for components and UI elements within that structure.
          </p>
        </section>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Further Resources</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                A Complete Guide to CSS Grid - CSS Tricks <FiExternalLink className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                MDN Web Docs: CSS Grid Layout <FiExternalLink className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Grid Garden - A game for learning CSS Grid <FiExternalLink className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                CSS Grid Tutorial by Wes Bos <FiExternalLink className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </DocLayout>
  );
};

export default CSSGrid;