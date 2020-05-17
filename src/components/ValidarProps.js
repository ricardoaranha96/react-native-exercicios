import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const ValidarProps = (props) =>
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>

//Valores que serão utilizados se a propriedade estiver vazia. São valores padrão
//Outra forma de fazer isso seria com a sintaxe: {props.label || 'Valor Padrão'}
ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps