import styled from "styled-components/native";
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
    width: 100%;
    height: 15%;
    justify-content: flex-end;
    align-items: center;
    
`;
export const ViewWrapper = styled.View`
    width: 50%;
    height: 85%;
    justify-content: center;
    align-items:center;
    top: 50%;
    
`;
export const ProfileImage = styled.Image`
    width: 80px; 
    height: 80px;
    border-radius: 100px; 
    margin: 10px;
    
    
`;
export const Container = styled.View`
    width: 100%;
    height: 85%;
`;
export const RenderFlat = styled.TouchableOpacity`
  background-color: white;
  border-radius: 10px;
  margin-left:5%;
  margin-right:5%;
  margin-top:2%;
  display: flex;
  flex-direction: row;
  align-items: center;
 
  padding-top: 4%;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 4%;
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

export const ConfigFlat = styled.FlatList`
  /* padding-top:2%; */
  padding-bottom:150px;
  margin-top: 25%;
`;

export const IconWrapper = styled.View`
/* margin-right: 2%; */
`;