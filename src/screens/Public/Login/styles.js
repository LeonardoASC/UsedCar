import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

export const Header =  styled.View`
  height: 25%;
  justify-content: center;
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
  margin-top: 8px;
`;

export const Title = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: 800;
  align-self: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: black;
  text-align: center;
  margin-top: 4px;
  font-size: 16px;
`;

export const InputField = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-bottom-width: 1px;
  border-color: #4b5563;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  color: white;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: white;
  width: 91.6667%; /* 11/12 */
  border-radius: 30px;
  padding: 12px;
  shadow-opacity: 0.2;
  shadow-radius: 3.84px;
  elevation: 5;
  align-self: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #06b6d4;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const SocialLoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;

export const SocialButton =  styled.View`
  background-color: white;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  shadow-opacity: 0.2;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Footer =  styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
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