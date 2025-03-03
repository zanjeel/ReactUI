import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ShowcaseCard from '../components/common/ShowcaseCard';

const ShowcasePage: React.FC = () => {
  const showcaseItems = [
    {
      id: 1,
      title: 'SpaceX Dashboard',
      description: 'A modern dashboard for tracking SpaceX launches and statistics.',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      url: 'https://spacex.com',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Quantum Portfolio',
      description: 'A creative portfolio site for a digital artist using ReactUI components.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      url: 'https://quantum.io',
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'NeoBank App',
      description: 'A fintech application with beautiful UI and smooth animations.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      url: 'https://neobank.app',
      author: 'Alex Rodriguez'
    },
    {
      id: 4,
      title: 'Cosmic Blog',
      description: 'A space-themed blog with ReactUI text animations and cards.',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      url: 'https://cosmicblog.space',
      author: 'Emma Wilson'
    },
    {
      id: 5,
      title: 'TechStack',
      description: 'A developer community platform with a modern, responsive design.',
      image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      url: 'https://techstack.dev',
      author: 'David Park'
    },
    {
      id: 6,
      title: 'Nebula Music',
      description: 'A music streaming service with a futuristic interface.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      url: 'https://nebula.music',
      author: 'Olivia Martinez'
    }
  ];
  
  return (
    <div className="min-h-screen bg-black space-bg">
      <Header />
      
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Showcase</h1>
            <p className="text-gray-400">
              Explore amazing projects built with ReactUI components.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {showcaseItems.map((item) => (
              <ShowcaseCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                url={item.url}
                author={item.author}
              />
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto mt-12 md:mt-20 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Submit Your Project</h2>
            <p className="text-gray-400 mb-8">
              Built something amazing with ReactUI? We'd love to feature your project in our showcase.
            </p>
            <a 
              href="https://github.com/zanjeel/ReactUI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 inline-block"
            >
              Submit Your Project
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShowcasePage;