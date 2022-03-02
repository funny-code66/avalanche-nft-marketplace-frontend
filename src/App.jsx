import React, { Fragment } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Explore from './pages/Explore'
import ConnectWallet from './pages/ConnectWallet'
import ItemDetail from './components/Explore/ItemDetail'

import Header from './components/common/Header'
import LiveAuctions from './components/Home/LiveAuctions'
import Collection from './components/Home/Collection'
import Footer from './components/common/Footer'

function App() {
  return <Fragment>
    <Header />
    <Routes>
      <Route path='/' element={<React.Fragment><Home /></React.Fragment>} />
      <Route path='/explore' element={<React.Fragment><Explore /></React.Fragment>} />
      <Route path='/liveautions' element={<React.Fragment><LiveAuctions /></React.Fragment>} />
      <Route path='/collection' element={<React.Fragment><Collection collection /></React.Fragment>} />
      <Route path='/itemdetail' element={<React.Fragment><ItemDetail /></React.Fragment>} />
      <Route path='/connectwallet' element={<React.Fragment><ConnectWallet /></React.Fragment>} />
      <Route path='/login' element={<React.Fragment><div>Login</div></React.Fragment>} />
      <Route path='/signup' element={<React.Fragment><div>Signup</div></React.Fragment>} />
    </Routes>
    <Footer />
  </Fragment>
}

export default App
