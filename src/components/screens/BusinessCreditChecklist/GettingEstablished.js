import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MaterialButton from '../../material/MaterialButton';
import { navigate } from '../../../services/NavigationService';

export class GettingEstablished extends Component {
    state = {
        data: [
            {
                title: 'Get Established With Experian Business',
                route: 'BusinessBuildingBureausStack',
                params: { screen: 'ExperianBusiness' },
            },
            {
                title: 'Get Established With Dunn & Bradstreet',
                route: 'BusinessBuildingBureausStack',
                params: { screen: 'DunnBradsheet' },
            },
            {
                title: 'Get Established With Equifax Business',
                route: 'BusinessBuildingBureausStack',
                params: { screen: 'EquifixBussiness' },
            },
        ],
    };

    renderItem = (item) => {
        return (
            <MaterialButton
                buttonPress={() => navigate(item.item.route, item.item.params)}
                style={{ backgroundColor: 'blue', marginVertical: 5 }}
                title={item.item.title}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                />
                <MaterialButton
                    buttonPress={this.props.markEstablished}
                    style={{ backgroundColor: 'green', marginVertical: 5 }}
                    title={'Mark As Complete'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 20,
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
