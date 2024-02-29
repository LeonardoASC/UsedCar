import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//screens
import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();


const iconSize = 20;


export function Private() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarIconSize: 20,
          headerShown: false,
          tabBarStyle: {
            height: 65,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            backgroundColor: '#1a1a1a'
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={iconSize} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}