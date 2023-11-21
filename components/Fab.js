import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Badge } from 'react-native-paper';

const Fab = () => (
    <View style={styles.container}>
        <FAB
            icon="send"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
        />
        <Badge style={styles.badge}></Badge>
    </View>
);

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
