import React from 'react'
import Main from '../components/Main'
import Information from '../components/Information'
import GroupCards from '../components/GroupCards'
import { Container } from '../styles/Pages/Home'
const Home = () => {
  return (
    <>
      <Main />
      <div className='container'>
        <div className='row'>
          <Information />
          <GroupCards />
        </div>
      </div>
    </>
  )
}
export default Home
