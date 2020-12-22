import React, {useRef, useState, useEffect} from 'react';
import {
    View,
    Text,
    Dimensions,
    FlatList,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import Surface from '../../material/Surface';
import {getBusinessData} from '../../../api/business';

const {width, height} = Dimensions.get('window');
export const StarterVendorList = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getBusinessData('/business/sarter_vendor_list/')
            .then((data) => {
                setData(data.response);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });

    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;

    const dataStyle = {
        color: '#000',
        fontSize: (height + width) / 70,
        paddingHorizontal: 20,
    };

    const titleStyle = {
        marginTop: 10,
        color: '#000',
        // textAlign: 'center',
        fontWeight: '600',
        fontSize: (height + width) / 40,
        padding: 20,
    };

    const overlap = () => (
        <View style={{width: (itemwidth - itemwidtextend) / 2, height: 100}} />
    );

    const renderItem = ({item, index}) => {
        return (
            <View
                style={{
                    width: itemwidth + itemwidtextend,
                    alignItems: 'center',
                    marginTop: height * 0.05,
                }}>
                <Surface
                    style={{
                        backgroundColor: '#FFF',
                        height: height * 0.75,
                        width: itemwidth + itemwidtextend - 25,
                    }}>
                    <View style={{flex: 1}}>
                        <ScrollView style={{marginBottom: 10}}>
                            <View style={{flex: 1}}>
                                <Text style={titleStyle}>{item.name}</Text>
                                <Text style={dataStyle}>
                                    Reports to: {item.report_to}
                                </Text>
                                <Text style={dataStyle}>
                                    Terms: {item.terms}
                                </Text>
                                <Text style={dataStyle}>
                                    Monthly Payment: {item.monthly_payment}
                                </Text>
                                <Text style={dataStyle}>
                                    Estimated Terms: {item.estimated_terms}
                                </Text>
                                <Text style={dataStyle}>
                                    Estimated Amount: {item.estimated_amount}
                                </Text>
                                <Text style={dataStyle}>
                                    Payment Terms: {item.payment_terms}
                                </Text>
                                <Text />
                                <Text style={dataStyle}>
                                    Description: {item.description}
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </Surface>
            </View>
        );
    };

    if (isLoading) {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'center',
                }}>
                <ActivityIndicator />
                <Text style={{textAlign: 'center'}}>Loading</Text>
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                ref={flatlistRef}
                pagingEnabled={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={itemwidth + itemwidtextend}
                ListHeaderComponent={overlap}
                ListFooterComponent={overlap}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                extraData={data}
                renderItem={renderItem}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                keyExtractor={(item, index) => index.toString()}
            />
            <View
                style={{
                    position: 'absolute',
                    height: 80,
                    left: 20,
                    right: 20,
                    bottom: 0,
                    paddingTop: 20,
                }}>
                <Text style={{textAlign: 'center'}}>
                    {page + 1}/{data.length}
                </Text>
            </View>
        </View>
    );
};
