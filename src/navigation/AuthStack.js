import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthLoading} from '../components/auth';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import appConfig from '../config';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="AuthLoading"
            screenOptions={{gestureEnabled: false}}>
            <Stack.Screen name="AuthLoading" component={AuthLoading} />
            <Stack.Screen name="Login" component={Login} />
            {appConfig.allowRegister && (
                <Stack.Screen name="SignUp" component={SignUp} />
            )}
        </Stack.Navigator>
    );
};
