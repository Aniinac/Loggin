import { alertConstants } from '../constants/alert.constants'
import initialState from './initialState';

export function alert(state = initialState , action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                ...state,
                type: 'alert-success',
                message: action.message,
                activated: true
            };
        case alertConstants.ERROR:
            return {
                ...state,
                type: 'alert-danger',
                message: action.message,
                activated: true
            };
        case alertConstants.CLEAR:
            return {
                ...state,
                type: '',
                message: '',
                activated: false
            };
        default:
            return state
    }
}