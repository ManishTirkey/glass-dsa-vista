
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
  return (
    <div className="relative rounded-md border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <div className="absolute top-2 right-2 z-10">
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => copyToClipboard(code)}
          className="h-7 w-7 p-0 hover:bg-blue-400/20"
          aria-label="Copy code to clipboard"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-md"
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.9rem',
          height: '250px',
          overflow: 'auto'
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
