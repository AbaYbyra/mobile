import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home'
import Contato from './src/pages/Contato'
import Sobre from './src/pages/Sobre'
import Login from './src/pages/Login'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default (MyDrawer);
