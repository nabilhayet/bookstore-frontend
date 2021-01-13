const configobj = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }

export function deleteBook(id)  {
	return (dispatch) => {
    dispatch({type: 'START_DELETING_BOOK'});
		fetch(`http://localhost:3000/books/${id}`,configobj)
        .then(() => dispatch({ type: 'DELETE_BOOK', id}));
        
	};
};
