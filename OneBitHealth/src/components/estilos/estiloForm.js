import React from 'react';
import { StyleSheet } from 'react-native';

const formulario = StyleSheet.create({
    frmContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    frmForm: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
        padding: 15,
    },
    frmTexto: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },
    frmEntrada: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#d3d3d3',
        padding: 10,
        margin: 8,
        borderRadius: 20,
    },
    frmBotao: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingBottom: 14,
        paddingTop: 14,
        alignSelf: 'center',
        marginTop: 10,
    },
    frmBotao2: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingBottom: 14,
        paddingTop: 14,
        alignSelf: 'center',
        marginTop: 10,
//        display: 'none',
    },
    frmTextoBotao: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default formulario