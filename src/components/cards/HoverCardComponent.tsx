import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const HoverCardComponent: React.FC = () => {
  const installCode = `npm install framer-motion`;
  
  const importCode = `import { motion } from 'framer-motion';`;
  
  const usageCode = `import React from 'react';
import { motion } from 'framer-motion';

const HoverCard = () => {
  return (
    <motion.div
      className="max-w-sm bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.img 
        className="w-full h-48 object-cover" 
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
        alt="Card image" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-white mb-2">Hover Card</h3>
        <p className="text-gray-400 text-sm">
          An interactive card with hover animations using Framer Motion.
        </p>
      </div>
      <div className="px-6 pt-2 pb-4">
        <motion.button 
          className="bg-purple-600 text-white font-medium py-2 px-4 rounded-md"
          whileHover={{ 
            backgroundColor: "#7c3aed", 
            scale: 1.05 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HoverCard;`;

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Hover Card</h1>
            <p className="text-gray-400 mb-8">An interactive card with hover animations using Framer Motion.</p>
            
            <div className="bg-gray-900 rounded-lg p-8 mb-8 flex items-center justify-center">
              <motion.div
                className="max-w-sm bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  className="w-full h-48 object-cover" 
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Card image" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Hover Card</h3>
                  <p className="text-gray-400 text-sm">
                    An interactive card with hover animations using Framer Motion.
                  </p>
                </div>
                <div className="px-6 pt-2 pb-4">
                  <motion.button 
                    className="bg-purple-600 text-white font-medium py-2 px-4 rounded-md"
                    whileHover={{ 
                      backgroundColor: "#7c3aed", 
                      scale: 1.05 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
                <CodeBlock code={installCode} language="bash" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Import</h2>
                <CodeBlock code={importCode} language="javascript" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
                <CodeBlock code={usageCode} language="jsx" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Animation Properties</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Property</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">whileHover</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Animation properties applied when hovering over the element</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">whileTap</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Animation properties applied when the element is being clicked/tapped</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">transition</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Controls how the animation transitions between states</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Customization Tips</h2>
                <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                  <p className="mb-4">
                    You can customize the hover card by adjusting the following:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Change the animation values in whileHover and whileTap</li>
                    <li>Adjust the transition properties for different animation feels</li>
                    <li>Add additional animated elements within the card</li>
                    <li>Combine with CSS transitions for more complex effects</li>
                    <li>Use different spring settings for more bouncy or rigid animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HoverCardComponent;