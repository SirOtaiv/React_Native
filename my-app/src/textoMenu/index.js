import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Texto(){
    return(
        <View>
            <Text style={estilo.caixa_texto}>Minha primeira aplicação em react-native: Ola mundo</Text>
        </View>
    );
}
const estilo = StyleSheet.create({
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