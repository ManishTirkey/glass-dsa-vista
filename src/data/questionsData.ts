
export interface QuestionExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface ApproachComplexity {
  time: string;
  space: string;
}

export interface QuestionApproach {
  name: string;
  description: string;
  solution: string;
  complexity: ApproachComplexity;
}

export interface QuestionAnswer {
  code: string;
  explanation: string;
}

export interface Question {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  shortDescription: string;
  description: string;
  examples: QuestionExample[];
  approaches: QuestionApproach[];
  completed: boolean;
  answer?: QuestionAnswer;
}

// Import the JSON file
import questionsData from './questions.json';

// Type assertion for the imported JSON
export const questions: Question[] = questionsData as Question[];

// Helper function to add a new question
export const addQuestion = (newQuestion: Question): Question[] => {
  // In a real app, you would save this to your JSON file or database
  // For now, this just returns the updated array
  const updatedQuestions = [...questions, newQuestion];
  return updatedQuestions;
};

// Helper to update an existing question
export const updateQuestion = (updatedQuestion: Question): Question[] => {
  const updatedQuestions = questions.map(q => 
    q.id === updatedQuestion.id ? updatedQuestion : q
  );
  return updatedQuestions;
};

// Example of how to create a new question
export const createQuestionTemplate = (): Question => {
  return {
    id: String(questions.length + 1),
    title: "New Question",
    difficulty: "Easy",
    topics: [],
    shortDescription: "",
    description: "",
    examples: [{ input: "", output: "" }],
    approaches: [{
      name: "",
      description: "",
      solution: "",
      complexity: { time: "", space: "" }
    }],
    completed: false,
    answer: {
      code: "",
      explanation: ""
    }
  };
};
