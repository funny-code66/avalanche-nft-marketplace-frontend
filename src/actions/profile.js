import {
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  UPDATE_PROFILE,
  LOAD_ARTISTS
} from '../constants/actionTypes/auth'

export const connectWallet = wallet => ({ type: CONNECT_WALLET, wallet })

export const disconnectWallet = () => ({ type: DISCONNECT_WALLET })

export const updateProfile = userInfo => ({ type: UPDATE_PROFILE, userInfo })

export const loadArtists = artists => ({ type: LOAD_ARTISTS, artists })