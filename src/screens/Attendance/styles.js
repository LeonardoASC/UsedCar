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
  margin-top: 5%;
`;

export const CalendarBG = styled.View`
  width: 90%;
  margin-top: 5%;
  border-radius: 10px;
  overflow: hidden;
  background-color: red;
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
export const ResView = styled.View`
  height: 10%;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
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