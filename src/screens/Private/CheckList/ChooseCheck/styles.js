import styled from "styled-components/native";
import { Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get('window');

export const Header = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
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
  flex-direction: row;
  align-items: center;
  background-color: #f9c2ff;
  padding: 20px;
  width: ${(width / 2) - 16}px;
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
`;

export const IconWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-right: 5%;
`;

export const CenteredView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const MessageText = styled.Text`
font-size: 16px;
`;