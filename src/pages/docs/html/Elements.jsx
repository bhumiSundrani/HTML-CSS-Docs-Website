// src/pages/docs/html/Elements.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLElements = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Elements</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML elements are the building blocks of HTML pages. Elements define the semantic meaning of content and structure web documents into a hierarchical format.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Anatomy of an HTML Element</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A typical HTML element consists of a start tag, content, and an end tag. The general format is:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            For example, a paragraph element looks like this:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;p&gt;This is a paragraph.&lt;/p&gt;</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Empty Elements</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Some HTML elements don't have any content and are called empty elements. These elements don't have a closing tag. For example:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;br&gt;
&lt;hr&gt;
&lt;img src="image.jpg" alt="Description"&gt;
&lt;input type="text"&gt;</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            In HTML5, you can write empty elements with a self-closing slash, but it's optional:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;img src="image.jpg" alt="Description" /&gt;</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Nested Elements</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML elements can be nested inside other HTML elements. This creates a hierarchical structure for the webpage.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<div>
  <h1>Main Heading</h1>
  <p>This is a <strong>paragraph</strong> with some <em>emphasized</em> text.</p>
</div>`}
            </pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            When nesting elements, it's important to properly close them in the reverse order they were opened to maintain proper structure.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Common HTML Elements</h2>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong className="text-[#567C8D]">&lt;html&gt;</strong>: The root element of an HTML page</li>
            <li><strong className="text-[#567C8D]">&lt;head&gt;</strong>: Contains meta information about the document</li>
            <li><strong className="text-[#567C8D]">&lt;title&gt;</strong>: Specifies a title for the document</li>
            <li><strong className="text-[#567C8D]">&lt;body&gt;</strong>: Contains the visible page content</li>
            <li><strong className="text-[#567C8D]">&lt;h1&gt; to &lt;h6&gt;</strong>: Defines headings of different levels</li>
            <li><strong className="text-[#567C8D]">&lt;p&gt;</strong>: Defines a paragraph</li>
            <li><strong className="text-[#567C8D]">&lt;div&gt;</strong>: Defines a division or section</li>
            <li><strong className="text-[#567C8D]">&lt;span&gt;</strong>: Defines an inline container</li>
            <li><strong className="text-[#567C8D]">&lt;a&gt;</strong>: Defines a hyperlink</li>
            <li><strong className="text-[#567C8D]">&lt;img&gt;</strong>: Defines an image</li>
            <li><strong className="text-[#567C8D]">&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</strong>: Define lists and list items</li>
            <li><strong className="text-[#567C8D]">&lt;table&gt;</strong>: Defines a table</li>
            <li><strong className="text-[#567C8D]">&lt;form&gt;</strong>: Defines a form for user input</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Block vs. Inline Elements</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML elements are typically classified as block-level or inline elements:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Block-level Elements</h3>
              <p className="text-sm text-gray-600 mb-2">Start on a new line and take up the full width available</p>
              <p className="text-gray-700">Examples: &lt;div&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;section&gt;</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Inline Elements</h3>
              <p className="text-sm text-gray-600 mb-2">Do not start on a new line and only take up as much width as necessary</p>
              <p className="text-gray-700">Examples: &lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;em&gt;, &lt;strong&gt;, &lt;code&gt;</p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Element Reference</h3>
                <p className="text-sm text-gray-600">Comprehensive HTML element documentation</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/tags/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools HTML Tags</h3>
                <p className="text-sm text-gray-600">HTML element reference with examples</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/introduction" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: Introduction
            </a>
            <a href="/docs/html/attributes" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Attributes
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

export default HTMLElements;