import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Material from './mat_series'
import Artigo from './artigo'
import Tutorial from './tutorial'
import Cadastrados from './cadastrados'
import Configuração from './configuração'


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Material" component={Material} />
      <Drawer.Screen name="Artigos" component={Artigo} />
      <Drawer.Screen name="Tutoriais" component={Tutorial} />
      <Drawer.Screen name="Cadastrados" component={Cadastrados} />
      <Drawer.Screen name="Configuração" component={Configuração} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default (MyDrawer);
