import React, { useState } from 'react';
import { Switch } from 'react-native';


const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
      <Switch
        trackColor={{ false: "#cccccc", true: "#4296f4" }}
        thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  );
}

export default ToggleButton;
