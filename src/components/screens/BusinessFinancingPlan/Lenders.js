import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        product: 'Personal Credit Cards',
        path: 'PersonalCreditCards',
    },
    // {
    //     product: "Corporate Business Credit",
    //     path: "PersonalCreditCards"

    // },
    {
        product: 'Personal Loan',
        path: 'PersonalLoan',
    },
    {
        product: 'No Credit Check Financing',
        path: 'NoCreditCheck',
    },
    // {
    //     product: "Equipment Financing",
    //     path: "PersonalCreditCards"

    // },
    // {
    //     product: "Starter Vendors",
    //     path: "PersonalCreditCards"

    // },
    {
        product: 'Lenders You Do Not Currently Qualify',
        path: 'NotQualifyingLenders',
    },
];

const {width, height} = Dimensions.get('window');

function Lenders(props) {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) =>
        setPage(viewableItems.viewableItems[0].index),
    );
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
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
                            marginTop: height / 6,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height / 3,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
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
                                        {'Financing Products You Qualify For'}
                                    </Text>
                                    <Text
                                        style={{
                                            marginTop: 50,
                                            color: '#000',
                                            textAlign: 'center',
                                            fontSize: (height + width) / 50,
                                            padding: (height + width) / 50,
                                            fontWeight: 'bold',
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
                                    height: 60,
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
                                    Click To See The Specific Financing Products
                                    You Qualify For{' '}
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

export {Lenders};
