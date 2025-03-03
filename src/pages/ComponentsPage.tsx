import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Type, Square, Layout } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ComponentsPage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const categories = [
    {
      id: 'text-animations',
      title: 'Text Animations',
      description: 'Beautiful text animation components for your React applications.',
      icon: <Type size={24} className="text-purple-400" />,
      path: '/text-animations',
      color: 'from-purple-600/20 to-purple-900/20'
    },
    {
      id: 'cards',
      title: 'Cards',
      description: 'Modern card components with various styles and animations.',
      icon: <Square size={24} className="text-emerald-400" />,
      path: '/cards',
      color: 'from-emerald-600/20 to-emerald-900/20'
    },
    {
      id: 'backgrounds',
      title: 'Backgrounds',
      description: 'Dynamic and interactive background components.',
      icon: <Layout size={24} className="text-blue-400" />,
      path: '/backgrounds',
      color: 'from-blue-600/20 to-blue-900/20'
    }
  ];
  
  return (
    <div className="min-h-screen bg-black space-bg">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Component Categories</h1>
            <p className="text-gray-400">
              Browse our collection of beautiful React components organized by category.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={category.path} className="block h-full">
                  <div className={`card h-full bg-gradient-to-br ${category.color} hover:shadow-lg hover:shadow-${category.id.split('-')[0]}-500/10`}>
                    <div className="p-8">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                        {category.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">{category.title}</h2>
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      <div className="flex items-center text-sm font-medium text-purple-400">
                        Explore Components
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComponentsPage;