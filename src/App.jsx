// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// HTML Documentation Pages
import HTMLIntroduction from './pages/docs/html/Introduction';
import HTMLElements from './pages/docs/html/Elements';
import HTMLAttributes from './pages/docs/html/Attributes';
import HTMLHeadings from './pages/docs/html/Headings';
import HTMLParagraphs from './pages/docs/html/Paragraphs';
import HTMLForms from './pages/docs/html/Forms';
import HTMLTables from './pages/docs/html/Tables';

// HTML Examples
import HTMLBasicLayout from './pages/docs/html/examples/BasicLayout';
import HTMLContactForm from './pages/docs/html/examples/ContactForm';
import HTMLNavigation from './pages/docs/html/examples/Navigation';

// CSS Documentation Pages
import CSSIntroduction from './pages/docs/css/Introduction';
import CSSSelectors from './pages/docs/css/Selectors';
import CSSColors from './pages/docs/css/Colors';
import CSSBoxModel from './pages/docs/css/BoxModel';
import CSSTypography from './pages/docs/css/Typography';
import CSSFlexbox from './pages/docs/css/Flexbox';
import CSSGrid from './pages/docs/css/Grid';
import CSSAnimations from './pages/docs/css/Animations';
import CSSMediaQueries from './pages/docs/css/MediaQueries';

// CSS Examples
import CSSResponsiveLayout from './pages/docs/css/examples/ResponsiveLayout';
import CSSCardDesign from './pages/docs/css/examples/CardDesign';
import CSSCustomButtons from './pages/docs/css/examples/CustomButtons';

// Documentation index pages
import HTMLDocs from './pages/docs/HTMLDocs';
import CSSDocs from './pages/docs/CSSDocs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        
        {/* Documentation Index Pages */}
        <Route path="/docs/html" element={<HTMLDocs />} />
        <Route path="/docs/css" element={<CSSDocs />} />
        
        {/* HTML Documentation Routes */}
        <Route path="/docs/html/introduction" element={<HTMLIntroduction />} />
        <Route path="/docs/html/elements" element={<HTMLElements />} />
        <Route path="/docs/html/attributes" element={<HTMLAttributes />} />
        <Route path="/docs/html/headings" element={<HTMLHeadings />} />
        <Route path="/docs/html/paragraphs" element={<HTMLParagraphs />} />
        <Route path="/docs/html/forms" element={<HTMLForms />} />
        <Route path="/docs/html/tables" element={<HTMLTables />} />
        
        {/* HTML Examples Routes */}
        <Route path="/docs/html/examples/basic-layout" element={<HTMLBasicLayout />} />
        <Route path="/docs/html/examples/contact-form" element={<HTMLContactForm />} />
        <Route path="/docs/html/examples/navigation" element={<HTMLNavigation />} />
        
        {/* CSS Documentation Routes */}
        <Route path="/docs/css/introduction" element={<CSSIntroduction />} />
        <Route path="/docs/css/selectors" element={<CSSSelectors />} />
        <Route path="/docs/css/colors" element={<CSSColors />} />
        <Route path="/docs/css/box-model" element={<CSSBoxModel />} />
        <Route path="/docs/css/typography" element={<CSSTypography />} />
        <Route path="/docs/css/flexbox" element={<CSSFlexbox />} />
        <Route path="/docs/css/grid" element={<CSSGrid />} />
        <Route path="/docs/css/animations" element={<CSSAnimations />} />
        <Route path="/docs/css/media-queries" element={<CSSMediaQueries />} />
        
        {/* CSS Examples Routes */}
        <Route path="/docs/css/examples/responsive-layout" element={<CSSResponsiveLayout />} />
        <Route path="/docs/css/examples/card-design" element={<CSSCardDesign />} />
        <Route path="/docs/css/examples/custom-buttons" element={<CSSCustomButtons />} />
      </Routes>
    </Router>
  );
}

export default App;