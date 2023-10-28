import * as React from 'react';
import { ScrollView } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import BrowserList from './BrowserList';
import DevList from './DevList';
import Productivity from './Productivity';
import Gaming from './Gaming';
import Social from './Social';

const MyDivider = () => (
  <ScrollView>
    <Text>Browsers</Text>
    <BrowserList></BrowserList>
    <Divider />
    <Text>Dev Tools</Text>
    <DevList></DevList>
    <Divider />
    <Text>Productivity</Text>
    <Productivity></Productivity>
    <Divider />
    <Text>Gaming</Text>
    <Gaming></Gaming>
    <Divider />
    <Text>Social</Text>
    <Social></Social>
  </ScrollView>
);

export default MyDivider;