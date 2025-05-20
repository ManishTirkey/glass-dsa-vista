
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code } from 'lucide-react';
import { Question } from '@/data/questionsData';
import CodeEditor from '@/components/CodeEditor';

interface QuestionDetailProps {
  question: Question | null;
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-500",
  Medium: "bg-yellow-500/20 text-yellow-500",
  Hard: "bg-red-500/20 text-red-500"
};

const QuestionDetail: React.FC<QuestionDetailProps> = ({ question }) => {
  if (!question) {
    return (
      <div className="h-full flex items-center justify-center text-center p-8 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
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
    <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm p-6 pb-2">
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
      
      <Accordion type="single" collapsible className="w-full mb-4">
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
                
                <CodeEditor code={approach.solution} language="cpp" />
                
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
                  <CodeEditor code={question.answer.code} language="cpp" />
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
};

export default QuestionDetail;
