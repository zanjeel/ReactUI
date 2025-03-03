import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const FadeInComponent: React.FC = () => {
  const installCode = `npm install framer-motion`;
  
  const importCode = `import { motion } from 'framer-motion';`;
  
  const usageCode = `import React from 'react';
import { motion } from 'framer-motion';

const FadeInExample = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-2"
    >
      <motion.p variants={item} className="text-2xl font-bold">
        Fade in text animation
      </motion.p>
      <motion.p variants={item} className="text-lg">
        With staggered children
      </motion.p>
      <motion.p variants={item} className="text-lg">
        Using Framer Motion
      </motion.p>
    </motion.div>
  );
};

export default FadeInExample;`;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Fade In Animation</h1>
            <p className="text-gray-400 mb-8">A smooth fade-in animation with staggered children.</p>
            
            <div className="bg-gray-900 rounded-lg p-4 md:p-8 mb-8 flex items-center justify-center">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-2"
              >
                <motion.p variants={item} className="text-2xl font-bold text-white">
                  Fade in text animation
                </motion.p>
                <motion.p variants={item} className="text-lg text-gray-300">
                  With staggered children
                </motion.p>
                <motion.p variants={item} className="text-lg text-gray-300">
                  Using Framer Motion
                </motion.p>
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
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">variants</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Object containing animation states (hidden, show)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">initial</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Initial animation state</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">animate</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Target animation state</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">staggerChildren</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Delay between each child animation (in seconds)</td>
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

export default FadeInComponent;