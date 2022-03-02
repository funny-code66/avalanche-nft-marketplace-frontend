import {
  LOAD_CONTRACTS
} from '../constants/actionTypes/contract'

export const loadContracts = contracts => ({ type: LOAD_CONTRACTS, contracts })