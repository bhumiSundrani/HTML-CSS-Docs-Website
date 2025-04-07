import React from 'react';
import DocLayout from '../../../../layouts/CSSDocLayout';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CSSCustomButtons = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/docs/css" className="inline-flex items-center text-blue-600 hover:underline">
            <FiArrowLeft className="mr-2" />
            Back to CSS Documentation
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">Example: Custom Button Design</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Buttons are essential interactive elements in web design. This example demonstrates how to create stylish, accessible button designs with CSS that can be customized for different contexts and user interactions.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Basic Button Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">
                  Primary Button
                </button>
                <button className="bg-white text-[#567C8D] border border-[#567C8D] py-2 px-4 rounded hover:bg-gray-50 transition-colors">
                  Secondary Button
                </button>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition-colors">
                  Neutral Button
                </button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
                  Success
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors">
                  Danger
                </button>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
                  Warning
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Info
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`<button class="btn btn-primary">
  Primary Button
</button>

<button class="btn btn-secondary">
  Secondary Button
</button>

<button class="btn btn-neutral">
  Neutral Button
</button>

<button class="btn btn-success">
  Success
</button>

<button class="btn btn-danger">
  Danger
</button>

<button class="btn btn-warning">
  Warning
</button>

<button class="btn btn-info">
  Info
</button>`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <pre className="font-mono">{`.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
}

.btn:focus {
  outline: 2px solid #567C8D;
  outline-offset: 2px;
}

.btn-primary {
  background-color: #567C8D;
  color: white;
}

.btn-primary:hover {
  background-color: #456B7C;
}

.btn-secondary {
  background-color: white;
  color: #567C8D;
  border-color: #567C8D;
}

.btn-secondary:hover {
  background-color: #f9fafb;
}

.btn-neutral {
  background-color: #e5e7eb;
  color: #4b5563;
}

.btn-neutral:hover {
  background-color: #d1d5db;
}

.btn-success {
  background-color: #10b981;
  color: white;
}

.btn-success:hover {
  background-color: #059669;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.btn-danger:hover {
  background-color: #dc2626;
}

.btn-warning {
  background-color: #f59e0b;
  color: white;
}

.btn-warning:hover {
  background-color: #d97706;
}

.btn-info {
  background-color: #3b82f6;
  color: white;
}

.btn-info:hover {
  background-color: #2563eb;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Button Variations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-[#567C8D] mb-3">Size Variations</h3>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button className="bg-[#567C8D] text-white py-1 px-2 text-xs rounded hover:bg-[#456B7C] transition-colors">
                  Small
                </button>
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">
                  Medium
                </button>
                <button className="bg-[#567C8D] text-white py-3 px-6 text-lg rounded hover:bg-[#456B7C] transition-colors">
                  Large
                </button>
              </div>
              
              <h3 className="font-bold text-[#567C8D] mb-3">Button Shapes</h3>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded-none hover:bg-[#456B7C] transition-colors">
                  Square
                </button>
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">
                  Rounded
                </button>
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded-full hover:bg-[#456B7C] transition-colors">
                  Pill
                </button>
              </div>
              
              <h3 className="font-bold text-[#567C8D] mb-3">With Icons</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors inline-flex items-center">
                  <span className="mr-2">◀</span> Previous
                </button>
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors inline-flex items-center">
                  Next <span className="ml-2">▶</span>
                </button>
                <button className="bg-[#567C8D] text-white p-2 rounded-full hover:bg-[#456B7C] transition-colors">
                  <span>+</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Size variations */
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

/* Button shapes */
.btn-square {
  border-radius: 0;
}

.btn-rounded {
  border-radius: 0.25rem;
}

.btn-pill {
  border-radius: 9999px;
}

/* Icon buttons */
.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-left .icon {
  margin-right: 0.5rem;
}

.btn-icon-right .icon {
  margin-left: 0.5rem;
}

.btn-icon-only {
  padding: 0.5rem;
  border-radius: 9999px;
}`}</pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-[#567C8D] mb-3">Button States</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Normal</p>
                  <button className="bg-[#567C8D] text-white py-2 px-4 rounded">Default</button>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Hover (Mouse over to see)</p>
                  <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">Hover</button>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Active (Click and hold)</p>
                  <button className="bg-[#567C8D] text-white py-2 px-4 rounded active:bg-[#3A5A6B] transition-colors">Active</button>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Focus (Click or Tab to)</p>
                  <button className="bg-[#567C8D] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#567C8D] focus:ring-offset-2">Focus</button>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Disabled</p>
                  <button className="bg-[#567C8D] text-white py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>Disabled</button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Button states */
.btn:hover {
  /* Hover styles defined in button type classes */
}

.btn:active {
  transform: translateY(1px);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.1);
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(86, 124, 141, 0.4);
}

.btn:disabled,
.btn.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

/* Ensuring accessibility - keyboard focus styles */
.btn:focus-visible {
  outline: 2px solid #567C8D;
  outline-offset: 2px;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">CSS Techniques</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Button Animation Effects</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="bg-[#567C8D] text-white py-2 px-4 rounded transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                Lift Effect
              </button>
              <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:scale-105 transition-transform duration-300">
                Scale Effect
              </button>
              <button className="bg-[#567C8D] text-white py-2 px-4 rounded relative overflow-hidden group">
                <span className="relative z-10">Ripple Effect</span>
                <span className="absolute top-0 left-0 w-full h-full bg-[#3A5A6B] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Lift effect */
.btn-lift {
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Scale effect */
.btn-scale {
  transition: transform 0.3s;
}

.btn-scale:hover {
  transform: scale(1.05);
}

/* Ripple effect */
.btn-ripple {
  position: relative;
  overflow: hidden;
}

.btn-ripple span {
  position: relative;
  z-index: 1;
}

.btn-ripple::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.btn-ripple:hover::before {
  transform: scaleX(1);
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Gradient Buttons</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="py-2 px-4 rounded bg-gradient-to-r from-blue-500 to-[#567C8D] text-white hover:from-blue-600 hover:to-[#456B7C] transition-all duration-300">
                Horizontal Gradient
              </button>
              <button className="py-2 px-4 rounded bg-gradient-to-b from-[#567C8D] to-blue-700 text-white hover:from-[#456B7C] hover:to-blue-800 transition-all duration-300">
                Vertical Gradient
              </button>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Gradient buttons */
.btn-gradient-horizontal {
  background-image: linear-gradient(to right, #3b82f6, #567C8D);
  transition: background-image 0.3s;
}

.btn-gradient-horizontal:hover {
  background-image: linear-gradient(to right, #2563eb, #456B7C);
}

.btn-gradient-vertical {
  background-image: linear-gradient(to bottom, #567C8D, #1d4ed8);
  transition: background-image 0.3s;
}

.btn-gradient-vertical:hover {
  background-image: linear-gradient(to bottom, #456B7C, #1e40af);
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Button Groups</h3>
            <div className="inline-flex rounded-md shadow-sm mb-4">
              <button className="py-2 px-4 text-sm font-medium text-[#567C8D] bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-[#567C8D] focus:text-[#456B7C]">
                First
              </button>
              <button className="py-2 px-4 text-sm font-medium text-[#567C8D] bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-[#567C8D] focus:text-[#456B7C]">
                Middle
              </button>
              <button className="py-2 px-4 text-sm font-medium text-[#567C8D] bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-[#567C8D] focus:text-[#456B7C]">
                Last
              </button>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`/* Button groups */
.btn-group {
  display: inline-flex;
  border-radius: 0.25rem;
  overflow: hidden;
}

.btn-group .btn {
  border-radius: 0;
  border-right-width: 0;
}

.btn-group .btn:first-child {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.btn-group .btn:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-right-width: 1px;
}

.btn-group .btn:focus {
  z-index: 1;
}

/* Vertical button group variation */
.btn-group-vertical {
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.25rem;
  overflow: hidden;
}

.btn-group-vertical .btn {
  border-radius: 0;
  border-bottom-width: 0;
}

.btn-group-vertical .btn:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.btn-group-vertical .btn:last-child {
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-width: 1px;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Accessibility Considerations</h2>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Button vs. Link</strong> - Use <code>&lt;button&gt;</code> for actions that occur on the current page, and <code>&lt;a&gt;</code> tags for navigation to new pages:
              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <pre className="font-mono">{`<!-- For actions on the current page -->
<button type="button" class="btn btn-primary">Submit Form</button>

<!-- For navigation to another page -->
<a href="/about" class="btn btn-primary">About Us</a>`}</pre>
              </div>
            </li>
            <li>
              <strong>Focus visibility</strong> - Ensure buttons have a clearly visible focus state for keyboard navigation:
              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <pre className="font-mono">{`.btn:focus-visible {
  outline: 2px solid #567C8D;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(86, 124, 141, 0.4);
}`}</pre>
              </div>
            </li>
            <li>
              <strong>Color contrast</strong> - Maintain a minimum 4.5:1 contrast ratio between button text and background.
            </li>
            <li>
              <strong>Button labels</strong> - Use clear, descriptive text that indicates the button's purpose.
            </li>
            <li>
              <strong>Disabled buttons</strong> - Ensure disabled buttons are clearly indicated:
              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <pre className="font-mono">{`.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}`}</pre>
              </div>
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Best Practices</h2>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Consistent styling</strong> - Maintain consistent button styles throughout your application.
            </li>
            <li>
              <strong>Visual feedback</strong> - Provide clear visual feedback for all interaction states (hover, active, focus).
            </li>
            <li>
              <strong>Button hierarchy</strong> - Use visual weight to establish a clear hierarchy between primary, secondary, and tertiary actions.
            </li>
            <li>
              <strong>Button sizing</strong> - Size buttons appropriately for their importance and touch targets (at least 44px × 44px for mobile).
            </li>
            <li>
              <strong>Button spacing</strong> - Provide adequate spacing between buttons to prevent accidental clicks.
            </li>
            <li>
              <strong>Loading states</strong> - Indicate when a button action is processing:
              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <pre className="font-mono">{`.btn-loading {
  position: relative;
  color: transparent !important;
  pointer-events: none;
}

.btn-loading::after {
  content: "";
  position: absolute;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`}</pre>
              </div>
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Related Resources</h2>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="/docs/css/examples/CardDesign" className="text-blue-600 hover:underline">
                CSS Card Design Example
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="/docs/css/examples/Forms" className="text-blue-600 hover:underline">
                CSS Form Styling
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                W3C ARIA Design Pattern for Buttons
              </a>
            </li>
          </ul>
        </section>
      </article>
    </DocLayout>
  );
};

export default CSSCustomButtons;