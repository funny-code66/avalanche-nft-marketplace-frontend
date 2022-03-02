import {
  LOAD_CONTRACTS
} from '../constants/actionTypes/contract'

const INITIAL_STATE = {
  contracts: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CONTRACTS:
      return {
        ...state,
        contracts: action.contracts
      }
    default:
      return state
  }
}

export default reducer