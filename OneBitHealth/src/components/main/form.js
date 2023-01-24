import React, {useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ResultImc from "./resultimc";

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState('Preencha o peso e a Altura')
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState('Calcular')

function imcCalculador(){
    return setImc((weight/(height*height)).toFixed(2))
}
function validadorImc(){
        if (weight != null && height != null) {
            imcCalculador()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é igual:')
            setTextButton('Calcular Novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e a Altura')
}

export default function Form()  {
    return(
        <View>
            <View>
                <Text>Altura(M)</Text>
                <TextInput placeholder="Ex. 1.47" keyboardType="numeric" style={formulario.entrada}></TextInput>                
                <Text>Peso(Kg)</Text>
                <TextInput placeholder="Ex. 86.5" keyboardType="numeric" style={formulario.entrada}></TextInput>
                <Button title="Calcular IMC" style={formulario.botao}></Button>
            </View>
            <ResultImc MessageResultImc={messageImc} ResultImc={imc}/>
        </View>
    );
}

const formulario = StyleSheet.create({
    entrada: {
        backgroundColor: '#d3d3d3',
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    botao: {
    
    },
});