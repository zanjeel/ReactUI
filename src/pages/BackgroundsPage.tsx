import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import ComponentCard from '../components/common/ComponentCard';
import Pagination from '../components/common/Pagination';

const BackgroundsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const componentsPerPage = 6;
  
  const backgrounds = [
    {
      id: 'particles',
      title: 'Particles Background',
      description: 'An interactive particle network background using HTML Canvas.',
      path: '/backgrounds/particles',
      preview: (
        <div className="relative w-full h-full">
          <div className="absolute h-2 w-2 bg-blue-400 rounded-full" style={{ top: '20%', left: '30%' }}></div>
          <div className="absolute h-2 w-2 bg-purple-400 rounded-full" style={{ top: '60%', left: '70%' }}></div>
          <div className="absolute h-1 w-1 bg-green-400 rounded-full" style={{ top: '40%', left: '50%' }}></div>
          <div className="absolute h-1 w-1 bg-yellow-400 rounded-full" style={{ top: '70%', left: '20%' }}></div>
          <div className="absolute h-1 w-20 bg-purple-400/20 rounded-full" style={{ top: '30%', left: '40%' }}></div>
          <div className="absolute h-1 w-12 bg-blue-400/20 rounded-full" style={{ top: '50%', left: '20%' }}></div>
        </div>
      )
    },
    {
      id: 'gradient',
      title: 'Gradient Background',
      description: 'A smooth animated gradient background using CSS animations.',
      path: '/backgrounds/gradient',
      preview: (
        <div className="gradient-bg w-full h-full rounded-md"></div>
      )
    }
  ];
  
  // Calculate pagination
  const totalPages = Math.ceil(backgrounds.length / componentsPerPage);
  const indexOfLastComponent = currentPage * componentsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - componentsPerPage;
  const currentComponents = backgrounds.slice(indexOfFirstComponent, indexOfLastComponent);
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Backgrounds</h1>
              <p className="text-gray-400">
                Dynamic and interactive background components for your React applications.
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

export default BackgroundsPage;