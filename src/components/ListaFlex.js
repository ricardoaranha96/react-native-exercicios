import React from 'react';
import { FlatList, View, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Maria', nota: 10 },
    { id: 3, nome: 'Bia', nota: 5.4 },
    { id: 4, nome: 'Cláudio', nota: 9 },
    { id: 5, nome: 'Rebeca', nota: 8 },
    { id: 6, nome: 'Tristana', nota: 8 },
    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Maria', nota: 10 },
    { id: 13, nome: 'Bia', nota: 5.4 },
    { id: 14, nome: 'Cláudio', nota: 9 },
    { id: 15, nome: 'Rebeca', nota: 8 },
    { id: 16, nome: 'Tristana', nota: 8 },
    { id: 7, nome: 'João', nota: 7.9 },
    { id: 22, nome: 'Maria', nota: 10 },
    { id: 23, nome: 'Bia', nota: 5.4 },
    { id: 24, nome: 'Cláudio', nota: 9 },
    { id: 25, nome: 'Rebeca', nota: 8 },
    { id: 26, nome: 'Tristana', nota: 8 },
    { id: 31, nome: 'João', nota: 7.9 },
    { id: 32, nome: 'Maria', nota: 10 },
    { id: 33, nome: 'Bia', nota: 5.4 },
    { id: 34, nome: 'Cláudio', nota: 9 },
    { id: 35, nome: 'Rebeca', nota: 8 },
    { id: 36, nome: 'Tristana', nota: 8 }
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    //Flex
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    //Essa sintaxe de {item} significa que, a função vai receber um objeto 
    //e o valor que de fato será passado para a função será objeto.item. Procurar sobre destructuring
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    //data: lista de valores a serem apresentados na lista
    //renderItem: função que será utilizada para renderizar cada elemento

    //No curso, o professor apresenta este trecho do código usando ScrollView, mas isto gera warnings. 
    //Isto ocorre pq a própria FlatList já trata a necessidade de ter scroll
    return <View>
        <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}></FlatList>
    </View>
}