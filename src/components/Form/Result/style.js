import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resuldadoValor:{
        marginBottom: 20, 
    },

    info: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },

    valor: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultado: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corPesoBaixo: {
        backgroundColor: '#FFFF00',
        color: "#000"
    },

    corPesoNormal: {
        backgroundColor: '#00FF00',
        color: "#000"
    },

    corSobrepeso: {
        backgroundColor: '#FFDEAD',
        color: "#000"
    },

    corObesidade1: {
        backgroundColor: '#FF8C00',
        color: "#000"
    },

    corObesidade2: {
        backgroundColor: '#FF6347',
        color: "#000"
    },

    corObesidade3: {
        backgroundColor: '#FF0000',
        color: "#000"
    },
    corForaPeso: {
        backgroundColor: '#808080',
        color: "#000"
    },
});

export  default styles