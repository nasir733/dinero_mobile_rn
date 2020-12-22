import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import Surface from '../../material/Surface';
import Dot from '../../general/Dot';
import YouTube from 'react-native-youtube';
import {YT_API_KEY} from '../../../config';

const dataArr = [
    {
        name: '8 effective credit tips for getting mortgage ready in 2020',
        url: '3iIjWwHIQvU',
    },
    {
        name: 'HOW TO GET APPROVED FOR A HOME LOAN',
        url: 'FNZAqceass4',
    },
    {
        name: 'How Much Does It Actually Cost To Buy A Home',
        url: 'w6JLYOzVS6g',
    },
    {
        name: '🏠FHA vs. Conventional🏠 Which One is Better?',
        url: 'jCyloiNKu40',
    },
    {
        name: 'Chase 5/24 Rule Full Guide in 2020',
        url: 'H2eLIDG6ifE',
    },
    {
        name:
            'How To Get 100% Approved for Business Credit Cards For New Business',
        url: '81lrxXX5cNY',
    },
    {
        name: 'Five Tips To Boost Your Credit Score In 2020',
        url: '1Qwm-_Y8L50',
    },
    {
        name: 'The 5 BEST Credit Cards For Beginners in 2020',
        url: 'SPxBgdHs9sY',
    },
    {
        name: 'How I got my Credit Score from 0 to 792',
        url: 'UuWHuD_rYHw',
    },
    {
        name: 'How To Get 100% Instant Approval For Credit Cards',
        url: 'JklS6g8FX2M',
    },
    {
        name: 'How To Get A Business Credit Card Without A Business (2020)',
        url: '1fp5ETMsJjs',
    },
    {
        name: 'Business Credit Cards Explained',
        url: 'kV7ZrezfTs0',
    },
    {
        name: 'Credit Scores Fully Explained (Plus ONE Common Misconception)',
        url: 'doyHWqIN8xc',
    },
    {
        name: 'How To Fix A BAD Credit Score ASAP',
        url: 'N6QdxWyP8HI',
    },
    {
        name:
            'BEST CARDS DURING CREDIT REPAIR || HOW TO GET PRIMARY TRADELINES || CREDIT REPAIR 2020',
        url: 'wItww0k6BHg',
    },
    {
        name: 'HOW TO REPAIR YOUR CREDIT || HOW TO REMOVE ALL NEGATIVE ITEMS',
        url: 'aOI1oYSuP0c',
    },
    {
        name: 'How to Negotiate a Car Deal (And Save Big)',
        url: 'rwOcAHTH4Os',
    },
    {
        name: 'How to Get a Car Loan (The Right Way)',
        url: 'https://youtu.be/C3ma_enSYm8',
    },
];

const {width, height} = Dimensions.get('window');
export const PersonalCreditCourse = () => {
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
                                        play={false}
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
