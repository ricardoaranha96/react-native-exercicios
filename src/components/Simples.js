import React from 'react';
import { View, Text } from 'react-native';
import Default from '../styles/Default';

export default function (props) {

    //Para aplicar vários estilos a um elemento, utilizamos um array
    //return <Text style={[Default.ex]}>{props.texto}</Text>

    return <Text style={Default.ex}>{props.texto}</Text>
}

/*
export default function (props) {
    return (<Text>{props.texto}</Text>);
}
*/


/*export default (props) => {
    return <Text>{props.texto}</Text>
}*/

/*
//Exemplo de return implícito com arrow function
export default props => 
    <Text>{props.texto}</Text>
*/

/*
//Apenas um elemento "pai" pode ser retornado quando se usa retorno implícito. 
//Por isso, "encapsulamos" o conteúdo usando uma View
export default props => 
    <View>
        <Text>{props.texto}</Text>
        <Text>{props.texto}</Text>
    </View>
*/

/*
//Uma maneira alternativa de retornar vários elementos é através de um array
//Nesse caso, é necessário especificar um atributo "key" para cada elemento
export default props => [
    <Text key={0}>{props.texto}</Text>,
    <Text key={1}>{props.texto}</Text>
]
*/


