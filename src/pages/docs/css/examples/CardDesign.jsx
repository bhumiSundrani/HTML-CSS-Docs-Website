// src/pages/docs/css/examples/CardDesign.js
import React from 'react';
import DocLayout from '../../../../layouts/CSSDocLayout';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CSSCardDesign = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/docs/css" className="inline-flex items-center text-blue-600 hover:underline">
            <FiArrowLeft className="mr-2" />
            Back to CSS Documentation
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">Example: Card Design</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Card-based interfaces are popular in modern web design. This example demonstrates how to create stylish, responsive card designs with CSS that can be used for products, blog posts, profiles, and more.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Basic Card Example</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Card Title</h3>
                <p className="text-gray-600 mb-4">This is a simple card with an image, title, and description that demonstrates basic card styling.</p>
                <button className="bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
            <pre className="font-mono">{`<div class="card">
  <div class="card-image">
    <img src="image.jpg" alt="Card image">
  </div>
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">This is a simple card with an image, title, and description.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`}</pre>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <pre className="font-mono">{`.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1a202c;
}

.card-description {
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.card-button {
  background-color: #567C8D;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card-button:hover {
  background-color: #456B7C;
}`}</pre>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Card Variations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Horizontal Card */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-200 min-h-[150px] flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              <div className="md:w-2/3 p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Horizontal Card</h3>
                <p className="text-gray-600 mb-4">A horizontal card layout works well for blog posts and news items where you want to show an image alongside content.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">5 min read</span>
                  <button className="bg-[#567C8D] text-white py-1 px-3 rounded text-sm hover:bg-[#456B7C] transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 text-center">
              <div className="h-24 bg-[#567C8D]"></div>
              <div className="relative px-4 pb-4">
                <div className="w-20 h-20 rounded-full bg-gray-300 border-4 border-white absolute -mt-10 inset-x-0 mx-auto flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Avatar</span>
                </div>
                <div className="pt-14">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">John Doe</h3>
                  <p className="text-[#567C8D] text-sm mb-4">Frontend Developer</p>
                  <p className="text-gray-600 text-sm mb-4">Creating beautiful user interfaces with CSS and JavaScript.</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">Wireless Headphones</h3>
                  <span className="font-bold text-[#567C8D]">$99.99</span>
                </div>
                <div className="flex mb-2">
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-1">(42)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">High-quality wireless headphones with noise cancellation.</p>
                <button className="w-full bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            
            {/* Event Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-32 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Event Banner</span>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  FEB 28
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-gray-800">Web Design Workshop</h3>
                <p className="text-[#567C8D] text-sm mb-3">10:00 AM - 4:00 PM • Virtual Event</p>
                <p className="text-gray-600 text-sm mb-4">Learn modern web design techniques from industry experts.</p>
                <button className="w-full border border-[#567C8D] text-[#567C8D] py-2 px-4 rounded hover:bg-gray-50 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6 bg-[#567C8D] text-white text-center">
                <h3 className="font-bold text-xl mb-0">Premium Plan</h3>
                <div className="text-3xl font-bold my-4">$29<span className="text-sm font-normal">/month</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Unlimited projects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Priority support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> Custom branding
                  </li>
                </ul>
                <button className="w-full bg-[#567C8D] text-white py-2 px-4 rounded hover:bg-[#456B7C] transition-colors">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">CSS Techniques</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Card Hover Effects</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Adding hover effects can make cards feel more interactive:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Image zoom effect */
.card-image {
  overflow: hidden;
}

.card-image img {
  transition: transform 0.5s;
}

.card:hover .card-image img {
  transform: scale(1.1);
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Responsive Card Grid</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Create a responsive grid of cards that adapts to different screen sizes:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

/* Small screens (tablets) */
@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Medium screens (small desktops) */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large screens (large desktops) */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Card Aspect Ratio</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Maintain consistent aspect ratios for card images:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.card-image {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Accessibility Considerations</h2>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Focus states</strong> - Ensure interactive elements within cards have visible focus states:
              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <pre className="font-mono">{`.card-button:focus {
  outline: 2px solid #567C8D;
  outline-offset: 2px;
}`}</pre>
              </div>
            </li>
            <li>
              <strong>Color contrast</strong> - Maintain sufficient contrast between text and background colors.
            </li>
            <li>
              <strong>Semantic HTML</strong> - Use appropriate heading levels and meaningful link text.
            </li>
            <li>
              <strong>Keyboard navigation</strong> - Ensure the entire card is navigable via keyboard if it's interactive.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Best Practices</h2>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Consistent spacing</strong> - Maintain consistent padding and margins within cards.
            </li>
            <li>
              <strong>Clear hierarchy</strong> - Use typography to establish a clear visual hierarchy within the card.
            </li>
            <li>
              <strong>Card interaction</strong> - Decide whether the entire card or just elements within it are clickable.
            </li>
            <li>
              <strong>Loading states</strong> - Consider adding placeholder styles for cards when content is loading.
            </li>
            <li>
              <strong>Animation moderation</strong> - Keep animations subtle and use sparingly to avoid overwhelming users.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Related Resources</h2>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="/docs/css/examples/ResponsiveLayout" className="text-blue-600 hover:underline">
                CSS Responsive Layout Example
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="/docs/css/Animations" className="text-blue-600 hover:underline">
                CSS Animations
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://css-tricks.com/almanac/properties/b/box-shadow/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                CSS-Tricks: Box Shadow
              </a>
            </li>
          </ul>
        </section>
      </article>
    </DocLayout>
  );
};

export default CSSCardDesign;