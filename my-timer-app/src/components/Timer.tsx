// src/Timer.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <Box textAlign="center" py={10}>
      <Heading mb={6}>Timer</Heading>
      <Text fontSize="6xl" fontWeight="bold" mb={6}>
        {formatTime(time)}
      </Text>
      <HStack spacing={4}>
        <Button colorScheme="green" onClick={handleStart}>
          Start
        </Button>
        <Button colorScheme="red" onClick={handleStop}>
          Stop
        </Button>
        <Button colorScheme="teal" onClick={handleReset}>
          Reset
        </Button>
      </HStack>
    </Box>
  );
};

export default Timer;
