// src/pages/docs/css/Introduction.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSIntroduction = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">Introduction to CSS</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            CSS (Cascading Style Sheets) is the language used to style HTML documents. It describes how HTML elements should be displayed on screen, on paper, or in other media.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">What is CSS?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}

h1 {
  color: navy;
  margin-left: 20px;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Why Use CSS?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes. CSS was introduced to separate the presentation from the HTML content, improving content accessibility and providing more flexibility in the specification of presentation characteristics.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Benefits of CSS</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Separation of content and design</li>
              <li>Consistent styling across multiple pages</li>
              <li>Improved page loading speed</li>
              <li>Easy maintenance of design</li>
              <li>Different styles for different devices</li>
              <li>Enhanced user experience</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">How to Add CSS to HTML</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            There are three ways to insert CSS into your HTML documents:
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">1. External CSS</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              With an external style sheet, you can change the look of an entire website by changing just one file. Each HTML page must include a reference to the external style sheet file inside the <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;link&gt;</code> element, inside the head section.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">2. Internal CSS</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;style&gt;</code> element, inside the head section.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<head>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
      margin-left: 20px;
    }
  </style>
</head>`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">3. Inline CSS</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">CSS Syntax</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`selector {
  property: value;
  property: value;
  property: value;
}`}</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            For example:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`h1 {
  color: blue;
  font-size: 12px;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">CSS Comments</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Comments are used to explain the code, and may help when you edit the source code at a later date. Comments are ignored by browsers.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* This is a single-line comment */

/* This is
a multi-line
comment */`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">CSS Versions</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS has evolved through several versions, with CSS3 being the latest major version. Unlike its predecessors, CSS3 is divided into modules that are independently updated.
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>CSS1</strong> - Released in 1996, contained properties for fonts, margins, colors, etc.</li>
            <li><strong>CSS2</strong> - Released in 1998, added support for media-specific style sheets.</li>
            <li><strong>CSS3</strong> - Current version, modular approach allowing independent updates to specific features.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN CSS Documentation</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to CSS</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3.org/Style/CSS/Overview.en.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3C CSS Home Page</h3>
                <p className="text-sm text-gray-600">Official CSS standards and specifications</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-end">
            <a href="/docs/css/selectors" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: CSS Selectors
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

export default CSSIntroduction;