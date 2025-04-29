
import React from 'react';
import { CircleCheck, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import topics from '../data/topics';

const Dashboard: React.FC = () => {
  // Mock data for solved questions
  const solvedByDifficulty = {
    "Easy": 14,
    "Medium": 8,
    "Hard": 2
  };
  
  const totalByDifficulty = {
    "Easy": 50,
    "Medium": 70,
    "Hard": 30
  };
  
  const totalSolved = Object.values(solvedByDifficulty).reduce((sum, count) => sum + count, 0);
  const totalQuestions = Object.values(totalByDifficulty).reduce((sum, count) => sum + count, 0);
  const solvedPercentage = (totalSolved / totalQuestions) * 100;

  // For topics covered calculation
  const solvedTopics = 5; // Number of topics with at least one solved question
  const totalTopics = topics.length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Questions Solved</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{totalSolved} / {totalQuestions}</div>
            <CircleCheck className="h-6 w-6 text-primary animate-pulse-slow" />
          </div>
          <Progress value={solvedPercentage} className="h-1 mt-3" />
          <div className="flex justify-between mt-3 text-xs">
            <div>
              <span className="text-green-500 font-medium">Easy: </span>
              <span>{solvedByDifficulty.Easy}/{totalByDifficulty.Easy}</span>
            </div>
            <div>
              <span className="text-yellow-500 font-medium">Medium: </span>
              <span>{solvedByDifficulty.Medium}/{totalByDifficulty.Medium}</span>
            </div>
            <div>
              <span className="text-red-500 font-medium">Hard: </span>
              <span>{solvedByDifficulty.Hard}/{totalByDifficulty.Hard}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Topics Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{solvedTopics} / {totalTopics}</div>
            <Code className="h-6 w-6 text-primary animate-pulse-slow" />
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {topics.slice(0, 5).map((topic) => (
              <span key={topic.id} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic.name}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
