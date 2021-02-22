import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home'
import Contato from './src/pages/Contato'
import Sobre from './src/pages/Sobre'
import Login from './src/pages/Login'
import Routes from './src/pages/Rotas'
import RotasLogin from './src/pages/Rotas/RotasLogin'



const rotas = createDrawerNavigator();



function Menu() {
  return (
    <NavigationContainer>
    <rotas.Navigator initialRouteName="Home">
      <rotas.Screen name="Home" component={Routes} />
      <rotas.Screen name="Sobre" component={Sobre} />
      <rotas.Screen name="Contato" component={Contato} />
      <rotas.Screen name="Login" component={RotasLogin} />
    </rotas.Navigator>
  </NavigationContainer>
  
  );
}

export default (Menu);

