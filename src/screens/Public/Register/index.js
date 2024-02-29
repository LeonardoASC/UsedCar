import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Container, Header, MainContent, InputRow, StyledTextInput, StyledButton, Footer, LogoGym, LinkText, ButtonContainer, ButtonLinear, ButtonText } from './styles'
import { CGT } from '../../../components/TextGradient';
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
                <CGT style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Registrar...</CGT>
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 4 }}>Por favor, insira suas informações para registrar no sistema</Text>
            </Header>
            <MainContent>
                <View style={{ marginTop: 5, width: '100%' }}>
                    <InputRow>
                        <Ionicons name="person-add-outline" size={20} color="black" />
                        <StyledTextInput
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Nome de usuário"
                            placeholderTextColor="#a3a3a3"
                            color="black"
                        />
                    </InputRow>

                    <InputRow>
                        <Ionicons name="at" size={19} color="black" />
                        <StyledTextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            placeholderTextColor="#a3a3a3"
                            color="black"
                        />
                    </InputRow>

                    <InputRow>
                        <EvilIcons name="lock" size={26} color="black" />
                        <StyledTextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Senha"
                            placeholderTextColor="#a3a3a3"
                            secureTextEntry={true}
                            color="black"
                        />
                    </InputRow>

                    <InputRow>
                        <EvilIcons name="lock" size={26} color="black" />
                        <StyledTextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Confirme a Senha"
                            placeholderTextColor="#a3a3a3"
                            secureTextEntry={true}
                            color="black"
                        />
                    </InputRow>
                </View>

                <ButtonContainer onPress={() => { register(username, email, password) }}>
                    <ButtonLinear>
                        <ButtonText>Registrar</ButtonText>
                    </ButtonLinear>
                </ButtonContainer>

                <Footer>
                    <CGT style={{ marginRight: 5 }}>Já tem uma conta?</CGT>
                    <LinkText onPress={() => navigation.navigate('Login')}>Entrar</LinkText>
                </Footer>
            </MainContent>
        </Container>
    );
}
