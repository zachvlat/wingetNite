import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Wingetapps from './Wingetapps';
import Flatpakapps from './Flatpakapps';

const WingetappsRoute = () => <Wingetapps></Wingetapps>;

const FlatpakappsRoute = () => <Flatpakapps></Flatpakapps>;


const Footer = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Wingetapps', title: 'Winget Apps', focusedIcon: 'apps', unfocusedIcon: 'apps' },
        { key: 'Flatpakapps', title: 'Flatpak Apps', focusedIcon: 'format-list-bulleted', unfocusedIcon: 'format-list-bulleted' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Wingetapps: WingetappsRoute,
        Flatpakapps: FlatpakappsRoute,
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