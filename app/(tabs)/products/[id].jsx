import { useLocalSearchParams } from 'expo-router';
import { useEffect, useLayoutEffect } from 'react';
import { Text } from 'react-native';
const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  return <Text>Product {id}</Text>;
};

export default ProductDetails;
