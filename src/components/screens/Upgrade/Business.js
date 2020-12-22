import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Linking,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';
import appConfig from '../../../config';

const dataArr = [
    {
        image: `${appConfig.appWebsite}/static/images/viabill.jpg`,
        heading:
            'Buy Now. Pay Later. 4 Interest Free Installments. 0% Interest',
        description:
            'Click Below To Do A Down Payment Of $72.50 & Spread Your Payments Bi Weekly At $300 Per Every Two Weeks Over The Next 2 Months',
    },
    {
        image: `${appConfig.appWebsite}/static/images/klarna-og.jpg`,
        heading: 'Credit Builder Plus',
        description:
            'Purchase Now & Pay Over The Next 12-36 Months At 0%-10% Interest',
    },
    {
        image: `${appConfig.appWebsite}/static/images/fundbox.jpg`,
        heading: 'Fundbox Pay Up To 52 week financing',
        description:
            'Click Below To Purchase Now & Pay Over The Next 52 Weeks With 1-2% Interest Per Month',
    },
    {
        image: `${appConfig.appWebsite}/static/images/behalf.jpeg`,
        heading: 'Payments Over 6 Months 1% Interest Per Month',
        description:
            'Click Here To Purchase Now & Pay 1-2% Interest Over The Next 4-6 Months',
    },
    {
        image:
            'https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png',
        heading:
            'Business Builder Program Monthly Package Monthly Payments Of $159.99',
        description: 'Click Button Below To Make Monthly Payments Of $159.99',
        paypalBtn: true,
    },
    {
        image:
            'https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png',
        heading:
            'Business Builder Program Annual Package One Payment Of $1,499',
        description: 'Click Button Below To Make $1,499 Payment',
        paypalBtn: true,
    },
];

const {width, height} = Dimensions.get('window');

function Business() {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        console.log('viewableItems ----> ', viewableItems);
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    const imagewidth = 220;
    return (
        <View style={{flex: 1}}>
            {/* <Image style={{ width: '100%', height: '100%', position: 'absolute' }}
                source={require("../../../assets/dinero/logo.png")} /> */}
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
                    'Our Different Financing Plans\nWe Have No Credit Check 0% Interest Offers For You'
                }
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
                                        source={{uri: item.image}}
                                    />
                                </View>
                                <View style={{alignItems: 'center', flex: 1}}>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            opacity: 0.5,
                                            textAlign: 'center',
                                            fontWeight: '600',
                                            fontSize: (height + width) / 80,
                                            padding: (height + width) / 130,
                                        }}>
                                        {item.heading}
                                    </Text>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            textAlign: 'center',
                                            fontSize: (height + width) / 85,
                                            padding: (height + width) / 50,
                                        }}>
                                        {item.description}
                                    </Text>
                                </View>
                            </View>

                            {item.paypalBtn ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://www.paypal.com/cgi-bin/webscr',
                                        );
                                    }}
                                    style={{
                                        // marginTop: 5,
                                        marginBottom: 10,
                                        height: 50,
                                        marginLeft: 5,
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 150, height: '100%'}}
                                        source={{
                                            uri:
                                                'https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif',
                                        }}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://app.behalf.com/invite/R4xfcKmU',
                                        );
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
                                        }}>
                                        Sign Up For The Service
                                    </Text>
                                </TouchableOpacity>
                            )}
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
}

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

export {Business};
