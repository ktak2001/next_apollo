import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const bookClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default bookClient