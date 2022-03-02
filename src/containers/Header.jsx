import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { connectWallet, disconnectWallet } from '../actions/profile'

import HeaderComponent from '../components/common/Header'
// import { updateProfile } from '../actions/profile'
import Web3 from 'web3'
import { initWallet } from '../helpers/web3/Wallet'
import { CHAINID } from '../constants/index'

const Header = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = profile
    const [web3, setWeb3] = useState(null)
    const [wallet, setWallet] = useState('')

    useEffect(() => {
        const init = async () => {
            console.log('currentUser', currentUser)
            if (!currentUser || !currentUser.wallet) {
                let addr = localStorage.getItem('wallet')
                if (addr)
                    dispatch(connectWallet(addr))
            }
        }

        init()
    }, [currentUser])

    const disconnect = () => {
        localStorage.removeItem('wallet')
        dispatch(disconnectWallet())
        navigate('/')
    }

    const changeNet = async () => {
        const web3a = new Web3(Web3.givenProvider);
        setWeb3(web3a)
        try {
            await web3a.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: CHAINID }]
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    const connect = async () => {
        let addr = await initWallet(setWallet)
        dispatch(connectWallet(addr))
        await changeNet()
    }

    return <HeaderComponent address={(!!currentUser && !!currentUser.wallet ? currentUser.wallet : '')} connect={connect} disconnect={disconnect} />
}

export default Header
