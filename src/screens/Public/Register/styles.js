import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

export const Header = styled.View`
  height: 30%; 
  justify-content: flex-end;
  align-items: center;
`;

export const MainContent = styled.View`
  height: 70%;
  padding: 20px; 
  align-items: center;
  background-color: #FAFAFA;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px; 
  border-width: 0.7px; 
  border-color: #000; 
  border-radius: 10px; 
  margin-bottom: 16px; 
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  margin-left: 8px; 
  color: black;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: white;
  width: 90%; 
  height: 10%; 
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.2;
      shadow-radius: 3px;
    `,
    android: `
      elevation: 5;
    `,
  })}
  align-self: center;
  margin-top: 20px; 
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 15%; 
`;

export const LinkText = styled.Text`
  color: black; 
  text-decoration-line: underline;
  margin-left: 8px;
`;

export const LogoGym = styled.Image`
    width: 35%; 
    height: 70%;
`;
export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  height: 10%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 15%;
  ${Platform.select({
  ios: `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
  `,
  android: `
    elevation: 1;
  `,
})}
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;

export const ButtonLinear = styled(LinearGradient).attrs({
  // colors: ['#fff7ad', '#ffa9f9'],
  colors: ['#83c183', '#2da92f'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  `;