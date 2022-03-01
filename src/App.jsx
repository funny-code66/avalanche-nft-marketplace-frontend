import React, { Fragment } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'

import Header from './components/common/Header'

function App() {
  return <Fragment>
    <Header />
    <Routes>
      <Route path='/' element={<React.Fragment><Home /></React.Fragment>} />
      <Route path='/login' element={<React.Fragment><div>Login</div></React.Fragment>} />
      <Route path='/signup' element={<React.Fragment><div>Signup</div></React.Fragment>} />
    </Routes>
  </Fragment>
}

export default App
