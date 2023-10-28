import * as React from 'react';
import { List, TouchableRipple } from 'react-native-paper';
import { View } from 'react-native';

const Productivity = () => (
<View>
<TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
  <List.Item
    title="Bulk-crap-uninstaller"
    description="Bulk Crap Uninstaller (in short BCUninstaller or BCU) is a free (as in speech and beer) bulk program uninstaller with advanced automation."
    left={props => <List.Icon {...props} icon="trash-can" />}
  /></TouchableRipple>
    <TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(20, 20, 20, .1)">
    <List.Item
    title="qBittorrent"
    description="Free and reliable P2P Bittorent client."
    left={props => <List.Icon {...props} icon="download" />}
  />
  </TouchableRipple>
</View>
);

export default Productivity;