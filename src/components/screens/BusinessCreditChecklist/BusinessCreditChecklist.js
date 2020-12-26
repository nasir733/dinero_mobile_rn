import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import TokenService from '../../../services/TokenService';
import RequestsService from '../../../services/RequestService';
import { BusinessCredibility } from './BusinessCredibility';
import { GettingEstablished } from './GettingEstablished';
import { goToLoggedView } from '../../../api/business';
import { navigate } from '../../../services/NavigationService';

export class BusinessCreditChecklist extends Component {
    markEstablished = async () => {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.post(
            '/business/checklist/',
            { established: !this.state.data[1].done },
            authentication,
        );
        await this.getChecklistData();
    };

    state = {
        selected: null,
        data: [
            {
                title: 'Step 1: Business Credibility',
                done: false,
                component: () => <BusinessCredibility />,
            },
            {
                title: 'Step 2: Establish Business Reports',
                done: false,
                component: () => (
                    <GettingEstablished
                        markEstablished={this.markEstablished}
                    />
                ),
            },
            {
                title: 'Step 3: Start Building - Tier 1',
                done: false,
                component: () => {
                    navigate('BusinessCreditBuilderTracker');
                },
            },
            {
                title: 'Step 4: Monitor Business Reports',
                done: false,
                url: '/business/business-credit-monitoring/',
            },
            {
                title: 'Step 5: Building Credit - Tier 2',
                done: false,
                component: () => {
                    navigate('BusinessCreditBuilderTracker');
                },
            },
            {
                title: 'Step 6: Advanced Building - Tier 3',
                done: false,
                component: () => {
                    navigate('BusinessCreditBuilderTracker');
                },
            },
            {
                title: 'Step 7: Revolving Accounts - Tier 4',
                done: false,
                component: () => {
                    navigate('BusinessCreditBuilderTracker');
                },
            },
        ],
    };

    getChecklistData = async () => {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.get(
            '/business/checklist/',
            authentication,
        );
        console.log(response.data);
        const data = [...this.state.data];
        data[0].done = response.data.steps_done;
        data[1].done = response.data.othersteps.established;
        data[2].done = response.data.othersteps.tier1;
        data[3].done = response.data.othersteps.monitor;
        data[4].done = response.data.othersteps.tier2;
        data[5].done = response.data.othersteps.tier3;
        data[6].done = response.data.othersteps.tier4;

        this.setState({ data });
    };

    async componentDidMount() {
        await this.getChecklistData();
    }

    async componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS,
    ) {
        // await this.getChecklistData();
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
                                if (item.item.component) {
                                    this.selectItem(item.index);
                                } else {
                                    goToLoggedView(item.item.url);
                                }
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
            </View>
        );
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
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
    subcategory: {
        paddingLeft: 20,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
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
        backgroundColor: '#eaeaea',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 2,
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
