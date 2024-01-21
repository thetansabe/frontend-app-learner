// reducer.js

import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
  } from './actions';
  
  const initialState = {
    sending: false,
    sent: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_MESSAGE_REQUEST:
        return {
          ...state,
          sending: true,
          error: null,
        };
      case SEND_MESSAGE_SUCCESS:
        return {
          ...state,
          sending: false,
          sent: true,
        };
      case SEND_MESSAGE_FAILURE:
        return {
          ...state,
          sending: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  