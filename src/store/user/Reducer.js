import {UserActionTypes} from './ActionTypes';

const defaultState = {
    isAuthenticated: false,
    loginStatus: '',
    user: {
        firstName: '',
        lastName: '',
        email: '',
    },
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UserActionTypes.USER_LOGIN:
            return {...state, isAuthenticated: true};
        case UserActionTypes.USER_LOGOUT:
            return {...state, isAuthenticated: false};
        case UserActionTypes.USER_REGISTER:
            return {...state};

        case UserActionTypes.USER_CHANGE_LOGIN_STATUS:
            return {...state, loginStatus: action.payload};

        default:
            return state;
    }
};
