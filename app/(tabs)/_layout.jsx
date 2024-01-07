import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='home'
              size={size}
              color={color}
              style={{ fontFamily: 'poppins' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='discover'
        options={{
          headerShown: false,
          tabBarLabel: 'Discover',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='grid-outline'
              size={size}
              color={color}
              style={{ fontFamily: 'poppins' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='wishlist'
        options={{
          headerShown: false,
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='heart-outline'
              size={size}
              color={color}
              style={{ fontFamily: 'poppins' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          headerShown: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='notifications-outline'
              size={size}
              color={color}
              style={{ fontFamily: 'poppins' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='person-outline'
              size={size}
              color={color}
              style={{ fontFamily: 'poppins' }}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
