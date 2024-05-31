import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

export const Header =  styled.View`
  height: 25%;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: #06b6d4;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const MainContent =  styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  margin-top: 5%;
`;

export const Title = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: 800;
  align-self: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: gray;
  text-align: center;
  margin-top: 4px;
  font-size: 16px;
`;

export const InputField = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-width: 0.4px;
  border-color: #4b5563;
  margin-bottom: 16px;
  border-radius: 10px;
  color:black;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  color: white;
  
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

// export const ButtonText = styled.Text`
//   color: #06b6d4;
//   text-align: center;
//   font-weight: bold;
//   font-size: 18px;
//   width: 100%;
// `;

export const SocialLoginContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  /* background-color: black; */
  height: 30%;
`;

export const SocialButton =  styled.View`
  background-color: white;
  flex-direction: row;
  width: 90%;
  height: 30%;
  gap: 10px;
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
`;

export const Footer =  styled.View`
  flex-direction: row;
  /* justify-content: center; */
  margin-top: 15%;
`;

export const FooterText = styled.Text`
  color: black;
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

export const Line = styled.View`
  width: 50%;
  height: 1px;
  background-color: #4b5563;
  margin: 16px 0;
  opacity: 0.5;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  height: 10%;
  gap: 10px;
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