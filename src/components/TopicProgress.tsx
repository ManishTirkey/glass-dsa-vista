
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TopicData {
  name: string;
  solved: number;
  total: number;
}

const TopicProgress: React.FC = () => {
  const topics: TopicData[] = [
    { name: "Arrays", solved: 8, total: 20 },
    { name: "Linked Lists", solved: 5, total: 15 },
    { name: "Trees", solved: 6, total: 18 },
    { name: "Graphs", solved: 2, total: 12 },
    { name: "Dynamic Programming", solved: 3, total: 25 },
    { name: "Greedy Algorithms", solved: 4, total: 14 },
    { name: "Backtracking", solved: 1, total: 10 },
    { name: "Sorting", solved: 5, total: 12 },
    { name: "Binary Search", solved: 4, total: 8 },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gradient">Topic Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px] pr-4">
          <div className="space-y-5">
            {topics.map((topic, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{topic.name}</span>
                  <span>{topic.solved}/{topic.total}</span>
                </div>
                <Progress value={(topic.solved / topic.total) * 100} className="h-1" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TopicProgress;
