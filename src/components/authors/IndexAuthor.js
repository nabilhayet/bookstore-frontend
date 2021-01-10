import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthors } from '../../actions/getAuthors';

class IndexAuthor extends Component {
	fetchAuthors = () => {
		this.props.getAuthors();
	};
	componentDidMount() {
		this.fetchAuthors();
	}

	render() {
		if (this.props.authors.authors.length > 0) {
			const allAuthors = this.props.authors.authors.map((author) => {
				return <li key={author.id}>{author.age}</li>;
			});

			return <div>{allAuthors}</div>;
		} else {
			return <div>No Authors</div>;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		authors: state.authors,
	};
};

export default connect(mapStateToProps, { getAuthors })(IndexAuthor);
