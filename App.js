import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigatorInterno from './src/navigation/DrawerNavigatorInterno';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigatorInterno />
    </NavigationContainer>
  );
}

export default App;