import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../styles/Default';

export default class Evento extends Component {
    //Ler sobre componentes controlados e não controlados: 
    //-https://pt-br.reactjs.org/docs/forms.html
    //-https://pt-br.reactjs.org/docs/uncontrolled-components.html
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        //Como o parâmetro e a chave possuem o mesmo nome, 
        //pode-se usar uam sintaxe reduzida colocando apenas o nome da variável para setar o valor
        this.setState({ texto });
    }

    render() {
        return (
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}
                ></TextInput>
            </View>
        );
    }
}
