import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador'

const Drawer = createDrawerNavigator();

export default function () {
    //Quando existe a necessidade de passar parâmetros, utiliza-se a sintaxe de arrow function com props ao invés de passar o component nas tags Screen
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Contador">
                    {props => <Contador numeroInicial={0} />}
                </Drawer.Screen>
                <Drawer.Screen name="Mega Sena" component={MegaSena}></Drawer.Screen>            
                <Drawer.Screen name="Inverter">                    
                    {props => <Inverter texto="React Native" />}
                </Drawer.Screen>
                <Drawer.Screen name="Par & Ímpar">
                    {props => <ParImpar numero={30} />}
                </Drawer.Screen>
                <Drawer.Screen name="Simples">
                    {props => <Simples texto="Flexível"></Simples>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

/*export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Native" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto="Flexível" />
    }
}, { drawerWidth: 300 });
*/