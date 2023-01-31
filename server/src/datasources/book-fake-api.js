const fakeBookAPI = {
  getBooks: () => {
    return Books;
  },
  getBook: (id) => {
    const book = {
      id: "0",
      title: "0",
      author: "00",
      authorId: "000"
    }
    Books.forEach(b => {
      if (b.id === id)
        Object.assign(book, b)
    })
    return book;
  },
  getAuthor: (authorId) => {
    const author = {
      id: "00",
      name: "000",
      age: 7
    }
    Authors.forEach(a => {
      if (a.id === authorId)
        Object.assign(author, b)
    })
    return author;
  }
}

const Books = [
  {
    id: "1",
    title: "A",
    author: "AA",
    authorId: "1A"
  },
  {
    id: "2",
    title: "B",
    author: "BB",
    authorId: "2A"
  },
  {
    id: "3",
    title: "C",
    author: "CC",
    authorId: "3A"
  },
]

const Authors = [
  {
    id: "1A",
    name: "llll",
    age: 3
  },
  {
    id: "2A",
    name: "kkkk",
    age: 5
  },
  {
    id: "3A",
    name: "jjjj",
    age: 7
  },
]

module.exports = fakeBookAPI