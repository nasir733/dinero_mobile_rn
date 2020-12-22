import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

export const stackNavHeader = (navigation, headerTitle) => {
    return {
        headerStyle: {
            backgroundColor: '#ffffff',
            shadowColor: 'black',
            shadowOffset: {
                height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 20,
        },
        headerTintColor: '#000000',
        headerTitle: headerTitle,

        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{padding: 20}}>
                <Image
                    source={require('../assets/icon/ic_home.png')}
                    style={{
                        height: 16,
                        width: 18,
                        resizeMode: 'contain',
                        tintColor: '#909fa7',
                    }}
                />
            </TouchableOpacity>
        ),
    };
};
