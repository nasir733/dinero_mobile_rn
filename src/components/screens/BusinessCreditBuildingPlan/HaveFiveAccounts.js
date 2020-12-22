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

const data = [
    {
        Name: 'Amazon',
        'Who The Vendor Reports Too': 'Dun & Bradstreet, & Equifax',
        link:
            'https://www.amazon.com/gp/cobrandcard/marketing.html?ie=UTF8&pr=ibprox',
    },
    {
        Name: 'Office Depot',
        'Who The Vendor Reports Too': 'Experian & Dun & Bradstreet',
        link: 'https://www.officedepot.com/',
    },
];

const {width, height} = Dimensions.get('window');

const Have5Accounts = (props) => {
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
                            marginTop: height * 0.25,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height * 0.3,
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
                                        Once You Have 5 Accounts Reporting Add
                                        These Vendor
                                    </Text>
                                </View>

                                {Object.keys(item).map((key, index) => (
                                    <Item
                                        heading={key}
                                        value={item[key]}
                                        key={index}
                                    />
                                ))}
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openUrl(item.link);
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

export {Have5Accounts};
