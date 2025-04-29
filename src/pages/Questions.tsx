
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Copy, ChevronDown, Code, BookOpen } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  shortDescription: string;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  approaches: {
    name: string;
    description: string;
    solution: string;
    complexity: {
      time: string;
      space: string;
    };
  }[];
  completed: boolean;
}

const Questions: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  
  const questions: Question[] = [
    {
      id: '1',
      title: 'Two Sum',
      difficulty: 'Easy',
      topics: ['Arrays', 'Hash Table'],
      shortDescription: 'Find two numbers in an array that add up to a target value.',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
          explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
        }
      ],
      approaches: [
        {
          name: 'Brute Force',
          description: 'Check all possible pairs of numbers in the array to see if they add up to the target.',
          solution: `function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`,
          complexity: {
            time: 'O(n²) where n is the length of the array.',
            space: 'O(1), constant space.'
          }
        },
        {
          name: 'Hash Map (One Pass)',
          description: 'Use a hash map to store previously seen values and their indices. For each number, check if the complement exists in the map.',
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
            time: 'O(n) where n is the length of the array.',
            space: 'O(n) for the hash map.'
          }
        },
        {
          name: 'Two Pointers (Sorted Array)',
          description: 'If the array is sorted, we can use two pointers to find the pair. Note: This approach requires sorting first if the array is not sorted.',
          solution: `function twoSum(nums, target) {
  // Note: This solution works with sorted arrays and returns the values, not indices
  // To get indices, you would need to track the original positions before sorting
  const sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;
  
  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    
    if (sum === target) {
      return [sortedNums[left], sortedNums[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [];
}`,
          complexity: {
            time: 'O(n log n) for sorting, then O(n) for the two pointers.',
            space: 'O(n) for the sorted copy of the array.'
          }
        }
      ],
      completed: true
    },
    {
      id: '2',
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      topics: ['Stack', 'String'],
      shortDescription: 'Determine if a string of brackets is valid.',
      description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and Open brackets must be closed in the correct order.',
      examples: [
        {
          input: 's = "()"',
          output: 'true'
        },
        {
          input: 's = "()[]{}"',
          output: 'true'
        },
        {
          input: 's = "(]"',
          output: 'false'
        }
      ],
      approaches: [
        {
          name: 'Stack',
          description: 'Use a stack to keep track of opening brackets and ensure they match with the closing ones.',
          solution: `function isValid(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (map[char]) {
      // If it's an opening bracket, push to stack
      stack.push(char);
    } else {
      // If it's a closing bracket
      const last = stack.pop();
      
      // If the mapping doesn't match or stack was empty, return false
      if (map[last] !== char) {
        return false;
      }
    }
  }
  
  // If the stack is empty, all brackets were matched properly
  return stack.length === 0;
}`,
          complexity: {
            time: 'O(n) where n is the length of the string.',
            space: 'O(n) in worst case for the stack.'
          }
        }
      ],
      completed: false
    },
    {
      id: '3',
      title: 'Maximum Subarray',
      difficulty: 'Medium',
      topics: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
      shortDescription: 'Find the contiguous subarray with the largest sum.',
      description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
      examples: [
        {
          input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
          output: '6',
          explanation: 'The subarray [4,-1,2,1] has the largest sum 6.'
        },
        {
          input: 'nums = [1]',
          output: '1'
        }
      ],
      approaches: [
        {
          name: "Kadane's Algorithm",
          description: 'Use dynamic programming to keep track of the maximum sum ending at each position.',
          solution: `function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}`,
          complexity: {
            time: 'O(n) where n is the length of the array.',
            space: 'O(1), constant space.'
          }
        }
      ],
      completed: false
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you might want to show a toast notification here
  };

  const difficultyColors = {
    Easy: "bg-green-500/20 text-green-500",
    Medium: "bg-yellow-500/20 text-yellow-500",
    Hard: "bg-red-500/20 text-red-500"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto pt-20 px-4 md:px-8 pb-8">
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2 animate-fade-in">
            DSA Questions Library
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore all questions, filter by difficulty or topic, and expand to see detailed solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left side - Questions List */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardContent className="pt-6 space-y-4">
                {questions.map((question) => (
                  <Collapsible 
                    key={question.id} 
                    className="border border-border/50 rounded-lg mb-4"
                    open={selectedQuestion?.id === question.id}
                    onOpenChange={() => setSelectedQuestion(selectedQuestion?.id === question.id ? null : question)}
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
              </CardContent>
            </Card>
          </div>
          
          {/* Right side - Solution Details */}
          <div className="lg:col-span-3">
            {selectedQuestion ? (
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold">{selectedQuestion.title} - Solutions</h2>
                    <div className="flex flex-wrap gap-2 items-center mt-2">
                      <Badge variant="outline" className={`${difficultyColors[selectedQuestion.difficulty]} border-none`}>
                        {selectedQuestion.difficulty}
                      </Badge>
                      {selectedQuestion.completed && (
                        <Badge variant="outline" className="bg-green-500/20 text-green-500 border-none">
                          Completed
                        </Badge>
                      )}
                      {selectedQuestion.topics.map((topic, index) => (
                        <span key={index} className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">{topic}</span>
                      ))}
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {selectedQuestion.approaches.map((approach, index) => (
                      <AccordionItem key={index} value={`approach-${index}`}>
                        <AccordionTrigger className="flex items-center">
                          <div className="flex gap-2 items-center">
                            {index === 0 ? <BookOpen className="h-4 w-4" /> : <Code className="h-4 w-4" />}
                            <span>{approach.name}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Approach</h3>
                            <p>{approach.description}</p>
                            
                            <div className="relative">
                              <div className="absolute top-2 right-2">
                                <Button 
                                  size="sm" 
                                  variant="ghost" 
                                  onClick={() => copyToClipboard(approach.solution)}
                                  className="h-7 w-7 p-0"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                              <pre className="bg-secondary/30 p-3 rounded-md overflow-auto text-sm">
                                <code>{approach.solution}</code>
                              </pre>
                            </div>
                            
                            <h4 className="text-sm font-medium">Complexity Analysis</h4>
                            <ul className="text-sm space-y-1">
                              <li><strong>Time Complexity:</strong> {approach.complexity.time}</li>
                              <li><strong>Space Complexity:</strong> {approach.complexity.space}</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-8 glass-card rounded-lg">
                <div>
                  <Code className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-medium mb-2">Select a question</h3>
                  <p className="text-muted-foreground">
                    Click on a question from the list to view its detailed solutions and approaches.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Questions;
