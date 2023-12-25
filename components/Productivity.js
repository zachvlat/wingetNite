import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Productivity() {
    return (
        <Text>
            <Appcard icon="note" title="Notepad++" subtitle="The best text-editor" command="winget install notepadplusplus"></Appcard>
        </Text >
    );
}