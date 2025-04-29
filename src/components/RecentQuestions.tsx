
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from './QuestionCard';

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {questions.map((question, index) => (
        <Link to="/questions" key={index} className="block">
          <QuestionCard 
            title={question.title}
            difficulty={question.difficulty}
            topics={question.topics}
            lastAttempted={question.lastAttempted}
            completed={question.completed}
          />
        </Link>
      ))}
    </div>
  );
};

export default RecentQuestions;
