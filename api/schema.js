const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Memory = require('lowdb/adapters/Memory')

const json = require('./db.json')
const isLocal = !process.env.NOW_REGION
const type = isLocal ? new FileSync('./db.json') : new Memory()

const db = low(type)
db.defaults(json).write()
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Thumbs {
    id: ID
    name: String
    description: String
    isMain: Boolean
    votesUp: Int
    votesDown: Int
    background: String
  }
  type Query{
    "Return all the Thumbs"
    getThumbs: [Thumbs]
    "Return one of the Thumbs"
    getSingleThumb(id: ID): Thumbs
    "Return the isMain Component"
    getIsMain(filter: Boolean): Thumbs
  }
  input ThumbsUp{
    id: ID!
  }
  input ThumbsDown{
    id: ID!
  }
  type Mutation {
    "Add thumbs up"
    ThumbsUp(id: ID!): Thumbs
    "Add thumbs down"
    ThumbsDown(id: ID!): Thumbs
      }
`

const resolvers = {
  Mutation: {
    ThumbsUp (_, { id }) {
      db.get('thumbs').find({ id: +id }).update('votesUp', votesUp => votesUp + 1).write()
      return db.get('thumbs').find({ id: +id }).value()
    },
    ThumbsDown (_, { id }) {
      db.get('thumbs').find({ id: +id }).update('votesDown', votesDown => votesDown + 1).write()
      return db.get('thumbs').find({ id: +id }).value()
    }
  },
  Query: {
    getThumbs () {
      return db.get('thumbs').value()
    },
    getSingleThumb (_, { id }) {
      return db.get('thumbs').find({ id: +id }).value()
    },
    getIsMain (_, __, { filter }) {
      return db.get('thumbs').find('isMain').value()
    }
  }
}

module.exports = { typeDefs, resolvers }
