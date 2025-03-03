import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Truncate code if not expanded
  const displayCode = isExpanded ? code : code.split('\n').slice(0, 10).join('\n') + (code.split('\n').length > 10 ? '\n// ...' : '');

  return (
    <div className="code-block rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-900 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={toggleExpand}
            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded"
          >
            {isCopied ? (
              <>
                <Check size={12} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span className="hidden xs:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            maxHeight: isExpanded ? 'none' : '300px',
            fontSize: '0.9rem',
          }}
          wrapLongLines={true}
        >
          {displayCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;