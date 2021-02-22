import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Image} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Cadastrados() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
               <Image
               source={require('../../../assets/logo.png')}
               style={{width: 120, height: 40}}
               resizeMode="contain"
               />
               <Text style={styles.texto}>Meus Professores</Text>       
            </View>
        <Separator />
         
         <ScrollView>
         <View style={styles.box}>
           <Text style={styles.text}> #           Nome                      Email</Text>
           <Separator />
           <Text style={styles.text}> 1         José da Silva    jose@gmail.com</Text>
         </View>

         </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
       marginTop: 30,
        backgroundColor: '#009CFF',
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
    box:{
      height: 801,
      backgroundColor: '#ddd',
      margin: 7,
      borderRadius: 5,
    },
    text:{
      fontSize: 20,
    }
})
