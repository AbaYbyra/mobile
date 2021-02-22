
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, Image, TextInput, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from '../Cadastro/index';


const Separator = () => (
  <View style={styles.separator} />
);

export default function Login({ navigation }){
   

  return (
    
    <SafeAreaView style={styles.container}>  
  
      <Text style={styles.texto}>Login</Text>
      
      <Separator />
      <Image source={require('../../assets/logo.png')}
       style={styles.logo}
       />

       <TextInput style={styles.input}
       placeholder="E-mail"/>
       <TextInput style={styles.input}
       placeholder="Senha"
       secureTextEntry={true}
       />
      <View style={styles.fixToText}>
      
       <View style={styles.butLog}>
          <TouchableOpacity style={styles.button1}>
           <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
       </View> 

       <View style={styles.butCad}>
         <TouchableOpacity style={styles.button2}
         onPress={() => navigation.navigate('Cadastro_login')}>
           <Text style={styles.text}>Cadastrar</Text>
         </TouchableOpacity>
       </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
  fontSize: 50,
  color: '#fff',
  marginBottom:30,
  },

  logo:{
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom:50
  },
  input:{
    marginTop: 10,
    padding: 10,
    width: 350,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 15
  },

  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop:150
  },

  fixToText: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:5,
  },
  butLog: {
   marginRight: 150,
  },
  button1: {
    width: 100,
    height: 40,
    backgroundColor: "#9ad8ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
  },
  button2: {
    width: 100,
    height: 40,
    backgroundColor: "#79ec77",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
  },
});