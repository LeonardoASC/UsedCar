import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
  width: 100%;
  flex: 0.15;
  justify-content: center;
`;

export const Container = styled.View`
  width: 100%;
  flex: 0.85;

`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
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
