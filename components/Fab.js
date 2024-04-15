import * as React from 'react';
import { StyleSheet, View, Share } from 'react-native';
import { FAB, Badge } from 'react-native-paper';
import { getLogs } from '../iconToggleUtils'; // Adjust the path as needed

const Fab = () => {
  const [logCount, setLogCount] = React.useState(0);

  React.useEffect(() => {
    setLogCount(getLogs().length);
  }, [getLogs()]);

  const handleFabPress = async () => {
    const logsString = getLogs().join(' && ');

    console.log(logsString);

    try {
      await Share.share({
        message: logsString,
      });
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FAB
        icon="send"
        style={styles.fab}
        onPress={handleFabPress}
        label={logCount > 0 ? logCount.toString() : ''}
      />
      {logCount > 0 && (
        <Badge style={styles.badge}>{logCount}</Badge>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 80,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  fab: {
    marginBottom: 8,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -8,
  },
});

export default Fab;
