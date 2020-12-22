import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        image:
            'https://s3.amazonaws.com/public-304257298154/AH/cms/features/NAB_SalesPartnerPortal_PaymentsHub_Image_10.22.jpg',
        heading: 'Payment Hub Virtual Terminal',
        description:
            'A free virtual terminal so they can perform transactions from right within their web browsers.',
    },
    {
        image:
            'https://s3.amazonaws.com/public-304257298154/AH/img/resources/pa-PASmartTerminal.jpg',
        heading: 'Pay Anywhere Smart Terminal W/ Edge',
        description:
            'THE Payanywhere SMART TERMINAL IS THE IDEAL SOLUTION FOR:\nTraditional merchants looking to add mobile payment acceptance to their business. You can offer it to your merchants for free with a nominal software fee of just $9.95 per month per device.',
    },
    {
        image:
            'https://s3.amazonaws.com/public-304257298154/AH/img/resources/pa-smartpos.jpg',
        heading: 'Payanywhere Smart POS',
        description:
            'THE Payanywhere SMART POS IS THE IDEAL SOLUTION FOR:\nSoft-Goods and Hospitality merchants looking for a cost-effective, space-saving payment solution for their countertops.',
    },

    {
        image:
            'https://s3.amazonaws.com/public-304257298154/AH/img/resources/pa-1.jpg',
        heading: '2-in-1 Credit Card Reader',
        description:
            'Pair with your smartphone or tablet to accept EMV chip cards and magstripe cards. Compatible with iOS, Android, and desktop computers.\nFree (1) Additional readers $29.95/each',
    },
];

const {width, height} = Dimensions.get('window');

function MerchantAccount() {
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
                            marginTop: height * 0.05,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height * 0.65,
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
                                <ScrollView style={{marginBottom: 10}}>
                                    <View style={{flex: 1}}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: (height + width) / 60,
                                                paddingLeft: 20,
                                                marginTop: 10,
                                            }}>
                                            {item.heading}
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: (height + width) / 70,
                                                padding: 20,
                                            }}>
                                            {item.description}
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(
                                        'https://www.appsubmit.com/?source=47889.4',
                                    );
                                }}
                                style={{
                                    height: 50,
                                    backgroundColor: '#4b71fa',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{color: '#FFF', fontWeight: 'bold'}}>
                                    Sign Up For The Service & Get A $100 Bonus
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

export {MerchantAccount};
