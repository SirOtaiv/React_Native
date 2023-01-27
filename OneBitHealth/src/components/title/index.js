import React from "react";
import { View, Text, StyleSheet } from "react-native";
import titulo from  "../estilos/estiloTitulo"

export default function Title(){
    return(
        <View style={titulo.caixaMenu}>
            <Text style={titulo.menu}>ONEBITHEALTH</Text>
        </View>
    );
}