
import React from 'react';
import Editor from '@monaco-editor/react';
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
      <Editor
        height="250px"
        defaultLanguage={language}
        defaultValue={code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          folding: true,
          lineNumbers: 'on',
          wordWrap: 'on',
          theme: 'vs-dark',
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
