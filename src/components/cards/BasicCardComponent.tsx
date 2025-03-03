import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const BasicCardComponent: React.FC = () => {
  const usageCode = `import React from 'react';

const BasicCard = () => {
  return (
    <div className="max-w-sm bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img 
        className="w-full h-48 object-cover" 
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
        alt="Card image" 
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-white mb-2">Basic Card</h3>
        <p className="text-gray-400 text-sm">
          A simple card component with image, title, and description.
        </p>
      </div>
      <div className="px-6 pt-2 pb-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BasicCard;`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Basic Card</h1>
            <p className="text-gray-400 mb-8">A simple card component with image, title, and description.</p>
            
            <div className="bg-gray-900 rounded-lg p-4 md:p-8 mb-8 flex items-center justify-center">
              <div className="max-w-sm bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img 
                  className="w-full h-48 object-cover" 
                  src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Card image" 
                  loading="lazy"
                />
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Basic Card</h3>
                  <p className="text-gray-400 text-sm">
                    A simple card component with image, title, and description.
                  </p>
                </div>
                <div className="px-6 pt-2 pb-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
                <CodeBlock code={usageCode} language="jsx" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Structure</h2>
                <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                  <p className="mb-4">
                    The basic card component consists of three main sections:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mb-4">
                    <li>Image container - Displays a featured image with fixed height</li>
                    <li>Content area - Contains the title and description text</li>
                    <li>Action area - Contains buttons or other interactive elements</li>
                  </ol>
                  <p>
                    The card uses Tailwind CSS for styling, with a dark theme that fits well in dark mode interfaces.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Customization</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Element</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Tailwind Classes</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Card Container</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">max-w-sm bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Main card wrapper with width constraint, background, border and shadow</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Image</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">w-full h-48 object-cover</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Full-width image with fixed height and cover object-fit</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Button</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Purple button with hover effect and rounded corners</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BasicCardComponent;