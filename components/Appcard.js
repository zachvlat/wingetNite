import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { toggleIcon, getLogs } from '../iconToggleUtils';

const Appcard = ({ icon, title, subtitle, command, flatpakcommand, isFlatpakAppsRoute }) => {
  const [iconName, setIconName] = React.useState('plus');

  const handleToggleIcon = () => {
    const newIcon = toggleIcon(iconName, isFlatpakAppsRoute ? flatpakcommand : command);
    setIconName(newIcon);
    console.log(getLogs());
  };

  return (
    <Card.Title
      title={title}
      subtitle={subtitle}
      command={isFlatpakAppsRoute ? flatpakcommand : command}
      left={(props) => <Avatar.Icon {...props} icon={icon} />}
      right={(props) => (
        <IconButton {...props} icon={iconName} onPress={handleToggleIcon} />
      )}
    />
  );
};

export default Appcard;
