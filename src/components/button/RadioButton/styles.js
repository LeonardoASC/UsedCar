import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content:center;
  align-items:center;
  width: 90%;
  height: 58%;
  background-color: #000;
  border-radius: 34px;
  border-color: #323232;
  margin-bottom: 2%;

`;

export const Option = styled.TouchableOpacity`
  width: 34%;
  height: 98%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) => (props.selected ? '#323232' : 'transparent')};
`;

export const OptionText = styled.Text`
  color: ${(props) => (props.selected ? '#e91e63' : '#fff')};
`;

export const IconWrapper = styled.View`
margin-right: 2%;
`;