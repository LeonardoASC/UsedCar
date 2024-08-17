import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;



export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;

`;

export const LoginView = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  width: 50%;
  height: 30%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
  height: 7%;
  top: 20%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;

export const ButtonLinear = styled(LinearGradient).attrs({
  colors: ['#d2f2cd', '#2da92f'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  `;

export const TermsText = styled.Text`
  color: white;
  top: 23%;
`;

export const PrivacyTermsLink = styled.TouchableOpacity`
  top: 25%;
`;