import { SHOW_NOTIFICATION } from "../actions/PageActions";
import { HIDE_NOTIFICATION } from "../actions/PageActions";

const initialState = {
  text: ''
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {...state, text: action.payload};
    case HIDE_NOTIFICATION:
      return {...state, text: initialState.text};
    default:
      return state;
  }
}