import React, {useContext, useRef, useState, Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        product:
            'Vendors To Begin With (Watch Videos On Amazing Tradelines To Fast Track Business Credit Building)',
        path: 'VendorsToBegin',
    },
    {
        product: 'Once You Have 5 Accounts Reporting Add These Vendors',
        path: 'Have5Accounts',
    },
    {
        product: 'Starter Vendors',
        path: 'StarterVendors',
    },
    {
        product: 'Store Credit Vendors',
        path: 'StoreCreditVendors',
    },
    {
        product: 'Revolving Vendors',
        path: 'RevolvingVendors',
    },
    {
        product: 'Business Credit Cards (No Personal Gaurantee)',
        path: 'BusinessCreditCard',
    },
];

const {width, height} = Dimensions.get('window');
function BusinessCredit(props) {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) =>
        setPage(viewableItems.viewableItems[0]?.index),
    );
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0.5}}>
                <Text
                    style={{
                        paddingTop: 10,
                        paddingHorizontal: 30,
                        fontSize: 24,
                        textAlign: 'left',
                    }}>
                    Overview
                </Text>
                <Text
                    style={{
                        paddingHorizontal: 30,
                        paddingTop: 10,
                        fontSize: (height + width) / 90,
                        textAlign: 'justify',
                    }}>
                    For The Starter Vendors I Would Start With Pufferweb, Fleet
                    Cards USA, Behalf, Brex Corporate Card, Uline, & Best
                    Merchant Card Services because these vendors report to each
                    Business Credit Bureau Thus Giving You 3 Payment Experiences
                    From One Company. I would add summa office supplies, uline,
                    grainger, quill, strategic network solutions, pufferweb, and
                    a gas card from fleet cards USA, then once I have 5+
                    tradelines reporting I would get amazon, office depot. I
                    would leverage puffer web to get as many tradelines as
                    possible to report. Once you have 10+ Tradelines with limits
                    of $10,000+ the world is very open to you. See all the
                    vendors you can begin getting. Also, begin getting business
                    credit cards that are listed below as well such as Walmart,
                    Sams Club and Lowe’s.
                </Text>
            </View>
            <View style={{flex: 0.6, alignItems: 'center', marginTop: 20}}>
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
                                marginTop: 20,
                            }}>
                            <Surface
                                style={{
                                    backgroundColor: '#FFF',
                                    height: height / 3,
                                    width: itemwidth + itemwidtextend - 25,
                                }}>
                                <View style={{flex: 1}}>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                textAlign: 'center',

                                                fontSize: (height + width) / 80,
                                                padding: (height + width) / 50,
                                                fontWeight: '600',
                                                alignSelf: 'center',
                                            }}>
                                            {item.product}
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        props.navigation.navigate(item.path);
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
                                        Click To See The Details
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
        </View>
    );
}

function Dot({dataArr, page}) {
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
                            borderRadius: 20,
                        }}
                    />
                );
            })}
        </View>
    );
}

export {BusinessCredit};
