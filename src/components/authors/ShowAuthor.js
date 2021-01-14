import React from 'react';
import { connect } from 'react-redux';

function ShowAuthor(props) { 
    const renderSingleAuthor = props.authors.filter(a=> a.id == props.match.params.id) 
    const renderBooks = props.books.filter(book => book.author_id == props.match.params.id)
    const listBooks = renderBooks.map(b => <li>{b.title}</li>)
      return (
        <div>
          <br>
          </br>
            Full Name: { renderSingleAuthor[0].first_name } { renderSingleAuthor[0].last_name }
            <br>
            </br>
            Contact No:{ renderSingleAuthor[0].contact }
            <br>
            </br>
            Age: { renderSingleAuthor[0].age }
            <br></br>
            Books: <ul>{listBooks}</ul>
            </div>
      );
}
const mapStateToProps = (state) => {
  
	return {
    authors: state.authors.authors,
    books: state.books.books
	};
};
export default connect(mapStateToProps)(ShowAuthor);
