import React from 'react'
import Main from '../components/Main'
import Information from '../components/Information'
import GroupCards from '../components/GroupCards'
import { Container } from '../styles/Pages/Home'
const Home = () => {
  return (
    <>
      <Main />
      <Container>
        <Information />
        <GroupCards />
      </Container>
    </>
  )
}
export default Home
