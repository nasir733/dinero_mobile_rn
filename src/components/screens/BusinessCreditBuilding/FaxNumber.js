import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import Surface from '../../material/Surface';
import Dot from '../../general/Dot';
// import { goToLoggedView } from '../../APIs/business';

const dataArr = [
    {
        heading: 'Fax Number Standard Plan',
        bullets: ['Send 150 pages/mo', 'Receive 150 pages/mo'],
    },
];

const optionType1 = [
    {
        text: '888 (Toll Free Prefix)',
        value: '888 (Toll Free Prefix)',
    },
    {
        text: '877 (Toll Free Prefix)',
        value: '877 (Toll Free Prefix)',
    },
    {
        text: '866 (Toll Free Prefix)',
        value: '866 (Toll Free Prefix)',
    },
    {
        text: '855 (Toll Free Prefix)',
        value: '855 (Toll Free Prefix)',
    },
    {
        text: '844 (Toll Free Prefix)',
        value: '844 (Toll Free Prefix)',
    },
    {
        text: '833 (Toll Free Prefix)',
        value: '833 (Toll Free Prefix)',
    },
    {
        text: '800 (Toll Free Prefix)',
        value: '800 (Toll Free Prefix)',
    },
];
const {width, height} = Dimensions.get('window');

function FaxNumber() {
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
                                height: height * 0.75,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: (height + width) / 60,
                                        paddingLeft: 20,
                                        paddingRight: 5,
                                        marginTop: 10,
                                    }}>
                                    {item.heading}
                                </Text>
                                <View style={{flex: 1}}>
                                    {item.bullets.map((bullet) => (
                                        <View style={{flexDirection: 'row'}}>
                                            <Text
                                                style={{
                                                    fontSize:
                                                        (height + width) / 30,
                                                    paddingLeft: 20,
                                                }}>
                                                .
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontSize:
                                                        (height + width) / 100,
                                                    paddingTop: 30,
                                                    paddingLeft: 20,
                                                    maxWidth: '70%',
                                                }}>
                                                {bullet}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            <TouchableOpacity
                                // onPress={() => {
                                //     goToLoggedView('/business/fax-number/');
                                // }}
                                style={{
                                    height: 50,
                                    backgroundColor: '#4b71fa',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 5,
                                }}>
                                <Text
                                    style={{color: '#FFF', fontWeight: 'bold'}}>
                                    Click Here To Get Fax Number
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

export {FaxNumber};
