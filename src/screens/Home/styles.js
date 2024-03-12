import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';


export const Container = styled.View`
flex:1;
`;

export const Title = styled.Text`
    font-size:28px;
    color: red;
    
`;

export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 15%;
    display: flex;
    align-items:flex-end;
    justify-content: space-between;
    flex-direction: row;
    
`;
export const ViewWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-left: 2%;
`;
export const ViewWrapperLeft = styled.View`
    display: flex;
    align-items: flex-end;
    margin-right: 10%;
    margin-bottom: 5%;
`;

export const MiniLogo = styled.Image`
    width: 22%; 
    height: 30%;
`;

export const ProfileImage = styled.Image`
    width: 65px; 
    height: 65px;
    border-radius: 100px; 
    margin: 10px;
    top: 20%;
    
`;

export const NameSC = styled.Text`
    font-size: 14px;
    color: white; 
    font-weight:bold;
    margin-bottom: 3%;
    
`;

export const ExpirationDate = styled.Text`
    font-size: 12px;
    color: white; 
`;

export const ContentHome = styled.View`
    margin-top: 5%;
    width: 100%;
    height: 75%;
    display: flex;
    align-items:center;
    justify-content: center;
    
    `;

export const AcessView = styled.View`
    background-color: white;
    border-radius: 10px; 
    width: 85%;
    height: 7%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
`;
export const WelcomeHome = styled(LinearGradient).attrs({
    colors: ['#e91e63', '#673ab7'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  })`
    background-color: black;
    border-radius: 30px; 
    width: 85%;
    height: 30%;
    margin-bottom: 5%;
        
`;

export const SessionHome = styled.View`
    background-color: white;
    border-radius: 10px; 
    width: 85%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    padding-top: 2px;
    padding-bottom: 6px;
    
`;

export const LogoContainer = styled.View`
    background-color: white;
    height: 82%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const LogoGym = styled.Image`
    width: 55%; 
    height: 90%;
`;

export const IconView = styled(LinearGradient).attrs({
    colors: ['#e91e63', '#673ab7'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  })`
    height: 40px;
    width: 40px;
    background-color: #e91e63;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;

`;

export const GradientView = styled(LinearGradient)`
width: 90%;
height: 20%;
`;

export const StyledButton = styled.TouchableOpacity`
  border: 1px solid;
  border-color: #f278a2;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content:center;
`;

export const StyledText = styled.Text`
  color: black;
`
export const BgWelcome = styled(LinearGradient).attrs({
    colors: ['#e91e63', '#673ab7'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  })`
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 10px;
`;