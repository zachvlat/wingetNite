import * as React from 'react';
import { Text } from 'react-native';
import Appcard from './Appcard';

export default function Socials() {
    return (
        <Text>
            <Appcard icon="chat" title="Signal" subtitle="The best messenger" command="winget install signal"></Appcard>
            <Appcard icon="chat" title="Telegram" subtitle="The best messenger" command="winget install telegram"></Appcard>
            <Appcard icon="chat" title="Element" subtitle="The best group chat" command="winget install element"></Appcard>
            <Appcard icon="mail" title="Thunderbird" subtitle="The best mail client" command="winget install thunderbird"></Appcard>
        </Text>
    );
}