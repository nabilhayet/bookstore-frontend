import React from 'react';
import { connect } from 'react-redux';

function ShowBook(props) { 
    const renderSingleBook = props.books.filter(b=> b.id == props.match.params.id) 
    // const getTheAuthor = props.authors.filter(a=> a.id == renderSingleBook[0].author_id)
      return (
        <div>
           <table class="content-table">
            <thead>
              <tr>
              <th>Title</th>
              <th>Pages</th>
              <th>Chapters</th>
              <th>Author First Name</th>
              <th>Author Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td> { renderSingleBook[0].title }</td>
              <td>  { renderSingleBook[0].pages }</td>
              <td>   { renderSingleBook[0].chapters }</td>
              <td> { renderSingleBook[0].author.first_name }</td>
              <td> { renderSingleBook[0].author.last_name }</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
}
const mapStateToProps = (state) => {
	return {
        books: state.books.books,
        authors: state.authors.authors
	};
};
export default connect(mapStateToProps)(ShowBook);
