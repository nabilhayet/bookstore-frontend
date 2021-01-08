import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import addAuthors from '../actions/addAuthor'
 
class IndexAuthor extends Component {

    componentDidMount() {
        fetch('http://localhost:3000/authors')
        .then(response => response.json())
        .then(authors => this.props.addAuthors(authors))
    }; 
    

    render() {
        console.log(this.props)
        const authors = this.props.authors.map(author => {
            debugger
            <li key={author.id}><Link to={`/authors/${author.id}`}><button>{author.first_name}</button></Link></li>
        })
        return (
            <ul>
                {authors}
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
        addAuthors: () => { dispatch(addAuthors()) }
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexAuthor);