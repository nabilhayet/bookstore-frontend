export const getAuthors = () => {
	return (dispatch) => {
		fetch('http://localhost:3000/authors/')
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: 'GET_AUTHORS', authors: data });
			});
	};
};
