import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Wingetapps from './Wingetapps';
import Mylist from './Mylist';

const WingetappsRoute = () => <Wingetapps></Wingetapps>;

const MylistRoute = () => <Mylist></Mylist>;


const Footer = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Wingetapps', title: 'Winget Apps', focusedIcon: 'apps', unfocusedIcon: 'apps' },
        { key: 'Mylist', title: 'My list', focusedIcon: 'format-list-bulleted', unfocusedIcon: 'format-list-bulleted' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Wingetapps: WingetappsRoute,
        Mylist: MylistRoute,
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