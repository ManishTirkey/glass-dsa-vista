
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { questions } from '@/data/questionsData';
import { copyToClipboard } from '@/lib/utils';

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

const Question = () => {
  const { id } = useParams();
  
  // Find the question from our questions data
  const question = questions.find(q => q.id === id);

  if (!question) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto pt-20 px-4 md:px-8 pb-8">
          <div className="text-center p-10">
            <h2 className="text-2xl">Question not found</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto pt-20 px-4 md:px-8 pb-8">
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {question.title}
              </h1>
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="outline" className={`
                  ${question.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' : 
                    question.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' : 
                    'bg-red-500/20 text-red-500'} 
                  border-none
                `}>
                  {question.difficulty}
                </Badge>
                {question.topics.map((topic, index) => (
                  <span key={index} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic}</span>
                ))}
                {question.completed && (
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-none">
                    Completed
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="glass border-white/10 text-foreground hover:bg-white/10">
                Mark {question.completed ? 'Incomplete' : 'Complete'}
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                Start Solving
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="glass w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              {question.answer && (
                <TabsTrigger value="answer">My C++ Solution</TabsTrigger>
              )}
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-4">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-6">{question.description}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Examples:</h3>
                    {question.examples.map((example, index) => (
                      <div key={index} className="mb-4 space-y-2">
                        <div className="bg-secondary/30 p-3 rounded-md">
                          <p><strong>Input:</strong> {example.input}</p>
                          <p><strong>Output:</strong> {example.output}</p>
                          {example.explanation && (
                            <p><strong>Explanation:</strong> {example.explanation}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="solution" className="mt-4">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert max-w-none space-y-4">
                    {question.approaches.map((approach, index) => (
                      <div key={index} className="mb-8">
                        <h3 className="text-lg font-semibold">{approach.name}</h3>
                        <p>{approach.description}</p>
                        
                        <h4 className="text-md font-semibold mt-4">Solution Code (C++)</h4>
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
                        
                        <h4 className="text-md font-semibold mt-4">Complexity Analysis</h4>
                        <ul>
                          <li><strong>Time Complexity:</strong> {approach.complexity.time}</li>
                          <li><strong>Space Complexity:</strong> {approach.complexity.space}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {question.answer && (
              <TabsContent value="answer" className="mt-4">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="prose dark:prose-invert max-w-none space-y-4">
                      <h3 className="text-lg font-semibold">My C++ Solution</h3>
                      <p className="whitespace-pre-line">{question.answer.explanation}</p>
                      
                      {question.answer.code && (
                        <>
                          <h4 className="text-md font-semibold mt-4">Code Implementation (C++)</h4>
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
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
            
            <TabsContent value="notes" className="mt-4">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{"No notes added yet. Add your thoughts and learning here."}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Question;
