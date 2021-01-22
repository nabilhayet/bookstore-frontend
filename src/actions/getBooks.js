export function getBooks()  {
	return (dispatch) => {
	dispatch({type: 'START_ADDING_BOOKS'});
	
	console.log('a')
		fetch('http://localhost:3000/books')
		.then(response => {
			if(response.status !== 200) {
				throw new Error(response.statusText)
			}
			console.log('b', response)
			return response.json()
		})
		.then(data => {
			console.log('c', data)
			dispatch({ type: 'GET_BOOKS', books: data })
		})
		.catch( errors => console.log('d', errors))

	console.log('e')
	};
};