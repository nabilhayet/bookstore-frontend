export default function booksReducer(state = { books: [] }, action) {
  let idx;
  switch (action.type) {
      case 'START_ADDING_BOOKS':
          return {...state, books: [...state.books]}
      case "ADD_BOOK":
          return {...state, books: [...state.books, action.book]};
      case "GET_BOOKS":
          return {...state, books: action.books};
      case "UPDATE_BOOK":
          idx = state.books.findIndex(book => book.id === action.book.id);
          const newState = [...state.books]
          newState.splice(idx, 1, action.book);
          return {...state, books: newState }
      case "DELETE_BOOK":
          idx = state.books.findIndex(book => book.id == action.id);
          return {...state, books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]};
      default:
          return state;
  }
}














