import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class IndexAuthor extends Component {

    constructor(props){
        super(props)
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/authors')
        .then(response => response.json())
        .then(authors => { 
          this.setState({
             authors: authors
          })
        })
      }

    render() {
        const authors = this.state.authors.map((author => <li key={author.id}><Link to={`/authors/${author.id}`}><button>{author.first_name}</button></Link></li>))
        return (
            <ul>
                {authors}
            </ul>
        )
    }

}

export default IndexAuthor;