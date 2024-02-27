import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { Assessment } from '../screens/Assessment';
import { Home } from '../screens/Home';
import { More } from '../screens/More';
import { Payment } from '../screens/Payment';
import { Training } from '../screens/Training';
import { Profile } from '../screens/Profile';
import { Enrollment } from '../screens/Enrollment';
import { Notice } from '../screens/Notice';
import { Attendance } from '../screens/Attendance';
import { Schedule } from '../screens/Schedule';
import { Favorite } from '../screens/Favorite';
import { ShareButton } from '../screens/Share';
import { Review } from '../screens/Review';
import { Help } from '../screens/Help';
import { SignOut } from '../screens/SignOut';
import { WorkoutExercise } from '../screens/Training/WorkoutExercise';
import { Staff } from '../screens/Staff';
import { StaffEval } from '../screens/Staff/StaffEval';
import { AssessmentResult } from '../screens/Assessment/AssessmentResult';

import { MaterialCommunityIcons, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const iconSize = 20;

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Enrollment" component={Enrollment} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="StaffEval" component={StaffEval} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Share" component={ShareButton} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="WorkoutExercise" component={WorkoutExercise} />
    </Stack.Navigator>
  );
}
function MyStackTraining() {
  return (
    <Stack.Navigator
      initialRouteName="Training"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Training2" component={Training} />
      <Stack.Screen name="WorkoutExercise" component={WorkoutExercise} />
    </Stack.Navigator>
  );
}
function MyStackAssessment() {
  return (
    <Stack.Navigator
      initialRouteName="Training"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Assessment2" component={Assessment} />
      <Stack.Screen name="AssessmentResult" component={AssessmentResult} />
    </Stack.Navigator>
  );
}

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
        <Tab.Screen
          name="Payment"
          component={Payment}
          options={{
            tabBarLabel: 'Payment',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="attach-money" size={iconSize} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Training"
          component={MyStackTraining}
          options={{
            tabBarLabel: 'Training',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={iconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Assessment"
          component={MyStackAssessment}
          options={{
            tabBarLabel: 'Assessment',
            tabBarIcon: ({ color }) => (
              <Feather name="clipboard" size={iconSize} color={color} />

            ),
          }}
        />
        <Tab.Screen
          name="MyStack"
          component={MyStack}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dots-horizontal" color={color} size={iconSize} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}