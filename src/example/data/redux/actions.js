
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

export const initUser = (user) => {
  return {
    type: 'INIT_USER',
    payload: user
  }
}

export const initSession = (sessionId) => {
  return {
    type: 'INIT_SESSION',
    payload: sessionId
  }
}

export const initHistory = (history) => {
  return {
    type: 'INIT_HISTORY',
    payload: history
  }
}