import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Container, Header, MainContent, InputRow, StyledTextInput, StyledButton, Footer, LogoGym, LinkText } from './styles'
import { CGT } from '../../../components/TextGradient';
import labex from '../../../../assets/LabexRosa.png';
import { AuthContext } from '../../../context/AuthContext';


export function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register } = useContext(AuthContext);
  

    return (
        <Container>
            <Header>
                <LogoGym source={labex} />
            </Header>
            <MainContent>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Registrar...</Text>
                <Text style={{color: 'white', textAlign: 'center', marginTop: 4}}>Por favor, insira suas informações.</Text>
                <View 
                style={{marginTop: 5, width: '100%'}}>
                    <InputRow>
                        <Ionicons name="person-add-outline" size={20} color="white" />
                        <StyledTextInput
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Nome de usuário"
                            placeholderTextColor="#a3a3a3"
                        />
                    </InputRow>

                    <InputRow>
                        <Ionicons name="at" size={19} color="white" />
                        <StyledTextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            placeholderTextColor="#a3a3a3"
                        />
                    </InputRow>

                    <InputRow>
                        <EvilIcons name="lock" size={26} color="white" />
                        <StyledTextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Senha"
                            placeholderTextColor="#a3a3a3"
                            secureTextEntry={true}
                        />
                    </InputRow>

                    <InputRow>
                        <EvilIcons name="lock" size={26} color="white" />
                        <StyledTextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Confirme a Senha"
                            placeholderTextColor="#a3a3a3"
                            secureTextEntry={true}
                        />
                    </InputRow>
                </View>

                <StyledButton onPress={() => {register(username, email, password)}}>
                    <CGT style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Registrar</CGT>
                </StyledButton>

                <Footer>
                    <CGT style={{marginRight: 5}}>Já tem uma conta?</CGT>
                    <LinkText onPress={() => navigation.navigate('Login')}>Entrar</LinkText>
                </Footer>
            </MainContent>
        </Container>
    );
}
