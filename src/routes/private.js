import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//screens
import { Home } from '../screens/Home';
import { CarList } from '../screens/Private/CarList';
import { CheckList } from '../screens/Private/CheckList';
import { CheckListOne } from '../screens/Private/CheckList/CheckListOne';
import { CheckListTwo } from '../screens/Private/CheckList/CheckListTwo';
import { Fuel } from '../screens/Private/Fuel';
import { Profile } from '../screens/Private/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const iconSize = 20;

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName="CheckListOne"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CheckList2" component={CheckList} />
      <Stack.Screen name="CheckListOne" component={CheckListOne} />
      <Stack.Screen name="CheckListTwo" component={CheckListTwo} />
    </Stack.Navigator>
  );
}

export function Private() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <Tab.Navigator
        initialRouteName="CheckList"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarIconSize: 20,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1a1a1a',
            // padding: 15,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIconStyle: {
            // marginTop: 5,
            alignSelf: 'center',

          },
          
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size  }) => (
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
          component={MyStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Entypo name="circle-with-plus" size={35} color={color} />
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