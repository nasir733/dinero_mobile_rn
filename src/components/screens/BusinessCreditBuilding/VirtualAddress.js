import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Linking,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        heading: 'Do You Need A Virtual Adress?',
        description:
            'We Recommend Davinci Virutal Offices Solutions As Our First Choice',
    },
];

const {width, height} = Dimensions.get('window');

function VirtualAddress() {
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
                            justifyContent: 'center',
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height * 0.3,
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
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: (height + width) / 90,
                                        paddingLeft: 20,
                                        paddingRight: 5,
                                        marginTop: 20,
                                    }}>
                                    {item.description}
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(
                                        'https://www.davincivirtual.com/?rfsn=3351103.f03a08',
                                    );
                                }}
                                style={{
                                    height: 50,
                                    backgroundColor: '#4b71fa',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 5,
                                }}>
                                <Text
                                    style={{color: '#FFF', fontWeight: 'bold'}}>
                                    Click Here To Get Your Virtual Address
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

export {VirtualAddress};
