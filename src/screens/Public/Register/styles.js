import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1a1a1a;
`;

export const Header = styled.View`
  background-color: white;
  flex: 0.25; 
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 100px;
`;

export const HeaderText = styled.Text`
  color: #06b6d4; 
  font-size: 20px; 
  font-weight: bold;
  text-align: center;
`;

export const MainContent = styled.View`
  flex: 0.75;
  padding: 20px; 
  margin-top: 8px; 
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px; 
  border-bottom-width: 1px;
  border-color: #4b5563; 
  border-radius: 8px; 
  margin-bottom: 16px; 
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  margin-left: 8px; 
  color: white;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: white;
  width: 90%; 
  border-radius: 30px; 
  padding: 12px; 
  align-self: center;
  margin-top: 20px; 
  shadow-opacity: 0.2;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  color: #06b6d4; 
  text-align: center;
  font-weight: bold;
  font-size: 18px; 
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 32px; 
`;

export const FooterText = styled.Text`
  color: white;
  margin-right: 8px; 
`;

export const LinkText = styled.Text`
  color: white;
  text-decoration-line: underline;
`;

export const LogoGym = styled.Image`
    width: 35%; 
    height: 70%;
`;