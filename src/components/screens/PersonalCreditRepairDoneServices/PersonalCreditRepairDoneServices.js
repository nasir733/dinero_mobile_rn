import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import MaterialButton from '../../material/MaterialButton';

export const PersonalCreditRepairDoneServices = () => {
    const img = require('../../../assets/dinero/CreditFirm-Logo-300x182.jpg');

    return (
        <View style={{flex: 1, marginHorizontal: '10%', marginVertical: '10%'}}>
            <Image source={img} style={{width: '100%'}} resizeMode="stretch" />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 20,
                    textAlign: 'justify',
                }}>
                Click The Button Below To Have One On One Credit Repair{'\n'}
                Start Fixing Your Credit For As Low As $49.99 Per Month
            </Text>
            <MaterialButton
                buttonPress={() => {
                    Linking.openURL(
                        'https://shareasale.com/r.cfm?b=520260&u=2228198&m=49614&urllink=&afftrack=',
                    );
                }}
                style={{backgroundColor: 'blue'}}
                title={'Click Here To Get Your Free Consultation'}
            />
        </View>
    );
};
