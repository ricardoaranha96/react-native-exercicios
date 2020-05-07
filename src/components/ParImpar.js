import React from 'react';
import { View, Text } from 'react-native';
import Default from '../styles/Default';
import If from './If';

//Renderização condicional com função
function parOuImpar(num){
    const text = num % 2 == 0 ? 'Par' : 'Ímpar';
    return <Text style={Default.ex}>{text}</Text>
}

export default function (props) {
    return (
        <View>
            {parOuImpar(props.numero)}
        </View>
    );
}


//Renderização condicional com código dentro do JSX
/*
export default function (props) {
    return (
        <View>
            {
                props.numero % 2 == 0
                ? <Text style={Default.ex}>Par</Text>
                : <Text style={Default.ex}>Ímpar</Text>
            }
        </View>
    );
}
*/

//Renderização condicional com tag
/*
export default function (props) {
    return (
        <View>
            <If test={props.numero % 2 == 0}>
                <Text style={Default.ex}>Par</Text>
            </If>
            <If test={props.numero % 2 == 1}>
                <Text style={Default.ex}>Ímpar</Text>
            </If>            
        </View>
    );
}
*/

