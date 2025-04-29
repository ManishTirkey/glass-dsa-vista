
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecentQuestions: React.FC = () => {
  const navigate = useNavigate();
  
  const questions = [
    {
      id: '1',
      title: "Two Sum",
      difficulty: "Easy" as const,
      topics: ["Arrays", "Hash Table"],
      lastAttempted: "2 days ago",
      completed: true
    },
    {
      id: '2',
      title: "Merge Sorted Lists",
      difficulty: "Easy" as const,
      topics: ["Linked List", "Sorting"],
      lastAttempted: "5 days ago",
      completed: true
    },
    {
      id: '3',
      title: "Maximum Subarray",
      difficulty: "Medium" as const,
      topics: ["Arrays", "DP", "Divide & Conquer"],
      lastAttempted: "1 week ago",
      completed: false
    },
    {
      id: '4',
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium" as const,
      topics: ["Tree", "BFS"],
      completed: false
    },
    {
      id: '5',
      title: "Trapping Rain Water",
      difficulty: "Hard" as const,
      topics: ["Arrays", "Two Pointers", "Stack"],
      completed: false
    },
    {
      id: '6',
      title: "LRU Cache",
      difficulty: "Hard" as const,
      topics: ["Linked List", "Design", "Hash Table"],
      completed: false
    }
  ];

  const handleQuestionClick = (id: string) => {
    navigate(`/question/${id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gradient mb-4">Recent Questions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {questions.map((question, index) => (
          <div key={index} onClick={() => handleQuestionClick(question.id)} className="cursor-pointer">
            <QuestionCard 
              title={question.title}
              difficulty={question.difficulty}
              topics={question.topics}
              lastAttempted={question.lastAttempted}
              completed={question.completed}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQuestions;
