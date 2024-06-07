// src/components/Posts.tsx
import React from 'react';
import { Box, Spinner, Alert, AlertIcon, Grid, GridItem, Text } from '@chakra-ui/react';
import useFetchPosts from '../hooks/useFetchPosts';

const Posts: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <Spinner size="xl" />;
  if (error) return <Alert status="error"><AlertIcon />{error}</Alert>;

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
      {posts.map((post) => (
        <GridItem key={post.id}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Text fontWeight="bold" mb={2}>{post.title}</Text>
            <Text>{post.body}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Posts;
