import {SHOW_NOTIFICATION} from "../actions/PageActions";

const initialState = {
    text: ''
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {...state, text: action.payload};
        default:
            return state;
    }
}