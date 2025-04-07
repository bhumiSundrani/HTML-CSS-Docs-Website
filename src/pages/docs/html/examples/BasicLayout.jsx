// src/pages/docs/html/examples/BasicLayout.js
import React from 'react';
import DocLayout from '../../../../layouts/HTMLDocLayout';

const HTMLBasicLayout = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Basic Layout Example</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            A basic HTML page layout uses semantic elements to create a structured document with header, navigation, main content, and footer.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">HTML Structure</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic HTML Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Website Title</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Main Content Section</h2>
      <p>This is the main content area of the webpage.</p>
    </section>
    
    <aside>
      <h3>Sidebar</h3>
      <p>This is a sidebar with additional information.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Example Website. All rights reserved.</p>
  </footer>
</body>
</html>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Element Breakdown</h2>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong className="text-[#567C8D]">&lt;!DOCTYPE html&gt;</strong>: Declares the document type and HTML version</li>
            <li><strong className="text-[#567C8D]">&lt;html&gt;</strong>: The root element with language attribute</li>
            <li><strong className="text-[#567C8D]">&lt;head&gt;</strong>: Contains metadata about the document</li>
            <li><strong className="text-[#567C8D]">&lt;header&gt;</strong>: Represents introductory content at the top of the page</li>
            <li><strong className="text-[#567C8D]">&lt;nav&gt;</strong>: Contains navigation links</li>
            <li><strong className="text-[#567C8D]">&lt;main&gt;</strong>: Contains the central content unique to the page</li>
            <li><strong className="text-[#567C8D]">&lt;section&gt;</strong>: Represents a standalone section of content</li>
            <li><strong className="text-[#567C8D]">&lt;aside&gt;</strong>: Represents content tangentially related to the main content</li>
            <li><strong className="text-[#567C8D]">&lt;footer&gt;</strong>: Represents the footer of the page</li>
          </ul>
        </section>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <h3 className="font-bold text-yellow-700 mb-2">Best Practices</h3>
          <ul className="list-disc pl-6 text-yellow-700">
            <li>Use semantic HTML elements to improve accessibility and SEO</li>
            <li>Keep the document structure clean and hierarchical</li>
            <li>Include proper meta tags in the head section</li>
            <li>Ensure your HTML is valid according to W3C standards</li>
          </ul>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/tables" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Tables
            </a>
            <a href="/docs/html/examples/contact-form" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: Contact Form Example
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

export default HTMLBasicLayout;