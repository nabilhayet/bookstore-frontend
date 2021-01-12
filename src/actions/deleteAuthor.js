const configobj = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }

export function deleteAuthor(id)  {
	return (dispatch) => {
    dispatch({type: 'START_DELETING_AUTHOR'});
		fetch(`http://localhost:3000/authors/${id}`,configobj)
        .then(() => dispatch({ type: 'DELETE_AUTHOR', id}));
        
	};
};

