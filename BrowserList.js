import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from 'react-native';

const BrowserList = () => (
<View>
  <List.Item
    title="Brave"
    description="The Brave browser is a fast, private and secure web browser for PC, Mac and mobile."
    left={props => <List.Icon {...props} icon="google-chrome" />}
  />
    <List.Item
    title="Firefox"
    description="Mozilla Firefox, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation."
    left={props => <List.Icon {...props} icon="firefox" />}
  />
</View>
);

export default BrowserList;