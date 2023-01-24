import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Vaca({valor}){
    return(
        <View>
            <Text style={detalhe.caixa_texto}>{valor}</Text>
        </View>
    );
}
const detalhe = StyleSheet.create({
    caixa_texto: {
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#0e1b',
        borderRadius: 10,
        marginBottom: 10,
    },
})