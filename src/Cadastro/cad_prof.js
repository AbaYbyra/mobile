import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView, TextInput, Alert, Button } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [disciplina, setDisciplina] = useState('');


const cadastro = () => {
  Alert(nome);
  Alert(email);
  Alert(senha);
  Alert(disciplina);
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>  

      <Text style={styles.texto}>Cadastrar Professor</Text>
      <StatusBar style="auto" />

      

      <Separator />

      <ScrollView style={styles.scrollView}>

       <TextInput style={styles.input}
       placeholder="Nome da escola" onChangeText={text => setNome(text)}/>
       
       <TextInput style={styles.input}
       placeholder="E-mail" onChangeText={text => setEmail(text)}/>

       <TextInput style={styles.input}
       placeholder="Senha" onChangeText={text => setSenha(text)}
       secureTextEntry={true}/>

       <TextInput style={styles.input}
       placeholder="Disciplena" onChangeText={text => setDisciplina(text)}/>

       <View style={styles.fixToText}>
         <Button
           borderRadius= "100"
           color="#5F9EA0"
           title="Cadastrar"
           onPress={() => cadastro}
         />
      </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F83600',
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
  }
});

