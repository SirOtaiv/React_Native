import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Histlst(props) {
    return(
        <View style={estilohist.hslistop}>
            <Text style={estilohist.hsLisTextNome}>{props.nomeList}</Text>
            <Text style={estilohist.hsLisText}>Peso: {props.pesoList}</Text>
        </View>
    )
}

const estilohist = StyleSheet.create({
    hslistop: {
        width: '95%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        padding: 10,
        borderRadius: 30,
    },
    hsLisText: {
        fontSize: 15,
    },
    hsLisTextNome: {
        fontSize: 20,
    },
})