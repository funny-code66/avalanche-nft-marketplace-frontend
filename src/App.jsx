import React, { Fragment } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Explore from './pages/Explore'
import ConnectWallet from './pages/ConnectWallet'
import Admin from './pages/Admin'


import ItemDetail from './components/Explore/ItemDetail'
import LiveAuctions from './components/Home/LiveAuction'
import Header from './containers/Header'
import Collection from './components/Home/Collection'
import Footer from './components/common/Footer'


// import { Provider, useSelector } from 'react-redux';
// import store from './redux/store';
function App() {
  return (
    // <Provider store={store}>
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<React.Fragment><Home /></React.Fragment>} />
        <Route path='/explore' element={<React.Fragment><Explore /></React.Fragment>} />
        <Route path='/liveautions' element={<React.Fragment><LiveAuctions /></React.Fragment>} />
        <Route path='/collection' element={<React.Fragment><Collection collection /></React.Fragment>} />
        <Route path='/itemdetail' element={<React.Fragment><ItemDetail /></React.Fragment>} />
        <Route path='/connectwallet' element={<React.Fragment><ConnectWallet /></React.Fragment>} />
        <Route path='/profile' element={<React.Fragment><Admin /></React.Fragment>} />
      </Routes>
      <Footer />
    </Fragment>
    // </Provider>
  )
} <Header />

export default App
