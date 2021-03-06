import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function HeaderTwoRows({
    navPress,
    morePress,
    bgColor = 'transparent',
    title = '',
    subTitle = '',
    isHome = false,
    shadow = true,
}) {
    return (
        <View
            style={{
                height: 75,
                flexDirection: 'row',
                alignItems: 'flex-start',
                paddingHorizontal: 10,
                backgroundColor: bgColor,
                elevation: shadow ? 3 : 0,
                shadowOffset: {width: 0, height: shadow ? 2 : 0},
                shadowOpacity: shadow ? 0.3 : 0,
            }}>
            {isHome && (
                <TouchableOpacity
                    onPress={navPress}
                    style={{padding: 10, marginTop: 10}}>
                    <Image
                        source={require('../assets/icon/ic_home.png')}
                        style={{height: 16, width: 18, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
            )}
            {!isHome && (
                <TouchableOpacity
                    onPress={navPress}
                    style={{padding: 10, marginTop: 10}}>
                    <Image
                        source={require('../assets/icon/ic_chevron_left.png')}
                        style={{height: 18, width: 18, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
            )}
            <View style={{flex: 1, paddingHorizontal: 10, marginTop: 17}}>
                <Text style={{fontSize: 20, color: 'white'}}>{title}</Text>
                <Text style={{fontSize: 14, color: 'white', marginTop: 4}}>
                    {subTitle}
                </Text>
            </View>
            <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                <Image
                    source={require('../assets/icon/ic_more.png')}
                    style={{height: 20, width: 4, resizeMode: 'contain'}}
                />
            </TouchableOpacity>
        </View>
    );
}

export default HeaderTwoRows;
