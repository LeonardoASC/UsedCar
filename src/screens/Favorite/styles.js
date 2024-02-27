import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 20%;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;

export const Container = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
  margin-top: 5%;

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
    height: 60%;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    `;

export const BtnFav = styled.TouchableOpacity`
  width: 95%;
  height: 15%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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
