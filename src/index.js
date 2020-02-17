import ApolloClient from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'

const URI = 'https://zemoga-test-api.now.sh/graphql'
const client = new ApolloClient({
  uri: URI
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))
