import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const GlitchComponent: React.FC = () => {
  const cssCode = `/* Add this to your CSS file */
.glitch {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -1px 0 #00ffff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
  }
  5% {
    clip: rect(70px, 9999px, 71px, 0);
  }
  /* Add more steps for smoother animation */
  100% {
    clip: rect(46px, 9999px, 50px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 32px, 0);
  }
  5% {
    clip: rect(5px, 9999px, 61px, 0);
  }
  /* Add more steps for smoother animation */
  100% {
    clip: rect(15px, 9999px, 42px, 0);
  }
}`;
  
  const usageCode = `import React from 'react';
import './glitch.css';

const GlitchExample = () => {
  return (
    <h1 className="glitch" data-text="Glitch Effect">
      Glitch Effect
    </h1>
  );
};

export default GlitchExample;`;

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Glitch Text Effect</h1>
            <p className="text-gray-400 mb-8">A cyberpunk-inspired glitch text effect using CSS animations.</p>
            
            <div className="bg-gray-900 rounded-lg p-8 mb-8 flex items-center justify-center">
              <h1 className="glitch text-3xl" data-text="Glitch Effect">
                Glitch Effect
              </h1>
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
                    The glitch effect works by creating two pseudo-elements (::before and ::after) that contain the same text as the original element.
                  </p>
                  <p className="mb-4">
                    These pseudo-elements are positioned slightly offset from the original text and given different colored text shadows.
                  </p>
                  <p className="mb-4">
                    The clip property is used to show only portions of the text, and animations are applied to change these clip regions over time, creating the glitchy appearance.
                  </p>
                  <p>
                    The data-text attribute is used to duplicate the text content for the pseudo-elements.
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
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">text-shadow</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Change the colors of the glitch effect</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">animation-duration</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Adjust the speed of the glitch animation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">left</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Change the offset of the glitch layers</td>
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

export default GlitchComponent;