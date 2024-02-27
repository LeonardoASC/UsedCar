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

export const Container = styled.View`
  height:60%;
  width: 100%;
  align-items: center;
  justify-content: center;
  
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

export const ItemContainer = styled.View`
flex-direction: row;
width: 100%;
padding: 10px;
background-color: #FFF;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;
/* justify-content: space-between; */
align-self:center;
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

export const StatusIndicator = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 15%;
  background-color: ${({ status }) => (status === 'Active' ? 'green' : 'gray')};
  justify-content: center;
  align-items: center;
`;
export const DueDateText = styled.Text`
  font-size: 10px;
  color: #777;
`;