import React, { useState } from 'react';
import {
  Wrapper,
  Option,
  OptionText,
  IconWrapper
} from './styles'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

const RadioButtonGroup = ({ onSelect }) => {
  const options = ['Open', 'Paid', 'All'];
  const [selectedOption, setSelectedOption] = useState('Open');
  const getIconColor = (option) => selectedOption === option ? '#e91e63' : 'white';
  
  const icons = {
    Open: <Ionicons name="md-open" size={20} color={getIconColor('Open')} />,
    Paid: <MaterialIcons name="attach-money" size={20} color={getIconColor('Paid')} />,
    All: <FontAwesome name="globe" size={20} color={getIconColor('All')} />,
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Wrapper>
      {options.map((option) => (
        <Option
          key={option}
          selected={selectedOption === option}
          onPress={() => handleSelect(option)}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <IconWrapper>{icons[option]}</IconWrapper>
            <OptionText selected={selectedOption === option}>
              {option}
            </OptionText>
          </View>
        </Option>
      ))}
    </Wrapper>
  );
};

export default RadioButtonGroup;



