import React, {useState} from 'react';
import {
    Dimensions,
    FlatList,
    Linking,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';
import MaterialButton from '../../material/MaterialButton';
import ImagePicker from 'react-native-image-picker';

import {postData} from '../../../api/userData';
import appConfig from '../../../config';

const dataArr = [
    {
        name: 'Upload Your Drivers License Or Government-Issued Photo ID',
        type: 'Driver License / Photo Id',
    },
    {
        name: 'Upload Your Social Security Card',
        type: 'Social Security Card',
    },
    {
        name:
            'Upload Your Last 3 Months Of Bank Statements Click To Call Loan Support',
        type: 'Last 3 Months Of Bank Statement',
    },
    {
        name:
            'Upload Your Last 6 Months Of Bank Statements Click To Call Loan Support',
        type: 'Last 6 Months Of Bank Statement',
    },
    {
        name:
            'Upload Your Last Year Of Business Tax Returns Click To Call Loan Support',
        type: 'Last Year Of Business Tax Returns',
    },
    {
        name:
            'Upload Your Last 2 Years Of Business Tax Returns Click To Call Loan Support',
        type: 'Last 2 Years Of Business Tax Returns',
    },
    {
        name:
            'Upload Your Last Year Of Personal Tax Returns Click To Call Loan Support',
        type: 'Last Year Of Personal Tax Returns',
    },
    {
        name:
            'Upload Your Last Two Years Of Personal Tax Returns Click To Call Loan Support',
        type: 'Last Two Years Of Personal Tax Returns',
    },
];

const {width, height} = Dimensions.get('window');
export const ApplyForLoans = () => {
    const [documents, setDocuments] = useState({});

    const createFormData = (photo) => {
        const data = new FormData();

        data.append('photo', {
            name: photo.fileName,
            type: photo.type,
            uri:
                Platform.OS === 'android'
                    ? photo.uri
                    : photo.uri.replace('file://', ''),
        });

        return data;
    };

    const uploadFile = (type) => {
        if (documents[type]) {
            const data = createFormData(documents[type]);
            postData('/loans/upload-document/', data);
            console.log('[sending]', data);
        }
    };

    const selectFile = (type) => {
        const options = {
            title: 'Select Document',
            // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'photos',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton,
                );
            } else {
                // const source = { uri: response.uri };
                const doc = {};
                doc[type] = response;
                setDocuments({...documents, ...doc});
            }
        });
    };

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    width: width * 0.9,
                    alignItems: 'center',
                    marginBottom: 20,
                    marginHorizontal: 20,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    borderRadius: 5,
                    elevation: 3,
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginTop: 20,
                }}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginVertical: 15,
                    }}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                        }}>
                        Upload Your Documents For Loans
                    </Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginVertical: 15,
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(
                                `${appConfig.appWebsite}/business/apply-loans`,
                            );
                        }}
                        style={{
                            height: 15,
                        }}>
                        <Text
                            style={{
                                flex: 1,
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#4456ca',
                            }}>
                            Go to full site
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                // initialScrollIndex={ page }
                // scrollToIndex={ page }
                // ref={ flatlistRef }
                // pagingEnabled={ true }
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                snapToInterval={width}
                // horizontal
                showsHorizontalScrollIndicator={false}
                data={dataArr}
                extraData={dataArr}
                renderItem={({item, index}) => (
                    <View
                        style={{
                            width: width - 40,
                            alignItems: 'center',
                            // backgroundColor: '#000',
                            marginHorizontal: 20,
                            marginTop: 0,
                            // height:200,
                            marginVertical: 20,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                                borderRadius: 5,
                                elevation: 3,
                                height: 150,
                                width: width - 40,
                            }}>
                            <View style={{flex: 1}}>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        paddingVertical: 10,
                                    }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            textAlign: 'center',
                                            fontWeight: '600',
                                            fontSize: 18,
                                        }}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        justifyContent: 'center',
                                    }}>
                                    <MaterialButton
                                        title="Select"
                                        style={{
                                            backgroundColor: 'blue',
                                            marginTop: 20,
                                            borderRadius: 10,
                                            marginBottom: 30,
                                            marginHorizontal: 20,
                                            width: 100,
                                        }}
                                        buttonPress={() =>
                                            selectFile(item.type)
                                        }
                                    />
                                    <MaterialButton
                                        title="Upload"
                                        style={{
                                            backgroundColor: 'blue',
                                            marginTop: 20,
                                            borderRadius: 10,
                                            marginBottom: 30,
                                            marginHorizontal: 20,
                                            width: 100,
                                        }}
                                        buttonPress={() =>
                                            uploadFile(item.type)
                                        }
                                    />
                                </View>
                            </View>
                        </Surface>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};
