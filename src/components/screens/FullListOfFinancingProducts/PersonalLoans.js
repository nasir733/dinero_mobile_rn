import React, {useEffect, useRef, useState} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';
import {getBusinessData} from '../../../api/business';
import {processUrl} from '../../../services/StringParser';

const {width, height} = Dimensions.get('window');
export const PersonalLoans = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });

    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    useEffect(() => {
        getBusinessData('/business/personal_loan/')
            .then((data) => {
                setData(data.response);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const dataStyle = {
        color: '#000',
        fontSize: (height + width) / 70,
        paddingHorizontal: 20,
        paddingVertical: 5,
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
                        <ScrollView style={{marginVertical: 5}}>
                            <View style={{flex: 1}}>
                                <Text style={titleStyle}>
                                    {item.lender_name}
                                </Text>
                                <Text style={dataStyle}>
                                    Terms: {item.terms}
                                </Text>
                                <Text style={dataStyle}>
                                    Inquiries: {item.inquiries}
                                </Text>
                                <Text style={dataStyle}>
                                    Credit Bureau: {item.credit_bureau}
                                </Text>
                                <Text style={dataStyle}>
                                    States Available: {item.states}
                                </Text>
                                <Text style={dataStyle}>
                                    Min Credit Score: {item.credit_score}
                                </Text>
                                <Text style={dataStyle}>
                                    Min Employment Length Needed:{' '}
                                    {item.emp_length}
                                </Text>
                                <Text style={dataStyle}>
                                    Min Credit History: {item.credit_history}
                                </Text>
                            </View>
                        </ScrollView>

                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL(processUrl(item.url));
                            }}
                            style={{
                                height: 50,
                                backgroundColor: '#4b71fa',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    color: '#FFF',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    padding: 10,
                                }}>
                                Apply Now
                            </Text>
                        </TouchableOpacity>
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
