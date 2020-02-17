/* Queries de la base de datos por graphql
*/
import gql from 'graphql-tag'

const GET_THUMBS = gql`
  query {
    getThumbs{
    id
    name
    description
    isMain
    votesUp
    votesDown
    background
    }
  }
`
const GET_IS_MAIN = gql`
query {
  getIsMain{
  id
  name
  description
  isMain
  votesUp
  votesDown
  background
  }
}
`

export const allThumbs = GET_THUMBS
export const mainThumb = GET_IS_MAIN
