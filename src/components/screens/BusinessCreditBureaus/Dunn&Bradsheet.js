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
import YouTube from 'react-native-youtube';
import {YT_API_KEY} from '../../../config';

const dataArr = [
    {
        link: 'https://www.youtube.com/watch?v=vQ9D2ZldSQI&feature=emb_title',
        heading: 'Watch The Video On Why & How To Use The DNB I Update Tool',
        buttonText: 'Go To I Update Tool',
        webLink:
            'https://iupdate.dnb.com/iUpdate/viewiUpdateHome.htm;jsessionid=F49771F1A0596D0F0034D70FDDB1E39B.app1',
        youtubeUrl: 'vQ9D2ZldSQI',
    },
    {
        link: 'https://www.youtube.com/watch?v=Esp9xezwn0o&feature=emb_title',
        heading: 'Watch The Video To Learn About Dunn & Bradstreet',
        youtubeUrl: 'Esp9xezwn0o',
    },
    {
        link: 'https://www.youtube.com/watch?v=2LCjkB7A-Dg&feature=emb_title',
        heading:
            "Watch The Video To Learn About Dunn & Bradstreet's Paydex Score",
        youtubeUrl: '2LCjkB7A-Dg',
    },
];

const {width, height} = Dimensions.get('window');

function DunnBradsheet() {
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
                {'Getting Established With Dunn & Bradstreet'}
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
                                // height: height * 0.3,
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
                            {item.buttonText && (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(item.webLink);
                                    }}
                                    style={{
                                        marginTop: 5,
                                        height: 50,
                                        backgroundColor: '#4b71fa',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            color: '#FFF',
                                            fontWeight: 'bold',
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

export {DunnBradsheet};
