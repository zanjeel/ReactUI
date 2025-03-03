import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import ComponentCard from '../components/common/ComponentCard';
import Pagination from '../components/common/Pagination';

const CardsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const componentsPerPage = 6;
  
  const cards = [
    {
      id: 'basic',
      title: 'Basic Card',
      description: 'A simple card component with image, title, and description.',
      path: '/cards/basic',
      preview: (
        <div className="max-w-xs bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg scale-75">
          <div className="h-12 bg-gray-800"></div>
          <div className="p-3">
            <div className="h-4 w-2/3 bg-gray-700 rounded mb-2"></div>
            <div className="h-3 bg-gray-700 rounded mb-1"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      )
    },
    {
      id: 'hover',
      title: 'Hover Card',
      description: 'An interactive card with hover animations using Framer Motion.',
      path: '/cards/hover',
      preview: (
        <motion.div 
          className="max-w-xs bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg scale-75"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="h-12 bg-gray-800"></div>
          <div className="p-3">
            <div className="h-4 w-2/3 bg-gray-700 rounded mb-2"></div>
            <div className="h-3 bg-gray-700 rounded mb-1"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'glass',
      title: 'Glass Card',
      description: 'A modern frosted glass effect card using CSS backdrop-filter.',
      path: '/cards/glass',
      preview: (
        <div className="relative scale-75">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg transform -rotate-6 scale-105"></div>
          <div className="glass relative max-w-xs rounded-lg overflow-hidden shadow-lg p-3">
            <div className="h-4 w-2/3 bg-white/20 rounded mb-2"></div>
            <div className="h-3 bg-white/20 rounded mb-1"></div>
            <div className="h-3 bg-white/20 rounded w-5/6"></div>
          </div>
        </div>
      )
    }
  ];
  
  // Calculate pagination
  const totalPages = Math.ceil(cards.length / componentsPerPage);
  const indexOfLastComponent = currentPage * componentsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - componentsPerPage;
  const currentComponents = cards.slice(indexOfFirstComponent, indexOfLastComponent);
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Cards</h1>
              <p className="text-gray-400">
                Modern card components with various styles and animations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8">
              {currentComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  path={component.path}
                  preview={component.preview}
                />
              ))}
            </div>
            
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardsPage;