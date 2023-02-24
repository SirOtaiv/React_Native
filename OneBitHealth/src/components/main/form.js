import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import ResultImc from "./resultimc";
import formulario from "../estilos/estiloForm";
import Title from '../title';
import { addDados } from "../database/database";
import { listarHist } from "../database/database";
import { useNavigation } from "@react-navigation/native";


export default function Form()  {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [name, setName] = useState(null)
    const [tbName, setTbName] = useState(null)
    const [tbPeso, setTbPeso] = useState(null)
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
                setHeight(null)
                setTbPeso(weight)
                setWeight(null)
                setMessageImc(name+", seu IMC é igual:")
                setTbName(name)
                setName(null)
                setTextButton("Calcular Novamente")
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
    function criarHistorico(tx1, tx2){
        if (tx1 != null && tx2 != null) {
            addDados(tx1, tx2)
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o peso e a Altura')
        } else {
            console.log('Teste')
        }
    }
    return(
        <View style={styles.container}>
            <Title/>
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
                    <View style={formulario.frmDiv}>
                        <TouchableOpacity onPress={() => criarHistorico(tbName, tbPeso)} style={formulario.frmBotao2}>
                            <Text style={formulario.frmTextoBotao}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navegacao.navigate('Historico')} style={formulario.frmBotao2}>
                            <Text style={formulario.frmTextoBotao}>Histórico</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcdcdc',
      paddingTop: 60,
    },
  });
