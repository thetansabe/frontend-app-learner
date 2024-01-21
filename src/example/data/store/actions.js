import axios from 'axios';

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const sendMessageRequest = () => ({
  type: SEND_MESSAGE_REQUEST,
});

export const sendMessageSuccess = (response) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: response,
});

export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});

export const sendMessage = (message) => {
  return (dispatch) => {
    dispatch(sendMessageRequest());

    axios.post(`${process.env.CHAT_BOT_URL}/completion`, { message })
      .then(response => {
        dispatch(sendMessageSuccess(response.data));
      })
      .catch(error => {
        dispatch(sendMessageFailure(error.message));
      });
  };
};
