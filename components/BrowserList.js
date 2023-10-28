import * as React from 'react';
import { List, TouchableRipple } from 'react-native-paper';
import { View } from 'react-native';

const BrowserList = () => (
<View>
  <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
  <List.Item
    title="Brave"
    description="The Brave browser is a fast, private and secure web browser for PC, Mac and mobile."
    left={props => <List.Icon {...props} icon="google-chrome" />}
  />
  </TouchableRipple>
  <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
    <List.Item
    title="Firefox"
    description="Mozilla Firefox, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation."
    left={props => <List.Icon {...props} icon="firefox" />}
  />
  </TouchableRipple>
</View>
);

export default BrowserList;