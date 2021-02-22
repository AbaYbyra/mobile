import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Serie from './mat_serie'
import  Artigo from './artigo'
import Tutorial from './tutorial'
import Configuração from './configuração'



const Drawer = createDrawerNavigator();

function Conta () {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Material" component={Serie} />
      <Drawer.Screen name="Artigo" component={Artigo} />
      <Drawer.Screen name="Tutoriais" component={Tutorial} />
      <Drawer.Screen name="Configuração" component={Configuração} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default (Conta);
