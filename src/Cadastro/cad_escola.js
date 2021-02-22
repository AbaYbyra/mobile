import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, TouchableOpacity  } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function cad_escola({ navigation }) {

   return (
    <View style={styles.container}>
      <StatusBar hidden/>  

      <Text style={styles.texto}>Cadastrar Escola</Text>
      <StatusBar style="auto" />

      

      <Separator />

      <ScrollView style={styles.scrollView}>

       <TextInput style={styles.input}
       placeholder="Nome da escola" />
       
       <TextInput style={styles.input}
       placeholder="E-mail"/>

       <TextInput style={styles.input}
       placeholder="Senha"
       secureTextEntry={true}/>

       <TextInput style={styles.input}
       placeholder="Logadouro" />

       <TextInput style={styles.input}
       placeholder="Número" />

       <TextInput style={styles.input}
       placeholder="Complemento" />

       <TextInput style={styles.input}
       placeholder="Bairro" />

       <TextInput style={styles.input}
       placeholder="Cidade" />

       <TextInput style={styles.input}
       placeholder="UF"/>

       <TextInput style={styles.input}
       placeholder="CEP"/>

       <TextInput style={styles.input}
       placeholder="Telefone" />

       <TextInput style={styles.input}
       placeholder="Telefone auxiliar"/>

       <TextInput style={styles.input}
       placeholder="Publica?"/>
     </ScrollView>
       
     <View style={styles.fixToText}>
      
      <View style={styles.butLog}>
         <TouchableOpacity style={styles.button1}
          onPress={() => Alert.alert('MSG', 'Usuário Cadastrado!')}>
          <Text style={styles.text}>Cadastrar</Text>
         </TouchableOpacity>
      </View> 

      <View style={styles.butCad}>
        <TouchableOpacity style={styles.button2}
        onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
     </View>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
  fontSize: 35,
  color: '#fff',
  marginTop:100
  },

  logo:{
    width: 150,
    height: 150,
    borderRadius: 100,
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
  button1: {
    width: 100,
    height: 40,
    backgroundColor: "#9ad8ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
    marginRight:150
  },
  button2: {
    width: 100,
    height: 40,
    backgroundColor: "#45CA42",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
  },
});