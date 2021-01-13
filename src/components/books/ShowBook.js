import React from 'react';
import { connect } from 'react-redux';

function ShowBook(props) { 
    const renderSingleBook = props.books.filter(b=> b.id == props.match.params.id) 
    const getTheAuthor = props.authors.filter(a=> a.id == renderSingleBook[0].author_id)
      return (
        <div>
          <br>
          </br>
            Title: { renderSingleBook[0].title }
            <br>
            </br>
            Pages:{ renderSingleBook[0].pages }
            <br>
            </br>
            Chapters: { renderSingleBook[0].chapters }
            <br>
            </br>
            Author: { getTheAuthor[0].first_name }
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
