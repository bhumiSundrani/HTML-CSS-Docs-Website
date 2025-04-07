// src/pages/docs/html/Attributes.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLAttributes = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Attributes</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML attributes provide additional information about HTML elements and are always specified in the start tag. They typically come in name/value pairs like: name="value".
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">What are HTML Attributes?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Attributes provide additional information about an element. They are always specified in the opening tag and usually come in name/value pairs like name="value".
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;element attribute="value"&gt;Content&lt;/element&gt;</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            For example, an anchor tag with an href attribute:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Common HTML Attributes</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-2 text-left text-[#567C8D]">Attribute</th>
                  <th className="border border-gray-300 p-2 text-left text-[#567C8D]">Applies to</th>
                  <th className="border border-gray-300 p-2 text-left text-[#567C8D]">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">class</td>
                  <td className="border border-gray-300 p-2">Most elements</td>
                  <td className="border border-gray-300 p-2">Specifies one or more class names for an element (used with CSS)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 font-medium">id</td>
                  <td className="border border-gray-300 p-2">Most elements</td>
                  <td className="border border-gray-300 p-2">Specifies a unique ID for an element</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">href</td>
                  <td className="border border-gray-300 p-2">&lt;a&gt;, &lt;link&gt;</td>
                  <td className="border border-gray-300 p-2">Specifies the URL of the page the link goes to</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 font-medium">src</td>
                  <td className="border border-gray-300 p-2">&lt;img&gt;, &lt;script&gt;, &lt;iframe&gt;</td>
                  <td className="border border-gray-300 p-2">Specifies the URL of the media resource</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">alt</td>
                  <td className="border border-gray-300 p-2">&lt;img&gt;</td>
                  <td className="border border-gray-300 p-2">Specifies alternative text for an image</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 font-medium">style</td>
                  <td className="border border-gray-300 p-2">Most elements</td>
                  <td className="border border-gray-300 p-2">Specifies inline CSS styles for an element</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">title</td>
                  <td className="border border-gray-300 p-2">Most elements</td>
                  <td className="border border-gray-300 p-2">Specifies extra information about an element (displayed as a tooltip)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Global Attributes</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Global attributes are attributes that can be used with all HTML elements. Some of the most common global attributes include:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong className="text-[#567C8D]">class</strong>: Specifies one or more class names for an element</li>
            <li><strong className="text-[#567C8D]">id</strong>: Specifies a unique ID for an element</li>
            <li><strong className="text-[#567C8D]">style</strong>: Specifies inline CSS styles for an element</li>
            <li><strong className="text-[#567C8D]">title</strong>: Specifies extra information about an element</li>
            <li><strong className="text-[#567C8D]">lang</strong>: Specifies the language of the element's content</li>
            <li><strong className="text-[#567C8D]">data-*</strong>: Used to store custom data private to the page or application</li>
            <li><strong className="text-[#567C8D]">hidden</strong>: Specifies that an element is not yet, or is no longer, relevant</li>
            <li><strong className="text-[#567C8D]">aria-*</strong>: Used to create accessible web applications</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Boolean Attributes</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Some attributes don't need a value. These are called boolean attributes. The presence of the attribute implies true, and the absence implies false.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;button disabled&gt;Click Me&lt;/button&gt;</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            Common boolean attributes include:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong className="text-[#567C8D]">disabled</strong>: Disables form elements</li>
            <li><strong className="text-[#567C8D]">checked</strong>: Pre-selects a checkbox or radio button</li>
            <li><strong className="text-[#567C8D]">readonly</strong>: Makes an input field read-only</li>
            <li><strong className="text-[#567C8D]">required</strong>: Makes an input field required</li>
            <li><strong className="text-[#567C8D]">selected</strong>: Pre-selects an option in a dropdown list</li>
            <li><strong className="text-[#567C8D]">hidden</strong>: Hides an element</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Attribute Quotes</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML attribute values should be enclosed in quotes. Double quotes are the most common, but single quotes can also be used.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<!-- Using double quotes (recommended) -->
<a href="https://example.com">Example</a>

<!-- Using single quotes -->
<a href='https://example.com'>Example</a>`}
            </pre>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-yellow-700">
              <strong>Best Practice:</strong> Always use quotes for attribute values, even if they technically work without quotes in some cases. This ensures consistency and prevents errors.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Attributes Reference</h3>
                <p className="text-sm text-gray-600">Comprehensive HTML attributes documentation</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/tags/ref_attributes.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools Attributes</h3>
                <p className="text-sm text-gray-600">HTML attributes reference with examples</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/elements" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: HTML Elements
            </a>
            <a href="/docs/html/headings" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Headings
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

export default HTMLAttributes;