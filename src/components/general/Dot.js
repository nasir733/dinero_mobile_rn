import {View} from 'react-native';
import React from 'react';

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

export default Dot;
