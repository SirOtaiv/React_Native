import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import ResultImc from "./resultimc";
import formulario from "../estilos/estiloForm";
import dbCon from "../database/database";
import baseData from "../database/database";
import { listarHist } from "../database/database";
import { useNavigation } from "@react-navigation/native";


export default function Form()  {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [name, setName] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const navegacao = useNavigation()

    function imcCalculador(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    function validadorImc(){
            if (weight != null && height != null) {
                imcCalculador()
                var tabela = {
                    'tbName' : name,
                    'tbAltura' : height,
                    'tbPeso' : weight,
                    'tbImc' : (weight/(height*height)).toFixed(2),
                }                
                setHeight(null)
                setWeight(null)
                setMessageImc(name+", seu IMC é igual:")
                setName(null)
                setTextButton("Calcular Novamente")
                teste(tabela)
                return
            }
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o peso e a Altura')
    }
    function lstName() {
        listarHist().then(lista => {
            setMessageImc(lista._array[0].nome+', seu peso é:')
            setImc(lista._array[0].peso)
            /*
            for(let i = 0; i < lista.length - 1; i++){
                console.log(lista._array[i].nome)
            }
            */
        })
    }
    function teste(tx){
        console.log(tx)
    }
    return(
        <View style={formulario.frmContext}>
            <View style={formulario.frmForm}>
                <Text style={formulario.frmTexto}>Nome</Text>
                <TextInput onChangeText={setName} value={name} placeholder="Ex. Otavio M. Rau" keyboardType="ascii-capable" style={formulario.frmEntrada}></TextInput>
                <Text style={formulario.frmTexto}>Altura(M)</Text>
                <TextInput onChangeText={setHeight} value={height} placeholder="Ex. 1.47" keyboardType="numeric" style={formulario.frmEntrada}></TextInput>                
                <Text style={formulario.frmTexto}>Peso(Kg)</Text>
                <TextInput onChangeText={setWeight} value={weight} placeholder="Ex. 86.5" keyboardType="numeric" style={formulario.frmEntrada}></TextInput>
                <TouchableOpacity onPress={() => validadorImc()} style={formulario.frmBotao}>
                    <Text style={formulario.frmTextoBotao}>{textButton}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navegacao.navigate('Historico')} style={formulario.frmBotao2}>
                    <Text style={formulario.frmTextoBotao}>Histórico</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
