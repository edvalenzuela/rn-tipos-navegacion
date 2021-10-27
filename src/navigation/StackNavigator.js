import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
            headerStyle:{
                elevation:0,
                shadowColor: 'transparent'
            },
            cardStyle:{
                backgroundColor: '#ccc'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" options={{title:"Pagina Principal"}} component={HomeScreen} />
      <Stack.Screen name="Screen1" options={{title:"Pagina 1"}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{title:"Pagina 2"}} component={Screen2} />
      <Stack.Screen name="Screen3" options={{title:"Pagina 3"}} component={Screen3} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
