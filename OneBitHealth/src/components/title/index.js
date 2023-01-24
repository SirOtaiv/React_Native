import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(){
    return(
        <View>
            <Text style={titulo.menu}>ONEBITHEALTH</Text>
        </View>
    );
}

const titulo = StyleSheet.create({
    menu: {
        fontSize: 22,
        color: 'red',
    },
});