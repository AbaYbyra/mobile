import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Contato() {

  return (
    <View style={styles.container}>
      <StatusBar hidden/>  

      <Text style={styles.texto}>Fale Conosco</Text>
      <StatusBar style="auto" />

      <Image source={require('../../assets/contato-logo.jpg')}
       style={styles.logo}
       />

      <Separator />

       <TextInput style={styles.input}
       placeholder="E-mail"/>
       <TextInput style={styles.input}
       placeholder="Senha"
       secureTextEntry={true}
       />
       <TextInput style={styles.msg}
       placeholder="Mensagem"
         multiline={true}
       />
         <TouchableOpacity style={styles.button}
         onPress={() => Alert.alert('MSG', 'Mensagem enviada!')}>
           <Text style={styles.text}>Enviar</Text>
         </TouchableOpacity>
  
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
  fontSize: 50,
  color: '#000',
  marginBottom: 30,
  },

  logo:{
    width: 150,
    height: 150,
    borderRadius: 5,
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

  msg: {
    marginTop: 10,
    padding: 10,
    width: 350,
    height: 100,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 15
  },

  button: {
    width: 100,
    height: 40,
    backgroundColor: "#f83600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
  },
});