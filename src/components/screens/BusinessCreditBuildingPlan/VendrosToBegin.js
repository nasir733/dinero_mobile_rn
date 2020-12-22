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
import appConfig from '../../../config';

const data = [
    {
        Name: 'Uline',
        'Who The Vendor Reports Too': 'Experian & Dun & Bradstreet',
        buttonText: 'Apply Now',
        link: 'https://www.uline.com/',
    },
    {
        Name: 'Summa Office Supplies',
        'Who The Vendor Reports Too': '	Experian',
        buttonText: 'Apply Now',
        link: 'https://summaofficesupplies.com/',
    },
    {
        Name: 'Grainger',
        'Who The Vendor Reports Too': 'Dun & Bradstreet',
        buttonText: 'Call Them To Apply @ (1-800-472-4643)',
        link: `${appConfig.appWebsite}/business/business-plan-1/#`,
    },
    {
        Name: 'Quill',
        'Who The Vendor Reports Too': 'Dun & Bradstreet',
        buttonText: 'Apply Now',
        link: 'https://www.quill.com/',
    },
    {
        Name: 'Strategic Network Solutions',
        'Who The Vendor Reports Too': 'Experian & Credit Safe',
        buttonText: 'Apply Now',
        link: 'https://stntsol.com/register',
    },
    {
        Name: 'Puffer Web',
        'Who The Vendor Reports Too': 'Experian, Dun & Bradstreet, & Equifax',
        buttonText: 'Apply Now',
        link: 'https://www.pufferweb.com/?ref=329',
        youtube: 'https://youtu.be/wUvu3iMr6Uw',
    },
    {
        Name: 'Fleet Cards USA',
        'Who The Vendor Reports Too': 'Experian, Dun & Bradstreet, & Equifax',
        buttonText: 'Apply Now',
        link: 'https://fleetcardsusa.com/',
        youtube: 'https://youtu.be/nbG1F5eUsOY',
    },
    {
        Name: 'Behalf',
        'Who The Vendor Reports Too': 'Experian, Dun & Bradstreet, & Equifax',
        buttonText: 'Apply Now',
        link: 'https://behalf.com/',
        youtube: 'https://youtu.be/P89HddmtkSo',
    },
    {
        Name: 'Brex Corporate Card',
        'Who The Vendor Reports Too': 'Experian, Dun & Bradstreet, & Equifax',
        buttonText: 'Apply Now',
        link: 'https://brex.com/',
        youtube: 'https://youtu.be/eMzim0IKvVY',
    },
    {
        Name: 'Laughlin & Associates',
        'Who The Vendor Reports Too': 'Experian',
        buttonText: 'Apply Now',
        link: 'https://laughlinusa.com/',
    },
    {
        Name: 'Ecredable',
        'Who The Vendor Reports Too': 'Credit Safe & Equifax Business',
        buttonText: 'Apply Now',
        link: 'https://business.ecredable.com/BCIC?affiliateid=138',
        youtube: 'https://youtu.be/7P4KrakcgS0',
    },
    {
        Name: 'Best Merchant Card Services',
        'Who The Vendor Reports Too': 'Experian Business',
        buttonText: 'Apply Now',
        link: 'http://bestmerchantcardservices.com/',
        youtube: 'https://youtu.be/Bq5J0V17v7M',
    },
];

const {width, height} = Dimensions.get('window');

const VendorsToBegin = (props) => {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) =>
        setPage(viewableItems.viewableItems[0]?.index),
    );
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
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
                data={data}
                extraData={data}
                renderItem={({item, index}) => (
                    <View
                        style={{
                            width: itemwidth + itemwidtextend,
                            alignItems: 'center',
                            marginTop: height * 0.2,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height * 0.4,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
                                <View style={{alignItems: 'center'}}>
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
                                        Vendors To Begin With
                                    </Text>
                                </View>

                                {Object.keys(item).map((key, index) =>
                                    index < 2 ? (
                                        <Item
                                            heading={key}
                                            value={item[key]}
                                            key={index}
                                        />
                                    ) : null,
                                )}
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(item.link);
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
                                        padding: 10,
                                    }}>
                                    Apply Now
                                </Text>
                            </TouchableOpacity>
                            {item.youtube && (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(item.youtube);
                                    }}
                                    style={{
                                        height: 50,
                                        marginTop: 5,
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
                                        Watch Video Explaning Amazing Tradline
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
                <Dot dataArr={data} page={page} />
            </View>
        </View>
    );
};

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

const Item = ({heading, value}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
            }}>
            <Text style={{maxWidth: '50%', fontWeight: 'bold'}}>
                {heading}:
            </Text>
            <Text style={{textAlign: 'right', maxWidth: '50%'}}>{value}</Text>
        </View>
    );
};

export {VendorsToBegin};
