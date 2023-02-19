import React, { useEffect, useState } from "react";
import Histlst from '../main/hist';
import { listarHist } from '../database/database';
import { View } from "react-native";

export default function PageHist() {
    const [listaHist, setListaHist] = useState([])

  useEffect(() => {
    listarHist().then((resultado) => {
    const db = resultado;
    const lista = new Array(db.length - 1).fill(null).map((_, index) => <Histlst nomeList={resultado._array[index].nome} pesoList={resultado._array[index].peso} key={index}/>)
    setListaHist(lista)
    })
  }, [])
  return (
    <View>
        {listaHist}
    </View>
  )
}
