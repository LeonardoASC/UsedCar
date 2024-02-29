import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  Container,
  BackgroundImage,
  ButtonLinear,
  LoginView,
  LogoImage,
  ButtonContainer,
  ButtonText,
  TermsText,
  PrivacyTermsLink
} from './styles';
import { BlurView } from 'expo-blur';
import bakc from '../../../../assets/mecanics1.png';
import logoUsedCar from '../../../../assets/logocar.png';

export function Presentation({ navigation }) {
  return (
    <Container>
      <BackgroundImage source={bakc} style={StyleSheet.absoluteFill} />
      <BlurView intensity={20} tint="dark" style={{ width: '100%', height: '100%' }}>
        <LoginView>
          <LogoImage source={logoUsedCar} />
          <ButtonContainer onPress={() => navigation.navigate('Login')}>
            <ButtonLinear>
              <ButtonText>Começar!</ButtonText>
            </ButtonLinear>
          </ButtonContainer>
          <TermsText>Ao Clicar em começar voce aceita os termos de uso de nosso aplicativo. Para ler mais, veja em:  </TermsText>
          <PrivacyTermsLink>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Termos de Uso e Politica de privacidade.</Text>
          </PrivacyTermsLink>
        </LoginView>
      </BlurView>
    </Container>
  );
}
