import React, { useContext, useState } from 'react';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import {
  Container,
  Header,
  MainContent,
  Subtitle,
  InputField,
  Input,
  SocialLoginContainer,
  SocialButton,
  Footer,
  ButtonText,
  LinkText,
  ButtonLinear,
  ButtonContainer
} from './styles';
import { CGT } from '../../../components/TextGradient';
import { AuthContext } from '../../../context/AuthContext';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);


  return (
    <Container>
      <Header>
        <CGT style={{fontSize: 30, fontWeight: 'bold'}}>Entrar</CGT >
        <Subtitle>Informe suas credenciais para continuar.</Subtitle>
      </Header>

      <MainContent>
        <InputField>
          <Ionicons name="at" size={19} color="black" />
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email ID"
            placeholderTextColor="#a3a3a3"
          />
        </InputField>

        <InputField>
          <EvilIcons name="lock" size={26} color="black" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            placeholderTextColor="#a3a3a3"
            secureTextEntry={true}
          />
          <MaterialCommunityIcons name="eye-outline" size={24} color="#A9A9A9" />
        </InputField>

        <ButtonContainer>
          <ButtonLinear>
            <ButtonText>Entrar</ButtonText>
          </ButtonLinear>
        </ButtonContainer>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1%',
            marginBottom: '1%',
            height: '15%',
            width: '100%',
          }}
        >
          <CGT style={{ textAlign: 'center', marginTop: '20%', }}>Esqueceu a senha ?</CGT>
        </View>

        <SocialLoginContainer>
          <SocialButton>
            <AntDesign name="google" size={15} color="black" />
            <Text>Continue com Google</Text>
          </SocialButton>

          <SocialButton style={{ backgroundColor: '#1877F2' }}>
            <AntDesign name="facebook-square" size={15} color="white" />
            <Text style={{ color: 'white' }}>Continue com Facebook</Text>
          </SocialButton>

          <SocialButton style={{ backgroundColor: '#E3E3E3' }}>
            <AntDesign name="apple1" size={15} color="black" />
            <Text>Continue com Apple</Text>
          </SocialButton>
        </SocialLoginContainer>

        <Footer>
          <CGT>Novo no aplicativo?</CGT>
          <LinkText onPress={() => navigation.navigate('Register')}>Registre-se</LinkText>
        </Footer>
      </MainContent>
    </Container>
  );

}
