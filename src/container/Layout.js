/* Conteiner el cual permitira que en todas las paginas se muestre de forma eficiente el header y footer para evitar repetir codigo
*/
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '../styles/Pages/Home'
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Container>
      <Footer />
    </Container>
  </>
)
export default Layout
