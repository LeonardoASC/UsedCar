import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { PresentationContainer, Title, ButtonText } from './styles'; // Importe os estilos necessários
import { BlurView } from 'expo-blur';
import bakc from '../../../../assets/mecanics1.png';
export function Presentation({ navigation }) {

  return (

    <SafeAreaView style={styles.container}>
      <Image source={bakc} style={[styles.image, StyleSheet.absoluteFill]} />
      <BlurView intensity={30} tint="dark" style={{ width: '100%', height: '100%' }}>
        <View style={styles.login}>
          <Text style={{ color: 'white', fontSize: 47, fontWeight: 'bold', bottom: '40%'}}>UsedCar</Text>
          <Text style={{ color: 'white', fontSize: 17, bottom: '40%', textAlign: 'center'}}>O app para auxiliar voce na compra de carros usados!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button]}>
            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Entrar</Text>
          </TouchableOpacity>
          <Text style={{ color: 'white', }}>Ao Clicar em entrar voce aceita os termos de uso de nosso aplicativo. Para ler mais, veja em:  </Text>
          <TouchableOpacity>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Termos de Uso e Politica de privacidade.</Text>
          </TouchableOpacity>

        </View>
      </BlurView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button: {
    width: '90%',
    height: '7%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#ffbf00',
  }

});