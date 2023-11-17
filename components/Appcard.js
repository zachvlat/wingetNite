import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Appcard = ({ icon, title, subtitle }) => (
    <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        right={(props) => <IconButton {...props} icon="plus" onPress={() => { }} />}
    />
);

export default Appcard;