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
  padding-left: 20px;
  padding-right: 20px;

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
  /* background-color: 'rgba(0,0,0,0.5)'; */
`;

export const CarImage = styled.Image` 
  width: '100%';
  height: 200px;
  border-radius: 15px;
  background-color: #39BF61;  
`;
export const DetailsCar = styled.View` 

  margin-bottom: 20px; 
`;

export const DetailText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

export const CommentsTitle = styled.Text` 
  font-size: 18px;
  font-weight: bold;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const CommentContainer = styled.View` 
  background-color: #f2f2f2;  
  flex-direction: row;
  padding: 15px;
  border-bottom-color: #ccc;
  border-radius: 10px;
  justify-content: space-between;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  
`;


export const CommentText = styled.Text` 
  font-size: 14px;
  color: #555;
  max-width: '60%';
  margin-left: 10px;
  flex-wrap: wrap;

`;
export const CommentName = styled.Text` 
  font-size: 16px;
  color: #555;
  max-width: '80%';
`;