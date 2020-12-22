import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InputSelect from '../../../components/material/InputSelect';
import MaterialButton from '../../../components/material/MaterialButton';

export class BusinessBuildingSteps extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.95}}>
                    <Text
                        style={{
                            marginTop: 10,
                            color: '#000',
                            opacity: 0.5,
                            textAlign: 'center',
                            fontSize: 20,
                            padding: 20,
                        }}>
                        {' '}
                    </Text>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Business Credit Building Options'}
                        </Text>
                        <InputSelect onPress={() => {}} />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {
                                'How Many Tradelines Do You Currently Have Reporting To All Three Business Credit Bureaus (Dunn & Bradstreet, Business Equifax, And/Or Business Experian)'
                            }
                        </Text>
                        <InputSelect onPress={() => {}} />
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        marginBottom: 20,
                        justifyContent: 'flex-end',
                    }}>
                    <MaterialButton
                        title="See Your Business Credit Building Plan"
                        style={{
                            backgroundColor: '#4b71fa',
                            borderRadius: 10,
                            marginTop: 25,
                        }}
                        buttonPress={() =>
                            navigation.navigate('BusinessCredit')
                        }
                    />
                </View>
            </View>
        );
    }
}
