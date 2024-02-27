import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export const Container = styled.View`
  flex:1;
`;


export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    
`;
export const PaymentView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height:50%;
    padding-left:5%;
    padding-right: 5%;
    
`;

export const ItemContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  margin-left:5%;
  margin-right:5%;
  margin-top:2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
 
  padding-top: 4%;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 4%;
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

export const ValorText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #eb3573;
  
`;

export const StatusIndicator = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: ${({ status }) => (status === 'Open' ? 'orange' : 'green')};
  justify-content: center;
  align-items: center;
`;
export const IconStatusIndicator = styled.View`
  
`;

export const MesText = styled.Text`
  font-size: 20px;
  color: #e91e63;
`;

export const DueDateText = styled.Text`
  font-size: 10px;
  color: #777;
`;

export const StatusText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ status }) => (status === 'Open' ? 'green' : 'red')};
`;

export const PaymentFlat = styled.FlatList`
  padding-top:2%;
  padding-bottom:150px;
`;

export const ContainerDescription = styled.View`
  width: 100%;
  height:25%;
  align-items: center;
  justify-content:center;
  margin-top: 5%;
`;



export const DescriptionPayment = styled(LinearGradient).attrs({
  colors: ['#e91e63', '#673ab7'], // Substitua com as cores do gradiente desejadas
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
width: 20%;
height: 40%;
align-items: center;
justify-content: center;
border-radius: 18px;
`;

export const ContentGoals = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items:center;
  margin-top: 20px;
   width: 90%;
   height: 15%;

`;