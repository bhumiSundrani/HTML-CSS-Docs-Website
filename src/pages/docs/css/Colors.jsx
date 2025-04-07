// src/pages/docs/css/Colors.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSColors = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Colors</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Colors in CSS are used to style elements on a web page. They can be specified using various formats including color names, HEX values, RGB, RGBA, HSL, and HSLA values.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Color Formats</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS supports different color formats, each with its own advantages. Understanding these formats allows you to precisely control the appearance of your web pages.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">1. Color Names</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              CSS supports 140 standard color names, such as red, blue, green, etc.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: red;
}

p {
  color: navy;
  background-color: lightblue;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">2. HEX Colors</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Hexadecimal colors are specified with #RRGGBB, where RR (red), GG (green), and BB (blue) are hexadecimal values between 00 and FF.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: #ff0000; /* Red */
}

p {
  color: #0000ff; /* Blue */
  background-color: #f1f1f1; /* Light gray */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">3. RGB Colors</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              RGB colors are specified using the rgb() function, with values for red, green, and blue between 0 and 255.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: rgb(255, 0, 0); /* Red */
}

p {
  color: rgb(0, 0, 255); /* Blue */
  background-color: rgb(241, 241, 241); /* Light gray */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">4. RGBA Colors</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              RGBA adds an alpha channel, allowing for transparency. The alpha value ranges from 0.0 (fully transparent) to 1.0 (fully opaque).
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">5. HSL Colors</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HSL (Hue, Saturation, Lightness) is a more intuitive color model. Hue is a degree on the color wheel (0 to 360), saturation is a percentage value (0% to 100%), and lightness is also a percentage (0% is black, 100% is white).
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: hsl(0, 100%, 50%); /* Red */
}

p {
  color: hsl(240, 100%, 50%); /* Blue */
  background-color: hsl(0, 0%, 95%); /* Light gray */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">6. HSLA Colors</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HSLA adds an alpha channel to HSL, allowing for transparency.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */
}

.card {
  background-color: hsla(210, 50%, 50%, 0.3); /* Semi-transparent blue */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Color Properties</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS provides various properties for applying colors to different parts of an element.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Common Color Properties</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">color</code>: Sets the text color</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">background-color</code>: Sets the background color</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-color</code>: Sets the color of borders</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">outline-color</code>: Sets the color of outlines</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">box-shadow</code>: Can include color values for shadows</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">text-shadow</code>: Can include color values for text shadows</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`.button {
  color: white;
  background-color: #3498db;
  border: 2px solid #2980b9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Current Color</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">currentColor</code> keyword refers to the value of the color property of an element. This is useful for maintaining consistency in your designs.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`.button {
  color: #3498db;
  border: 2px solid currentColor;
  box-shadow: 0 0 5px currentColor;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Color Variables</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS variables (custom properties) allow you to define and reuse colors throughout your stylesheet, making it easier to maintain a consistent color scheme.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333333;
  --background-color: #f5f5f5;
}

body {
  color: var(--text-color);
  background-color: var(--background-color);
}

.button {
  background-color: var(--primary-color);
  color: white;
}

.highlight {
  color: var(--secondary-color);
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/color" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN CSS Colors</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to CSS colors</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3.org/TR/css-color-4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3C CSS Color Module</h3>
                <p className="text-sm text-gray-600">Official CSS color specifications</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/css/selectors" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: CSS Selectors
            </a>
            <a href="/docs/css/box-model" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: CSS Box Model
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

export default CSSColors;