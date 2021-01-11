export function getAuthors()  {
	return (dispatch) => {
    dispatch({type: 'START_ADDING_AUTHORS'});
		fetch('http://localhost:3000/authors/')
			.then(response => response.json())
			.then(data => dispatch({ type: 'GET_AUTHORS', authors: data }));
	};
};

