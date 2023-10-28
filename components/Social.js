import * as React from 'react';
import { List, TouchableRipple } from 'react-native-paper';
import { View } from 'react-native';

const Social = () => (
<View>
  <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
  <List.Item
    title="Signal"
    description="A cross-platform encrypted messaging service."
    left={props => <List.Icon {...props} icon="chat" />}
  />
  </TouchableRipple>
  <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
    <List.Item
    title="Telegram"
    description="A cli utility for downloading files from Telegram, backing up your Telegram data, uploading files to Telegram, and recovering your Telegram data."
    left={props => <List.Icon {...props} icon="triangle" />}
  />
  </TouchableRipple>
</View>
);

export default Social;