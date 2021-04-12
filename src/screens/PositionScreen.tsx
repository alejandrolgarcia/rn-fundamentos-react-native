import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaVerde }  />
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja }  />
        </View>
    )
}

/**
 * Por defecto, los elementos tienen posicion relativa respecto
 * al elemento padre
 */

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // width: 400,
        // height: 400,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    },

    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },

    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
        // top: -50
    },

    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0
        ...StyleSheet.absoluteFillObject

    }

});