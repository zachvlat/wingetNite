import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Audiovideo() {
    return (
        <Text>
            <Appcard icon="vlc" title="VLC" subtitle="The best offline player" command="winget install vlc"></Appcard>
            <Appcard icon="spotify" title="Spotube" subtitle="The best online player" command="winget install spotify"></Appcard>
        </Text>
    );
}