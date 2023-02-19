import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Histlst(props) {
    return(
        <View style={estilohist.hslistop}>
            <Text style={estilohist.hslistext}>{props.nomeList}</Text>
            <Text style={estilohist.hslistext}>Peso: {props.pesoList}</Text>
        </View>
    )
}

const estilohist = StyleSheet.create({
    hslistop: {
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        padding: 15,
    },
    hslistext: {
        fontSize: 20,
    },
})