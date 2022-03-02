import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'

import Preloader from '../components/Preloader'

import { connectWallet } from '../actions/auth'

const NonProtectedRoute = props => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  let currentUser = auth.currentUser
  // const address = localStorage.getItem('wallet')
  if (!!currentUser && !!currentUser.wallet) {
    return <Navigate to='/author' />
  }
  let address = localStorage.getItem('wallet')
  if (!!address) {
    dispatch(connectWallet(address))
    return <Preloader />
  }
  return <React.Fragment>{props.children}</React.Fragment>
}

export default NonProtectedRoute
