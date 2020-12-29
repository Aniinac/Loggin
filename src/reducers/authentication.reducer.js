import { userConstants } from '../constants/user.constants';


let data = JSON.parse(localStorage.getItem('user'));
const initialState = data ? { loggedIn: true, data } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                data: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                data: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                logged: false,
                data: {}
            };
        case userConstants.CONNECTED:
            return {
                ...state,
                connected: true
            };
        case userConstants.DISCONNECTED:
            return {
                ...state,
                connected: false
            };
        default:
            return state
    }
}