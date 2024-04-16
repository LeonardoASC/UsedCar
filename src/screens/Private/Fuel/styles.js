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
  justify-content: center;

`;

export const CenteredView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const MessageText = styled.Text`
font-size: 16px;
`;
export const ItemSearch = styled.Text`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;
