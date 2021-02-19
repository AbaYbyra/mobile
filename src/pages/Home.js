import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Image} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Home() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
               <Image
               source={require('../../assets/logo.png')}
               style={{width: 120, height: 40}}
               resizeMode="contain"
               />
               <Text style={styles.texto}>Abá Ybyrá</Text>       
            </View>
        <Separator />
         
         <ScrollView>
         <View style={styles.box}>
           <Image 
           source={require('../../assets/cover1.jpg')}
           style={{width: 400, height:260}}
           />
           
         </View>

         </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
       marginTop: 31,
        backgroundColor: '#45CA42',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    texto: {
      fontSize: 25,
      color: '#874201',
      paddingRight: 130
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    box:{
      height: 260,
      backgroundColor: '#ddd',
      margin: 7,
      borderRadius: 5,
    }
})  
