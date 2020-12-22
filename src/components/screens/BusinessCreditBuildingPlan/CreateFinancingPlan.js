import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InputSelect from '../../material/InputSelect';
import MaterialButton from '../../material/MaterialButton';

const optionType1 = [
    {
        text: 'Less Than 1 Year',
        value: 'Less Than 1 Year',
    },
    {
        text: '3 Years Or More',
        value: '3 Years Or More',
    },
];

const optionType2 = [
    {
        text: 'For Or Less Tradelines Reporting',
        value: 'For Or Less Tradelines Reporting',
    },
    {
        text: '5-9 TradeLines Reporting',
        value: '5-9 TradeLines Reporting',
    },
    {
        text: '10 Or More TradeLines Reporting',
        value: '10 Or More TradeLines Reporting',
    },
];

class CreateBusinessPlan extends Component {
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
                        {'My Corporate Business Credit Solution'}
                    </Text>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {
                                'How Long Have You Been In Incorporated In Your Business?'
                            }
                        </Text>
                        <InputSelect
                            data={optionType1}
                            onPress={() => {}}
                            initial_value={optionType1[0].value}
                        />
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
                        <InputSelect
                            data={optionType2}
                            onPress={() => {}}
                            initial_value={optionType2[0].value}
                        />
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

export {CreateBusinessPlan};
