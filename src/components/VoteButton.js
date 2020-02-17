/* Componente para la utilizacion de el boton de votacion toma como parametro el tipo para verificar si necesita el icono de mano hacia arriba o hacia abajo
*/
import React from 'react'
import { Button } from '../styles/components/VoteButton'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'

const VoteButton = ({ onClick, type }) => {
  return (
    <Button onClick={onClick}>
      {
        type === 'up'
          ? <MdThumbUp className='up' />
          : <MdThumbDown className='down' />
      }
    </Button>
  )
}

export default VoteButton
