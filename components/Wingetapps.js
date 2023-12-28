import * as React from 'react';
import { ScrollView } from 'react-native';
import Appcard from './Appcard';

export default function Wingetapps() {
    return (
        <ScrollView>
            <Appcard icon="firefox" title="Firefox" subtitle="The best browser" command="winget install --id=Mozilla.Firefox -e"></Appcard>
            <Appcard icon="google-chrome" title="Chromium" subtitle="The 2nd best browser" command="winget install --id=Hibbiki.Chromium -e"></Appcard>
            <Appcard icon="vlc" title="VLC" subtitle="The best offline player" command="winget install --id=VideoLAN.VLC -e"></Appcard>
            <Appcard icon="spotify" title="Spotube" subtitle="The best Spotify alternative" command="winget install -e --id KRTirtho.Spotube"></Appcard>
            <Appcard icon="steam" title="Steam" subtitle="The best game library" command="winget install --id=Valve.Steam -e"></Appcard>
            <Appcard icon="note" title="Notepad++" subtitle="The best text-editor" command="winget install --id=Notepad++.Notepad++ -e"></Appcard>
            <Appcard icon="chat-processing" title="Signal" subtitle="The best messenger" command="winget install --id=OpenWhisperSystems.Signal -e"></Appcard>
            <Appcard icon="send-circle" title="Telegram" subtitle="The best messenger" command="winget install --id=Telegram.TelegramDesktop -e"></Appcard>
            <Appcard icon="vector-circle" title="Element" subtitle="The best group chat" command="winget install -e --id Element.Element"></Appcard>
            <Appcard icon="gmail" title="Thunderbird" subtitle="The best mail client" command="winget install -e --id Mozilla.Thunderbird"></Appcard>
        </ScrollView>
    );
}