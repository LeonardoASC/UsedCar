import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const PresentationContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: underline; /* Adicionando sublinhado aos botões */
`;

export const ButtonLinear = styled(LinearGradient).attrs({
  colors: ['#fff7ad', '#ffa9f9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  
  `;
