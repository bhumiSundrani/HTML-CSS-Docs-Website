// src/pages/docs/html/Paragraphs.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLParagraphs = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Paragraphs</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Paragraphs are the basic blocks of text in HTML documents. They help organize content, improve readability, and provide structure to your web pages.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Creating Paragraphs</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            In HTML, paragraphs are defined with the &lt;p&gt; tag. Each paragraph is displayed as a block of text with space before and after it.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<p>This is a paragraph. It contains multiple sentences that form a cohesive thought or idea. Paragraphs help organize content into logical sections.</p>

<p>This is another paragraph. Notice how browsers automatically add space between paragraphs.</p>`}
            </pre>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-yellow-700">
              <strong>Note:</strong> Browsers automatically add margin space before and after paragraphs. This spacing can be adjusted using CSS.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">HTML Ignores Extra Whitespace</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML automatically removes extra spaces and line breaks in your code. Multiple spaces are rendered as a single space, and line breaks are ignored.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<p>This    paragraph    has    many    spaces    in    the    source    code,
   but    the    browser
   ignores    them.</p>`}
            </pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            The above code will be displayed as a single line with normal spacing between words, regardless of the extra spaces and line breaks in the HTML.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Line Breaks</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you want to create a line break within a paragraph without starting a new paragraph, you can use the &lt;br&gt; tag:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<p>This is a paragraph<br>with line breaks<br>that create new lines<br>without starting new paragraphs.</p>`}
            </pre>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-yellow-700">
              <strong>Best Practice:</strong> Use the &lt;br&gt; tag sparingly. In most cases, if you need to create visual separation, it's better to use CSS or create a new paragraph.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Horizontal Rules</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The &lt;hr&gt; tag creates a horizontal rule (a thematic break) between paragraphs or sections of content:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<p>This is the first section of content.</p>

<hr>

<p>This is the second section of content, separated by a horizontal rule.</p>`}
            </pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            Horizontal rules are useful for visually separating content sections when a new heading isn't appropriate.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Preserving Whitespace with &lt;pre&gt;</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you need to display text exactly as it's written in the HTML source code, including spaces and line breaks, you can use the &lt;pre&gt; (preformatted text) element:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<pre>
  This text will be displayed
  exactly as written,
    including spaces
    and line breaks.
</pre>`}
            </pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            The &lt;pre&gt; element is often used for displaying code examples, ASCII art, or any content where whitespace is significant.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Styling Paragraphs with CSS</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You can customize the appearance of paragraphs using CSS:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">
{`<style>
  p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
  }
  
  .intro {
    font-size: 18px;
    font-weight: bold;
    color: #567C8D;
  }
</style>

<p class="intro">This is an introductory paragraph with custom styling.</p>
<p>This is a regular paragraph with the default paragraph styling.</p>`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Paragraph Element</h3>
                <p className="text-sm text-gray-600">Complete reference for HTML paragraphs</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/html/html_paragraphs.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools HTML Paragraphs</h3>
                <p className="text-sm text-gray-600">HTML paragraph tutorials with examples</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/headings" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: HTML Headings
            </a>
            <a href="/docs/html/forms" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Forms
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

export default HTMLParagraphs;