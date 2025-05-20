
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface CodeEditorProps {
  code: string;
  language?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, language = 'cpp' }) => {
  // Display prettier language name
  const getDisplayLanguage = () => {
    switch(language) {
      case 'cpp': return 'C++';
      case 'javascript': return 'JavaScript';
      case 'typescript': return 'TypeScript';
      case 'python': return 'Python';
      case 'java': return 'Java';
      default: return language.charAt(0).toUpperCase() + language.slice(1);
    }
  };

  return (
    <div className="relative rounded-md border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between bg-slate-700 px-4 py-2">
        <div className="text-xs font-medium text-slate-300">
          {getDisplayLanguage()}
        </div>
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => copyToClipboard(code)}
          className="h-7 w-7 p-0 hover:bg-slate-600 text-slate-300"
          aria-label="Copy code to clipboard"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-b-md"
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.9rem',
          height: '250px',
          overflow: 'auto',
          borderRadius: '0'
        }}
        showLineNumbers={false}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
