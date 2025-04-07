// src/pages/docs/css/BoxModel.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSBoxModel = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Box Model</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            The CSS Box Model is a fundamental concept that describes how elements are rendered in a document. It consists of content, padding, border, and margin areas that define an element's total space on the page.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">What is the Box Model?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            In CSS, the term "box model" is used when talking about design and layout. Every HTML element is treated as a box with the following properties:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Content</strong> - The actual content of the box, where text and images appear</li>
            <li><strong>Padding</strong> - The space between the content and the border</li>
            <li><strong>Border</strong> - A border that goes around the padding and content</li>
            <li><strong>Margin</strong> - The space outside the border</li>
          </ul>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`div {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
}`}</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            With the standard box model, the total width of this element would be:
          </p>
          
          <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 mb-4">
            <p className="text-yellow-800">
              Total width = width + (padding-left + padding-right) + (border-left + border-right) + (margin-left + margin-right)
            </p>
            <p className="text-yellow-800 mt-2">
              Total width = 300px + (20px + 20px) + (5px + 5px) + (30px + 30px) = 410px
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Box Sizing</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">box-sizing</code> property allows you to include the padding and border in an element's total width and height.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Content-Box (Default)</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              By default, elements use <code className="bg-gray-100 px-1 py-0.5 rounded">content-box</code>, meaning the width and height properties only include the content area.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`div {
  box-sizing: content-box; /* Default */
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Border-Box</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              With <code className="bg-gray-100 px-1 py-0.5 rounded">border-box</code>, the width and height properties include the content, padding, and border, making it easier to size elements.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`div {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}`}</pre>
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">
              In this case, the content area would be 250px (300px - 20px*2 - 5px*2).
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Universal Box Sizing Reset</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Many developers prefer to apply <code className="bg-gray-100 px-1 py-0.5 rounded">border-box</code> to all elements for more predictable sizing:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`*, *::before, *::after {
  box-sizing: border-box;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Width and Height</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS provides several properties to control an element's dimensions.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Basic Properties</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">width</code> / <code className="bg-gray-100 px-1 py-0.5 rounded">height</code>: Sets the width/height of the content area</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">min-width</code> / <code className="bg-gray-100 px-1 py-0.5 rounded">min-height</code>: Sets the minimum width/height</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">max-width</code> / <code className="bg-gray-100 px-1 py-0.5 rounded">max-height</code>: Sets the maximum width/height</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`.container {
  width: 80%;
  max-width: 1200px;
  min-height: 500px;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Padding</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Padding creates space inside the element between the content and the border.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Padding Properties</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">padding-top</code>: Sets the top padding</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">padding-right</code>: Sets the right padding</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">padding-bottom</code>: Sets the bottom padding</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">padding-left</code>: Sets the left padding</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">padding</code>: Shorthand property</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* Individual sides */
div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Shorthand - all sides */
div {
  padding: 10px; /* Applies to all four sides */
}

/* Shorthand - vertical | horizontal */
div {
  padding: 10px 20px; /* top & bottom | left & right */
}

/* Shorthand - top | horizontal | bottom */
div {
  padding: 10px 20px 15px; /* top | left & right | bottom */
}

/* Shorthand - top | right | bottom | left */
div {
  padding: 10px 20px 15px 25px; /* top | right | bottom | left */
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Borders</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Borders create a visible boundary around an element.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Border Properties</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-width</code>: Sets the width of the border</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-style</code>: Sets the style of the border (solid, dashed, dotted, etc.)</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-color</code>: Sets the color of the border</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">border</code>: Shorthand property</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-radius</code>: Sets rounded corners</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* Individual properties */
div {
  border-width: 2px;
  border-style: solid;
  border-color: #3498db;
}

/* Shorthand */
div {
  border: 2px solid #3498db;
}

/* Individual sides */
div {
  border-top: 1px dashed #e74c3c;
  border-right: 2px solid #3498db;
  border-bottom: 3px dotted #2ecc71;
  border-left: 4px double #f1c40f;
}

/* Border radius */
div {
  border-radius: 10px; /* All corners equally */
}

div {
  border-radius: 10px 20px 30px 40px; /* top-left | top-right | bottom-right | bottom-left */
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Margins</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Margins create space outside the border, affecting the element's position relative to other elements.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Margin Properties</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">margin-top</code>: Sets the top margin</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">margin-right</code>: Sets the right margin</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">margin-bottom</code>: Sets the bottom margin</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">margin-left</code>: Sets the left margin</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">margin</code>: Shorthand property</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* Individual sides */
div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}

/* Shorthand - all sides */
div {
  margin: 10px; /* Applies to all four sides */
}

/* Shorthand - vertical | horizontal */
div {
  margin: 10px 20px; /* top & bottom | left & right */
}

/* Shorthand - top | horizontal | bottom */
div {
  margin: 10px 20px 15px; /* top | left & right | bottom */
}

/* Shorthand - top | right | bottom | left */
div {
  margin: 10px 20px 15px 25px; /* top | right | bottom | left */
}

/* Auto margins for centering */
div {
  width: 300px;
  margin: 0 auto; /* Centers block element horizontally */
}`}</pre>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Margin Collapse</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Vertical margins between adjacent elements can collapse (combine), meaning the actual margin between them will be the larger of the two margins, not the sum.
            </p>
            <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                When two adjacent elements have margins, only the larger margin will be applied between them.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Box Model</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to the CSS Box Model</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://css-tricks.com/the-css-box-model/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">CSS-Tricks Box Model</h3>
                <p className="text-sm text-gray-600">Visual explanation of the Box Model</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/css/colors" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: CSS Colors
            </a>
            <a href="/docs/css/typography" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: CSS Typography
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

export default CSSBoxModel;