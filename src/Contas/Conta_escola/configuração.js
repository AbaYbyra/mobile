import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Configuração() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
               <Image
               source={require('../../../assets/logo.png')}
               style={{width: 120, height: 40}}
               resizeMode="contain"
               />
               <Text style={styles.texto}>Configuração</Text>       
            </View>
        <Separator />
         
         <ScrollView>
         <View style={styles.box}>
         <Text style={styles.text_box}>Sair da Conta</Text>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.text}>Sair</Text>
         </TouchableOpacity>
         </View>

         </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
       marginTop: 30,
        backgroundColor: '#45CA42',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    texto: {
      fontSize: 25,
      color: '#000',
      paddingRight: 120
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text_box: {
      fontSize: 20,
      color: '#000',
      
    },
    box:{
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:10
    },
    button: {
      width: 260,
      height: 40,
      backgroundColor: "#FF0000",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginVertical: 15,
    },
})  