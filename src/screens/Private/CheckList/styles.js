import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    background-color: #fff;
    width: 100%;
    height: 50%;
    flex-direction: row;
    align-items: flex-end;
    justify-content:center;
`;

export const Container = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
  justify-content: center;

`;


export const ImageHeader = styled.Image`
  width: 100%;
  height: 100%;

`;