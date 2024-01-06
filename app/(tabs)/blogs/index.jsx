import { router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
const BlogScreen = () => {
  return (
    <View>
      <Text>Blog Screen</Text>
      <Pressable onPress={() => router.push('/blogs/1')}>
        <Text>Blog Details</Text>
      </Pressable>
    </View>
  );
};

export default BlogScreen;
