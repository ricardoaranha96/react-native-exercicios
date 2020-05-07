import React from 'react'
import { Text } from 'react-native'
import Padrao from '../styles/Default'

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1,60];
    //Caso props.numeros não seja passada, o array vai ter 6 itens
    //O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático. Neste caso, 0
    const numeros = Array(props.numeros || 6).fill(0);

    for(let i = 0; i < numeros.length; i++){
        let novo = 0
        
        //O loop só terminará quando o número gerado não existir na array numeros
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }

        numeros[i] = novo
    }

    numeros.sort((a, b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

export default Inverter

//Maneira alternativa de exportar. Para isso, os elementos MegaSena e Inverter não devem ter sido exportados anteriormente, com exceção no caso de default
//export { Inverter, MegaSena }