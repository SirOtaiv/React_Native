import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ResultImc from "./resultimc";

export default function Form()  {
    return(
        <View>
            <View>
                <Text>Altura(M)</Text>
                <TextInput placeholder="Ex. 1.47" keyboardType="numeric"></TextInput>                
                <Text>Peso(Kg)</Text>
                <TextInput placeholder="Ex. 86.5" keyboardType="numeric"></TextInput>
                <Button title="Calcular IMC" color={'#D30000'}></Button>
            </View>
            <ResultImc/>
        </View>
    );
}