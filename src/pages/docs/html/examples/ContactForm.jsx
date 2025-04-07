// src/pages/docs/html/examples/ContactForm.js
import React from 'react';
import DocLayout from '../../../../layouts/HTMLDocLayout';

const HTMLContactForm = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">HTML Contact Form Example</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            HTML forms are essential for collecting user input. This example demonstrates how to create an accessible, user-friendly contact form.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Basic Contact Form</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<form action="/submit-form" method="post" class="contact-form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required>
  </div>
  
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <div class="form-group">
    <button type="submit">Send Message</button>
  </div>
</form>

<style>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    background-color: #567C8D;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #456b7d;
  }
</style>`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Enhanced Form with Validation</h2>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="font-mono">{`<form action="/submit-form" method="post" class="contact-form" novalidate>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required 
           minlength="2" maxlength="100" 
           aria-describedby="name-error">
    <span id="name-error" class="error-message"></span>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
           aria-describedby="email-error">
    <span id="email-error" class="error-message"></span>
  </div>
  
  <div class="form-group">
    <label for="phone">Phone (optional):</label>
    <input type="tel" id="phone" name="phone"
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
           aria-describedby="phone-hint">
    <small id="phone-hint" class="form-hint">Format: 123-456-7890</small>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject:</label>
    <select id="subject" name="subject" required>
      <option value="">-- Please choose an option --</option>
      <option value="general">General Inquiry</option>
      <option value="support">Technical Support</option>
      <option value="billing">Billing Question</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required
              minlength="10" maxlength="1000"
              aria-describedby="message-error"></textarea>
    <span id="message-error" class="error-message"></span>
    <small id="message-count" class="character-count">0/1000 characters</small>
  </div>
  
  <div class="form-group">
    <label class="checkbox-label">
      <input type="checkbox" name="terms" required>
      I agree to the <a href="/terms">terms and conditions</a>
    </label>
  </div>
  
  <div class="form-group">
    <button type="submit">Send Message</button>
  </div>
</form>

<style>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #567C8D;
    box-shadow: 0 0 0 2px rgba(86, 124, 141, 0.2);
  }
  
  input:invalid, textarea:invalid, select:invalid {
    border-color: #dc3545;
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    font-weight: normal;
  }
  
  .checkbox-label input {
    width: auto;
    margin-right: 10px;
  }
  
  .error-message {
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 5px;
    display: block;
  }
  
  .form-hint {
    color: #6c757d;
    font-size: 0.85rem;
    margin-top: 5px;
    display: block;
  }
  
  .character-count {
    color: #6c757d;
    font-size: 0.85rem;
    text-align: right;
    margin-top: 5px;
    display: block;
  }
  
  button {
    background-color: #567C8D;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #456b7d;
  }
</style>

<script>
  // Form validation
  const form = document.querySelector('.contact-form');
  const inputs = form.querySelectorAll('input, textarea, select');
  
  // Display error messages
  function showError(input, message) {
    const errorElement = document.getElementById(input.getAttribute('aria-describedby'));
    errorElement.textContent = message;
  }
  
  // Clear error messages
  function clearError(input) {
    const errorElementId = input.getAttribute('aria-describedby');
    if (errorElementId) {
      const errorElement = document.getElementById(errorElementId);
      if (errorElement) errorElement.textContent = '';
    }
  }
  
  // Validate on input
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (input.checkValidity()) {
        clearError(input);
      }
    });
  });
  
  // Character counter for message
  const messageTextarea = document.getElementById('message');
  const messageCount = document.getElementById('message-count');
  
  messageTextarea.addEventListener('input', function() {
    const currentLength = messageTextarea.value.length;
    messageCount.textContent = \`\${currentLength}/1000 characters\`;
  });
  
  // Form submission
  form.addEventListener('submit', function(event) {
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        
        if (input.validity.valueMissing) {
          showError(input, 'This field is required');
        } else if (input.validity.typeMismatch) {
          showError(input, \`Please enter a valid \${input.type}\`);
        } else if (input.validity.tooShort) {
          showError(input, \`Minimum length is \${input.minLength} characters\`);
        } else if (input.validity.tooLong) {
          showError(input, \`Maximum length is \${input.maxLength} characters\`);
        } else if (input.validity.patternMismatch) {
          showError(input, 'Please match the requested format');
        }
      }
    });
    
    if (!isValid) {
      event.preventDefault();
    }
  });
</script>`}</pre>
          </div>
        </section>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <h3 className="font-bold text-yellow-700 mb-2">Form Best Practices</h3>
          <ul className="list-disc pl-6 text-yellow-700">
            <li>Always include form labels for accessibility</li>
            <li>Use appropriate input types (email, tel, number, etc.)</li>
            <li>Add client-side validation but never rely on it exclusively</li>
            <li>Include proper ARIA attributes for screen readers</li>
            <li>Provide clear error messages and validation feedback</li>
            <li>Use HTTPS for all forms that collect sensitive information</li>
            <li>Include a CSRF token for security</li>
          </ul>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <a href="/docs/html/examples/basic-layout" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous: Basic Layout
            </a>
            <a href="/docs/html/examples/navigation" className="inline-flex items-center px-4 py-2 bg-[#567C8D] text-white rounded-md hover:bg-[#456b7d]">
              Back to Navigation Example
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

export default HTMLContactForm;
