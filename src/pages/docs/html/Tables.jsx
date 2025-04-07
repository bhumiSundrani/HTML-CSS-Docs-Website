// src/pages/docs/html/Tables.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLTables = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Tables</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML tables allow web developers to arrange data into rows and columns. They're useful for displaying tabular data in a structured, easy-to-read format.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Basic Table Structure</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A basic HTML table consists of the <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;table&gt;</code> element with rows and cells defined within:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>`}</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            This creates a simple table with two columns and three rows (including the header row).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Table Elements</h2>
          
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong className="text-[#567C8D]">&lt;table&gt;</strong>: Defines the entire table</li>
            <li><strong className="text-[#567C8D]">&lt;tr&gt;</strong>: Defines a table row</li>
            <li><strong className="text-[#567C8D]">&lt;th&gt;</strong>: Defines a header cell (bold and centered by default)</li>
            <li><strong className="text-[#567C8D]">&lt;td&gt;</strong>: Defines a standard data cell</li>
            <li><strong className="text-[#567C8D]">&lt;caption&gt;</strong>: Provides a title for the table</li>
            <li><strong className="text-[#567C8D]">&lt;thead&gt;</strong>: Groups header content</li>
            <li><strong className="text-[#567C8D]">&lt;tbody&gt;</strong>: Groups body content</li>
            <li><strong className="text-[#567C8D]">&lt;tfoot&gt;</strong>: Groups footer content</li>
            <li><strong className="text-[#567C8D]">&lt;colgroup&gt; and &lt;col&gt;</strong>: Define column groups for formatting</li>
          </ul>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            A more semantic table structure using these elements:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<table>
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Table Attributes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Cell Attributes</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><strong className="text-[#567C8D]">colspan</strong>: Number of columns a cell should span</li>
                <li><strong className="text-[#567C8D]">rowspan</strong>: Number of rows a cell should span</li>
                <li><strong className="text-[#567C8D]">headers</strong>: Associates data cells with header cells</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-[#567C8D] mb-2">Table Attributes</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><strong className="text-[#567C8D]">border</strong>: (HTML5 deprecated, use CSS instead)</li>
                <li><strong className="text-[#567C8D]">cellpadding</strong>: (HTML5 deprecated, use CSS instead)</li>
                <li><strong className="text-[#567C8D]">cellspacing</strong>: (HTML5 deprecated, use CSS instead)</li>
              </ul>
            </div>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            Example of a table with colspan and rowspan:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Contact Info</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>555-1234</td>
    <td>john@example.com</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>555-5678</td>
    <td>jane@example.com</td>
  </tr>
</table>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Styling Tables with CSS</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Modern table design relies on CSS for styling. Here are some common CSS properties used with tables:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #eaeaea;
}`}</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            This CSS creates a clean, responsive table with alternating row colors and hover effects.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Responsive Tables</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Tables can be challenging on small screens. Here are some techniques for making tables responsive:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-bold text-[#567C8D] mb-2">Horizontal Scrolling</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md mb-2 overflow-x-auto">
              <pre className="font-mono">{`.table-container {
  overflow-x: auto;
}

<div class="table-container">
  <table>
    <!-- Table content -->
  </table>
</div>`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-bold text-[#567C8D] mb-2">Responsive Patterns</h3>
            <p className="text-gray-700 mb-2">Other approaches include:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Card layout for mobile (transform rows into cards)</li>
              <li>Hide less important columns on small screens</li>
              <li>Use CSS Grid or Flexbox for custom layouts</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Table Accessibility</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Making tables accessible to all users, including those with screen readers:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Use <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;caption&gt;</code> to provide a description of the table</li>
            <li>Use <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;th&gt;</code> with <code className="bg-gray-100 px-1 py-0.5 rounded">scope</code> attribute (<code className="bg-gray-100 px-1 py-0.5 rounded">row</code> or <code className="bg-gray-100 px-1 py-0.5 rounded">col</code>)</li>
            <li>Use <code className="bg-gray-100 px-1 py-0.5 rounded">id</code> on header cells and <code className="bg-gray-100 px-1 py-0.5 rounded">headers</code> on data cells for complex tables</li>
            <li>Avoid using tables for layout purposes</li>
          </ul>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<table>
  <caption>Quarterly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Q1</th>
      <th scope="col">Q2</th>
      <th scope="col">Q3</th>
      <th scope="col">Q4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Widgets</th>
      <td>$10,000</td>
      <td>$12,000</td>
      <td>$15,000</td>
      <td>$18,000</td>
    </tr>
    <tr>
      <th scope="row">Gadgets</th>
      <td>$8,000</td>
      <td>$9,000</td>
      <td>$10,000</td>
      <td>$12,000</td>
    </tr>
  </tbody>
</table>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Tables Guide</h3>
                <p className="text-sm text-gray-600">Comprehensive tutorial on HTML tables</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/html/html_tables.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools HTML Tables</h3>
                <p className="text-sm text-gray-600">HTML table tutorial with examples</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/forms" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: HTML Forms
            </a>
            <a href="/docs/html/basic-layout" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Basic Layout Example
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

export default HTMLTables;