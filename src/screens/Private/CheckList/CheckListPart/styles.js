import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
  width: 100%;
  height: 35%;
  padding: 5%;
  justify-content: flex-end;
`;

export const Container = styled.View`
  height: 65%;
  width: 100%;
  align-items: center;
  background-color: white;
  /* border-radius: 94px; */
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  padding: 5%;
`;

export const InputSearch = styled.TextInput`
  height: 40px;
  width: 90%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const ItemSearch = styled.Text`
  padding: 5%;
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

export const TituloText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
export const SubText = styled.Text`
  text-align: center;
  color: gray;
  margin-top: 5%;
`;

export const Section = styled.View`
  margin-bottom: 20px;
`;

export const CarImage = styled.Image`
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
