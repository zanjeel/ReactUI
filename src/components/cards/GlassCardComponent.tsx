import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const GlassCardComponent: React.FC = () => {
  const cssCode = `/* Add this to your CSS file */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`;
  
  const usageCode = `import React from 'react';
import './glass.css';

const GlassCard = () => {
  return (
    <div className="relative">
      {/* Background with gradient for the glass effect to be visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg transform -rotate-6 scale-105"></div>
      
      <div className="glass relative max-w-sm rounded-lg overflow-hidden shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white">Glass Card</h3>
            <p className="text-gray-300 text-sm">Modern frosted glass effect</p>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-6">
          This card uses backdrop-filter to create a frosted glass effect that works well on any background.
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">Created by ReactUI</span>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-md transition-colors">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;`;

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Glass Card</h1>
            <p className="text-gray-400 mb-8">A modern frosted glass effect card using CSS backdrop-filter.</p>
            
            <div className="bg-gray-900 rounded-lg p-12 mb-8 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg transform -rotate-6 scale-105"></div>
                
                <div className="glass relative max-w-sm rounded-lg overflow-hidden shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      G
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">Glass Card</h3>
                      <p className="text-gray-300 text-sm">Modern frosted glass effect</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6">
                    This card uses backdrop-filter to create a frosted glass effect that works well on any background.
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Created by React</span>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-md transition-colors">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">CSS</h2>
                <CodeBlock code={cssCode} language="css" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
                <CodeBlock code={usageCode} language="jsx" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
                <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                  <p className="mb-4">
                    The glass effect works using the CSS backdrop-filter property, which applies filters to the area behind an element.
                  </p>
                  <p className="mb-4">
                    The blur filter creates the frosted glass appearance, while a semi-transparent background color adds a tint.
                  </p>
                  <p className="mb-4">
                    A subtle border with low opacity helps define the edges of the glass.
                  </p>
                  <p>
                    For the effect to be visible, there needs to be content or a background behind the glass element.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Browser Compatibility</h2>
                <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                  <p className="mb-4">
                    The backdrop-filter property has good support in modern browsers, but there are some considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Chrome, Edge, Safari, and Opera have good support</li>
                    <li>Firefox requires enabling in about:config (as of 2023)</li>
                    <li>Always provide a fallback for browsers that don't support backdrop-filter</li>
                    <li>Performance can be an issue on lower-end devices</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Customization</h2>
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
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">background</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Adjust the opacity to change the transparency level</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">backdrop-filter: blur()</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Increase or decrease the blur amount</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">border</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Change the border opacity or color for different effects</td>
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

export default GlassCardComponent;