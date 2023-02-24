import * as SQLite from 'expo-sqlite';

const dbCon = SQLite.openDatabase('historico.db');

const criarTabela = () => {
  dbCon.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS hist (id INTEGER PRIMARY KEY autoincrement, nome TEXT, peso real);'
    );
  });
};

export const addDados = (name, peso) => {
  dbCon.transaction(tx => {
    tx.executeSql('INSERT INTO hist (nome, peso) VALUES (?, ?);', [name, peso]);
  });
};

export function rmvDados() {
  return new Promise((resolve, reject) => {
    dbCon.transaction((tx) => {
      tx.executeSql('DELETE FROM hist;', [], (_, resultado) => {
        resolve(resultado)
      }, (_, error) => {
        reject(error)
      });
    });
  });
}

export const listarHist = () => {
  return new Promise((resolve, reject) => {
    dbCon.transaction(tx => {
      tx.executeSql('SELECT * FROM hist;', [], (info,{rows}) => {
        resolve(rows);
      });
    });
  });
};
/*
export default function baseData() {
  listarHist().then(lista => {
    for(let i = 0; i < lista.length - 1; i++){
      console.log(lista._array[i].nome)
    }
  })
}
*/