import React from 'react'
import { Router } from '@reach/router'
import Layout from './container/Layout'
import Home from './pages/Home'
import HowWorks from './pages/HowWorks'
import Login from './pages/Login'
import PastTrials from './pages/PastTrials'
import NotFound from './pages/NotFound'

import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <NotFound default />
          <Home path='/' />
          <HowWorks path='/howworks' />
          <Login path='/login' />
          <PastTrials path='/pasttrials' />
        </Router>
      </Layout>
    </>
  )
}
export default App
