import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const Header = styled.View`
    width: 100%;
    height: 25%;
    justify-content: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 5%;
    margin-top: 10%;
`;

export const ContentHome = styled.View`
  flex: 1;
  
`;

export const ImageNews = styled.Image`
    width: 30%;
    height: 100%;
    padding: 70%;
    border-radius: 10px;
    margin-right: 5%;

`;

export const InputSearch = styled.View`
    flex-direction: row;
    align-items: center;
    width: 90%;
    align-self: center;
    border-radius: 20px;
    border: 1px solid #ddd;
    padding: 1% 3% 1% 3%;
    background-color: #ddd;
    margin-top: 2%;
`;