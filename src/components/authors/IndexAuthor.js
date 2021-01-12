import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthors } from '../../actions/getAuthors';

class IndexAuthor extends Component {

	render() {
		if (this.props.authors.authors.length > 0) {
			const allAuthors = this.props.authors.authors.map((author) => {
				return(
					<li key={author.id}><Link key={author.id} to={`/authors/${author.id}`}>{author.first_name}</Link>
					<Link key={author.id} to={`/authors/${author.id}/edit`}><button>UPDATE</button></Link>
					</li>
				)
					
			});

			return <div><br></br>{allAuthors}</div>;
		} else {
			return <div>No Authors</div>;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		authors: state.authors
	};
};

export default connect(mapStateToProps, { getAuthors })(IndexAuthor);
