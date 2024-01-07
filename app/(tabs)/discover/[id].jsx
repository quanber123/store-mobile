import { useLocalSearchParams } from 'expo-router';
import { useEffect, useLayoutEffect } from 'react';
import { Text } from 'react-native';
import { useGetProductsQuery } from '../../services/redux/features/productFeature';
const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, isSuccess } = useGetProductsQuery();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);
  return (
    <SafeAreaView>
      <Text>Product {id}</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;
