import React from 'react';

import {
    NativeEventEmitter,
    NativeModules,
    StyleSheet,
    View,
} from 'react-native';
import {ALAN_API_KEY} from '../config';
import {AlanView} from '../components/alan/old/AlanSDK';
import {connect} from 'react-redux';
import {navigate} from '../services/NavigationService';
import {goToBusinessSteps, goToLoggedView} from '../api/business';

const {AlanEventEmitter} = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

class NavigationTabBar extends React.Component {
    constructor() {
        super();
        this.subscription = alanEventEmitter.addListener('command', (data) => {
            console.log(data);
            if (data) {
                if (data.command === 'navigate') {
                    if (data.direction === 'Profile') {
                        navigate('Profile');
                    }
                    if (data.direction === 'BusinessCreditSteps') {
                        goToBusinessSteps();
                    }
                    if (data.direction === 'website') {
                        goToLoggedView('/business/website-creation/');
                    }
                    if (data.direction === 'tollfreenumber') {
                        goToLoggedView('/business/toll-free-options/');
                    }
                    if (data.direction === 'faxnumber') {
                        goToLoggedView('/business/fax-number/');
                    }
                } else if (data.command === 'navigateLoggedView') {
                    goToLoggedView(data.direction);
                }
            }
        });
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    render() {
        return (
            <View style={style.tabBar}>
                <AlanView projectid={ALAN_API_KEY} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        width: 300,
        bottom: 80,
        right: 0,
    },
});

export default connect(null, null)(NavigationTabBar);
