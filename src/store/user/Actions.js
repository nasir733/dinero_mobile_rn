import RequestsService from '../../services/RequestService';
import AsyncStorage from '@react-native-community/async-storage';
import TokenService from '../../services/TokenService';
import { UserActionTypes } from './ActionTypes';
import { navigate } from '../../services/NavigationService';

export const userLogin = (loginData) => {
    return async (dispatch) => {
        try {
            const response = await RequestsService.post('/token/', loginData);
            const { access, refresh } = response.data;
            await AsyncStorage.setItem('username', loginData.username);
            await AsyncStorage.setItem('password', loginData.password);
            await TokenService.instance.storeAccessToken(access);
            await TokenService.instance.storeRefreshToken(refresh);
            dispatch({ type: UserActionTypes.USER_LOGIN });
            navigate('ApplicationStack');
        } catch (err) {
            dispatch(changeLoginMessage('Error signing in.'));
        }
    };
};

export const changeLoginMessage = (message) => {
    return {
        type: UserActionTypes.USER_CHANGE_LOGIN_STATUS,
        payload: message,
    };
};

export const userRegister = (registerData) => {
    return async (dispatch) => {
        try {
            await RequestsService.post('/user/register/', registerData);
            dispatch(
                userLogin({
                    username: registerData.email,
                    password: registerData.password,
                }),
            );
        } catch (err) {
            dispatch(changeLoginMessage('Error signing up.'));
        }
    };
};

export const userLogout = () => {
    TokenService.instance.clear();
    navigate('Login');
    return { type: UserActionTypes.USER_LOGOUT };
};
