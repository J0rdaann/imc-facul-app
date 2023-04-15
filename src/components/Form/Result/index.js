import {Text, View} from 'react-native';
import styles from './style';

export default function Result(props){
    let color
    if(props.valor < 18.5){
        color = styles.corPesoBaixo
    }else if(props.valor >= 18.5 && props.valor < 24.9){
        color = styles.corPesoNormal
    }else if(props.valor >= 25 && props.valor < 29.9){
        color = styles.corSobrepeso
    }else if(props.valor >= 30 && props.valor < 34.9){
        color = styles.corObesidade1
    }else if(props.valor >= 35 && props.valor < 39.9){
        color = styles.corObesidade2
    }else if(props.valor >= 40){
        color = styles.corObesidade3
    }else{
        color = styles.corForaPeso
    }
    return(
        <View style={styles.resuldadoValor}> 
            <Text style={styles.info}> Seu IMC é: </Text>
            <Text style={styles.valor}> {props.valor} </Text>
            <Text style={[styles.msgResultado, color]}> {props.msgResultado} </Text>
        </View>
    );

}