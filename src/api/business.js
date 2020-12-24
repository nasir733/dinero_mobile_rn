import appConfig from '../config';
import TokenService from '../services/TokenService';
import AsyncStorage from '@react-native-community/async-storage';
import { Linking } from 'react-native';
import RequestsService from '../services/RequestService';

export const getBusinessData = async (url) => {
    try {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.get(url, authentication);

        return {
            status: true,
            response: response.data,
        };
    } catch (err) {
        return {
            status: false,
            err,
        };
    }
};

export const goToBusinessSteps = async () => {
    const user = await AsyncStorage.getItem('username');
    const pass = await AsyncStorage.getItem('password');
    await Linking.openURL(
        `${appConfig.appWebsite}/user/login_api?user=${user}&pass=${pass}&redirect=/business/business-credit-step/`,
    );
};

export const goToLoggedView = async (url) => {
    const user = await AsyncStorage.getItem('username');
    const pass = await AsyncStorage.getItem('password');
    await Linking.openURL(
        `${appConfig.appWebsite}/user/login_api?user=${user}&pass=${pass}&redirect=${url}`,
    );
};
