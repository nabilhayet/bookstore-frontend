export default function addAuthors(authors) {
    return {
      type: 'GET_AUTHORS',
      authors: authors
    }
  }