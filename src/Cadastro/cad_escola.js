import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Button } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [logadouro, setLogadouro] = useState('');
const [numero, setNumero] = useState('');
const [complemento, setComplemento] = useState('');
const [bairro, setBairro] = useState('');
const [cidade, setCidade] = useState('');
const [estado, setEstado] = useState('');
const [cep, setCep] = useState('');
const [telefone, setTelefone] = useState('');
const [telefone2, setTelefone2] = useState('');

const cadastro = () => {
  Alert(nome);
  Alert(email);
  Alert(senha);
  Alert(logadouro);
  Alert(numero);
  Alert(complemento);
  Alert(bairro);
  Alert(cidade);
  Alert(estado);
  Alert(cep);
  Alert(telefone);
  Alert(telefone2);
};

  return (
    <View style={styles.container}>
      <StatusBar hidden/>  

      <Text style={styles.texto}>Cadastrar Escola</Text>
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
       placeholder="Logadouro" onChangeText={text => setLogadouro(text)}/>

       <TextInput style={styles.input}
       placeholder="Número" onChangeText={text => setNumero(text)}/>

       <TextInput style={styles.input}
       placeholder="Complemento" onChangeText={text => setComplemento(text)}/>

       <TextInput style={styles.input}
       placeholder="Bairro" onChangeText={text => setBairro(text)}/>

       <TextInput style={styles.input}
       placeholder="Cidade" onChangeText={text => setCidade(text)}/>

       <TextInput style={styles.input}
       placeholder="Estado" onChangeText={text => setEstado(text)}/>

       <TextInput style={styles.input}
       placeholder="CEP" onChangeText={text => setCep(text)}/>

       <TextInput style={styles.input}
       placeholder="Telefone" onChangeText={text => setTelefone(text)}/>

       <TextInput style={styles.input}
       placeholder="Telefone 2" onChangeText={text => setTelefone2(text)}/>
 
       
       <Button style={styles.but}
         title="Cadastrar"
         onPress={() => cadastro}
      />
      </ScrollView>
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
});