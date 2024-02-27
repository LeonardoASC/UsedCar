import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;
export const Info = styled.View`
    width:50%;
    height: 100%;
    justify-content: center;
    padding-left: 5%;
`;
export const Historic = styled.View`
    width:50%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    padding-right: 5%;
`;

export const Container = styled.View`
    width: 100%;
    height: 85%;
    align-items:center;
    
`;
export const ContentGoals = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items:center;
  margin-top: 20px;
   width: 90%;
   height: 15%;

`;

export const DescriptionPayment = styled(LinearGradient).attrs({
  colors: ['#e91e63', '#673ab7'],
  end: { x: 1, y: 1 },
})`
  width: 20%;
  height: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  `;

export const Observation = styled.View`
    width: 90%;
    background-color: white;
    border-radius: 10px;
    margin-top: 5%;
    justify-content:center;
    align-items: center;
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

export const DatasheetFlat = styled.FlatList`
    
  `;

export const ItemContainer = styled.TouchableOpacity`
background-color: white;
border-radius: 10px;
margin-left:5%;
margin-right:5%;
margin-top:2%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 90%;


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