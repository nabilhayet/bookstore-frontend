import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from '../../actions/getBooks';
import { deleteBook } from '../../actions/deleteBook';

class IndexBook extends Component {
	
    handleDeleteBook = (event) => {
		event.preventDefault()
		this.props.deleteBook(event.target.id)
	}

	render() {
		const link = {
			width: '100px',
			padding: '12px',
			margin: '0 6px 6px',
			background: 'purple',
			textDecoration: 'none',
			color: 'white',
		  }
		if (this.props.books.books.length > 0) {
			const allBooks = this.props.books.books.map((book) => {
				return(
					<li key={book.id}><Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link>
						<Link key={book.id} style={link} to={`/books/${book.id}/edit`}><button>UPDATE</button></Link>
						<button id={book.id} style={link} onClick={this.handleDeleteBook}>DELETE</button>
					</li>
				)
					
			});
		return <div><br></br>{allBooks}</div>;
		} 
		else {
			return <div>No Books</div>;
		}
	}
}
const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getBooks: () => { dispatch(getBooks()) },
		deleteBook: (id) => {dispatch(deleteBook(id))}
	  }
  }
export default connect(mapStateToProps,mapDispatchToProps)(IndexBook);
