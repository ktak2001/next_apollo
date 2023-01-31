import React from 'react';
import { useQuery, gql } from '@apollo/client';
import bookClient from '@/lib/bookClient'; 

const GET_BOOK = gql`
  query getBook($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      author
    }
  }
`

type tBook = {
  bookId: String
}

const getBook = ({ bookId }: tBook) => {
  return bookClient.query({
    query: GET_BOOK,
    variables: {
      bookId
    }
  })
  .then((result => {
    console.log("error", result)
    return JSON.stringify(result)
  }))
}

export default async function Book() {
  const book = await getBook({ bookId: "1" })
  return (
    <>
      {
        book
      }
    </>
  )
}