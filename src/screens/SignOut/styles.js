import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  align-items: center;
`;


export const ConfirmButton = styled.TouchableOpacity`
border: 1px solid;
border-color: #f278a2;
width: 90%;
align-items: center;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content:center;
margin-top: 5px;
`;

export const CancelButton = styled.TouchableOpacity`
border: 1px solid;
border-color: #f278a2;
background-color: #f1f1f1;
width: 90%;
align-items: center;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content:center;
margin-top: 5px;
`;
