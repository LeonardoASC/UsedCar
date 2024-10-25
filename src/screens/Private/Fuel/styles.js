import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
  width: 100%;
  flex: 0.25;
  justify-content: center;
`;

export const Container = styled.View`
  width: 100%;
  flex: 0.75;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  color: gray;
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
export const HeaderContent = styled.View` 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CenteredViewModal = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: 'rgba(0,0,0,0.5)';
`;