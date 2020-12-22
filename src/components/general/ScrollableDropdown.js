import React, {useState} from 'react';
import {
    Alert,
    Dimensions,
    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const dummyArr = [
    {
        text: 'Lorem Ipsum',
        value: 'lorem_ipsum',
    },
    {
        text: 'Lorem Ipsumm',
        value: 'lorem_ipsumm',
    },
];

const {height} = Dimensions.get('screen');
export default function ({
    initial_value = 'Initial Value',
    data = dummyArr,
    onPress,
    border = true,
}) {
    const [visible, setVisible] = useState(false);
    const [arr, setArr] = useState(data);
    const [value, setValue] = useState(initial_value);

    const onPick = (item, idx) => {
        return () => {
            setValue(item.text);
            setVisible(false);
            return onPress(item);
        };
    };
    return (
        <View>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{
                    height: 50,
                    borderWidth: border ? 1 : 0,
                    borderRadius: border ? 5 : 0,
                    borderBottomWidth: !border ? 1 : 1,
                    borderColor: '#E0E0E0',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                    <Text
                        style={{color: '#1e1e1e', fontSize: 14, opacity: 0.7}}>
                        {value}
                    </Text>
                </View>
                <View>
                    <Image
                        style={{width: 24, height: 24}}
                        source={require('../../assets/dialog/chevron_down.png')}
                    />
                </View>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View
                    style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        flex: 1,
                        justifyContent: 'center',
                        padding: 20,
                    }}>
                    <View
                        style={{
                            height: height * 0.9,
                            backgroundColor: '#FFF',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#E0E0E0',
                        }}>
                        <View style={{flexDirection: 'row', height: '10%'}}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text>Select Item</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={{
                                    width: 50,
                                    height: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    style={{width: 15, height: 15}}
                                    source={require('../../assets/icon/ic_close.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{padding: 20, height: '90%'}}>
                            <ScrollView style={{padding: 20}}>
                                {arr.map((x, y) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={onPick(x)}
                                            key={y}
                                            style={{
                                                height: 40,
                                                borderBottomWidth: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderBottomColor: '#E0E0E0',
                                            }}>
                                            <Text>{x.text}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
