import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaAzul } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cajaMorada: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end',
        // position: 'relative',
        // marginBottom: -100
    },

    cajaNaranja: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'flex-end'
        marginBottom: -100
    },

    cajaAzul: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }

});
