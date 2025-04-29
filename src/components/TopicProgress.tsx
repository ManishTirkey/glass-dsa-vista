
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import topics from '../data/topics';

interface TopicProgressProps {
  solvedQuestionsByTopic?: Record<string, number>;
  totalQuestionsByTopic?: Record<string, number>;
}

const TopicProgress: React.FC<TopicProgressProps> = ({ 
  solvedQuestionsByTopic = {
    "arrays": 8,
    "linked-lists": 5,
    "trees": 6,
    "graphs": 2,
    "dp": 3,
    "greedy": 4,
    "backtracking": 1,
    "sorting": 5,
    "binary-search": 4,
  }, 
  totalQuestionsByTopic = {
    "arrays": 20,
    "linked-lists": 15,
    "trees": 18,
    "graphs": 12,
    "dp": 25,
    "greedy": 14,
    "backtracking": 10,
    "sorting": 12,
    "binary-search": 8,
  }
}) => {
  // Filter topics to only show those with questions
  const topicsWithQuestions = topics.filter(topic => 
    totalQuestionsByTopic[topic.id] !== undefined && totalQuestionsByTopic[topic.id] > 0
  );

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gradient">Topic Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px] pr-4">
          <div className="space-y-5">
            {topicsWithQuestions.map((topic) => {
              const solved = solvedQuestionsByTopic[topic.id] || 0;
              const total = totalQuestionsByTopic[topic.id] || 0;
              const percentage = total > 0 ? (solved / total) * 100 : 0;
              
              return (
                <div key={topic.id}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{topic.name}</span>
                    <span>{solved}/{total}</span>
                  </div>
                  <Progress value={percentage} className="h-1" />
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TopicProgress;
