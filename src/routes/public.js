import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Public/Login';
import { Register } from '../screens/Public/Register';
import { Presentation } from '../screens/Public/Presentation';

const Stack = createStackNavigator();


export function Public() {
    return (
        <Stack.Navigator
          initialRouteName="Presentation"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Presentation" component={Presentation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      );
}