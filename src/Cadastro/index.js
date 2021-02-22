import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';


const Separator = () => (
    <View style={styles.separator} />
  );  
  
export default function Cadastro({ navigation }) {


    return (
      <View style={styles.container}>
         
  
        <TouchableOpacity style={styles.button1}
        onPress={() => navigation.navigate('Cadastre-se')}
        >
           <Text style={styles.text}>Sou Professor</Text>
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity style={styles.button2}
        onPress={() => navigation.navigate('Cadastre')}>
           <Text style={styles.text}>Sou Escola</Text>
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
  
    button1: {
      width: 200,
      height: 100,
      backgroundColor: "#F83600",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginVertical: 15,
    },
    button2: {
      width: 200,
      height: 100,
      backgroundColor: "#009CFF",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginVertical: 15,
    },
  });