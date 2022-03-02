import {
  LOAD_COLLECTIONS,
  LOAD_VISIBLECOLLECTIONS
} from '../constants/actionTypes/collection'

const INITIAL_STATE = {
  collections: [],
  visibleCollections: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_COLLECTIONS:
      return {
        ...state,
        collections: action.collections
      }
    case LOAD_VISIBLECOLLECTIONS:
      return {
        ...state,
        visibleCollections: action.collections
      }
    default:
      return state
  }
}

export default reducer