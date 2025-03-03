import React from 'react';
import Typewriter from 'typewriter-effect';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const TypewriterComponent: React.FC = () => {
  const installCode = `npm install typewriter-effect`;
  
  const importCode = `import Typewriter from 'typewriter-effect';`;
  
  const usageCode = `import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterExample = () => {
  return (
    <div className="text-2xl font-bold">
      <Typewriter
        options={{
          strings: ['Hello World!', 'Welcome to ReactBits', 'Typewriter Effect'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterExample;`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Typewriter Animation</h1>
            <p className="text-gray-400 mb-8">A typewriter effect animation for your text.</p>
            
            <div className="bg-gray-900 rounded-lg p-4 md:p-8 mb-8 flex items-center justify-center">
              <div className="text-2xl font-bold text-white">
                <Typewriter
                  options={{
                    strings: ['Hello World!', 'Welcome to ReactBits', 'Typewriter Effect'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
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
                <h2 className="text-xl font-semibold text-white mb-4">Props</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Prop</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Type</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Default</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">options</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Object</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">-</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Configuration options for the typewriter</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">onInit</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Function</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">-</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Callback function when typewriter is initialized</td>
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

export default TypewriterComponent;