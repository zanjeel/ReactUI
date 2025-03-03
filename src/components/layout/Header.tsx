import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-emerald-500">
            ReactUI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/components" 
            className={`nav-link ${location.pathname.includes('/components') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
          >
            Components
          </Link>
          <Link 
            to="/showcase" 
            className={`nav-link ${location.pathname.includes('/showcase') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
          >
            Showcase
          </Link>
          <a 
            href="https://github.com/zanjeel/ReactUI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/components" 
              className={`nav-link ${location.pathname.includes('/components') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link 
              to="/showcase" 
              className={`nav-link ${location.pathname.includes('/showcase') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </Link>
            <a 
              href="https://github.com/zanjeel/ReactUI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;