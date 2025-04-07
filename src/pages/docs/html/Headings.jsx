// src/pages/docs/html/Headings.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLHeadings = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Headings</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML headings define the titles and subtitles of your content. They range from h1 (most important) to h6 (least important) and are crucial for both page structure and SEO.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Introduction to HTML Headings</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML provides six levels of headings, from &lt;h1&gt; to &lt;h6&gt;. The &lt;h1&gt; element represents the main heading, while the other elements represent subheadings of decreasing importance.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2 text-[#567C8D]">Visual Appearance</h3>
            <div className="space-y-2">
              <p style={{ fontSize: '2em', fontWeight: 'bold' }}>Heading 1</p>
              <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Heading 2</p>
              <p style={{ fontSize: '1.17em', fontWeight: 'bold' }}>Heading 3</p>
              <p style={{ fontSize: '1em', fontWeight: 'bold' }}>Heading 4</p>
              <p style={{ fontSize: '0.83em', fontWeight: 'bold' }}>Heading 5</p>
              <p style={{ fontSize: '0.67em', fontWeight: 'bold' }}>Heading 6</p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Importance of Headings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Structure and Organization</h3>
              <p className="text-gray-700">
                Headings create a hierarchical structure for your content, making it easier for users to understand the relationship between different sections.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Accessibility</h3>
              <p className="text-gray-700">
                Screen readers use headings to navigate content, allowing users with visual impairments to understand the page structure and skip to relevant sections.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">SEO Benefits</h3>
              <p className="text-gray-700">
                Search engines use headings to understand the content of a page. A proper heading structure can improve your search engine rankings.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Readability</h3>
              <p className="text-gray-700">
                Headings break up long blocks of text, making content more scannable and easier to read.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Best Practices for Using Headings</h2>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong className="text-[#567C8D]">Use only one H1 per page</strong> - The H1 should represent the main topic of the page, typically matching or closely related to the page title.
            </li>
            <li>
              <strong className="text-[#567C8D]">Maintain a logical hierarchy</strong> - Don't skip heading levels (e.g., don't jump from H1 to H3 without an H2 in between).
            </li>
            <li>
              <strong className="text-[#567C8D]">Be concise and descriptive</strong> - Headings should clearly indicate what the following content is about.
            </li>
            <li>
              <strong className="text-[#567C8D]">Don't use headings just for styling</strong> - If you just want larger or bolder text, use CSS instead of misusing heading elements.
            </li>
            <li>
              <strong className="text-[#567C8D]">Include keywords</strong> - Where appropriate, include relevant keywords in your headings for SEO benefits.
            </li>
          </ul>
          
          // src/pages/docs/html/Headings.js (continued)
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-yellow-700">
              <strong>Note:</strong> While you might be tempted to use headings to make text stand out visually, it's better to use CSS for styling. Headings should be used for their semantic meaning, not just for their default appearance.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Example of Proper Heading Structure</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<h1>Web Development Guide</h1>
  <h2>HTML Basics</h2>
    <h3>Elements and Tags</h3>
    <h3>Attributes</h3>
  <h2>CSS Fundamentals</h2>
    <h3>Selectors</h3>
    <h3>Box Model</h3>
  <h2>JavaScript Essentials</h2>
    <h3>Variables and Data Types</h3>
    <h3>Functions</h3>`}
            </pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            This structure creates a clear hierarchy where "Web Development Guide" is the main topic, followed by subtopics like "HTML Basics," which contain further subtopics like "Elements and Tags."
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Styling Headings with CSS</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            While headings have default styling, you can customize their appearance using CSS:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<style>
  h1 {
    color: #3366cc;
    font-family: 'Arial', sans-serif;
    border-bottom: 2px solid #3366cc;
    padding-bottom: 10px;
  }
  
  h2 {
    color: #6699cc;
    font-family: 'Arial', sans-serif;
    border-bottom: 1px solid #6699cc;
    padding-bottom: 5px;
  }
</style>

<h1>Styled Heading 1</h1>
<h2>Styled Heading 2</h2>`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Heading Elements</h3>
                <p className="text-sm text-gray-600">Complete reference for HTML headings</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/html/html_headings.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools HTML Headings</h3>
                <p className="text-sm text-gray-600">HTML heading tutorials with examples</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/attributes" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: HTML Attributes
            </a>
            <a href="/docs/html/paragraphs" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Paragraphs
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

export default HTMLHeadings;