// src/pages/docs/css/Typography.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSTypography = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Typography</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            CSS Typography encompasses the art of styling text for readability and aesthetic appeal. It includes properties for font selection, sizing, spacing, and text behavior that significantly impact how content is presented on the web.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Font Properties</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS provides various properties to control the appearance of text:
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Font Family</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">font-family</code> property defines which font or font stack to use:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Using a specific font */
h1 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Generic font families */
p {
  font-family: serif; /* Times New Roman, Georgia, etc. */
}

.code {
  font-family: monospace; /* Courier, Courier New, etc. */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Font Size</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">font-size</code> property sets the size of the text:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Absolute sizes */
h1 {
  font-size: 32px;
}

/* Relative sizes */
p {
  font-size: 1rem;  /* Relative to root element */
}

small {
  font-size: 0.8em;  /* Relative to parent element */
}

/* Viewport-based */
h2 {
  font-size: 4vw;  /* 4% of viewport width */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Font Weight</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">font-weight</code> property sets how bold or light the text appears:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Using keywords */
p {
  font-weight: normal;
}

strong {
  font-weight: bold;
}

/* Using numeric values (100-900) */
.light {
  font-weight: 300;
}

.medium {
  font-weight: 500;
}

.heavy {
  font-weight: 700;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Font Style</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">font-style</code> property sets whether text is italic or normal:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`em {
  font-style: italic;
}

.normal-text {
  font-style: normal;
}

.slanted {
  font-style: oblique;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Font Shorthand</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">font</code> property combines multiple font properties in a single declaration:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* font: font-style font-variant font-weight font-size/line-height font-family */
h1 {
  font: italic bold 32px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
}

p {
  font: normal 16px/1.6 Georgia, serif;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Text Properties</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Text Alignment</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">text-align</code> property controls horizontal alignment:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.center {
  text-align: center;
}

.right {
  text-align: right;
}

.left {
  text-align: left;
}

.justify {
  text-align: justify;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Line Height</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">line-height</code> property sets the height of a line of text:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Unitless values (recommended) */
p {
  line-height: 1.5;  /* 1.5 times the font size */
}

/* Specific units */
.large-spacing {
  line-height: 24px;
}

/* Percentages */
.tight {
  line-height: 120%;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Letter and Word Spacing</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Control the spacing between letters and words:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.spaced-out {
  letter-spacing: 2px;  /* Space between letters */
}

.wide-words {
  word-spacing: 4px;  /* Space between words */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Text Decoration</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">text-decoration</code> property adds lines to text:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`a {
  text-decoration: none;  /* Removes the default underline from links */
}

.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}

/* Combined properties */
.fancy {
  text-decoration: underline dotted red;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Text Transform</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">text-transform</code> property controls text capitalization:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.uppercase {
  text-transform: uppercase;  /* ALL CAPS */
}

.lowercase {
  text-transform: lowercase;  /* all lowercase */
}

.capitalize {
  text-transform: capitalize;  /* First Letter Of Each Word */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Advanced Typography</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Text Shadow</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">text-shadow</code> property adds shadow effects to text:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.shadow {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}

/* Multiple shadows */
.multi-shadow {
  text-shadow: 
    1px 1px 2px black, 
    0 0 1em blue, 
    0 0 0.2em blue;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Web Fonts</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Use custom fonts with <code className="bg-gray-100 px-1 py-0.5 rounded">@font-face</code> or by linking to web font services:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Self-hosted fonts */
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/customfont.woff2') format('woff2'),
       url('fonts/customfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* Using Google Fonts (in HTML) */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

/* CSS usage */
body {
  font-family: 'Roboto', sans-serif;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Text Overflow</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Control how overflowing text is displayed:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* Adds ... to truncated text */
}

.clip {
  overflow: hidden;
  text-overflow: clip;  /* Simply clips the text */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Typography Best Practices</h2>
          
          <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 mb-6">
            <h3 className="font-bold text-yellow-800 mb-2">Tips for Effective Typography</h3>
            <ul className="list-disc pl-6 text-yellow-800 space-y-1">
              <li>Maintain a consistent hierarchy with font sizes and weights</li>
              <li>Ensure adequate contrast between text and background</li>
              <li>Keep line length between 45-75 characters for readability</li>
              <li>Use a line height of 1.4-1.6 for body text</li>
              <li>Limit the number of fonts used (typically 2-3 maximum)</li>
              <li>Test typography across different screen sizes and devices</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* A responsive type scale */
html {
  font-size: 16px;  /* Base size */
}

h1 {
  font-size: 2.5rem;  /* 40px */
}

h2 {
  font-size: 2rem;    /* 32px */
}

h3 {
  font-size: 1.5rem;  /* 24px */
}

p {
  font-size: 1rem;    /* 16px */
  line-height: 1.5;
  max-width: 70ch;    /* Approximately 70 characters */
}

@media (max-width: 768px) {
  html {
    font-size: 14px;  /* Slightly smaller on mobile */
  }
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Styling Text</h3>
                <p className="text-sm text-gray-600">Complete guide to styling text with CSS</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://type-scale.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">Type Scale</h3>
                <p className="text-sm text-gray-600">Visual type scale calculator</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/css/box-model" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: CSS Box Model
            </a>
            <a href="/docs/css/flexbox" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: CSS Flexbox
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </DocLayout>
  );
};

export default CSSTypography;