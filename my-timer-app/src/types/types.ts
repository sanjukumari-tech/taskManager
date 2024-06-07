// src/types.ts
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }


  // this is for task app

  // src/types.ts
export enum Priority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
  }
  
  export interface Task {
    id: number;
    description: string;
    priority: Priority;
    completed: boolean;
  }
  
  