import * as React from 'react';
import { Appbar , Avatar} from 'react-native-paper';

const TitleBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Avatar.Icon size={24} icon="console" />
    <Appbar.Content title="ScoopNite" />
  </Appbar.Header>
);

export default TitleBar;