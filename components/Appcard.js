import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Appcard = ({ icon, title, subtitle, command }) => (
    <Card.Title
        title={title}
        subtitle={subtitle}
        command={command}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        right={(props) => <IconButton {...props} icon="plus" onPress={() => { console.log(command); }} />}
    />
);

export default Appcard;