import React from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'  /*biblioteca de animação durante a transição de telas */
export default function SingIn() {
 return (
    <View style={style.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={style.containerHeader}>
        <Text style={styles.message}>Bem-vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={style.containerForm}>
        <Text style={styles.tittle}>Email</Text>
        <TextInput
        placeholder="Digite um email..."
        style={styles.input}
        />

     <Text style={styles.tittle}>Senha</Text>
        <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.buttonRefister}>
        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    <Text>Tela login</Text>
</View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#38a69d',

  },
  containerHeader:{
    marginTop:'14%'
  }
})
