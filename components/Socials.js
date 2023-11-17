import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Socials() {
    return (
        <Text>
            <Appcard icon="chat" title="Signal" subtitle="The best messenger"></Appcard>
            <Appcard icon="telegram" title="Telegram" subtitle="The best messenger"></Appcard>
            <Appcard icon="element" title="Element" subtitle="The best group chat"></Appcard>
            <Appcard icon="mail" title="K-9 Mail" subtitle="The best mail client"></Appcard>
        </Text>
    );
}