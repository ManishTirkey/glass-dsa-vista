
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Question = () => {
  const { id } = useParams();

  // For demo purposes, hardcoded question data
  const question = {
    id: id,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    approach: "The best approach for this problem is to use a hash map to keep track of the numbers we've seen so far and their indices. For each number in the array, we check if the target minus the current number exists in the hash map. If it does, we return the indices of the two numbers. If not, we add the current number and its index to the hash map.",
    solution: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
    complexity: {
      time: "O(n) where n is the length of the array.",
      space: "O(n) for the hash map."
    },
    topics: ["Arrays", "Hash Table"],
    completed: true,
    notes: "Remember that the key insight here is that we only need to scan the array once, using the hash map to check if the complement exists."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto pt-20 px-4 md:px-8 pb-8">
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {question.title}
              </h1>
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="outline" className={`
                  ${question.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' : 
                    question.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' : 
                    'bg-red-500/20 text-red-500'} 
                  border-none
                `}>
                  {question.difficulty}
                </Badge>
                {question.topics.map((topic, index) => (
                  <span key={index} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic}</span>
                ))}
                {question.completed && (
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-none">
                    Completed
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="glass border-white/10 text-foreground hover:bg-white/10">
                Mark {question.completed ? 'Incomplete' : 'Complete'}
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                Start Solving
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="glass w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-4">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-6">{question.description}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Examples:</h3>
                    {question.examples.map((example, index) => (
                      <div key={index} className="mb-4 space-y-2">
                        <div className="bg-secondary/30 p-3 rounded-md">
                          <p><strong>Input:</strong> {example.input}</p>
                          <p><strong>Output:</strong> {example.output}</p>
                          {example.explanation && (
                            <p><strong>Explanation:</strong> {example.explanation}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="solution" className="mt-4">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert max-w-none space-y-4">
                    <h3 className="text-lg font-semibold">Approach</h3>
                    <p>{question.approach}</p>
                    
                    <h3 className="text-lg font-semibold">Solution Code</h3>
                    <pre className="bg-secondary/30 p-3 rounded-md overflow-auto text-sm">
                      <code>{question.solution}</code>
                    </pre>
                    
                    <h3 className="text-lg font-semibold">Complexity Analysis</h3>
                    <ul>
                      <li><strong>Time Complexity:</strong> {question.complexity.time}</li>
                      <li><strong>Space Complexity:</strong> {question.complexity.space}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes" className="mt-4">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{question.notes || "No notes added yet. Add your thoughts and learning here."}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Question;
