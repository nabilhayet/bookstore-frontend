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
          <table class="content-table">
            <thead>
              <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact No</th>
              <th>Age</th>
              <th>Books</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{ renderSingleAuthor[0].first_name }</td>
              <td> { renderSingleAuthor[0].last_name }</td>
              <td> { renderSingleAuthor[0].contact }</td>
              <td> { renderSingleAuthor[0].age }</td>
              <td> <ul>{listBooks}</ul></td>
              </tr>
            </tbody>
          </table>
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
