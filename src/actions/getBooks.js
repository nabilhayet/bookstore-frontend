export function getBooks()  {
	return (dispatch) => {
    dispatch({type: 'START_ADDING_BOOKS'});
		fetch('http://localhost:3000/books')
		.then(response => response.json())
		.then(data => dispatch({ type: 'GET_BOOKS', books: data }));
	};
};