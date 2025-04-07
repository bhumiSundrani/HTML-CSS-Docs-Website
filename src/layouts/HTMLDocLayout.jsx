// src/layouts/DocLayout.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DocLayout = ({ children }) => {
  const { docType } = useParams();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar docType={docType || 'html'} />
        <main className="flex-1 p-6 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DocLayout;