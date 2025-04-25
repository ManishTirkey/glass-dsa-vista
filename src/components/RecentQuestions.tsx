
import React from 'react';
import QuestionCard from './QuestionCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const RecentQuestions: React.FC = () => {
  const questions = [
    {
      title: "Two Sum",
      difficulty: "Easy" as const,
      topics: ["Arrays", "Hash Table"],
      lastAttempted: "2 days ago",
      completed: true
    },
    {
      title: "Merge Sorted Lists",
      difficulty: "Easy" as const,
      topics: ["Linked List", "Sorting"],
      lastAttempted: "5 days ago",
      completed: true
    },
    {
      title: "Maximum Subarray",
      difficulty: "Medium" as const,
      topics: ["Arrays", "DP", "Divide & Conquer"],
      lastAttempted: "1 week ago",
      completed: false
    },
    {
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium" as const,
      topics: ["Tree", "BFS"],
      completed: false
    },
    {
      title: "Trapping Rain Water",
      difficulty: "Hard" as const,
      topics: ["Arrays", "Two Pointers", "Stack"],
      completed: false
    },
    {
      title: "LRU Cache",
      difficulty: "Hard" as const,
      topics: ["Linked List", "Design", "Hash Table"],
      completed: false
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gradient">Recent Questions</h2>
        <Button variant="outline" className="glass border-white/10 text-foreground hover:bg-white/10">
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {questions.map((question, index) => (
          <QuestionCard 
            key={index}
            title={question.title}
            difficulty={question.difficulty}
            topics={question.topics}
            lastAttempted={question.lastAttempted}
            completed={question.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentQuestions;
