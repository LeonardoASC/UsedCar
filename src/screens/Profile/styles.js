import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export const Header = styled.View`
    background-color: #1a1a1a;
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const ViewWrapper = styled.View`
   align-items: center;
    justify-content:center;
    top: 15%;
`;

export const ProfileImage = styled.Image`
    width: 90px; 
    height: 90px;
    border-radius: 100px; 
    
`;

export const InfoHeader = styled.View`
    background-color: white;
    border-radius: 15px;
    width: 90%;
    height: 38%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    top: 15%;
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

export const Container = styled.View`
    width: 100%;
    height: 60%;
    display: flex;
    
    background-color: black;
`;
export const DataInfo = styled.View`
    width: 90%;
    height: 45%;
    display: flex;
    background-color: white;
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

export const AdditionalInfo = styled.View`
    width: 90%;
    height: 25%;
    display: flex;
    background-color: white;
    border-radius: 10px;
    top: 3%;
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

export const DeathContent = styled.View`
    width: 100%;
    height: 10%;
`;