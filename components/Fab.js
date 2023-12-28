import * as React from 'react';
import { StyleSheet, View, Share } from 'react-native';
import { FAB, Badge } from 'react-native-paper';
import { getLogs } from '../iconToggleUtils'; // Adjust the path as needed

const Fab = () => {
  const [logCount, setLogCount] = React.useState(0);

  React.useEffect(() => {
    // Update the log count whenever the logs list changes
    setLogCount(getLogs().length);
  }, [getLogs()]);

  const handleFabPress = async () => {
    // Concatenate the list items with " && " between them
    const logsString = getLogs().join(' && ');

    // Log the resulting string
    console.log(logsString);

    // Share the string using the Share API
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
