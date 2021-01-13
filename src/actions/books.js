export default function addBook(book) {
    return {
      type: 'ADD_BOOK',
      book: book 
    }
}