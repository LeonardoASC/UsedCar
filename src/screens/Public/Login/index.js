import React, { useContext, useState } from 'react';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import {
  Container,
  Header,
  MainContent,
  Title,
  Subtitle,
  InputField,
  Input,
  StyledButton,
  SocialLoginContainer,
  SocialButton,
  Footer,
  FooterText,
  LinkText,
  LogoGym
} from './styles'; 
import { CGT } from '../../../components/TextGradient';
import labex from '../../../../assets/LabexRosa.png';
import { AuthContext } from '../../../context/AuthContext';

export function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);
 
  
  return (
    <Container>
      <Header>
        <Title>Entrar</Title>
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
          <FooterText>Esqueceu?</FooterText>
        </InputField>
  
        
        <StyledButton onPress={() => {login(email, password)}}>
          <CGT style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Entrar</CGT>
        </StyledButton>
  
        <CGT style={{textAlign: 'center', marginTop: 15}}>Ou, Logar com...?</CGT>
  
        <SocialLoginContainer>
          <SocialButton>
            <AntDesign name="rightcircleo" size={24} color="black" />
          </SocialButton>
          <SocialButton>
            <AntDesign name="rightcircleo" size={24} color="black" />
          </SocialButton>
          <SocialButton>
            <AntDesign name="rightcircleo" size={24} color="black" />
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
