import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Login from '../Login';
import Cadastro from '../../Cadastro';
import Cad_prof from '../../Cadastro/cad_prof'
import cad_escola from '../../Cadastro/cad_escola';

const Stack = createStackNavigator();



export default function RotasLogin(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro_login" component={Cadastro} />
      <Stack.Screen name="Cadastre-se" component={Cad_prof} />
      <Stack.Screen name="Cadastre" component={cad_escola} />
    </Stack.Navigator>
  )
}