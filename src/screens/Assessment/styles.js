import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 15%;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;
export const ContainerDescription = styled.View`
  width: 100%;
  height:25%;
  align-items: center;
  justify-content:center;
  margin-top: 5%;
`;

export const DescriptionPayment = styled(LinearGradient).attrs({
  colors: ['#e91e63', '#673ab7'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 20%;
  height: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  `;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height:60%;
  
`;

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 95%;
  padding:8px;
  background-color: #FFF;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
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

export const Title = styled.Text`
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: gray;
`;

export const GradientButton = styled(LinearGradient).attrs({
  colors: ['#e91e63', '#673ab7'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 90%;
  height: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

