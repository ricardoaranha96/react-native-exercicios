import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    norte: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    centro: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    sul: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red'
    }
});

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}><Circulo /></View>
            <View style={styles.centro}><Circulo /><Circulo /><Circulo />
            </View>
            <View style={styles.sul}><Circulo /></View>
        </View>
    )
}