// src/pages/docs/html/Introduction.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLIntroduction = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">Introduction to HTML</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">What is HTML?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML is the foundation of all web pages. It provides the structure for web content and defines what content is, such as headings, paragraphs, or images. 
            HTML is not a programming language; it's a markup language that tells browsers how to structure the web pages you visit.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A markup language uses tags to define elements within a document. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">HTML Document Structure</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A basic HTML document has the following structure:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
            </pre>
          </div>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong className="text-[#567C8D]">DOCTYPE</strong>: Declares the document type</li>
            <li><strong className="text-[#567C8D]">html</strong>: The root element of an HTML page</li>
            <li><strong className="text-[#567C8D]">head</strong>: Contains meta information about the document</li>
            <li><strong className="text-[#567C8D]">title</strong>: Specifies a title for the document</li>
            <li><strong className="text-[#567C8D]">body</strong>: Contains the visible page content</li>
            <li><strong className="text-[#567C8D]">h1</strong>: Defines a large heading</li>
            <li><strong className="text-[#567C8D]">p</strong>: Defines a paragraph</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">HTML Elements</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            An HTML element is defined by a start tag, some content, and an end tag. The general format is:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            Some elements have no content and are called empty elements, like the &lt;br&gt; tag (line break).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Web Docs</h3>
                <p className="text-sm text-gray-600">Comprehensive resources for HTML</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/html/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools</h3>
                <p className="text-sm text-gray-600">HTML tutorials and references</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <div></div>
            <a href="/docs/html/elements" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Elements
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

export default HTMLIntroduction;