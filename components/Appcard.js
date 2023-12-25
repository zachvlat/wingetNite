import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Appcard = ({ icon, title, subtitle, command }) => {
  const [iconName, setIconName] = React.useState('plus');

  const toggleIcon = () => {
    setIconName((prevIcon) => (prevIcon === 'plus' ? 'check' : 'plus'));
    console.log(command);
  };

  return (
    <Card.Title
      title={title}
      subtitle={subtitle}
      command={command}
      left={(props) => <Avatar.Icon {...props} icon={icon} />}
      right={(props) => (
        <IconButton {...props} icon={iconName} onPress={toggleIcon} />
      )}
    />
  );
};

export default Appcard;
