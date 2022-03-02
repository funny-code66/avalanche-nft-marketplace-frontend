import { combineReducers } from 'redux'

import profile from './profile'
import common from './common'
import contract from './contract'
import collection from './collection'

const rootReducer = combineReducers({
  profile,
  common,
  contract,
  collection
})

export default rootReducer
