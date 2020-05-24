import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } };

function filhosComProps(props) {

    //Só funcionaria se houvesse apenas um filho
    //React.cloneElement(props.children, {...props, ...props.children.props})

    //O map percorre um array transformando-o em outro
    //Para cada filho, passa as propriedades do pai e as sobreescreve com propriedades do filho se houverem
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }));
}

//Procura sobre operador spread. ""...fonte" é uma forma de eu passar várias propriedades para um elemento.
//Dessa forma, o javascript vai setar o style={{fontSize: 30}} sem declarar isso explicitamente
export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/*props.children*/}
        {filhosComProps(props)}
    </View>

//Após o operador spread, há a possiblidade de sobrescrita da propriedade
export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana'></Filho>
            <Filho nome='Gui'></Filho>
            <Filho nome='Davi'></Filho>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca'></Filho>
            <Filho nome='Renata'></Filho>
        </Pai>
    </View>

export default Avo;