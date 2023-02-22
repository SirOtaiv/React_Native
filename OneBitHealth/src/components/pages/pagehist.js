import React, { useEffect, useState } from "react";
import Histlst from '../main/hist';
import { listarHist, addDados } from '../database/database';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import formulario from "../estilos/estiloForm";

export default function PageHist() {
  const [listaHist, setListaHist] = useState([])

  function apagarHist() {
    console.log('Historico apagado')
  }

  useEffect(() => {
    listarHist().then((resultado) => {
    const db = resultado;
    const lista = new Array(db.length).fill(null).map((_, index) => <Histlst nomeList={resultado._array[index].nome} pesoList={resultado._array[index].peso} key={index}/>)
    setListaHist(lista)
    })
  }, [])
  return (
    <View style={pgHist.hsPage}>
        <TouchableOpacity style={formulario.frmBotaoHist} onPress={() => apagarHist()}>
          <Text style={formulario.frmTextoBotao}>Limpar Histórico</Text>
        </TouchableOpacity>
        <ScrollView>  
          <View style={pgHist.hsList}>
            {listaHist}
          </View>
        </ScrollView>
    </View>
  )
}

const pgHist = StyleSheet.create({
  hsPage: {
    flex: 1,
    height: '100%',
  },
  hsList: {
    alignItems: 'center',
    height: '100%',
    paddingTop: 10,
    backgroundColor: 'white',
  },
})
