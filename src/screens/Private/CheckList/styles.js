import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    background-color: #fff;
    width: 100%;
    height: 50%;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;

export const Container = styled.View`
  height: 45%;
  width: 100%;
  margin-top: 10%;
`;


export const ImageHeader = styled.Image`
  width: 100%;
  height: 100%;

`;

export const StyledItemContainer = styled.View`
    background-color: #ffffff;
    border-radius: 10px;
    height: 80%;
    width: 50%;
    margin: 10px;
    ${Platform.select({
  ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.1;
      shadow-radius: 2px;
    `,
  android: `
      elevation: 4;
    `,
})}
`;

export const StyledItemText = styled.Text`
    font-size: 16px;
    color: white;
`;