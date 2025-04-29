
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface QuestionCardProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  lastAttempted?: string;
  completed: boolean;
  onClick?: () => void;
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-500",
  Medium: "bg-yellow-500/20 text-yellow-500",
  Hard: "bg-red-500/20 text-red-500"
};

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  title, 
  difficulty, 
  topics, 
  lastAttempted,
  completed,
  onClick
}) => {
  return (
    <Card 
      className={`glass-card transition-all duration-300 hover:shadow-lg hover:border-primary/50 cursor-pointer ${completed ? 'border-green-500/30' : ''}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex items-center space-x-2 mt-1">
          <Badge variant="outline" className={`${difficultyColors[difficulty]} border-none`}>
            {difficulty}
          </Badge>
          {completed && (
            <Badge variant="outline" className="bg-green-500/20 text-green-500 border-none">
              Completed
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {topics.map((topic, index) => (
            <span key={index} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic}</span>
          ))}
        </div>
      </CardContent>
      {lastAttempted && (
        <CardFooter className="pt-0 text-xs text-muted-foreground">
          Last attempted: {lastAttempted}
        </CardFooter>
      )}
    </Card>
  );
};

export default QuestionCard;
