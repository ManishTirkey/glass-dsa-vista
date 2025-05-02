
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

const Question = () => {
  const { id } = useParams();
  
  // Find the question from our questions data
  const question = questions.find(q => q.id === id);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you might want to show a toast notification here
  };

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
                              className="h-7 w-7 p-0"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          <pre className="bg-secondary/30 p-3 rounded-md overflow-auto text-sm">
                            <code>{approach.solution}</code>
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
                                className="h-7 w-7 p-0"
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            <pre className="bg-secondary/30 p-3 rounded-md overflow-auto text-sm">
                              <code>{question.answer.code}</code>
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
