import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content:center;
`;

export const Container = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  height: 40px;
  width: 90%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const ItemSearch = styled.Text`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

export const CenteredView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const MessageText = styled.Text`
font-size: 16px;
`;

const Section = styled.View`
  margin-bottom: 20px;
`;

const CarImage = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: cover;
`;
export const CenteredViewModal = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: 'rgba(0,0,0,0.5)';
`;
