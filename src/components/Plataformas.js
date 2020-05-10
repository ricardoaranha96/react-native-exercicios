import React from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notificar = msg => {
        if(Platform.OS == 'android'){
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        } else{
            //Alert para iOS
            Alert.alert('Informação', msg);
        }
    }

    //Como este é um component funcional, não usamos this.notificar para chamar a função
    return (
        <Button title="Plataforma"
            onPress={() => notificar('Parabéns')}
        ></Button>
    );
}
