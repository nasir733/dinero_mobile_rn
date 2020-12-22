import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        image:
            'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        heading: 'How To Get Your Business Back In Good Standing',
        description:
            'Your state will require you to file an Annual Report in order to keep your LLC in compliance, your contact information updated and your LLC in good standing. Fees and due dates vary by state.',
    },
];

const {width, height} = Dimensions.get('window');

function BusinessBackStanding() {
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
                                height: height * 0.6,
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

export {BusinessBackStanding};
