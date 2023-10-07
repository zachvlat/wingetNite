import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import BrowserList from './BrowserList';
import DevList from './DevList';

const MyDivider = () => (
  <View>
    <Text>Browsers</Text>
    <BrowserList></BrowserList>
    <Divider />
    <Text>Dev Tools</Text>
    <DevList></DevList>
    <Divider />
    <Text>Productivity</Text>
    <BrowserList></BrowserList>
    <Divider />
    <Text>Video/Audio</Text>
    <BrowserList></BrowserList>
    <Divider />
    <Text>Social</Text>
    <BrowserList></BrowserList>
    <Divider />
    <Text>Networking</Text>
    <Divider />
    <Text>Gaming</Text>
    <Divider />
  </View>
);

export default MyDivider;