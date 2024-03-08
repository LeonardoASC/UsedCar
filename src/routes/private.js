import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



//screens
import { Home } from '../screens/Home';
import { CarList } from '../screens/Private/CarList';
import { CheckList } from '../screens/Private/CheckList';
import { Fuel } from '../screens/Private/Fuel';
import { Profile } from '../screens/Private/Profile';

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
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="newspaper-o" size={iconSize} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CarList"
          component={CarList}
          options={{
            tabBarLabel: 'Carros',
            tabBarIcon: ({ color }) => (
              <AntDesign name="car" size={iconSize} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CheckList"
          component={CheckList}
          options={{
            tabBarLabel: 'CheckList',
            tabBarIcon: ({ color }) => (
              <Entypo name="circle-with-plus" size={iconSize} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Fuel"
          component={Fuel}
          options={{
            tabBarLabel: 'Combustivel',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="fuel" size={iconSize} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={iconSize} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}