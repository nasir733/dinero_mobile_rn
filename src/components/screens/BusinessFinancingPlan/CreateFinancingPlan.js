import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import InputSelect from '../../material/InputSelect';
import MaterialButton from '../../material/MaterialButton';

const optionType1 = [
    {
        text: '599 or below',
        value: '599 or below',
    },
    {
        text: '600-679',
        value: '600-679',
    },
    {
        text: '680+ Credit Score or Higher',
        value: '680+ Credit Score or Higher',
    },
];

const optionType2 = [
    {
        text: '$3499 or below',
        value: '$3499 or below',
    },
    {
        text: '$3500 or above',
        value: '$3500 or above',
    },
];

const optionType3 = [
    {
        text: '$499 or below',
        value: '$499 or below',
    },
    {
        text: '$500 or above',
        value: '$500 or above',
    },
];

const optionType4 = [
    {
        text: '$41999 or below',
        value: '$41999 or below',
    },
    {
        text: '$42,000-$99,000',
        value: '$42,000-$99,000',
    },
    {
        text: '$10,000 or above',
        value: '$10,000 or above',
    },
];

const optionType5 = [
    {
        text: 'Yes',
        value: 'Yes',
    },
    {
        text: 'No',
        value: 'No',
    },
];

const optionType6 = [
    {
        text: 'Less Than 3 Months Ago',
        value: 'Less Than 3 Months Ago',
    },
    {
        text: '3 Months - 8 Months',
        value: '3 Months - 8 Months',
    },
    {
        text: '9 Months - 11 Months',
        value: '9 Months - 11 Months',
    },
    {
        text: '1 Year - 2 Years',
        value: '1 Year - 2 Years',
    },
    {
        text: '3 Years Or More',
        value: '3 Years Or More',
    },
];
class CreateFinancingPlan extends Component {
    componentDidMount() {
        console.log('[CreateFinancingPlan Mounted]');
    }

    componentWillUnmount() {
        console.log('[CreateFinancingPlan Will Unmount]');
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{marginBottom: 10}}>
                    <Text
                        style={{
                            marginTop: 10,
                            color: '#000',
                            opacity: 0.5,
                            textAlign: 'center',
                            fontSize: 20,
                            padding: 20,
                        }}>
                        {
                            'Put Your Information Below To See The Lenders You Qualify For'
                        }
                    </Text>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Current Credit Score (Experian Score)'}
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
                            {'Current Credit Score (Equifax Score)'}
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
                            {'Current Credit Score (Transunion Score)'}
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
                            {'Average Monthly Revenue (Over Last 3 Months)'}
                        </Text>
                        <InputSelect
                            data={optionType2}
                            onPress={() => {}}
                            initial_value={optionType2[0].value}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Average Daily Balance (Over Last 3 Months)'}
                        </Text>
                        <InputSelect
                            data={optionType3}
                            onPress={() => {}}
                            initial_value={optionType3[0].value}
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
                                'Average Monthly Ending Balance (Over Last 3 Months)'
                            }
                        </Text>
                        <InputSelect
                            data={optionType3}
                            onPress={() => {}}
                            initial_value={optionType3[0].value}
                        />
                    </View>

                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Average Monthly Revenue (Over Last 6 Months)'}
                        </Text>
                        <InputSelect
                            data={optionType2}
                            onPress={() => {}}
                            initial_value={optionType2[0].value}
                        />
                    </View>

                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Average Daily Balance (Over Last 6 Months)'}
                        </Text>
                        <InputSelect
                            data={optionType3}
                            onPress={() => {}}
                            initial_value={optionType3[0].value}
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
                                'Average Monthly Ending Balance (Over Last 6 Months)'
                            }
                        </Text>
                        <InputSelect
                            data={optionType3}
                            onPress={() => {}}
                            initial_value={optionType3[0].value}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Your Businesses Revenue Over The Past 12 Months'}
                        </Text>
                        <InputSelect
                            data={optionType4}
                            onPress={() => {}}
                            initial_value={optionType4[0].value}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Any Nonsufficient Funds In The Last 3 Months?'}
                        </Text>
                        <InputSelect
                            data={optionType5}
                            onPress={() => {}}
                            initial_value={optionType5[0].value}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Any Nonsufficient Funds In The Last 6 Months?'}
                        </Text>
                        <InputSelect
                            data={optionType5}
                            onPress={() => {}}
                            initial_value={optionType5[0].value}
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
                                'Do You Have Any Current Liens Against The Business?'
                            }
                        </Text>
                        <InputSelect
                            data={optionType5}
                            onPress={() => {}}
                            initial_value={optionType5[0].value}
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
                                'Do You Have A Business Bank Account? (That Is Only For Business Use)'
                            }
                        </Text>
                        <InputSelect
                            data={optionType5}
                            onPress={() => {}}
                            initial_value={optionType5[0].value}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 16,
                                padding: 10,
                            }}>
                            {'Do You Currently Have A Business Loan?'}
                        </Text>
                        <InputSelect
                            data={optionType5}
                            onPress={() => {}}
                            initial_value={optionType5[0].value}
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
                                'The Age Of Your Business (When You Truly Registered As An Entity)'
                            }
                        </Text>
                        <InputSelect
                            data={optionType6}
                            onPress={() => {}}
                            initial_value={optionType6[0].value}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            marginHorizontal: 20,
                            marginBottom: 20,
                        }}>
                        <MaterialButton
                            title="See What Lenders You Qualify You"
                            style={{
                                backgroundColor: '#4b71fa',
                                borderRadius: 10,
                                marginTop: 25,
                            }}
                            buttonPress={() => navigation.navigate('Lenders')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export {CreateFinancingPlan};
