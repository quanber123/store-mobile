import { Stack } from 'expo-router';

const LayoutBlog = () => {
  return (
    <Stack>
      <Stack.Screen name='blogs' />
      <Stack.Screen name='blogs/[id]' />
    </Stack>
  );
};
export default LayoutBlog;
