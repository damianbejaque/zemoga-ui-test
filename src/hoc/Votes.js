/* Mutations para agregar un voto positivo o negativo a la base de datos
*/
import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const THUMBS_UP = gql`
mutation ThumbsUp($input: ID!) {
  ThumbsUp(id: $input) {
    id
    votesUp
    votesDown
  }
}
`
export const ThumbsUp = ({ children }) => {
  return (
    <Mutation mutation={THUMBS_UP}>
      {children}
    </Mutation>)
}

const THUMBS_DOWN = gql`
mutation ThumbsDown($input: ID!) {
  ThumbsDown(id: $input) {
    id
    votesUp
    votesDown
  }
}
`

export const ThumbsDown = ({ children }) => {
  return (
    <Mutation mutation={THUMBS_DOWN}>
      {children}
    </Mutation>)
}
