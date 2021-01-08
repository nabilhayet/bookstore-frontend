 export default function getAuthors() {
        return (dispatch) => {
          dispatch({ type: 'START_ADDING_AUTHOR_REQUEST' });
          fetch('http://localhost:3000/authors')
            .then(response => response.json())
            .then(authors => dispatch({ type: 'GET_AUTHORS', authors }));
        };
      }