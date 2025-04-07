// src/pages/docs/css/Animations.js
import React from 'react';
import DocLayout from '../../../layouts/CSSDocLayout';
import { FiExternalLink } from 'react-icons/fi';

const CSSAnimations = () => {
  return (
    <DocLayout>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#567C8D] mb-6">CSS Animations</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            CSS Animations allow you to create smooth transitions and dynamic effects without JavaScript. They give you fine-grained control over individual animation properties, timing, and keyframes.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Animation Basics</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS animations consist of two components: a style describing the animation and a set of keyframes that define the states of the animation.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">@keyframes Rule</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">@keyframes</code> rule specifies the animation code:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@keyframes slidein {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Using percentages for more control */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
  }
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Animation Property</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">animation</code> property applies an animation to an element:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.element {
  animation: slidein 1s ease-out forwards;
  /* animation-name animation-duration animation-timing-function animation-fill-mode */
}

.pulsing-element {
  animation: pulse 2s infinite ease-in-out;
  /* animation-name animation-duration animation-iteration-count animation-timing-function */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Animation Properties</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Individual Animation Properties</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              While the <code className="bg-gray-100 px-1 py-0.5 rounded">animation</code> shorthand is convenient, you can use individual properties for more control:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.element {
  animation-name: slidein;              /* Name of the @keyframes rule */
  animation-duration: 1s;               /* How long animation takes to complete one cycle */
  animation-timing-function: ease-out;  /* How the animation progresses through the cycle */
  animation-delay: 0.5s;                /* Delay before animation starts */
  animation-iteration-count: 3;         /* Number of times the animation should repeat */
  animation-direction: alternate;       /* Direction of animation */
  animation-fill-mode: forwards;        /* What styles apply before/after the animation */
  animation-play-state: running;        /* Whether the animation is running or paused */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Animation Timing Functions</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">animation-timing-function</code> property controls how the animation progresses:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.element {
  animation-name: slidein;
  animation-duration: 1s;
  
  /* Various timing functions */
  animation-timing-function: linear;      /* Constant speed */
  /* or */
  animation-timing-function: ease;        /* Default: slow start, faster middle, slow end */
  /* or */
  animation-timing-function: ease-in;     /* Slow start, fast end */
  /* or */
  animation-timing-function: ease-out;    /* Fast start, slow end */
  /* or */
  animation-timing-function: ease-in-out; /* Slow start and end, faster middle */
  /* or */
  animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); /* Custom curve */
  /* or */
  animation-timing-function: steps(5, end); /* Step-based animation */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Animation Direction</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">animation-direction</code> property determines whether an animation should play forward, backward, or alternate cycles:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.element {
  animation-name: slidein;
  animation-duration: 2s;
  animation-iteration-count: 3;
  
  /* Direction options */
  animation-direction: normal;       /* Default: plays forward each cycle */
  /* or */
  animation-direction: reverse;      /* Plays backwards each cycle */
  /* or */
  animation-direction: alternate;    /* Plays forward then backward */
  /* or */
  animation-direction: alternate-reverse; /* Plays backward then forward */
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Animation Fill Mode</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">animation-fill-mode</code> property specifies how an animation applies styles before and after execution:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`.element {
  animation-name: slidein;
  animation-duration: 1s;
  
  /* Fill mode options */
  animation-fill-mode: none;        /* Default: no styles applied before or after */
  /* or */
  animation-fill-mode: forwards;    /* Retains the style values from the last keyframe */
  /* or */
  animation-fill-mode: backwards;   /* Applies the initial keyframe values before animation starts */
  /* or */
  animation-fill-mode: both;        /* Extends both forwards and backwards */
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Practical Examples</h2>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Fade In</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              A simple fade-in animation for elements:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1.5s ease forwards;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Bounce Effect</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Create a bouncing animation for user interface elements:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 2s infinite;
}`}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#567C8D] mb-3">Loading Spinner</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">
              A simple infinite rotation animation for loading indicators:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre className="font-mono">{`@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #567C8D;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`}</pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Performance Considerations</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            While CSS animations are powerful, keep these performance tips in mind:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Prefer animating transform and opacity</strong> - These properties can be hardware-accelerated and provide smoother animations than properties like width, height, or margin.
            </li>
            <li>
              <strong>Use will-change property</strong> - For complex animations, hint to the browser which properties will change with <code className="bg-gray-100 px-1 py-0.5 rounded">will-change: transform, opacity;</code>.
            </li>
            <li>
              <strong>Reduce complexity</strong> - Simpler animations are more efficient. Avoid animating many elements simultaneously.
            </li>
            <li>
              <strong>Consider @media (prefers-reduced-motion)</strong> - Respect user accessibility preferences by providing alternatives to animations.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Browser Compatibility</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            CSS Animations are well-supported in modern browsers. However, for older browsers, consider using vendor prefixes or a tool like Autoprefixer in your build process.
          </p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <pre className="font-mono">{`@-webkit-keyframes fadeIn { /* Safari/Chrome */ }
@-moz-keyframes fadeIn { /* Firefox */ }
@-o-keyframes fadeIn { /* Opera */ }
@keyframes fadeIn { /* Standard syntax */ }`}</pre>
          </div>
          
          <p className="mt-4 text-gray-700 leading-relaxed">
            For production code, it's recommended to use a CSS preprocessor or build tool that handles these prefixes automatically.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#567C8D] mb-4">Additional Resources</h2>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                MDN Web Docs: CSS Animations
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://css-tricks.com/almanac/properties/a/animation/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                CSS-Tricks: Animation
              </a>
            </li>
            <li className="flex items-center">
              <FiExternalLink className="text-blue-500 mr-2" />
              <a href="https://animate.style/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Animate.css Library
              </a>
            </li>
          </ul>
        </section>
      </article>
    </DocLayout>
  );
};

export default CSSAnimations;