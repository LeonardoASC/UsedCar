import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA; /* Change background color to match login screen */
`;

export const Header = styled.View`
  height: 25%; /* Adjust height to match login screen */
  justify-content: flex-end;
  align-items: center;
`;

export const MainContent = styled.View`
  flex: 1;
  padding: 20px; 
  align-items: center;
  margin-top: 5%;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px; 
  border-width: 0.4px; /* Match border width with login screen */
  border-color: #4b5563; 
  border-radius: 10px; 
  margin-bottom: 16px; 
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  margin-left: 8px; 
  color: black; /* Change text color to match login screen */
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: white;
  width: 90%; 
  height: 10%; /* Match height with login screen */
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
  margin-top: 15%; /* Adjust margin top to match login screen */
`;

export const LinkText = styled.Text`
  color: black; /* Change text color to match login screen */
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
  colors: ['#fff7ad', '#ffa9f9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  `;