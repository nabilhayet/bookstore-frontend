import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthors } from '../../actions/getAuthors';
import { deleteAuthor } from '../../actions/deleteAuthor';
// import '../App.css'

class IndexAuthor extends Component {
	

	handleDeleteAuthor = (event) => {
		event.preventDefault()
		this.props.deleteAuthor(event.target.id)
	}

	render() {
		const link = {
			width: '100px',
			padding: '12px',
			margin: '0 6px 6px',
			background: 'burlywood',
			color: 'brown'
		  }
		if (this.props.authors.authors.length > 0) {
			const allAuthors = this.props.authors.authors.map((author) => {
				return(
					<li key={author.id}><Link key={author.id} style={link} to={`/authors/${author.id}`}>{author.first_name}</Link>
						<Link key={author.id} style={link} to={`/authors/${author.id}/edit`}><button >UPDATE</button></Link>
						<button id={author.id} style={link} onClick={this.handleDeleteAuthor}>DELETE</button>
					</li>
				)
					
			});
		return <div><br></br>{allAuthors}</div>;
		} 
		else {
			return <div>No Authors</div>;
		}
	}
}
const mapStateToProps = (state) => {
	return {
		authors: state.authors
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAuthors: () => { dispatch(getAuthors()) },
		deleteAuthor: (id) => {dispatch(deleteAuthor(id))}
	  }
  }
export default connect(mapStateToProps,mapDispatchToProps)(IndexAuthor);
