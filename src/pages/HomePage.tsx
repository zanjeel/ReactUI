import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Typewriter from 'typewriter-effect';

const HomePage: React.FC = () => {
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
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-black space-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 text-sm font-medium rounded-full mb-4">
                  React UI Components
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Beautiful React Components for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
                  <Typewriter
                    options={{
                      strings: ['Developers', 'Designers', 'Creators', 'Everyone'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-gray-400 text-lg md:text-xl mb-8"
              >
                A collection of modern, responsive React components with stunning animations and effects. 
                Ready to use in your next project.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link 
                  to="/components" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center justify-center"
                >
                  Explore All Components <ArrowRight size={18} className="ml-2" />
                </Link>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
                >
                  View on GitHub <Star size={18} className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Components */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Components</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our most popular components with beautiful animations and effects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Text Animation Card */}
            <motion.div 
              className="card group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-black border-b border-gray-800">
                <h3 className="gradient-text text-2xl font-bold">
                  Gradient Text
                </h3>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Gradient Text</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A colorful animated gradient text effect that cycles through multiple colors.
                </p>
                <Link 
                  to="/text-animations/gradient" 
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            {/* Glass Card */}
            <motion.div 
              className="card group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-black border-b border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                <div className="glass relative p-4 rounded-lg">
                  <h3 className="text-white font-semibold">Glass Card</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Glass Card</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A modern frosted glass effect card using CSS backdrop-filter.
                </p>
                <Link 
                  to="/cards/glass" 
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            {/* Particles Background */}
            <motion.div 
              className="card group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black border-b border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute h-2 w-2 bg-blue-400 rounded-full" style={{ top: '20%', left: '30%' }}></div>
                  <div className="absolute h-2 w-2 bg-purple-400 rounded-full" style={{ top: '60%', left: '70%' }}></div>
                  <div className="absolute h-1 w-1 bg-green-400 rounded-full" style={{ top: '40%', left: '50%' }}></div>
                  <div className="absolute h-1 w-1 bg-yellow-400 rounded-full" style={{ top: '70%', left: '20%' }}></div>
                  <div className="absolute h-1 w-20 bg-purple-400/20 rounded-full" style={{ top: '30%', left: '40%' }}></div>
                  <div className="absolute h-1 w-12 bg-blue-400/20 rounded-full" style={{ top: '50%', left: '20%' }}></div>
                </div>
                <h3 className="text-white font-semibold relative z-10">Particles</h3>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Particles Background</h3>
                <p className="text-gray-400 text-sm mb-4">
                  An interactive particle network background using HTML Canvas.
                </p>
                <Link 
                  to="/backgrounds/particles" 
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/components" 
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300"
            >
              View All Components <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 text-sm font-medium rounded-full mb-4">
              Why Choose ReactBits
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">Built for Modern React Applications</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our components are designed with the latest React features and best practices in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern & Beautiful</h3>
              <p className="text-gray-400">
                Sleek, modern designs with attention to detail and beautiful animations.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M12 2H2v10h10V2z"></path>
                  <path d="M12 12H2v10h10V12z"></path>
                  <path d="M22 2h-10v20h10V2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsive & Accessible</h3>
              <p className="text-gray-400">
                Components that work on all devices and follow accessibility best practices.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy to Customize</h3>
              <p className="text-gray-400">
                Simple to integrate and customize to match your project's design system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 mb-8">
              Start using ReactBits components in your project today and create stunning user interfaces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/components" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="/showcase" 
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300"
              >
                View Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;