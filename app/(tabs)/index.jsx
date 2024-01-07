import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Button,
  Image,
  ImageBackground, // Import ImageBackground
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import {
  useGetBannersQuery,
  useGetCategoriesQuery,
} from '../services/redux/features/productFeature';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getBanners,
  setBanners,
  setCategories,
} from '../services/redux/slice/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const banners = useSelector(getBanners);
  const categories = useSelector(getAllCategories);
  const { data: dataBanners, isSuccess: isSuccessBanners } =
    useGetBannersQuery();
  const { data: dataCategories, isSuccess: isSuccessCategory } =
    useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccessBanners) {
      dispatch(setBanners(dataBanners));
    }
  }, [isSuccessBanners]);

  useEffect(() => {
    if (isSuccessCategory) {
      dispatch(setCategories(dataCategories));
    }
  }, [isSuccessCategory]);
  const Category = ({ imgSrc, name }) => (
    <View
      style={{
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Image
        source={{ uri: imgSrc }}
        style={{ width: 48, height: 48, borderRadius: 100 }}
      />
      <Text style={{ color: 'gray' }}>{name}</Text>
    </View>
  );

  const Banner = ({ imgSrc, category }) => {
    return (
      <ImageBackground
        source={{ uri: imgSrc }}
        style={{
          flex: 1,
          resizeMode: 'cover',
          height: 200,
          position: 'relative',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            position: 'absolute',
            top: 90,
            left: 10,
            zIndex: 10,
            textTransform: 'capitalize',
          }}
        >
          {category}
        </Text>
      </ImageBackground>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10, flexDirection: 'column', gap: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: 40,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            borderColor: 'gray',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 8,
            gap: 10,
          }}
        >
          <AntDesign name='search1' size={24} color='gray' />
          <TextInput placeholder='Search Here' placeholderTextColor='gray' />
        </View>
        <View
          style={{
            padding: 10,
            borderColor: 'gray',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <AntDesign name='bells' size={24} />
        </View>
      </View>
      <View style={{ flexDirection: 'column', gap: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Categories</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ fontSize: 14, color: 'blue' }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <Category imgSrc={item.image} name={item.name} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <PagerView style={{ flex: 1 }} initialPage={0}>
        {banners.map((item, index) => (
          <View key={index}>
            <View style={{ position: 'relative', flex: 1 }}>
              <Banner imgSrc={item.image} category={item.category} />
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default Home;
