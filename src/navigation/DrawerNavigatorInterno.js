import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Screen3 from '../screens/Screen3';

const Drawer = createDrawerNavigator();

const DrawerNavigatorInterno = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false 
      }}
      drawerContent={ (props) => <ContenidoMenu {...props} /> }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Screen3" component={Screen3} />
    </Drawer.Navigator>
  );
}

const ContenidoMenu = ({navigation}) => {
  return(
  <DrawerContentScrollView>
    <View style={styles.containerAvatar}>
      <Image 
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png'
        }}
        style={styles.avatar}
      />
    </View>

    <View style={styles.containerMenu}>
        <TouchableOpacity 
          style={styles.btnMenu}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.textMenu}>Stack Navigator</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Screen3')}  
        >
          <Text style={styles.textMenu}>Screen 3</Text>
        </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  containerAvatar:{
    marginVertical: 25,
    alignItems:'center'
  },
  avatar:{
    width: 100,
    height: 100,
    borderRadius: 50
  },
  containerMenu:{
    marginVertical: 20,
    marginHorizontal: 30,  
  },
  btnMenu:{
    marginVertical: 10
  },
  textMenu:{
    fontSize: 25,
  }
})

export default DrawerNavigatorInterno