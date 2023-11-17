import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Browsers() {
    return (
        <Text>
            <Appcard icon="firefox" title="Firefox" subtitle="The best browser"></Appcard>
            <Appcard icon="google-chrome" title="Chromium" subtitle="The 2nd best browser"></Appcard>
        </Text>
    );
}