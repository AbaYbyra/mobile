import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Material from './material'
import Configuração from './configuração'


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Material" component={Material} />
      <Drawer.Screen name="Configuração" component={Configuração} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default (MyDrawer);
