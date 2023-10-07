import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from 'react-native';

const DevList = () => (
<View>
  <List.Item
    title="Visual Studio Code"
    description="Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS"
    left={props => <List.Icon {...props} icon="microsoft-visual-studio-code" />}
  />
    <List.Item
    title="Notepad++"
    description="Notepad++ is a free and open-source text and source code editor for use with Microsoft Windows."
    left={props => <List.Icon {...props} icon="note-plus-outline" />}
  />
</View>
);

export default DevList;