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
            'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        step: 1,
        heading: 'Do You Have A Domain Name For Your Website?',
        description:
            'Your Business Needs To Have A Domain Name In Order For You To Get A Website & Professional Email Address. These Are Required In Order For You To Look Credible & Start Being Able To Get Business Credit Without Leveraging Your Personal Credit.',
        buttonText: 'Click Here To Get Your Domian Name',
    },
];

const {width, height} = Dimensions.get('window');

function Domain() {
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
                                                marginTop: 10,
                                                color: '#000',
                                                // textAlign: 'center',
                                                fontWeight: '600',
                                                fontSize: (height + width) / 40,
                                                padding: 20,
                                            }}>{`Step ${item.step}`}</Text>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: (height + width) / 60,
                                                paddingLeft: 20,
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
                            {item.buttonText && (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://www.millennialbusinessbuildersllc.com/products/domain-registration',
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
                                            textAlign: 'center',
                                        }}>
                                        {item.buttonText}
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
            {dataArr.length > 1 &&
                dataArr.map((x, y) => {
                    return (
                        <View
                            key={y}
                            style={{
                                height: 10,
                                width: 10,
                                marginRight: 10,
                                backgroundColor:
                                    page === y ? '#4b71fa' : '#FFF',
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

export {Domain};
