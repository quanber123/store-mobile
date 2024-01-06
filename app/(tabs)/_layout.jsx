import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home Page',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='products'
        options={{
          tabBarLabel: 'Product Details',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='product' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='blogs'
        options={{
          headerTitle: 'Blog Details',
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
