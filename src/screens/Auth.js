import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Backgorund from '../components/LinearGradient'
import AuthInput from '../components/AuthInput'
import ButtonWhite from '../components/ButtonWhite'
import db from 'react-native-firebase'



export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: null
        };
    }

    validarCnpj = () => {
        // let cnpj = this.state.cnpj.split('.').join('').split('/').join('')
        // cnpj = cnpj.split('-').join('')

        // db.firestore().collection('url').doc(cnpj)
        //     .get().then((doc) => {
        //         const url = doc.data().url
        //         console.log(url)
        //         if (doc.data()) {
        //             this.props.onUrl({ url })
        //             this.props.navigation.navigate('Login')
        //         } else {
        //             Alert.alert('Erro de Autenticação')
        //         }
        //     })
        //     .catch(function (e) {
        //         Alert.alert('Erro de conexão' + e.message)
        //         console.log(e)
        //     });

        // this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <Backgorund content={
                <View style={styles.container}>
                    < AuthInput icon='user'
                        placeholder='CNPJ'
                        placeholderTextColor="#FFF"
                        type={'cnpj'}
                        value={this.state.cnpj}
                        onChangeText={cnpj => {
                            this.setState({ cnpj })
                        }}

                    />
                    <ButtonWhite nome='Autenticar' action={this.validarCnpj} />
                </View>
            }>
            </Backgorund>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});





