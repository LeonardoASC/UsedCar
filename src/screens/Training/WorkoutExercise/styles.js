import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const Container = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ContentText = styled.View`
 align-items: center;
 justify-content: center;
 
`;

export const ExercisesText = styled.Text`
 font-weight: bold;
`;
export const ExercisesTextMini = styled.Text`
 font-weight: 200;
 font-size: 12px;
`;

export const Exercises = styled.View`
  background-color: white;
  border-radius: 10px;

  width: 100%;
  height: 100px;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
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

export const StyledButton = styled.TouchableOpacity`
  border: 1px solid;
  border-color: #f278a2;
  width: 50%;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
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