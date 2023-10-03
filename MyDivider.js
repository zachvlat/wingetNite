import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import BrowserList from './List';

const MyDivider = () => (
  <View>
    <Text>Browsers</Text>
    <BrowserList></BrowserList>
    <Divider />
    <Text>Dev Tools</Text>
    <Divider />
    <Text>Productivity</Text>
    <Divider />
    <Text>Video/Audio</Text>
    <Divider />
    <Text>Social</Text>
    <Divider />
    <Text>Networking</Text>
    <Divider />
    <Text>Gaming</Text>
    <Divider />
  </View>
);

export default MyDivider;