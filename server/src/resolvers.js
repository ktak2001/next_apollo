const resolvers = {
  Query: {
    books: (_, __, { dataSources }) => {
      return dataSources.bookAPI.getBooks();
    },
    book: (_, { id }, { dataSources }) => {
      return dataSources.bookAPI.getBook(id);
    }
  },

  Book: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.bookAPI.getAuthor(authorId)
    }
  }
}