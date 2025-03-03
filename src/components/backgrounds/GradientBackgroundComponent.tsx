import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const GradientBackgroundComponent: React.FC = () => {
  const cssCode = `/* Add this to your CSS file */
.gradient-bg {
  background: linear-gradient(-45deg, #6d28d9, #4f46e5, #0ea5e9, #10b981);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`;
  
  const usageCode = `import React from 'react';
import './gradient.css';

const GradientBackground = () => {
  return (
    <div className="gradient-bg w-full h-screen">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">
          Animated Gradient Background
        </h1>
      </div>
    </div>
  );
};

export default GradientBackground;`;

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Gradient Background</h1>
            <p className="text-gray-400 mb-8">A smooth animated gradient background using CSS animations.</p>
            
            <div className="rounded-lg p-8 mb-8 h-80 relative overflow-hidden">
              <div className="absolute inset-0 gradient-bg"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white text-center">
                  Animated Gradient Background
                </h2>
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
                    The animated gradient background works through a combination of CSS techniques:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mb-4">
                    <li>A linear gradient is defined with multiple color stops</li>
                    <li>The background size is set larger than the container (400%)</li>
                    <li>A CSS animation shifts the background position over time</li>
                    <li>The animation uses the ease timing function for smooth transitions</li>
                    <li>The animation is set to repeat infinitely</li>
                  </ol>
                  <p>
                    This creates a smooth, flowing gradient that continuously animates across the background.
                  </p>
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
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Change the gradient colors and direction</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">background-size</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Adjust the size of the gradient (larger = slower movement)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">animation-duration</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Change the speed of the animation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">animation-timing-function</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Adjust the easing of the animation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Variations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Radial Gradient</h3>
                    <p className="text-gray-300 text-sm">
                      Replace linear-gradient with radial-gradient for a circular effect.
                    </p>
                    <div className="mt-2 h-20 rounded-md overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 bg-[length:200%_200%] animate-gradient"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Conic Gradient</h3>
                    <p className="text-gray-300 text-sm">
                      Use conic-gradient for a rotating color wheel effect.
                    </p>
                    <div className="mt-2 h-20 rounded-md overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-blue-500 bg-[length:200%_200%] animate-gradient"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GradientBackgroundComponent;