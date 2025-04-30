
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
}

export const questions: Question[] = [
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
  },
  {
    id: '4',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    topics: ['Linked List', 'Recursion'],
    shortDescription: 'Merge two sorted linked lists into one sorted list.',
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]'
      },
      {
        input: 'list1 = [], list2 = []',
        output: '[]'
      }
    ],
    approaches: [
      {
        name: 'Iterative',
        description: 'Create a dummy head and iterate through both lists, choosing the smaller value to add to the result.',
        solution: `function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(-1);
  let current = dummy;
  
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  
  // Attach remaining nodes from either list
  current.next = l1 === null ? l2 : l1;
  
  return dummy.next;
}`,
        complexity: {
          time: 'O(n+m) where n and m are the lengths of the two lists.',
          space: 'O(1) because we only use a constant amount of extra space.'
        }
      },
      {
        name: 'Recursive',
        description: 'Use recursion to determine which list node to take and construct the merged list.',
        solution: `function mergeTwoLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}`,
        complexity: {
          time: 'O(n+m) where n and m are the lengths of the two lists.',
          space: 'O(n+m) for the recursion stack in worst case.'
        }
      }
    ],
    completed: false
  },
  {
    id: '5',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    topics: ['Array', 'Dynamic Programming'],
    shortDescription: 'Find the maximum profit from buying and selling a stock once.',
    description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    examples: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.'
      }
    ],
    approaches: [
      {
        name: 'One Pass',
        description: 'Keep track of the minimum price seen so far and calculate the maximum profit that can be achieved.',
        solution: `function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  
  return maxProfit;
}`,
        complexity: {
          time: 'O(n) where n is the number of prices.',
          space: 'O(1), constant space.'
        }
      }
    ],
    completed: false
  },
  {
    id: '6',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    topics: ['String', 'Two Pointers'],
    shortDescription: 'Determine if a string is a palindrome ignoring non-alphanumeric characters.',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.',
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      }
    ],
    approaches: [
      {
        name: 'Two Pointers',
        description: 'Use two pointers at the start and end of the string and move them towards the center, comparing characters.',
        solution: `function isPalindrome(s) {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0;
  let right = cleanString.length - 1;
  
  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}`,
        complexity: {
          time: 'O(n) where n is the length of the string.',
          space: 'O(n) for creating the cleaned string.'
        }
      }
    ],
    completed: true
  },
  {
    id: '7',
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    topics: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    shortDescription: 'Invert a binary tree (swap left and right children).',
    description: 'Given the root of a binary tree, invert the tree, and return its root. Inverting a binary tree means swapping the left and right children of all nodes.',
    examples: [
      {
        input: 'root = [4,2,7,1,3,6,9]',
        output: '[4,7,2,9,6,3,1]'
      }
    ],
    approaches: [
      {
        name: 'Recursive',
        description: 'Recursively invert the left and right subtrees and swap them.',
        solution: `function invertTree(root) {
  if (root === null) return null;
  
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  
  root.left = right;
  root.right = left;
  
  return root;
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(h) where h is the height of the tree for the recursion stack.'
        }
      },
      {
        name: 'Iterative (BFS)',
        description: 'Use a queue to perform level-order traversal and invert each node\'s children.',
        solution: `function invertTree(root) {
  if (root === null) return null;
  
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    
    // Swap children
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return root;
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(n) in worst case for the queue.'
        }
      }
    ],
    completed: false
  },
  {
    id: '8',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    topics: ['Hash Table', 'Linked List', 'Two Pointers'],
    shortDescription: 'Determine if a linked list has a cycle.',
    description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.',
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'true',
        explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).'
      }
    ],
    approaches: [
      {
        name: 'Floyd\'s Cycle-Finding Algorithm (Tortoise and Hare)',
        description: 'Use two pointers moving at different speeds. If there\'s a cycle, they will eventually meet.',
        solution: `function hasCycle(head) {
  if (!head || !head.next) return false;
  
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;        // Move slow pointer by 1
    fast = fast.next.next;   // Move fast pointer by 2
    
    if (slow === fast) return true;  // If they meet, there's a cycle
  }
  
  return false;  // If fast reaches the end, no cycle
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the list.',
          space: 'O(1), constant space.'
        }
      },
      {
        name: 'Hash Set',
        description: 'Store visited nodes in a hash set and check if a node has been visited before.',
        solution: `function hasCycle(head) {
  const visited = new Set();
  
  let current = head;
  while (current) {
    if (visited.has(current)) {
      return true;  // Found a cycle
    }
    
    visited.add(current);
    current = current.next;
  }
  
  return false;  // No cycle found
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the list.',
          space: 'O(n) for storing the visited nodes.'
        }
      }
    ],
    completed: false
  },
  {
    id: '9',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    topics: ['Math', 'Dynamic Programming', 'Memoization'],
    shortDescription: 'Count the ways to climb n stairs taking 1 or 2 steps at a time.',
    description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    examples: [
      {
        input: 'n = 2',
        output: '2',
        explanation: 'There are two ways: 1+1 and 2.'
      },
      {
        input: 'n = 3',
        output: '3',
        explanation: 'There are three ways: 1+1+1, 1+2, and 2+1.'
      }
    ],
    approaches: [
      {
        name: 'Dynamic Programming',
        description: 'Use DP to build up the solution based on the Fibonacci sequence pattern.',
        solution: `function climbStairs(n) {
  if (n <= 2) return n;
  
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  
  return dp[n];
}`,
        complexity: {
          time: 'O(n) as we calculate each step once.',
          space: 'O(n) for the DP array.'
        }
      },
      {
        name: 'Fibonacci Optimized',
        description: 'Since we only need the last two results, we can use constant space.',
        solution: `function climbStairs(n) {
  if (n <= 2) return n;
  
  let prev1 = 1;  // Ways to climb 1 step
  let prev2 = 2;  // Ways to climb 2 steps
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  
  return prev2;
}`,
        complexity: {
          time: 'O(n) as we still calculate each step once.',
          space: 'O(1) as we only keep track of two variables.'
        }
      }
    ],
    completed: true
  },
  {
    id: '10',
    title: 'Same Tree',
    difficulty: 'Easy',
    topics: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    shortDescription: 'Check if two binary trees are identical.',
    description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
    examples: [
      {
        input: 'p = [1,2,3], q = [1,2,3]',
        output: 'true'
      },
      {
        input: 'p = [1,2], q = [1,null,2]',
        output: 'false'
      }
    ],
    approaches: [
      {
        name: 'Recursive',
        description: 'Compare the nodes recursively, checking values and structure.',
        solution: `function isSameTree(p, q) {
  // If both trees are empty
  if (p === null && q === null) return true;
  
  // If one tree is empty but the other is not
  if (p === null || q === null) return false;
  
  // Check current nodes and recursively check subtrees
  return p.val === q.val && 
         isSameTree(p.left, q.left) && 
         isSameTree(p.right, q.right);
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(h) where h is the height of the tree for the recursion stack.'
        }
      },
      {
        name: 'Iterative (BFS)',
        description: 'Use a queue to perform level-order traversal and compare nodes at each step.',
        solution: `function isSameTree(p, q) {
  const queue = [[p, q]];
  
  while (queue.length > 0) {
    const [node1, node2] = queue.shift();
    
    // If both null, continue to next pair
    if (node1 === null && node2 === null) continue;
    
    // If one is null or values are different
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }
    
    // Push children pairs to queue
    queue.push([node1.left, node2.left]);
    queue.push([node1.right, node2.right]);
  }
  
  return true;
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(n) in worst case for the queue.'
        }
      }
    ],
    completed: false
  },
  {
    id: '11',
    title: 'Symmetric Tree',
    difficulty: 'Easy',
    topics: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    shortDescription: 'Check if a binary tree is a mirror of itself.',
    description: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    examples: [
      {
        input: 'root = [1,2,2,3,4,4,3]',
        output: 'true'
      },
      {
        input: 'root = [1,2,2,null,3,null,3]',
        output: 'false'
      }
    ],
    approaches: [
      {
        name: 'Recursive',
        description: 'Compare the left subtree with the right subtree in a mirrored fashion.',
        solution: `function isSymmetric(root) {
  if (root === null) return true;
  
  // Helper function to check if two subtrees are mirrors
  function isMirror(left, right) {
    // If both null, they are mirrors
    if (left === null && right === null) return true;
    
    // If one is null or values different, not mirrors
    if (left === null || right === null || left.val !== right.val) {
      return false;
    }
    
    // Check outer and inner pairs
    return isMirror(left.left, right.right) && 
           isMirror(left.right, right.left);
  }
  
  return isMirror(root.left, root.right);
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(h) where h is the height of the tree for recursion stack.'
        }
      },
      {
        name: 'Iterative',
        description: 'Use a queue to compare mirrored pairs of nodes level by level.',
        solution: `function isSymmetric(root) {
  if (root === null) return true;
  
  const queue = [[root.left, root.right]];
  
  while (queue.length > 0) {
    const [left, right] = queue.shift();
    
    // If both null, continue
    if (left === null && right === null) continue;
    
    // If one is null or values different
    if (left === null || right === null || left.val !== right.val) {
      return false;
    }
    
    // Add mirrored pairs to queue
    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }
  
  return true;
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(n) in worst case for the queue.'
        }
      }
    ],
    completed: false
  },
  {
    id: '12',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    topics: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    shortDescription: 'Find the maximum depth (height) of a binary tree.',
    description: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '3'
      }
    ],
    approaches: [
      {
        name: 'Recursive DFS',
        description: 'Recursively calculate the maximum depth by finding the maximum depth of the left and right subtrees and adding 1.',
        solution: `function maxDepth(root) {
  if (root === null) return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(h) where h is the height of the tree for the recursion stack.'
        }
      },
      {
        name: 'Iterative BFS',
        description: 'Use level-order traversal to count the number of levels in the tree.',
        solution: `function maxDepth(root) {
  if (root === null) return 0;
  
  const queue = [root];
  let depth = 0;
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    depth++;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  return depth;
}`,
        complexity: {
          time: 'O(n) where n is the number of nodes in the tree.',
          space: 'O(n) in worst case for the queue.'
        }
      }
    ],
    completed: false
  },
  {
    id: '13',
    title: 'Convert Sorted Array to Binary Search Tree',
    difficulty: 'Easy',
    topics: ['Array', 'Divide and Conquer', 'Tree', 'Binary Search Tree', 'Binary Tree'],
    shortDescription: 'Convert a sorted array to a height-balanced BST.',
    description: 'Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.',
    examples: [
      {
        input: 'nums = [-10,-3,0,5,9]',
        output: '[0,-3,9,-10,null,5]',
        explanation: 'One valid answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.'
      }
    ],
    approaches: [
      {
        name: 'Recursive (Divide and Conquer)',
        description: 'Use the middle element as the root and recursively build the left and right subtrees.',
        solution: `function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;
  
  // Find the middle element
  const mid = Math.floor(nums.length / 2);
  
  // Create the root node with the middle element
  const root = new TreeNode(nums[mid]);
  
  // Recursively build left and right subtrees
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  
  return root;
}`,
        complexity: {
          time: 'O(n) where n is the length of the array.',
          space: 'O(log n) for the recursion stack.'
        }
      },
      {
        name: 'Iterative',
        description: 'Use a stack to simulate the recursion, tracking the range of array indices for each node.',
        solution: `function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;
  
  const stack = [{
    start: 0,
    end: nums.length - 1,
    parent: null,
    isLeft: false,
    node: null
  }];
  
  let root = null;
  
  while (stack.length > 0) {
    const { start, end, parent, isLeft } = stack.pop();
    
    if (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const node = new TreeNode(nums[mid]);
      
      if (parent === null) {
        root = node;
      } else if (isLeft) {
        parent.left = node;
      } else {
        parent.right = node;
      }
      
      // Push right child first (will be processed after left)
      stack.push({ start: mid + 1, end, parent: node, isLeft: false });
      // Push left child
      stack.push({ start, end: mid - 1, parent: node, isLeft: true });
    }
  }
  
  return root;
}`,
        complexity: {
          time: 'O(n) where n is the length of the array.',
          space: 'O(log n) for the stack.'
        }
      }
    ],
    completed: false
  },
  {
    id: '14',
    title: 'Balanced Binary Tree',
    difficulty: 'Easy',
    topics: ['Tree', 'Depth-First Search', 'Binary Tree'],
    shortDescription: 'Determine if a binary tree is height-balanced.',
    description: 'Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.',
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: 'true'
      },
      {
        input: 'root = [1,2,2,3,3,null,null,4,4]',
        output: 'false'
      }
    ],
    approaches: [
      {
        name: 'Top-Down Recursive (Naive)',
        description: 'For each node, check if its subtrees are balanced and their heights differ by no more than 1.',
        solution: `function isBalanced(root) {
  // Get height of a node
  function height(node) {
    if (node === null) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
  }
  
  // Check if tree is balanced
  function checkBalance(node) {
    if (node === null) return true;
    
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    return Math.abs(leftHeight - rightHeight) <= 1 && 
           checkBalance(node.left) && 
           checkBalance(node.right);
  }
  
  return checkBalance(root);
}`,
        complexity: {
          time: 'O(n²) in worst case as we might recalculate heights of same nodes multiple times.',
          space: 'O(h) for recursion stack where h is the height of the tree.'
        }
      },
      {
        name: 'Bottom-Up Recursive (Optimized)',
        description: 'Calculate the height as we check for balance, terminating early if unbalanced.',
        solution: `function isBalanced(root) {
  // Helper function that returns height if balanced, -1 if not balanced
  function checkHeight(node) {
    if (node === null) return 0;
    
    const leftHeight = checkHeight(node.left);
    // If left subtree is unbalanced, propagate the result
    if (leftHeight === -1) return -1;
    
    const rightHeight = checkHeight(node.right);
    // If right subtree is unbalanced, propagate the result
    if (rightHeight === -1) return -1;
    
    // Check if current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;  // Current node is unbalanced
    }
    
    // Return height of current node
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  return checkHeight(root) !== -1;
}`,
        complexity: {
          time: 'O(n) as we only visit each node once.',
          space: 'O(h) for the recursion stack where h is the height of the tree.'
        }
      }
    ],
    completed: false
  }
  // Add any additional questions after this
];
