
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, Copy } from 'lucide-react';
import { Question } from '@/data/questionsData';
import { copyToClipboard } from '@/lib/utils';

interface QuestionDetailProps {
  question: Question | null;
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-500",
  Medium: "bg-yellow-500/20 text-yellow-500",
  Hard: "bg-red-500/20 text-red-500"
};

// Syntax highlighting function to format C++ code with VS Code-like colors
const formatCodeWithSyntax = (code: string): React.ReactNode => {
  if (!code) return null;
  
  // Replace patterns with styled spans
  const formattedCode = code
    // Keywords
    .replace(/\b(auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|string|class|namespace|template|new|delete|try|catch|throw|using|true|false|nullptr)\b/g, 
      '<span class="text-purple-600 dark:text-purple-400">$1</span>')
    // Preprocessor directives
    .replace(/(#include|#define|#ifndef|#ifdef|#endif|#pragma|#else|#elif|#undef)/g, 
      '<span class="text-pink-600 dark:text-pink-400">$1</span>')
    // Comments
    .replace(/(\/\/.*?$)/gm, 
      '<span class="text-green-600 dark:text-green-400">$1</span>')
    // Multi-line comments
    .replace(/(\/\*[\s\S]*?\*\/)/g, 
      '<span class="text-green-600 dark:text-green-400">$1</span>')
    // Strings
    .replace(/"([^"\\]|\\.)*"/g, 
      '<span class="text-orange-600 dark:text-orange-400">$&</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, 
      '<span class="text-blue-600 dark:text-blue-400">$1</span>')
    // Operators
    .replace(/([=+\-*/%&|^~!<>?:;])/g, 
      '<span class="text-gray-600 dark:text-gray-400">$1</span>')
    // Special characters
    .replace(/([{}[\](),.])/g, 
      '<span class="text-gray-800 dark:text-gray-300">$1</span>')
    // Header files
    .replace(/(&lt;.*?&gt;)/g, 
      '<span class="text-lime-600 dark:text-lime-400">$1</span>');

  // Handle angle brackets for includes
  const finalCode = formattedCode
    .replace(/(&lt;)([^&]*)(&gt;)/g, 
      '<span class="text-lime-600 dark:text-lime-400">&lt;$2&gt;</span>');

  return <div dangerouslySetInnerHTML={{ __html: finalCode }} />;
};

const QuestionDetail: React.FC<QuestionDetailProps> = ({ question }) => {
  if (!question) {
    return (
      <div className="h-full flex items-center justify-center text-center p-8 glass-card rounded-lg">
        <div>
          <Code className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-medium mb-2">Select a question</h3>
          <p className="text-muted-foreground">
            Click on a question from the list to view its detailed solutions and approaches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card className="glass-card">
      <CardContent className="pt-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">{question.title} - Solutions</h2>
          <div className="flex flex-wrap gap-2 items-center mt-2">
            <Badge variant="outline" className={`${difficultyColors[question.difficulty]} border-none`}>
              {question.difficulty}
            </Badge>
            {question.completed && (
              <Badge variant="outline" className="bg-green-500/20 text-green-500 border-none">
                Completed
              </Badge>
            )}
            {question.topics.map((topic, index) => (
              <span key={index} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic}</span>
            ))}
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {question.approaches.map((approach, index) => (
            <AccordionItem key={index} value={`approach-${index}`}>
              <AccordionTrigger className="flex items-center">
                <div className="flex gap-2 items-center">
                  <Code className="h-4 w-4" />
                  <span>{approach.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Approach</h3>
                  <p>{approach.description}</p>
                  
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(approach.solution)}
                        className="h-7 w-7 p-0 hover:bg-blue-400/20"
                        aria-label="Copy code to clipboard"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-md overflow-auto text-sm border border-blue-100 dark:border-blue-800">
                      {formatCodeWithSyntax(approach.solution)}
                    </pre>
                  </div>
                  
                  <h4 className="text-sm font-medium">Complexity Analysis</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Time Complexity:</strong> {approach.complexity.time}</li>
                    <li><strong>Space Complexity:</strong> {approach.complexity.space}</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          
          {question.answer && (
            <AccordionItem value="answer">
              <AccordionTrigger className="flex items-center">
                <div className="flex gap-2 items-center">
                  <Code className="h-4 w-4" />
                  <span>C++ Solution</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">C++ Answer</h3>
                  <p className="whitespace-pre-line">{question.answer.explanation}</p>
                  
                  {question.answer.code && (
                    <div className="relative">
                      <div className="absolute top-2 right-2">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => copyToClipboard(question.answer.code)}
                          className="h-7 w-7 p-0 hover:bg-blue-400/20"
                          aria-label="Copy code to clipboard"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-md overflow-auto text-sm border border-blue-100 dark:border-blue-800">
                        {formatCodeWithSyntax(question.answer.code)}
                      </pre>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default QuestionDetail;
