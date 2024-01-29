
const initState = {
  userInfo: {
    userName: 'John',
    email: 'john@gmail.com',
    sessionId: 0,
    id: 0
  },
  
  messages: [
    {sessionId: 0, text: 'Hello', timestamp: 1544723344},
    {sessionId: 1, text: 'Hi', timestamp: 1544723345},
    {sessionId: 0, text: 'How are you?', timestamp: 1544723346},
    {sessionId: 1, text: 'Fine', timestamp: 1544723347},
    {sessionId: 0, text: 'Good', timestamp: 1544723348},
    {sessionId: 1, text: 'Bye', timestamp: 1544723349},
    {sessionId: 0, text: 'See you', timestamp: 1544723350},

  ]
};

const rootReducer = (state = initState, action) => {
  console.log({state, action});
  switch (action.type) {
    case 'INIT_MESSAGES':
      return {
        ...state,
        messages: action.payload
      }
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case 'LIKE_MESSAGE':
      return {
        ...state,
        messages: state.messages.map(message => {
          if (message.sessionId == action.payload.sessionId  
            && message.timestamp === action.payload.timestamp) {
            return {
              ...message,
              isLiked: true
            }
          }
          return message
        })
      }
    case 'INIT_USER':
      return {
        ...state,
        userInfo: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;