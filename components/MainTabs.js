import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Socials from './Socials';
import Browsers from './Browsers';
import Audiovideo from './Audiovideo';
import Productivity from './Productivity';
import Games from './Games';

const BrowsersRoute = () => <Browsers></Browsers>;

const AudiovideoRoute = () => <Audiovideo></Audiovideo>;

const ProductivityRoute = () => <Productivity></Productivity>;

const SocialsRoute = () => <Socials></Socials>;

const GameRoute = () => <Games></Games>;

const Footer = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'browsers', title: 'Browsers', focusedIcon: 'firefox', unfocusedIcon: 'firefox' },
        { key: 'audiovideo', title: 'Audio/Video', focusedIcon: 'album' },
        { key: 'productivity', title: 'Productivity', focusedIcon: 'tools' },
        { key: 'socials', title: 'Socials', focusedIcon: 'instagram', unfocusedIcon: 'instagram' },
        { key: 'games', title: 'Games', focusedIcon: 'gamepad', unfocusedIcon: 'gamepad' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        browsers: BrowsersRoute,
        audiovideo: AudiovideoRoute,
        productivity: ProductivityRoute,
        socials: SocialsRoute,
        games: GameRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Footer;