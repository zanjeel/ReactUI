import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import ComponentCard from '../components/common/ComponentCard';
import Pagination from '../components/common/Pagination';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const TextAnimationPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const componentsPerPage = 6;
  
  const textAnimations = [
    {
      id: 'typewriter',
      title: 'Typewriter',
      description: 'A typewriter effect animation for your text.',
      path: '/text-animations/typewriter',
      preview: (
        <div className="text-xl font-bold text-white">
          <Typewriter
            options={{
              strings: ['Hello World!', 'Typewriter Effect'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      )
    },
    {
      id: 'fade-in',
      title: 'Fade In',
      description: 'A smooth fade-in animation with staggered children.',
      path: '/text-animations/fade-in',
      preview: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="text-xl font-bold text-white"
        >
          Fade In Text
        </motion.div>
      )
    },
    {
      id: 'glitch',
      title: 'Glitch',
      description: 'A cyberpunk-inspired glitch text effect.',
      path: '/text-animations/glitch',
      preview: (
        <h1 className="glitch text-xl font-bold" data-text="Glitch Effect">
          Glitch Effect
        </h1>
      )
    },
    {
      id: 'wave',
      title: 'Wave',
      description: 'A playful wave animation for text characters.',
      path: '/text-animations/wave',
      preview: (
        <h1 className="wave-text text-xl font-bold text-white">
          {'Wave'.split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
      )
    },
    {
      id: 'gradient',
      title: 'Gradient',
      description: 'A colorful animated gradient text effect.',
      path: '/text-animations/gradient',
      preview: (
        <h1 className="gradient-text text-xl font-bold">
          Gradient Text
        </h1>
      )
    }
  ];
  
  // Calculate pagination
  const totalPages = Math.ceil(textAnimations.length / componentsPerPage);
  const indexOfLastComponent = currentPage * componentsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - componentsPerPage;
  const currentComponents = textAnimations.slice(indexOfFirstComponent, indexOfLastComponent);
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Text Animations</h1>
              <p className="text-gray-400">
                Beautiful text animation components for your React applications.
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

export default TextAnimationPage;