import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Image} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Material() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
               <Image
               source={require('../../../assets/logo.png')}
               style={{width: 120, height: 40}}
               resizeMode="contain"
               />
               <Text style={styles.titulo}>Material</Text>       
            </View>
        <Separator />
         
         <ScrollView>
         <View style={styles.box}>
         <Image 
           source={require('../../../assets/educacion_ambiental.jpg')}
           style={{width: 230, height:130}}
           />
           <Text style={styles.texto}>Ensinando Sustentabilidade para Crianças</Text>
           <Text style={styles.text}>Ver mais...</Text>
         </View>

         <View style={styles.box}>
         <Image 
           source={require('../../../assets/lixo_organico.jpg')}
           style={{width: 230, height:130}}
           />
           <Text style={styles.texto2}>Dá pra reciclar lixo organico</Text>
           <Text style={styles.text2}>Ver mais...</Text>
         </View>

         <View style={styles.box}><Image 
           source={require('../../../assets/campanha.jpg')}
           style={{width: 230, height:110}}
           />
           <Text style={styles.texto3}>campanha em são paulo quer melhorar gestão de resíduos orgânicos</Text>
           <Text style={styles.text3}>Ver mais...</Text>
           </View>
           <Separator />
           <Separator />
           <Separator />
           

         </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
       marginTop: 31,
        backgroundColor: '#009CFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titulo: {
      fontSize: 25,
      color: '#000',
      paddingRight: 150
    },
    texto: {
      fontSize: 18,
      color: '#000',
      marginLeft:50
    },
    texto2: {
      fontSize: 18,
      color: '#000',
      marginLeft:40
    },
    texto3: {
      fontSize: 18,
      color: '#000',
      marginLeft:35
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
      marginTop: 42
    },
    text3: {
      fontSize: 15,
      color: '#0000FF',
      marginLeft:150,
      marginTop: 15
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    box:{
      width: 230,
      height: 250,
      backgroundColor: '#ddd',
      margin: 10,
      borderRadius: 5,
      marginLeft: 95
    }
})
