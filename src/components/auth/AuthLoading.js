import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import TokenService from '../../services/TokenService';

class AuthLoading extends Component {
    async componentDidMount() {
        const isAuth = await TokenService.instance.isAuthenticated();
        return this.props.navigation.navigate(
            isAuth ? 'ApplicationStack' : 'Login',
        );
    }

    render() {
        return (
            <View style={styles.root}>
                <ActivityIndicator size={'large'} color="" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export {AuthLoading};
