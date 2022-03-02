import {
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  UPDATE_PROFILE,
  LOAD_ARTISTS
} from '../constants/actionTypes/profile'

const INITIAL_STATE = {
  currentUser: null,
  artists: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        currentUser: {
          wallet: action.wallet
        }
      }
    case DISCONNECT_WALLET:
      return {
        ...state,
        currentUser: null
      }
    case UPDATE_PROFILE:
      const { userInfo } = action
      return {
        ...state,
        currentUser: userInfo
      }
    case LOAD_ARTISTS:
      return {
        ...state,
        artists: action.artists
      }
    default:
      return state
  }
}

export default reducer