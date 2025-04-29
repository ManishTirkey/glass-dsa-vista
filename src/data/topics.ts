
export interface Topic {
  id: string;
  name: string;
  description?: string;
}

const topics: Topic[] = [
  { id: "arrays", name: "Arrays", description: "Operations on collections of items" },
  { id: "strings", name: "Strings", description: "Text manipulation algorithms" },
  { id: "linked-lists", name: "Linked Lists", description: "Chain of nodes with pointers" },
  { id: "trees", name: "Trees", description: "Hierarchical data structures" },
  { id: "graphs", name: "Graphs", description: "Networks of connected nodes" },
  { id: "dp", name: "Dynamic Programming", description: "Breaking down complex problems into simpler subproblems" },
  { id: "greedy", name: "Greedy Algorithms", description: "Making locally optimal choices" },
  { id: "searching", name: "Searching", description: "Finding elements in data structures" },
  { id: "sorting", name: "Sorting", description: "Arranging elements in a specific order" },
  { id: "backtracking", name: "Backtracking", description: "Finding all solutions to a problem" },
  { id: "hash-tables", name: "Hash Tables", description: "Key-value data structures" },
  { id: "heaps", name: "Heaps", description: "Special tree-based data structures" },
  { id: "binary-search", name: "Binary Search", description: "Searching sorted arrays efficiently" },
  { id: "recursion", name: "Recursion", description: "Functions calling themselves" },
  { id: "two-pointers", name: "Two Pointers", description: "Using two pointers to solve array problems" },
  { id: "sliding-window", name: "Sliding Window", description: "Subset of two pointers technique" },
  { id: "design", name: "Design", description: "Implementing data structures and systems" },
  { id: "bit-manipulation", name: "Bit Manipulation", description: "Operations at the bit level" },
  { id: "stack", name: "Stack", description: "LIFO data structure" },
  { id: "queue", name: "Queue", description: "FIFO data structure" }
];

export default topics;
