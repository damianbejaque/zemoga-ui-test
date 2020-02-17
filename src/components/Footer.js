import React from 'react'
import { FooterItem, Politics, Media } from '../styles/components/Footer'
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io'
const Footer = () => {
  return (
    <FooterItem>
      <Politics>
        <span>Terms and Conditions</span>
        <span>Priuvacy Policy</span>
        <span>Contact Us</span>
      </Politics>
      <Media>
        <span>Follow Us</span>
        <IoLogoFacebook />
        <IoLogoTwitter />
      </Media>
    </FooterItem>
  )
}
export default Footer
