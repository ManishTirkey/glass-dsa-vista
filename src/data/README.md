
# Questions Data Format

This directory contains the data structure for the DSA questions library.

## File Structure

- `questions.json` - The main JSON file containing all question data
- `questionsData.ts` - TypeScript utility functions and types for working with the question data

## Adding a New Question

To add a new question:

1. Open `questions.json`
2. Add a new object to the array following this format:

```json
{
  "id": "unique_id",
  "title": "Question Title",
  "difficulty": "Easy|Medium|Hard",
  "topics": ["Topic1", "Topic2"],
  "shortDescription": "Brief description of the question",
  "description": "Detailed problem statement",
  "examples": [
    {
      "input": "Description of input",
      "output": "Expected output",
      "explanation": "Optional explanation"
    }
  ],
  "approaches": [
    {
      "name": "Approach Name",
      "description": "Description of the approach",
      "solution": "Code solution (as a string)",
      "complexity": {
        "time": "Time complexity",
        "space": "Space complexity"
      }
    }
  ],
  "completed": false,
  "answer": {
    "code": "Your full solution code here",
    "explanation": "Explanation of your solution approach"
  }
}
```

## Question Schema

- `id` (string): Unique identifier for the question
- `title` (string): Title of the question
- `difficulty` (string): One of "Easy", "Medium", or "Hard"
- `topics` (array): List of relevant topics/tags
- `shortDescription` (string): Brief summary of the problem
- `description` (string): Full problem description
- `examples` (array): List of example cases
  - `input` (string): Input for the example
  - `output` (string): Expected output
  - `explanation` (string, optional): Explanation of the example
- `approaches` (array): List of solution approaches
  - `name` (string): Name of the approach
  - `description` (string): Description of the approach
  - `solution` (string): Code solution (include line breaks with \n)
  - `complexity` (object): Time and space complexity
    - `time` (string): Time complexity
    - `space` (string): Space complexity
- `completed` (boolean): Indicates if the question has been completed
- `answer` (object, optional): Your own solution and explanation
  - `code` (string): Your implementation of the solution
  - `explanation` (string): Detailed explanation of your approach and thought process
