import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import ResultImc from "./resultimc";
import formulario from "../estilos/estiloForm";

export default function Form()  {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculador(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    function validadorImc(){
            if (weight != null && height != null) {
                imcCalculador()
                setHeight(null)
                setWeight(null)
                setMessageImc("Seu IMC é igual:")
                setTextButton("Calcular Novamente")
                return
            }
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o peso e a Altura')
    }
    return(
        <View style={formulario.frmContext}>
            <View style={formulario.frmForm}>
                <Text style={formulario.frmTexto}>Altura(M)</Text>
                <TextInput onChangeText={setHeight} value={height} placeholder="Ex. 1.47" keyboardType="numeric" style={formulario.frmEntrada}></TextInput>                
                <Text style={formulario.frmTexto}>Peso(Kg)</Text>
                <TextInput onChangeText={setWeight} value={weight} placeholder="Ex. 86.5" keyboardType="numeric" style={formulario.frmEntrada}></TextInput>
                <TouchableOpacity onPress={() => validadorImc()} style={formulario.frmBotao}>
                    <Text style={formulario.frmTextoBotao}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}