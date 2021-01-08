import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getAuthors from '../../actions/getAuthors'
 
class IndexAuthor extends Component {

    fetchAuthors = () => {
        this.props.getAuthors()
    }
    componentDidMount() {
        this.fetchAuthors
    }
    
    render() {
        const allAuthors = this.props.authors.map(author => (<li key={author.id}><Link to={`/authors/${author.id}`}>{author.first_name}</Link></li>))
        return (
            <ul>
               {allAuthors}
            </ul>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authors: state.authors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAuthors: () => dispatch(getAuthors()) 
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexAuthor);