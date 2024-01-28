
export const addMessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    payload: message
  }
}

export const initMessages = (messages) => {
  return {
    type: 'INIT_MESSAGES',
    payload: messages
  }
}