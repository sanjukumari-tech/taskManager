// src/components/TaskFilter.tsx
import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';

interface TaskFilterProps {
  filter: 'all' | 'completed' | 'incomplete';
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <ButtonGroup variant="outline" spacing="6" mb={4}>
      <Button
        colorScheme={filter === 'all' ? 'teal' : undefined}
        onClick={() => setFilter('all')}
      >
        All
      </Button>
      <Button
        colorScheme={filter === 'completed' ? 'teal' : undefined}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
      <Button
        colorScheme={filter === 'incomplete' ? 'teal' : undefined}
        onClick={() => setFilter('incomplete')}
      >
        Incomplete
      </Button>
    </ButtonGroup>
  );
};

export default TaskFilter;
