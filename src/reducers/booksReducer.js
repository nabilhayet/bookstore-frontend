export default function booksReducer(state = [], action) {
  // let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
   default:
      return state;
  }
}