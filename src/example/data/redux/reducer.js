
const initState = {
  userInfo: null, //{}
  sessionId: '',
  history: null, //{a:[]}
  messages: null //[{a:1}]
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
    case 'INIT_SESSION':
      return {
        ...state,
        sessionId: action.payload
      }
    case 'INIT_HISTORY':
      return {
        ...state,
        history: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;