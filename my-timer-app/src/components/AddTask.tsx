// src/components/AddTask.tsx
import React, { useState } from 'react';
import { Box, Button, Input, Select, Stack } from '@chakra-ui/react';
import { Priority } from '../types/types';

interface AddTaskProps {
  addTask: (description: string, priority: Priority) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.Low);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(description, priority);
    setDescription('');
    setPriority(Priority.Low);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <Stack spacing={4} direction="row">
        <Input
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
          <option value={Priority.Low}>Low</option>
          <option value={Priority.Medium}>Medium</option>
          <option value={Priority.High}>High</option>
        </Select>
        <Button type="submit" colorScheme="teal">Add Task</Button>
      </Stack>
    </Box>
  );
};

export default AddTask;
