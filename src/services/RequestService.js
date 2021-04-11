import axios from 'axios';
import TokenService from './TokenService';
import { apiConfig } from '../config';
import { userLogout } from '../store/user/Actions';

const RequestsService = axios.create({
    baseURL: `${apiConfig.baseUrl}`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const getNewToken = async () => {
    try {
        const refresh = await TokenService.instance.getRefreshToken();
        const response = await RequestsService.post(
            apiConfig.tokenRefreshPath,
            { refresh },
        );
        await TokenService.instance.storeAccessToken(response.data.access);
        return response.data.access;
    } catch (e) {
        console.log('Error getting new token', e.message, e.response);
    }
};

RequestsService.interceptors.response.use(
    (response) => {
        console.log('[API - SUCCESS] ' + response.config.url);
        return response;
    },
    (error) => {
        if (error.response && error.response.status !== 401) {
            console.log(
                `[API - ERROR ${error.response.status}] ${error.config.url}`,
            );

            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        if (
            error.config.url === apiConfig.tokenRefreshPath ||
            error.response?.message === 'Account is disabled.'
        ) {
            console.log(
                '[API - ERROR] Could not refresh token. ' + error.config.url,
            );
            userLogout();
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        console.log(
            '[API - ERROR] Authorization error. Refreshing token. ' +
                error.config.url,
        );

        return getNewToken()
            .then((token) => {
                const config = error.config;
                config.headers.Authorization = `Bearer ${token}`;
                return new Promise((resolve, reject) => {
                    axios
                        .request(config)
                        .then((response) => {
                            resolve(response);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                });
            })
            .catch((err) => {
                return new Promise((resolve, reject) => {
                    reject(err);
                });
            });
    },
);

export default RequestsService;
