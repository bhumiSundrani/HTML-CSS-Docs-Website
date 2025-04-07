// src/pages/docs/html/Forms.js
import React from 'react';
import DocLayout from '../../../layouts/HTMLDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const HTMLForms = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Forms</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML forms are used to collect user input. They enable interaction between users and websites by providing various controls for entering data that can be sent to a server for processing.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Basic Form Structure</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A basic HTML form is created using the <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;form&gt;</code> element with various form controls inside:
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<form action="/submit-form" method="post">
  <!-- Form controls go here -->
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>`}</pre>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">action</code> attribute specifies where to send the form data when submitted, and the <code className="bg-gray-100 px-1 py-0.5 rounded">method</code> attribute defines how the data is sent (GET or POST).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Form Controls</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Forms contain various controls for collecting different types of user input:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-bold text-[#567C8D] mb-2">Input Types</h3>
            <p className="text-gray-700 mb-3">The <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;input&gt;</code> element can represent many different form controls depending on its type attribute:</p>
            
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong className="text-[#567C8D]">text</strong>: Single-line text input</li>
              <li><strong className="text-[#567C8D]">password</strong>: Password input (characters are masked)</li>
              <li><strong className="text-[#567C8D]">checkbox</strong>: Checkboxes for selecting multiple options</li>
              <li><strong className="text-[#567C8D]">radio</strong>: Radio buttons for selecting one option from many</li>
              <li><strong className="text-[#567C8D]">submit</strong>: Button to submit the form</li>
              <li><strong className="text-[#567C8D]">reset</strong>: Button to reset the form</li>
              <li><strong className="text-[#567C8D]">button</strong>: Clickable button</li>
              <li><strong className="text-[#567C8D]">email</strong>: Input for email addresses</li>
              <li><strong className="text-[#567C8D]">number</strong>: Input for numerical values</li>
              <li><strong className="text-[#567C8D]">date</strong>: Date picker</li>
              <li><strong className="text-[#567C8D]">file</strong>: File upload control</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-bold text-[#567C8D] mb-2">Other Form Elements</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong className="text-[#567C8D]">&lt;textarea&gt;</strong>: Multi-line text input</li>
              <li><strong className="text-[#567C8D]">&lt;select&gt; and &lt;option&gt;</strong>: Dropdown lists</li>
              <li><strong className="text-[#567C8D]">&lt;button&gt;</strong>: Clickable button with more styling options</li>
              <li><strong className="text-[#567C8D]">&lt;label&gt;</strong>: Label for form controls</li>
              <li><strong className="text-[#567C8D]">&lt;fieldset&gt; and &lt;legend&gt;</strong>: Group related form elements</li>
              <li><strong className="text-[#567C8D]">&lt;datalist&gt;</strong>: Predefined options for input fields</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Form Examples</h2>
          
          <h3 className="font-bold text-[#567C8D] mb-3">Login Form</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto">
            <pre className="font-mono">{`<form action="/login" method="post">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </div>
  <div>
    <input type="checkbox" id="remember" name="remember">
    <label for="remember">Remember me</label>
  </div>
  <button type="submit">Log In</button>
</form>`}</pre>
          </div>
          
          <h3 className="font-bold text-[#567C8D] mb-3">Registration Form</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto">
            <pre className="font-mono">{`<form action="/register" method="post">
  <fieldset>
    <legend>Personal Information</legend>
    <div>
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob">
    </div>
  </fieldset>
  
  <fieldset>
    <legend>Account Details</legend>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div>
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" required>
    </div>
  </fieldset>
  
  <button type="submit">Register</button>
</form>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Form Validation</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            HTML5 offers built-in form validation attributes that help ensure users provide the correct information:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong className="text-[#567C8D]">required</strong>: Specifies that an input field must be filled out</li>
            <li><strong className="text-[#567C8D]">min and max</strong>: Specifies minimum and maximum values for number inputs</li>
            <li><strong className="text-[#567C8D]">minlength and maxlength</strong>: Specifies minimum and maximum length for text inputs</li>
            <li><strong className="text-[#567C8D]">pattern</strong>: Specifies a regular expression to check against</li>
          </ul>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<input type="text" name="username" required minlength="3" maxlength="15">
<input type="email" name="email" required>
<input type="number" name="age" min="18" max="100">
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Form Accessibility</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Creating accessible forms is crucial for users with disabilities. Here are some best practices:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Use <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;label&gt;</code> elements properly associated with form controls</li>
            <li>Group related form elements using <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;fieldset&gt;</code> and <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;legend&gt;</code></li>
            <li>Provide clear instructions and error messages</li>
            <li>Use ARIA attributes when necessary</li>
            <li>Ensure keyboard navigation works properly</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Learn/Forms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">MDN Forms Guide</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to HTML forms</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
            
            <a 
              href="https://www.w3schools.com/html/html_forms.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-bold text-[#567C8D]">W3Schools HTML Forms</h3>
                <p className="text-sm text-gray-600">HTML forms tutorial with examples</p>
              </div>
              <FiExternalLink className="text-gray-400" />
            </a>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/paragraphs" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: HTML Paragraphs
            </a>
            <a href="/docs/html/tables" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Next: HTML Tables
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

export default HTMLForms;