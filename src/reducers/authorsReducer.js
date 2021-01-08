export default function authorsReducer(state = [], action) {
//   let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];
    case "GET_AUTHORS":
        return { ...state, authors: action.authors }













        
 
    // case "REMOVE_AUTHOR":
    //   idx = state.findIndex(book => book.id === action.id);
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    // case "ADD_BOOK":
    //   let existingAuthor = state.filter(
    //     author => author.authorName === action.book.authorName
    //   );
    //   if (existingAuthor.length > 0) {
    //     return state;
    //   } else {
    //     return [...state, { authorName: action.book.authorName, id: uuid() }];
    //   }
 
    default:
      return state;
  }
}