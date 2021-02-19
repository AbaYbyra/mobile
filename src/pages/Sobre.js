import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Image} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Sobre() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
               <Image
               source={require('../../assets/logo.png')}
               style={{width: 120, height: 40}}
               resizeMode="contain"
               />
               <Text style={styles.texto}>Sobre</Text>       
            </View>
        <Separator />
         
         <ScrollView>
         <View style={styles.box}>
           <Image 
           source={require('../../assets/cover3.jpg')}
           style={{width: 400, height:260}}
           />
           </View>

           <View style={styles.box}>
             <Text style={styles.titulo_sobre}>Abá Ybyrá</Text>
              <Text style={styles.texto_sobre}>
                O projeto, ABÁ YBYRÁ, foi montado em cima do problema que é a forma que é descartado os lixos, gerando consequências graves 
                para os seres vivos e para o nosso planeta. O ABÁ YBYRÁ, que são palavras indígenas, que significa Homem Árvore, traz a ideia de 
                resgatar conhecimentos e conexão com a natureza dos habitantes originais do nosso país sobre preservação 
                e vida em harmonia com o meio ambiente. 
               </Text>
               
              <Text style={styles.texto_sobre}>
                 Nosso foco são os futuros líderes e tomadores de decisão da sociedade (as crianças), 
                 mostraremos de forma divertida e efetiva como o meio ambiente funciona e como nossas ações são importantes para preservá-lo.  
              </Text>
               <Text style={styles.texto_sobre}>
                 Por meio de materiais didáticos e atividades práticas, levamos aos alunos do ensino básico conceitos sobre o cuidado 
                 com o meio ambiente, impacto das atividades humanas no mesmo e hábitos sustentáveis que ajudam a preservá-lo.  
                </Text>
               <Text style={styles.texto_sobre}>
                  Com isso, temos como objetivo levar a consciência ambiental para as 
                  famílias por meio das crianças, tornando o presente sustentável
                  e garantindo um futuro onde o homem e o meio ambiente vivam em harmonia  
               </Text>
                
               <Text style={styles.texto_sobre}>  
                  Começaremos pequeno. Nosso ponto de partida são as comunidades, duas para ser exato: A comunidade São Remo, que fica localizada 
                  na zona oeste do município de São Paulo, e a Comunidade Morro da Mineira, que fica localizada no bairro do Catumbi, próximo à 
                  região central do Rio de Janeiro. 
               </Text>  
               <Text style={styles.texto_sobre}>
                 Nossa meta é que, ao longo desse caminhar, as mudanças necessárias para a preservação do meio ambiente sejam conscientizadas por todos nós
               </Text>
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
      color: '#fff',
      paddingRight: 163
    },
     texto_sobre:{
       fontSize: 15,
    },
    titulo_sobre:{
      alignItems: 'center',
      paddingRight: 163,
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