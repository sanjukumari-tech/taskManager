// src/components/TaskList.tsx
import React from 'react';
import { Box, Checkbox, Stack, Text } from '@chakra-ui/react';
import { Task } from '../types/types';

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => {
  return (
    <Stack spacing={3}>
      {tasks.map((task) => (
        <Box key={task.id} p={4} borderWidth="1px" borderRadius="lg">
          <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(task.id)}>
            <Text as={task.completed ? 'del' : undefined}>{task.description}</Text>
            <Text fontSize="sm" color="gray.500">{task.priority}</Text>
          </Checkbox>
        </Box>
      ))}
    </Stack>
  );
};

export default TaskList;
