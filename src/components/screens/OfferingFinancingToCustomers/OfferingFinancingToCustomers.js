import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        name: 'Viabill',
        image: require('../../../assets/dinero/offeringFinancing/viabill.jpg'),
        url: 'https://viabill.com/',
    },
    {
        name: 'Klarna',
        image: require('../../../assets/dinero/offeringFinancing/klarna-og.jpg'),
        url: 'https://www.klarna.com/us/business/',
    },
    {
        name: 'Quadpay',
        image: require('../../../assets/dinero/offeringFinancing/quadpay.jpg'),
        url: 'https://www.quadpay.com/for-businesses/',
    },
    {
        name: 'Sezzle',
        image: require('../../../assets/dinero/offeringFinancing/sezzle.jpg'),
        url: 'https://sezzle.com/merchants',
    },
    {
        name: 'Fundbox',
        image: require('../../../assets/dinero/offeringFinancing/fundbox.png'),
        url: 'https://fundboxpay.com/get-paid',
    },
    {
        name: 'Paypal',
        image: require('../../../assets/dinero/offeringFinancing/paypal.png'),
        url: 'https://www.paypal.com/us/webapps/mpp/promotional-financing',
    },
    {
        name: 'Behalf',
        image: require('../../../assets/dinero/offeringFinancing/behalf.png'),
        url: 'https://app.behalf.com/users/signup/merchant',
    },
    {
        name: 'Afterpay',
        image: require('../../../assets/dinero/offeringFinancing/Afterpay-Banner-19-MB.jpg'),
        url: 'https://www.afterpay.com/for-retailers',
    },
    {
        name: 'Affirm',
        image: require('../../../assets/dinero/offeringFinancing/affirm_320x180.png'),
        url: 'https://www.affirm.com/business',
    },
];

const {width, height} = Dimensions.get('window');
export const OfferingFinancingToCustomers = () => {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    const imagewidth = 220;
    return (
        <View style={{flex: 1}}>
            <Text
                style={{
                    marginTop: 10,
                    color: '#000',
                    opacity: 0.5,
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 20,
                }}>
                {/*{`Our Different Financing Plans\nWe Have No Credit Check 0% Interest Offers For You`}*/}
            </Text>
            <FlatList
                initialScrollIndex={page}
                scrollToIndex={page}
                ref={flatlistRef}
                pagingEnabled={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={itemwidth + itemwidtextend}
                ListHeaderComponent={() => (
                    <View
                        style={{
                            width: (itemwidth - itemwidtextend) / 2,
                            height: 100,
                        }}
                    />
                )}
                ListFooterComponent={() => (
                    <View
                        style={{
                            width: (itemwidth - itemwidtextend) / 2,
                            height: 100,
                        }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataArr}
                extraData={dataArr}
                renderItem={({item, index}) => (
                    <View
                        style={{
                            width: itemwidth + itemwidtextend,
                            alignItems: 'center',
                            // backgroundColor: '#000',
                            marginTop: 0,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height / 1.8,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
                                <View
                                    style={{
                                        height: height / 4,
                                        backgroundColor: '#FFF',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image
                                        style={{width: '100%', height: '100%'}}
                                        source={item.image}
                                    />
                                </View>
                                <View style={{alignItems: 'center', flex: 1}}>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            textAlign: 'center',
                                            fontSize: (height + width) / 85,
                                            padding: (height + width) / 50,
                                        }}>
                                        Click The Button Below To Offer{' '}
                                        {item.name} To Your Customers{' '}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(item.url);
                                }}
                                style={{
                                    height: 50,
                                    backgroundColor: '#4b71fa',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{color: '#FFF', fontWeight: 'bold'}}>
                                    Offer {item.name} To Your Customers
                                </Text>
                            </TouchableOpacity>
                        </Surface>
                    </View>
                )}
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
                <Dot dataArr={dataArr} page={page} />
            </View>
        </View>
    );
};

function Dot({dataArr, page}) {
    // console.warn(page)
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {dataArr.map((x, y) => {
                return (
                    <View
                        key={y}
                        style={{
                            height: 10,
                            width: 10,
                            marginRight: 10,
                            backgroundColor: page === y ? '#4b71fa' : '#FFF',
                            // borderWidth: 1,
                            // borderColor: '#d3d3d3',
                            borderRadius: 20,
                        }}
                    />
                );
            })}
        </View>
    );
}
