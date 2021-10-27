import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Screen3 from '../screens/Screen3';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Screen3" options={{title: 'Pagina 3'}} component={Screen3} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator