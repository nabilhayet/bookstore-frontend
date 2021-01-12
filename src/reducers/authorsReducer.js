export default function authorsReducer(state = { authors: [] }, action) {
    let idx;
    switch (action.type) {
        case "ADD_AUTHOR":
            return {...state, authors: [...state.authors, action.author]};
        case "GET_AUTHORS":
            return {...state, authors: action.authors};
        case "UPDATE_AUTHOR":
            idx = state.authors.findIndex(author => author.id === action.author.id);
            const newState = [...state.authors]
            newState.splice(idx, 1, action.author);
            return {...state, authors: newState }

        case "DELETE_AUTHOR":
            idx = state.authors.findIndex(author => author.id == action.id);
            return {...state, authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]};
        default:
            return state;
    }
}














