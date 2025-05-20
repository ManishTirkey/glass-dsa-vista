
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { Question } from '@/data/questionData';

interface QuestionListProps {
  questions: Question[];
  selectedQuestion: Question | null;
  onSelectQuestion: (question: Question) => void;
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-500",
  Medium: "bg-yellow-500/20 text-yellow-500",
  Hard: "bg-red-500/20 text-red-500"
};

const QuestionList: React.FC<QuestionListProps> = ({ questions, selectedQuestion, onSelectQuestion }) => {
  return (
    <div className="pb-4">
      {questions.map((question) => (
        <Collapsible 
          key={question.id} 
          className="border border-border/50 rounded-lg mb-4 bg-white/70 backdrop-blur-sm shadow-sm"
          open={selectedQuestion?.id === question.id}
          onOpenChange={() => onSelectQuestion(selectedQuestion?.id === question.id ? null : question)}
        >
          <div className="p-4 flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">{question.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="outline" className={`${difficultyColors[question.difficulty]} border-none`}>
                  {question.difficulty}
                </Badge>
                {question.completed && (
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-none">
                    Completed
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {question.shortDescription}
              </p>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="glass border-white/10 text-foreground hover:bg-white/10">
                <ChevronDown className={`h-4 w-4 transition-transform ${selectedQuestion?.id === question.id ? 'transform rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent>
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {question.topics.map((topic, index) => (
                  <span key={index} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic}</span>
                ))}
              </div>
              <p className="text-sm">{question.description}</p>
              
              <h4 className="font-medium mt-3">Examples:</h4>
              {question.examples.map((example, index) => (
                <div key={index} className="bg-secondary/30 p-2 rounded-md text-sm mt-2">
                  <p><strong>Input:</strong> {example.input}</p>
                  <p><strong>Output:</strong> {example.output}</p>
                  {example.explanation && (
                    <p><strong>Explanation:</strong> {example.explanation}</p>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default QuestionList;
