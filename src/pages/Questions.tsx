
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import QuestionList from '@/components/QuestionList';
import QuestionDetail from '@/components/QuestionDetail';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { questions } from '@/data/questionsData';

const Questions: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 pb-8 pt-4">
        <div className="mb-6 mt-4 bg-background/95 backdrop-blur-sm z-20 px-0 md:px-0 py-3">
          <h1 className="text-2xl md:text-4xl font-bold text-gradient mb-2 animate-fade-in">
            DSA Questions Library
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore all questions, filter by difficulty or topic, and expand to see detailed solutions.
          </p>
        </div>

        {/* Mobile/Tablet View with Tabs */}
        <div className="block md:hidden w-full mb-4">
          <Tabs defaultValue="questions" className="w-full">
            <TabsList className="w-full mb-4 z-20">
              <TabsTrigger value="questions" className="flex-1">Questions</TabsTrigger>
              <TabsTrigger value="details" className="flex-1">Solution Details</TabsTrigger>
            </TabsList>
            <TabsContent value="questions" className="mt-4">
              <ScrollArea className="h-[calc(100vh-200px)] w-full">
                <QuestionList 
                  questions={questions} 
                  selectedQuestion={selectedQuestion}
                  onSelectQuestion={setSelectedQuestion}
                />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <ScrollArea className="h-[calc(100vh-200px)] w-full">
                <QuestionDetail question={selectedQuestion} />
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop View with Side-by-Side Panels */}
        <div className="hidden md:grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <ScrollArea className="h-[70vh] w-full rounded-lg">
              <QuestionList 
                questions={questions} 
                selectedQuestion={selectedQuestion}
                onSelectQuestion={setSelectedQuestion}
              />
            </ScrollArea>
          </div>
          
          <div className="md:col-span-3">
            <ScrollArea className="h-[70vh] w-full rounded-lg">
              <QuestionDetail question={selectedQuestion} />
            </ScrollArea>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Questions;
