const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const FakeBookAPI = require('./datasources/book-fake-api')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: {
    FakeBookAPI
  }
})

server.listen().then(() => {
  console.log("server is running")
})