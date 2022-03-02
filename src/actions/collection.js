import {
  LOAD_COLLECTIONS,
  LOAD_VISIBLECOLLECTIONS
} from '../constants/actionTypes/collection'

export const loadCollections = collections => ({ type: LOAD_COLLECTIONS, collections })

export const loadVisibleCollections = collections => ({ type: LOAD_VISIBLECOLLECTIONS, collections })