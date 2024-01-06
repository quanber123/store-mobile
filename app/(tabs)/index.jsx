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
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Link href={`products/${1}`}>Product Details 1</Link>
      <Link href={`blogs/${1}`}>Blog Details 1</Link>
    </SafeAreaView>
  );
};

export default Home;
