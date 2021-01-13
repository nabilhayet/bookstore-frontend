export default function updateBook(book) {
    return {
      type: 'UPDATE_BOOK',
      book: book 
    }
}