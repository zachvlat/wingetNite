import * as React from 'react';
import { List, TouchableRipple } from 'react-native-paper';
import { View } from 'react-native';

const Gaming = () => (
<View>
  <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
  <List.Item
    title="Playnite"
    description="Video game library manager and launcher with support for 3rd party libraries like Steam, GOG, Origin, Battle.net, etc."
    left={props => <List.Icon {...props} icon="youtube-gaming" />}
  />
  </TouchableRipple>
  <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
    <List.Item
    title="Heroic"
    description="Unofficial native GUI reimplementation for GOG and Epic Games Launcher."
    left={props => <List.Icon {...props} icon="sword" />}
  />
  </TouchableRipple>
</View>
);

export default Gaming;