import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

export const CGT = (props) => {
  return (
    <MaskedView
      maskElement={
        <Text
          {...props}
          style={[props.style, { backgroundColor: 'transparent' }]}
        />
      }
    >
      <LinearGradient
        colors={['#e91e63', '#673ab7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* O elemento vazio abaixo é necessário para forçar o componente
            a preencher todo o espaço do texto */}
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};
