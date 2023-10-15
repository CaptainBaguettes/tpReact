import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: 'blue',
    marginTop : 100,
    marginLeft: 80,
    marginRight: 80,
    marginBottom : 100
    },
    text: {
    color: 'white',
    },
});