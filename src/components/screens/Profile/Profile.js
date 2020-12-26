import {
    Dimensions,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import MaterialButton from '../../material/MaterialButton';
import React from 'react';
import MaterialSnackbar from '../../material/MaterialSnackbar';
import appConfig from '../../../config';
import {
    getStepsData,
    getTradelinesData,
    getUserData,
} from '../../../api/userData';
import { userLogout } from '../../../store/user/Actions';
import { connect } from 'react-redux';
import { goToBusinessSteps } from '../../../api/business';

const { width, height } = Dimensions.get('window');

class Profile extends React.Component {
    state = {
        isEdit: false,
        firstName: '',
        lastName: '',
        email: '',
        totalOwed: '',
        financedSoFar: '',
        activeLoans: [],
        activePlans: [],
        stepsData: {},
        tradelines: [],
    };

    componentDidMount() {
        getUserData()
            .then((data) => {
                if (data) {
                    this.setState({ ...this.state, ...data });
                }
            })
            .catch((err) => console.log(err));

        getStepsData()
            .then((data) => {
                if (data.stepsData) {
                    this.setState({ ...this.state, stepsData: data.stepsData });
                }
            })
            .catch((err) => console.log(err));

        getTradelinesData()
            .then((data) => {
                if (data) {
                    this.setState({ ...this.state, tradelines: data });
                    console.log(data);
                }
            })
            .catch((err) => console.log(err));
    }

    renderStepsButton = (key, num) => {
        if (num === 1) {
            return (
                <MaterialButton
                    title="Order Now"
                    style={{
                        backgroundColor: 'blue',
                        height: 20,
                        flex: 1,

                        marginRight: 15,
                    }}
                    buttonPress={goToBusinessSteps}
                />
            );
        } else if (num === 2) {
            return (
                <MaterialButton
                    title="In Progress"
                    style={{
                        backgroundColor: 'orange',
                        height: 20,
                        flex: 1,
                        marginRight: 15,
                    }}
                    buttonPress={() => {}}
                />
            );
        } else if (num === 3) {
            return (
                <MaterialButton
                    title="Done"
                    style={{
                        backgroundColor: 'green',
                        height: 20,
                        flex: 1,
                        marginRight: 15,
                    }}
                    buttonPress={() => {
                        Linking.openURL(
                            `${appConfig.appWebsite}/user/my-progress`,
                        );
                    }}
                />
            );
        } else {
            return (
                <Text
                    style={{
                        flex: 1,
                        fontSize: 14,
                        color: '#272b43',
                    }}>
                    {num}
                </Text>
            );
        }
    };

    renderFinancingPlans = (activePlans) => {
        if (activePlans.length > 0) {
            return activePlans.map((item, index) => {
                return (
                    <View
                        key={index}
                        style={{
                            width: '100%',
                            marginHorizontal: 10,
                            paddingLeft: 20,
                        }}>
                        <Text
                            style={{
                                flex: 2,
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#4456ca',
                            }}>
                            {item.name}
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                            }}>
                            <Text
                                style={{
                                    flex: 2,
                                    fontSize: 14,
                                    color: '#272b43',
                                }}>
                                Owed
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 14,
                                    color: '#272b43',
                                }}>
                                ${item.how_much_owed}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                            }}>
                            <Text
                                style={{
                                    flex: 2,
                                    fontSize: 14,
                                    color: '#272b43',
                                }}>
                                Financed So Far
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 14,
                                    color: '#272b43',
                                }}>
                                ${item.financed_so_far}
                            </Text>
                        </View>
                    </View>
                );
            });
        } else {
            return <Text>No active financing plans</Text>;
        }
    };

    renderFinancingInformation = () => {
        return (
            <View style={styles.card}>
                <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>
                        Financing Plan Information:
                    </Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginHorizontal: 10,
                    }}>
                    <Text
                        style={{
                            flex: 2,
                            fontSize: 14,
                            color: '#272b43',
                        }}>
                        Total Owed
                    </Text>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 14,
                            color: '#272b43',
                        }}>
                        ${this.state.totalOwed}
                    </Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginHorizontal: 10,
                    }}>
                    <Text
                        style={{
                            flex: 2,
                            fontSize: 14,
                            color: '#272b43',
                        }}>
                        Financed So Far
                    </Text>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 14,
                            color: '#272b43',
                        }}>
                        ${this.state.financedSoFar}
                    </Text>
                </View>
                <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>My Financing Plans:</Text>
                </View>
                {this.renderFinancingPlans(this.state.activePlans)}
            </View>
        );
    };

    renderServicesInformation = () => {
        return (
            <View style={styles.card}>
                <View
                    style={{
                        width: '100%',
                        marginVertical: 10,
                    }}>
                    <Text
                        style={{
                            flex: 2,
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#4456ca',
                        }}>
                        Services Information:
                    </Text>
                </View>
                <View style={{ width: '100%' }}>
                    {Object.entries(this.state.stepsData).map(
                        ([key, value], index) => {
                            if (value) {
                                if (key !== 'id') {
                                    return (
                                        <View
                                            key={index}
                                            style={{
                                                width: '100%',
                                                marginHorizontal: 10,
                                                marginTop: 10,
                                            }}>
                                            <View
                                                style={{
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                }}>
                                                <Text
                                                    style={{
                                                        textTransform:
                                                            'capitalize',
                                                        flex: 2,
                                                        fontSize: 14,
                                                        color: '#272b43',
                                                    }}>
                                                    {key.replace(/_/g, ' ')}
                                                </Text>
                                                {this.renderStepsButton(
                                                    key,
                                                    value,
                                                )}
                                            </View>
                                        </View>
                                    );
                                }
                            }
                        },
                    )}
                    <MaterialButton
                        title="Choose Business Credit Building Steps"
                        style={{
                            backgroundColor: 'blue',
                            height: 30,
                            flex: 1,
                            marginTop: 20,
                            borderRadius: 5,
                        }}
                        buttonPress={goToBusinessSteps}
                    />
                </View>
            </View>
        );
    };

    renderLoanInformation = () => {
        return (
            <View style={styles.card}>
                <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>Loan Information:</Text>
                </View>
                <Text>No Active Loans</Text>
            </View>
        );
    };

    renderProfileInformation = () => {
        return (
            <>
                <View style={{ height: 100, backgroundColor: '#4456ca' }} />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: -45,
                        marginHorizontal: 20,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        borderRadius: 5,
                        elevation: 3,
                        backgroundColor: 'white',
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                    }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 16, color: '#272b43' }}>
                            {this.state.firstName} {this.state.lastName}
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: '#a3a4ac',
                                marginTop: 4,
                            }}>
                            {this.state.email}
                        </Text>
                    </View>
                </View>
            </>
        );
    };

    renderTradeLinesInformation = () => {
        return (
            <View style={styles.card}>
                <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>My Tradelines:</Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text>Product</Text>
                    <Text>Price</Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#ccc',
                    }}
                />

                {this.state.tradelines.length > 0 ? (
                    this.state.tradelines.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                <Text>
                                    {item.company_name} {item.product}
                                </Text>
                                <Text>${item.price + item.charge}</Text>
                            </View>
                        );
                    })
                ) : (
                    <Text>No Ordered Tradelines</Text>
                )}
            </View>
        );
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f1f5f7' }}>
                {this.renderProfileInformation()}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 30,
                        marginBottom: 10,
                        marginHorizontal: 20,
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#272b43',
                        }}>
                        My Information
                    </Text>
                </View>

                <ScrollView decelerationRate={0}>
                    {this.renderServicesInformation()}
                    {this.renderTradeLinesInformation()}
                    {this.renderFinancingInformation()}
                    {this.renderLoanInformation()}
                </ScrollView>

                <MaterialButton
                    title="Sign Out"
                    style={{
                        backgroundColor: '#dc3545',
                        marginTop: 20,
                        borderRadius: 10,
                        marginBottom: 30,
                        marginHorizontal: 20,
                    }}
                    buttonPress={this.props.userLogout}
                />
                <MaterialSnackbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.9,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 10,
    },
    cardTitle: { flex: 2, fontSize: 14, fontWeight: 'bold', color: '#4456ca' },
    cardTitleContainer: {
        width: '100%',
        marginVertical: 10,
    },
});

const mapDispatchToProps = {
    userLogout,
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
