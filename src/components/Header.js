import React from 'react'
import { Head, Title, Menu, Link, MdSearch } from '../styles/components/Header'

const Header = () => {
  return (
    <Head>
      <Link to='/'>
        <Title>
        Rule of Thumb.
        </Title>
      </Link>

      <Menu>
        <Link to='/pasttrials'>
        Past Trials
        </Link>
        <Link to='/howworks'>
        How it Works
        </Link>
        <Link to='/login'>
        LogIn/SignUp
        </Link>
        <Link to='#'>
          <MdSearch />
        </Link>

      </Menu>
    </Head>
  )
}
export default Header
