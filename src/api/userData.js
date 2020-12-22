import TokenService from '../services/TokenService';
import RequestsService from '../services/RequestService';

export const getUserData = async () => {
    try {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.get(
            '/user/get_user_info/',

            authentication,
        );
        const user_data = {
            email: response.data.email,
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            activePlans: response.data.active_plans,
            activeLoans: response.data.active_loans,
            financedSoFar: response.data.financed_so_far,
            totalOwed: response.data.total_owe,
        };

        return {
            status: true,
            ...user_data,
        };
    } catch (err) {
        return {
            status: false,
            err,
        };
    }
};

export const getStepsData = async () => {
    try {
        const authentication = await TokenService.instance.getAuthentication();
        const response = await RequestsService.get(
            '/user/credit_steps/',
            authentication,
        );
        const stepsData = {
            ...response.data,
        };

        return {
            status: true,
            stepsData,
        };
    } catch (err) {
        return {
            status: false,
            err,
        };
    }
};

export const getTradelinesData = async () => {
    const authentication = await TokenService.instance.getAuthentication();
    const response = await RequestsService.get(
        '/business/gettradelines/',
        authentication,
    );
    return response.data;
};

export const getWhiteLabelLogo = async () => {
    const authentication = await TokenService.instance.getAuthentication();
    const response = await RequestsService.get(
        '/wt/getuserlogo/',
        authentication,
    );
    return response.data;
};

export const postData = async (url, data) => {
    try {
        let authentication = await TokenService.instance.getAuthentication();
        authentication.headers = {
            ...authentication.headers,
            'Content-Type': 'multipart/form-data',
        };
        const response = await RequestsService().post(
            url,
            data,
            authentication,
        );

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
