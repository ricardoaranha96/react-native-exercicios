import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    //Criando um construtor
    constructor(props){
        super(props);

        //O estado pode ser inicializado dentro do construtor
        /*
        this.state = {
            numero: this.props.numeroInicial
        }
        */

        //Maneira de setar que o this dentro da função sempre corresponderá a instância da classe
        //O bind serve para fixar uma referência ao this dentro de uma função
        //this.maisUm = this.maisUm.bind(this);
    }

    //Este código apresenta erro caso o elemento o chame com a sintaxe: onPress={this.maisUm}
    //Isto ocorre pois, dentro dessa função, o this não aponta para a instância da classe.
    //Nesta forma de declarar funções, o this vai variar de acordo com o responsável pela chamada, 
    //que seria o componente TouchableHighlight neste caso
    //Uma forma de contornar isso seria utilizando a sintaxe: onPress={() => this.maisUm()}
    //Neste caso, o this estaria referenciando o contexto da class Contador
    /*
    maisUm(){
        this.setState({numero: this.state.numero + 1})
    }
    */

    //Em funções arrow, o this nunca muda, de forma que vai estar apontando para a instância da classe atual
    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({numero: this.props.numeroInicial})
    }

    render() {
        //A sintaxe onPress={this.maisUm()} define que o valor que onPress receberá é o resultado da função chamada
        //Como o intuito é realizar uma ação a partir de um evento, deve-se usar uma das sintaxes abaixo:
        //- this.maisUm
        //- () => this.maisUm()
        return (
            <View>
                <Text style={{ fontSize: 30 }}>{this.state.numero}</Text>
                
                <TouchableHighlight                    
                    onPress={() => this.maisUm() /* Com a sintaxe de chamada arrow function, o this sempre equivaler a instância da classe */}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}