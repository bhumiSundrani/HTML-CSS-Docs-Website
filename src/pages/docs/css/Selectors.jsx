// src/pages/docs/css/Selectors.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSSelectors = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Selectors</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            CSS selectors are patterns used to select and style HTML elements. They allow you to target specific elements or groups of elements in your document.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">What Are CSS Selectors?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS selectors are the part of CSS rules that identify which elements in the document will be styled by the properties in the declaration block. Mastering selectors is essential for efficient CSS development.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* Basic selector structure */
selector {
  property: value;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Basic Selectors</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Universal Selector</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The universal selector (*) selects all elements on the page.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Type Selector (Element Selector)</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects all elements of a specified type.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 {
  color: blue;
}

p {
  font-size: 16px;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Class Selector</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects all elements with a specified class attribute.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.primary {
  color: blue;
}

.large {
  font-size: 24px;
}`}</pre>
            </div>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HTML with classes:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<h1 class="primary large">This is a heading</h1>
<p class="primary">This is a paragraph.</p>`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">ID Selector</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects a single element with a specified id attribute.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`#header {
  background-color: black;
  color: white;
}

#footer {
  background-color: gray;
}`}</pre>
            </div>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HTML with IDs:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<header id="header">This is the header</header>
<footer id="footer">This is the footer</footer>`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Combinators</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Combinators explain the relationship between selectors, allowing for more precise targeting.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Descendant Selector (space)</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects all elements that are descendants of a specified element.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`div p {
  color: red;
}`}</pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This selects all p elements inside div elements.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Child Selector `{'(>)'}`</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects all elements that are direct children of a specified element.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`div > p {
  color: blue;
}`}</pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This selects all p elements that are direct children of div elements.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Adjacent Sibling Selector (+)</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects an element that is directly after another specific element.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 + p {
  color: green;
}`}</pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This selects the first p element that immediately follows an h1 element.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">General Sibling Selector (~)</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Selects all elements that are next siblings of a specified element.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`h1 ~ p {
  color: purple;
}`}</pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This selects all p elements that follow an h1 element.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Pseudo-classes</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pseudo-classes select elements based on a state or a relationship that isn't explicitly indicated in the document tree.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Link and User Action Pseudo-classes</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Unvisited link */
a:link {
  color: blue;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Mouse over link */
a:hover {
  color: red;
}

/* Selected link */
a:active {
  color: orange;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Form Pseudo-classes</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Input with focus */
input:focus {
  border-color: blue;
}

/* Checked checkbox or radio button */
input:checked {
  background-color: yellow;
}

/* Disabled form elements */
input:disabled {
  opacity: 0.5;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Structural Pseudo-classes</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* First child element */
:first-child {
  font-weight: bold;
}

/* Last child element */
:last-child {
  margin-bottom: 0;
}

/* Even rows in a table */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Every third element */
:nth-child(3n) {
  color: red;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Pseudo-elements</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pseudo-elements allow you to style a specific part of an element.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* First line of a paragraph */
p::first-line {
  font-weight: bold;
}

/* First letter of a paragraph */
p::first-letter {
  font-size: 200%;
  color: red;
}

/* Before an element (add content) */
h2::before {
  content: "➤ ";
  color: green;
}

/* After an element (add content) */
a::after {
  content: " ↗";
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Attribute Selectors</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Attribute selectors target elements based on their attributes and attribute values.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* Elements with a specific attribute */
[type] {
  border: 1px solid gray;
}

/* Elements with a specific attribute value */
[type="text"] {
  background-color: white;
}

/* Elements with an attribute value containing a specific word */
[class~="btn"] {
  padding: 5px 10px;
}

/* Elements with an attribute value starting with a specific string */
[href^="https"] {
  color: green;
}

/* Elements with an attribute value ending with a specific string */
[href$=".pdf"] {
  color: red;
}

/* Elements with an attribute value containing a specific substring */
[href*="example"] {
  text-decoration: underline;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Specificity</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Specificity determines which CSS rule applies when multiple rules could style the same element. It's calculated based on the selector types.
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Inline styles</strong> - Highest specificity</li>
            <li><strong>IDs</strong> - High specificity</li>
            <li><strong>Classes, attributes, and pseudo-classes</strong> - Medium specificity</li>
            <li><strong>Elements and pseudo-elements</strong> - Low specificity</li>
          </ul>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`/* Specificity: 0-0-1 */
p {
  color: red;
}

/* Specificity: 0-1-0 */
.text {
  color: blue;
}

/* Specificity: 1-0-0 */
#unique {
  color: green;
}

/* Specificity: 1-0-1 */
#unique p {
  color: purple;
}

/* Specificity: 1-1-0 */
#unique.text {
  color: orange;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN CSS Selectors</h3>
                <p className="text-sm text-gray-600">Comprehensive documentation on CSS selectors</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3.org/TR/selectors-3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3C Selectors Level 3</h3>
                <p className="text-sm text-gray-600">Official CSS selectors specification</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/css/introduction" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: CSS Introduction
            </a>
            <a href="/docs/css/colors" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: CSS Colors
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

export default CSSSelectors; 