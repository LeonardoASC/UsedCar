import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { PresentationContainer, Title, ButtonLinear } from './styles'; // Importe os estilos necessários
import { BlurView } from 'expo-blur';
import bakc from '../../../../assets/mecanics1.png';
import logoUsedCar from '../../../../assets/logocar.png';
import CGT from '../../../components/TextGradient';
export function Presentation({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <Image source={bakc} style={[styles.image, StyleSheet.absoluteFill]} />
      <BlurView intensity={20} tint="dark" style={{ width: '100%', height: '100%' }}>
        <View style={styles.login}>
          <Image source={logoUsedCar} style={[styles.logo]} />
          <TouchableOpacity style={{ width: '90%', height: '7%', top: '20%', justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
            <ButtonLinear >
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Começar!</Text>
              {/* <CGT>Entrar</CGT> */}
            </ButtonLinear>
          </TouchableOpacity>
          <Text style={{ color: 'white', top: '23%' }}>Ao Clicar em entrar voce aceita os termos de uso de nosso aplicativo. Para ler mais, veja em:  </Text>
          <TouchableOpacity style={{ top: '25%' }}>
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
  logo: {
    width: '50%',
    height: '30%',
    resizeMode: 'cover',
  },
  login: {
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },


});