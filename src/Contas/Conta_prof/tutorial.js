import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Image} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Tutorial() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
               <Image
               source={require('../../../assets/logo.png')}
               style={{width: 120, height: 40}}
               resizeMode="contain"
               />
               <Text style={styles.titulo}>Tutoriais</Text>       
            </View>
        <Separator />
         
         <ScrollView>
         <View style={styles.box}>
         <Image 
           source={require('../../../assets/composteira.jpg')}
           style={{width: 230, height:130}}
           />
           <Text style={styles.texto}>Composteira Doméstica. Como fazer?</Text>
           <Text style={styles.text}>Ver mais...</Text>
         </View>
         
         <View style={styles.box2}>
         <Image 
           source={require('../../../assets/ideia_plastico.jpg')}
           style={{width: 230, height:130}}
           />
           <Text style={styles.texto2}>33 ideias de como reutilizar plástico em casa</Text>
           <Text style={styles.text2}>Ver mais...</Text>
         </View>
         </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
       marginTop: 0,
        backgroundColor: '#F83600',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titulo: {
      fontSize: 25,
      color: '#000',
      paddingRight: 145
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
      fontSize: 15,
      color: '#0000FF',
      marginLeft:150,
      marginTop: 20
    },
    text2: {
      fontSize: 15,
      color: '#0000FF',
      marginLeft:150,
      marginTop: 20
    },
    texto: {
      fontSize: 18,
      color: '#000',
      marginLeft:50
    },
    texto2: {
      fontSize: 18,
      color: '#000',
      marginLeft:30
    },
    box:{
      width: 230,
      height: 250,
      backgroundColor: '#ddd',
      margin: 10,
      borderRadius: 5,
      marginLeft: 95
    },
    box2:{
      width: 230,
      height: 250,
      backgroundColor: '#ddd',
      margin: 10,
      borderRadius: 5,
      marginLeft: 95,
      marginTop: 50
    }
})