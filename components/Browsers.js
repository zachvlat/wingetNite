import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Browsers() {
    return (
        <Text>
            <Appcard icon="firefox" title="Firefox" subtitle="The best browser" command="scoop install firefox"></Appcard>
            <Appcard icon="google-chrome" title="Chromium" subtitle="The 2nd best browser" command="scoop install googlechrome"></Appcard>
        </Text>
    );
}