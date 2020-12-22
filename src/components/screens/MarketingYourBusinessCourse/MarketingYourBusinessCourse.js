import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import Surface from '../../material/Surface';
import Dot from '../../general/Dot';
import YouTube from 'react-native-youtube';
import {YT_API_KEY} from '../../../config';

const dataArr = [
    {
        name: 'Return On Investment From Marketing',
        url: '1vRx5TYTmYs',
    },
    {
        name: 'Lifetime Value Of A Customer',
        url: 'GPSysUOV240',
    },
    {
        name: 'Cost Per Acquisition',
        url: 'mrT3UHrWDp0',
    },
    {
        name: 'Facebook Ads',
        url: '1iZl0bCyDPQ',
    },
    {
        name: 'Search Engine Optimization',
        url: 'f_n0_cxWqSs',
    },
    {
        name: 'Google Advertising',
        url: 'YkDXgJLpLVI',
    },
    {
        name: 'Google Remarketing',
        url: '4lE9WKMhxVY',
    },
    {
        name: 'Learn About Youtube Advertising',
        url: 'xVnAkMoiuXA',
    },
];

const {width, height} = Dimensions.get('window');
export const MarketingYourBusinessCourse = () => {
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
                }}
            />
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
                                        height: height / 8,
                                        backgroundColor: '#FFF',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            opacity: 0.5,
                                            textAlign: 'center',
                                            fontWeight: '600',
                                            fontSize: (height + width) / 80,
                                        }}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={{alignItems: 'center', flex: 1}}>
                                    <YouTube
                                        apiKey={YT_API_KEY}
                                        // play={false}
                                        videoId={item.url}
                                        style={{
                                            alignSelf: 'stretch',
                                            height: 300,
                                        }}
                                    />
                                </View>
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
};
