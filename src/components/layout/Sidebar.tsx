import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Type, Square, Layout, Menu, X } from 'lucide-react';

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  items: { name: string; path: string }[];
  isOpen: boolean;
  toggleOpen: () => void;
  currentPath: string;
}

const Category: React.FC<CategoryProps> = ({ 
  title, 
  icon, 
  items, 
  isOpen, 
  toggleOpen,
  currentPath
}) => {
  const isActive = items.some(item => currentPath.includes(item.path));
  
  return (
    <div className="mb-4">
      <div 
        className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${isActive ? 'bg-purple-900/30 text-purple-400' : 'hover:bg-gray-800/50'}`}
        onClick={toggleOpen}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>
      
      {isOpen && (
        <div className="mt-2 ml-6 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block p-2 rounded-md text-sm ${
                currentPath === item.path
                  ? 'bg-purple-900/30 text-purple-400'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({
    'text-animations': true,
    'cards': true,
    'backgrounds': true
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const textAnimations = [
    { name: 'Typewriter', path: '/text-animations/typewriter' },
    { name: 'Fade In', path: '/text-animations/fade-in' },
    { name: 'Glitch', path: '/text-animations/glitch' },
    { name: 'Wave', path: '/text-animations/wave' },
    { name: 'Gradient', path: '/text-animations/gradient' }
  ];

  const cards = [
    { name: 'Basic Card', path: '/cards/basic' },
    { name: 'Hover Card', path: '/cards/hover' },
    { name: 'Glass Card', path: '/cards/glass' }
  ];

  const backgrounds = [
    { name: 'Particles', path: '/backgrounds/particles' },
    { name: 'Gradient', path: '/backgrounds/gradient' }
  ];

  const sidebarContent = (
    <div className="py-8 px-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-2">Components</h2>
        <p className="text-gray-400 text-sm">Browse all available components</p>
      </div>
      
      <nav>
        <Category
          title="Text Animations"
          icon={<Type size={18} />}
          items={textAnimations}
          isOpen={openCategories['text-animations']}
          toggleOpen={() => toggleCategory('text-animations')}
          currentPath={location.pathname}
        />
        
        <Category
          title="Cards"
          icon={<Square size={18} />}
          items={cards}
          isOpen={openCategories['cards']}
          toggleOpen={() => toggleCategory('cards')}
          currentPath={location.pathname}
        />
        
        <Category
          title="Backgrounds"
          icon={<Layout size={18} />}
          items={backgrounds}
          isOpen={openCategories['backgrounds']}
          toggleOpen={() => toggleCategory('backgrounds')}
          currentPath={location.pathname}
        />
      </nav>
      
      <div className="mt-12 p-4 rounded-lg bg-purple-900/20 border border-purple-900/30">
        <h3 className="text-white font-medium mb-2">Need help?</h3>
        <p className="text-gray-400 text-sm mb-3">Check out our documentation or join our community.</p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-purple-400 hover:text-purple-300 flex items-center"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );

  // Mobile sidebar toggle button
  const mobileToggle = (
    <button 
      className="md:hidden fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg"
      onClick={toggleMobileSidebar}
      aria-label="Toggle sidebar"
    >
      {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="w-64 h-screen sticky top-0 bg-black/80 backdrop-blur-md border-r border-gray-800 overflow-y-auto hidden md:block">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {isMobile && (
        <>
          {mobileToggle}
          <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
              isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.target === e.currentTarget && setIsMobileSidebarOpen(false)}
          >
            <div className="w-64 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {sidebarContent}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;