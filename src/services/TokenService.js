import AsyncStorage from '@react-native-community/async-storage';
const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export default class TokenService {
    static _instance: TokenService | null = null;

    static get instance(): TokenService {
        if (!TokenService._instance) {
            TokenService._instance = new TokenService();
        }
        return TokenService._instance;
    }

    async isAuthenticated() {
        const token = await this.getRefreshToken();
        return !!token;
    }

    async getAuthentication() {
        const accessToken = await this.getAccessToken();
        return {
            headers: {Authorization: 'Bearer ' + accessToken},
        };
    }

    async storeAccessToken(accessToken: string) {
        await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
    }

    async storeRefreshToken(refreshToken: string) {
        await AsyncStorage.setItem(REFRESH_TOKEN, refreshToken);
    }

    async clear() {
        await AsyncStorage.removeItem(ACCESS_TOKEN);
        await AsyncStorage.removeItem(REFRESH_TOKEN);
    }

    async getRefreshToken() {
        return await AsyncStorage.getItem(REFRESH_TOKEN);
    }

    async getAccessToken() {
        return await AsyncStorage.getItem(ACCESS_TOKEN);
    }
}
