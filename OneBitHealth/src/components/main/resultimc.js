import React from "react";
import { Text, View } from "react-native";
import resposta from "../estilos/estiloResultado";

export default function ResultImc(props) {
    return(
        <View style={resposta.rsResposta}>
            <Text style={resposta.rsNumero}>{props.messageResultImc}</Text>
            <Text style={resposta.rsTexto}>{props.resultImc}</Text>
        </View>
    );
}