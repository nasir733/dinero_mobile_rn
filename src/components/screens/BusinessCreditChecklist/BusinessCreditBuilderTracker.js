import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TokenService from '../../../services/TokenService';
import RequestsService from '../../../services/RequestService';
import MaterialButton from '../../material/MaterialButton';
import { goToLoggedView } from '../../../api/business';
import { getTradelinesData } from '../../../api/userData';

const TABS = [
    {
        title: 'Your Current Business Tradelines',
        data: 'currentTradelines',
    },
    {
        title: 'Business Tradelines We Can Add For You',
        data: 'offeredTradelines',
    },
    {
        title: 'Tier 1 Business Tradelines',
        data: 'tier1Tradelines',
        minimum: 'You Need 3 Tradelines Reporting To Go To Tier 2',
    },
    {
        title: 'Tier 2 Business Tradelines',
        data: 'tier2Tradelines',
        minimum: 'You Need 6 Tradelines Reporting To Go To Tier 3',
    },
    {
        title: 'Tier 3 Business Tradelines',
        data: 'tier3Tradelines',
        minimum: 'You Need 10 Tradelines Reporting To Go To Tier 4',
    },
    {
        title: 'Tier 4 Business Tradelines',
        data: 'tier4Tradelines',
        minimum: 'You Need 10-14 Tradelines Reporting For This Tier',
    },
];

export class BusinessCreditBuilderTracker extends Component {
    state = {
        currentAmount: 0,
        data: {
            currentTradelines: [],
            offeredTradelines: [],
            tier1Tradelines: [],
            tier2Tradelines: [],
            tier3Tradelines: [],
            tier4Tradelines: [],
        },
    };

    loadTradelineData = async () => {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.get(
            'business/getcredittracker/',
            authentication,
        );
        const orderedTradelines = await getTradelinesData();
        const data = { ...this.state.data };
        data.tier1Tradelines = response.data.tier1;
        data.tier2Tradelines = response.data.tier2;
        data.tier3Tradelines = response.data.tier3;
        data.tier4Tradelines = response.data.tier4;
        data.offeredTradelines = response.data.offeredTradelines;
        data.currentTradelines = orderedTradelines;
        console.log(response.data);
        const currentAmount = response.data.currentAmount;
        this.setState({ data, currentAmount });
    };

    componentDidMount = async () => {
        await this.loadTradelineData();
    };

    renderItem = ({ index, item }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>

                {item.minimum && (
                    <View style={styles.infobubble}>
                        <Text>{item.minimum}</Text>
                        <Text>
                            Your Current Business Tradelines Number:{' '}
                            {this.state.currentAmount}{' '}
                        </Text>
                    </View>
                )}
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ width: '25%', fontWeight: 'bold' }}>
                        Company Name{' '}
                    </Text>
                    <Text style={{ width: '25%', fontWeight: 'bold' }}>
                        Product
                    </Text>
                    <Text style={{ width: '25%', fontWeight: 'bold' }}>
                        Amount
                    </Text>
                    <Text style={{ width: '25%', fontWeight: 'bold' }}>
                        Tradeline Credit Amount
                    </Text>
                </View>
                {this.state.data[item.data].map((tradeline, index) => {
                    return (
                        <View style={styles.frow} key={index}>
                            <Text style={{ width: '25%' }}>
                                {tradeline.company_name}
                            </Text>
                            <Text style={{ width: '25%' }}>
                                {tradeline.product}
                            </Text>
                            <Text style={{ width: '25%' }}>
                                ${tradeline.tradeline_amount}
                            </Text>
                            {tradeline.tradeline_credit_amount ? (
                                <Text style={{ width: '25%' }}>
                                    ${tradeline.tradeline_credit_amount}
                                </Text>
                            ) : (
                                <Text style={{ width: '25%' }}>-</Text>
                            )}
                        </View>
                    );
                })}
                <MaterialButton
                    style={{
                        backgroundColor: '#3370de',
                        height: 30,
                        borderRadius: 5,
                        marginTop: 10,
                    }}
                    title={'Add Tradelines'}
                    buttonPress={() => {
                        goToLoggedView(
                            '/business/business-credit-builder-tracker/',
                        );
                    }}
                />
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={TABS}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infobubble: {
        backgroundColor: '#CCE5FF',
        borderRadius: 5,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#B8DAFF',
        marginVertical: 10,
    },
    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontWeight: 'bold',
    },
    frow: {
        flexDirection: 'row',
    },
});
