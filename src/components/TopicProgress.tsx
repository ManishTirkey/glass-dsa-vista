
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
    { name: "Dynamic Programming", solved: 3, total: 25 }
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gradient">Topic Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {topics.map((topic, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1 text-sm">
              <span>{topic.name}</span>
              <span>{topic.solved}/{topic.total}</span>
            </div>
            <Progress value={(topic.solved / topic.total) * 100} className="h-1" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopicProgress;
