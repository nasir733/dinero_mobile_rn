import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import YouTube from 'react-native-youtube';
import {YT_API_KEY} from '../../../config';

import Surface from '../../material/Surface';
// import {Dot} from '../noitem/NoItemComponents';

const dataArr = [
    {
        link: 'https://www.youtube.com/watch?v=bAu_5C4CLW0&feature=emb_title',
        heading:
            'Watch The Video To Learn About Getting Established With Experian Business Credit',
        youtubeUrl: 'bAu_5C4CLW0',
    },
    {
        link: 'https://www.youtube.com/watch?v=MofrNp4i6eA&feature=emb_titlee',
        heading: 'Watch The Video To Learn About Establishing A Bin Number',
        youtubeUrl: 'MofrNp4i6eA',
    },
];

const {width, height} = Dimensions.get('window');

function ExperianBusiness() {
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

    // const playerRef = useRef(null);
    // const [playing, setPlaying] = useState(true);

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
                {'Getting Established With Business Experian'}
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
                                height: height * 0.3,
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
                                        {item.heading}
                                    </Text>
                                </View>
                            </View>
                            <YouTube
                                apiKey={YT_API_KEY}
                                videoId={item.youtubeUrl} // The YouTube video ID
                                // play // control playback of video with true/false
                                // fullscreen // control whether the video should play in fullscreen or inline
                                // loop // control whether the video should loop when ended
                                style={{alignSelf: 'stretch', height: 300}}
                            />
                            {/*<TouchableOpacity*/}
                            {/*    onPress={() => {*/}
                            {/*        Linking.openURL(item.link)*/}
                            {/*    }*/}
                            {/*    }*/}
                            {/*    style={{*/}
                            {/*        height: 50,*/}
                            {/*        backgroundColor: '#4b71fa',*/}
                            {/*        alignItems: 'center',*/}
                            {/*        justifyContent: 'center',*/}
                            {/*    }}>*/}
                            {/*    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Watch The Video</Text>*/}
                            {/*</TouchableOpacity>*/}
                            {/*<TouchableOpacity*/}
                            {/*    onPress={() => {*/}
                            {/*        Linking.openURL("https://app.behalf.com/invite/R4xfcKmU")*/}
                            {/*    }*/}
                            {/*    }*/}
                            {/*    style={{*/}
                            {/*        marginTop: 5,*/}
                            {/*        height: 50,*/}
                            {/*        backgroundColor: '#4b71fa',*/}
                            {/*        alignItems: 'center',*/}
                            {/*        justifyContent: 'center',*/}
                            {/*    }}>*/}
                            {/*    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Sign Up For The Service</Text>*/}
                            {/*</TouchableOpacity>*/}
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

export {ExperianBusiness};
