import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const BlogDetails = () => {
  const { id } = useLocalSearchParams();
  return <Text>Blog {id}</Text>;
};

export default BlogDetails;
