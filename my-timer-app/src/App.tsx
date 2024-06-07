// src/App.tsx
import React, { useState } from 'react';
import { Box, Heading, Container } from '@chakra-ui/react';
import Posts from './components/Posts';
import './App.css';
import Timer from './components/Timer';


// import { Box, Container, Heading } from '@chakra-ui/react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { Task, Priority } from './types/types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string, priority: Priority) => {
    const newTask: Task = {
      id: tasks.length + 1,
      description,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTasks = (status: 'all' | 'completed' | 'incomplete') => {
    if (status === 'all') {
      return tasks;
    }
    return tasks.filter(task => task.completed === (status === 'completed'));
  };
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Timer />
      </header>
      <div className="fetchapi">
      <Container maxW="container.lg" py={10}>
      <Box textAlign="center" mb={10}>
        <Heading>API Demo with TypeScript</Heading>
      </Box>
      <Posts />
    </Container>

      </div>

      <div className="taskManager">
      <Container maxW="container.md" py={10}>
      <Box textAlign="center" mb={10}>
        <Heading>Task Manager</Heading>
      </Box>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
