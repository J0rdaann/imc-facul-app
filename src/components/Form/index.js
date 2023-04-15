import { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Result from './Result'

export default function Form() {
    const [valorPeso, setValorPeso] = useState(null)
    const [valorAltura, setValorAltura] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setMsgResultado] = useState(null)
    const [valor, setValor] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calcularValor(valorPesoFormat, valorAlturaFormat) {
        let valorFinal = (Number.parseFloat(valorPesoFormat) / Number.parseFloat(valorAlturaFormat)) * Number.parseFloat(valorAlturaFormat)
        setValor(valorFinal)
        resultado(valorFinal)
    }

    function resultado(valor) {
        if (valor < 18.5) {
            setMsgResultado("Você está com Peso Baixo!")
        } else if (valor >= 18.5 && valor < 24.9) {
            setMsgResultado("Você está com Peso Normal!")
        }else if(valor >= 25 && valor <= 29.9){
            setMsgResultado("Você está Sobrepeso")
        }else if(valor >= 30 && valor <= 34.9){
            setMsgResultado("Você está com obesidade (Grau I)!")
        }else if(valor >= 35 && valor <= 39.9){
            setMsgResultado("Você está com obesidade (Grau II)!")
        }else if(valor >= 40){
            setMsgResultado("Você está com obesidade (Grau III)!")
        } else {
            setMsgResultado("Você está muito abaixo do seu peso!")
        }
     }


    function validacaoValor() {
        if (valorPeso != null && valorAltura != null) {
            let valorPesoFormat = valorPeso.replace(",", ".")
            let valorAlturaFormat = valorAltura.replace(",", ".")
            if (valorPesoFormat >= 0 && valorAlturaFormat >= 0) {
                calcularValor(valorPesoFormat, valorAlturaFormat)
                setValorPeso(null)
                setValorAltura(null)
                setTextButton("Calcular Novamente")
                setMsgCalculo(null)
            } else {
                setMsgCalculo("Valor Inválido!")
                setValorPeso(null)
                setValorAltura(null)
                setTextButton("Calcular")
            }
        } else {
            setMsgCalculo("Preencha as informações!")
            setValor(null)
        }
    }

    return (
        <View style={styles.form}>
            {valor == null ?
                <View>
                    {/* Condição quer verifica se há mensagem de erro */}
                    {msgCalculo != null && (
                        <Text style={styles.alerta}>{msgCalculo}</Text>
                    )}

                    <Text style={styles.label}>Valor do seu Peso</Text>
                    <TextInput
                        style={styles.imput}
                        keyboardType="numeric"
                        value={valorPeso}
                        onChangeText={setValorPeso}
                    />

                    <Text style={styles.label}>Valor da sua Altura</Text>
                    <TextInput
                        style={styles.imput}
                        keyboardType="numeric"
                        value={valorAltura}
                        onChangeText={setValorAltura}
                    />

                    <TouchableOpacity onPress={() => validacaoValor()}>
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result valor={valor} msgResultado={msgResultado} />
                    <TouchableOpacity onPress={() => validacaoValor()}>
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>

                </View>
            }
        </View>
    );
}