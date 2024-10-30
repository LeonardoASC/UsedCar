import React, { useContext, useState } from 'react';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import {
  Container,
  MainContent,
  Subtitle,
  InputField,
  Input,
  Footer,
  ButtonText,
  LinkText,
  ButtonLinear,
  ButtonContainer
} from './styles';
import { CGT } from '../../../components/TextGradient';
import { AuthContext } from '../../../context/AuthContext';
import { Image, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UsedCarVerde from '../../../../assets/UsedCarVerde.png';

export function RecoverPassword({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);


  return (
    <Container>
      <MainContent>
        <Image source={UsedCarVerde} style={{
          width: '60%',
          height: '40%',
          marginBottom: 20
        }} />
        <Subtitle>Insira sua nova senha e confirme para redefinir o acesso à sua conta</Subtitle>
        <InputField>
          <EvilIcons name="lock" size={26} color="black" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            placeholderTextColor="#a3a3a3"
            secureTextEntry={true}
            color="white"
            style={{ color: 'black' }}
          />
          <MaterialCommunityIcons name="eye-outline" size={24} color="#A9A9A9" />
        </InputField>

        <InputField>
          <EvilIcons name="lock" size={26} color="black" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Confirmar senha"
            placeholderTextColor="#a3a3a3"
            secureTextEntry={true}
            color="white"
            style={{ color: 'black' }}
          />
          <MaterialCommunityIcons name="eye-outline" size={24} color="#A9A9A9" />
        </InputField>

 

        <ButtonContainer
          onPress={() => login(email, password)}
        >
          <ButtonLinear >
            <ButtonText>Redefinir</ButtonText>
          </ButtonLinear>
        </ButtonContainer>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1%',
            marginBottom: '1%',
            height: '10%',
            width: '100%',
          }}
        >
          
        </View>
      </MainContent>
    </Container>
  );

}
