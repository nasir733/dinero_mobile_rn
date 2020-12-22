import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {goToLoggedView} from '../../../api/business';
import TokenService from '../../../services/TokenService';
import RequestsService from '../../../services/RequestService';

export class BusinessCreditChecklist extends Component {
    state = {
        data: [
            {
                title: 'Step 1: Business Credibility',
                done: false,
                url: '/business/business_credibility_checklist/',
            },
            {
                title: 'Step 2: Establish Business Reports',
                done: false,
                url: '/business/business_credibility_establish/',
            },
            {
                title: 'Step 3: Start Building - Tier 1',
                done: false,
                url: '/business/business-credit-builder-tracker/',
            },
            {
                title: 'Step 4: Monitor Business Reports',
                done: false,
                url: '/business/business-credit-monitoring/',
            },
            {
                title: 'Step 5: Building Credit - Tier 2',
                done: false,
                url: '/business/business-credit-builder-tracker/',
            },
            {
                title: 'Step 6: Advanced Building - Tier 3',
                done: false,
                url: '/business/business-credit-builder-tracker/',
            },
            {
                title: 'Step 7: Revolving Accounts - Tier 4',
                done: true,
                url: '/business/business-credit-builder-tracker/',
            },
        ],
    };

    componentDidMount() {
        const getChecklistData = async () => {
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
            this.setState({data});
        };
        getChecklistData();
    }

    renderItem = (item) => {
        return (
            <View style={styles.item}>
                <View style={styles.flexRow}>
                    {item.item.done ? (
                        <Icon name="done" color="green" />
                    ) : (
                        <Icon name="close" color="red" />
                    )}
                    <TouchableOpacity
                        onPress={() => {
                            goToLoggedView(item.item.url);
                        }}>
                        <Text style={styles.title}>{item.item.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.wrapper}>
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
        backgroundColor: '#eaeaea',
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
