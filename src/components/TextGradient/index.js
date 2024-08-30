import React from 'react';
import { Text } from 'react-native';
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
        colors={['#83c183', '#2da92f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};
