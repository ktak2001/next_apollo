const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    book(id: ID!): Book
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    name: String!
    age: Int!
  }
`
// Bookの返り値にauthorId: ID!がほんとはある

module.exports = typeDefs;