import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Games() {
    return (
        <Text>
            <Appcard icon="steam" title="Steam" subtitle="The best game library" command="winget install steam"></Appcard>
        </Text>
    );
}