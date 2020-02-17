import React from 'react'
import { Button } from '../styles/components/VoteButton'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'

const VoteButton = ({ onClick, type, id, votesUp, votesDown }) => {
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
