import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import TokenService from '../../../services/TokenService';
import RequestsService from '../../../services/RequestService';
import { navigate } from '../../../services/NavigationService';
import MaterialButton from '../../material/MaterialButton';

export class BusinessCredibility extends Component {
    onChangeName = (value) => {
        const data = [...this.state.data];
        data[0].done = value;
        this.setState(data);
    };
    onChangeAddress = (value) => {
        const data = [...this.state.data];
        data[1].done = value;
        this.setState(data);
    };
    onSaveName = async () => {
        const authentication = await TokenService.instance.getAuthentication();

        const response = await RequestsService.post(
            '/business/credibilitycheck/',
            { businessName: this.state.data[0].done },
            authentication,
        );
        await this.getSepsData();
    };
    onSaveAddress = async () => {
        const authentication = await TokenService.instance.getAuthentication();

        const response = await RequestsService.post(
            '/business/credibilitycheck/',
            { businessAddress: this.state.data[1].done },
            authentication,
        );
        await this.getSepsData();
    };

    markAsComplete = async (id) => {
        const authentication = await TokenService.instance.getAuthentication();
        const complete = !this.state.data[id].done;
        const response = await RequestsService.post(
            '/business/credibilitycheck/',
            { [id]: complete },
            authentication,
        );
        await this.getSepsData();
    };

    state = {
        selected: null,
        data: [
            {
                title: 'Step 1.1: Business Name',
                done: false,
                component: () => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                flex: 1,
                                marginRight: 20,
                            }}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Input
                                    value={this.state.data[0].done}
                                    onChangeText={(str) =>
                                        this.onChangeName(str)
                                    }
                                />
                            </View>
                            <View style={{ minWidth: 100 }}>
                                <MaterialButton
                                    buttonPress={this.onSaveName}
                                    style={{ backgroundColor: 'blue' }}
                                    title={'Save'}
                                />
                            </View>
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.2: Business Address',
                done: false,
                component: () => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                flex: 1,
                                marginRight: 20,
                            }}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Input
                                    value={this.state.data[1].done}
                                    onChangeText={(str) =>
                                        this.onChangeAddress(str)
                                    }
                                />
                            </View>
                            <View style={{ minWidth: 100 }}>
                                <MaterialButton
                                    buttonPress={this.onSaveAddress}
                                    style={{ backgroundColor: 'blue' }}
                                    title={'Save'}
                                />
                            </View>
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.3: Business Entity',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'BusinessEntity',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Business Entity'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(2)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.4: EIN#',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'EINNumber',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To EIN Number'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(3)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.5: Business Phone # & 411 Listing',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'FourElevenListing',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Phone And 411 Listing'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(4)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.6: Website',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'WebsiteCreation',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Website Creation'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(5)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.7: Email Address',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'ProfessionalEmailAddress',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Professional Email Address'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(6)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.8: Business License',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'BusinessLicenses',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Business Licenses'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(7)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.9: Business Bank Account',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'BusinessBankAccount',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Business Bank Account'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(8)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
            {
                title: 'Step 1.10: Business Merchant Account',
                done: false,
                component: () => {
                    return (
                        <View style={{ paddingRight: 20 }}>
                            <MaterialButton
                                buttonPress={() =>
                                    navigate('BusinessCreditBuildingStack', {
                                        screen: 'MerchantAccount',
                                    })
                                }
                                style={{
                                    backgroundColor: 'blue',
                                    marginVertical: 5,
                                }}
                                title={'Go To Merchant Account'}
                            />
                            <MaterialButton
                                buttonPress={() => this.markAsComplete(9)}
                                style={{
                                    backgroundColor: 'green',
                                    marginVertical: 5,
                                }}
                                title={'Mark As Complete'}
                            />
                        </View>
                    );
                },
            },
        ],
    };

    getSepsData = async () => {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.get(
            '/business/credibilitycheck/',
            authentication,
        );
        const data = [...this.state.data];
        data[0].done = response.data.steps.business_name;
        data[1].done = response.data.steps.business_address;
        data[2].done = response.data.steps.entity;
        data[3].done = response.data.steps.ein;
        data[4].done = response.data.steps.four11;
        data[5].done = response.data.steps.website;
        data[6].done = response.data.steps.email;
        data[7].done = response.data.steps.license;
        data[8].done = response.data.steps.bankaccount;
        data[9].done = response.data.steps.merchant;
        this.setState({ data });
    };

    async componentDidMount() {
        await this.getSepsData();
    }

    selectItem = (value) => {
        if (this.state.selected === value) {
            this.setState({ selected: null });
        } else {
            this.setState({ selected: value });
        }
    };

    renderItem = (item) => {
        return (
            <View>
                <View style={styles.item}>
                    <View style={styles.flexRow}>
                        {item.item.done ? (
                            <Icon name="done" color="green" />
                        ) : (
                            <Icon name="close" color="red" />
                        )}
                        <TouchableOpacity
                            onPress={() => {
                                this.selectItem(item.index);
                            }}>
                            <Text style={styles.title}>{item.item.title}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.subcategory}>
                    {item.index === this.state.selected &&
                        item.item.component &&
                        item.item.component()}
                </View>
                <View />
            </View>
        );
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        marginHorizontal: 16,
    },
    flexRow: {
        flexDirection: 'row',
    },
    done: {
        color: 'green',
    },
    undone: {
        backgroundColor: 'red',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    header: {
        fontSize: 18,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
    },
});
