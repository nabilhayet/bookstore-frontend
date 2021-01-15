// ./src/components/books/CreateBook.js

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import addBook from '../../actions/books'
 
class CreateBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      pages: '',
      chapters: '',
      author_id: `${this.props.authors.authors[0].id}`,
      gotBook: false,
      id: ""

    }
  }
addDropDownMenu = () => {
      return this.props.authors.authors.map(author => {
        const full_name = author.first_name + " " + author.last_name
        return <option key={author.id} value={author.id}>{full_name}</option>
      })
  }

handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

handleChangeAuthor = event => {
  this.setState({
    author_id: event.target.value
  })
}

handleSubmit =(event) => {
  event.preventDefault()
  const book = {title: this.state.title, pages: this.state.pages, chapters: this.state.chapters, author_id: this.state.author_id}
  this.createNewBook(book)
}
createNewBook = (book) => {
  const configobj = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }
  fetch('http://localhost:3000/books',configobj)
  .then(response => response.json())
  .then(book => { 
    this.props.addBook(book)
    this.setState({
      gotBook: true,
      id: book.id 
    })
   
  })
}

 
  render() {
    return(
     <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <p>
          <label>Title</label>
          <input type="text" id="title" onChange={event => this.handleChange(event)}
          value={this.state.title} required/>
        </p>
        <p>
          <label>Pages</label>
          <input type="number" id="pages" onChange={event => this.handleChange(event)}
          value={this.state.pages} required/>
        </p>
        <p>
          <label>Chapters</label>
          <input type="number" id="chapters" onChange={event => this.handleChange(event)}
          value={this.state.chapters} required/>
        </p>
        <p>
        <label>Author</label>
          <select value={this.state.author_id} onChange={event => this.handleChangeAuthor(event)}>
            {this.addDropDownMenu()}
          </select>
        </p>
        <input type="submit" class="btn" />
      </form>
      {this.state.gotBook && (
        <Redirect to={`/books/${this.state.id}`}/>
      )}
    </div>
    );
  }
};
 
const mapDispatchToProps = dispatch => {
  return {
      addBook: book => { dispatch(addBook(book)) }
    }
}
const mapStateToProps = (state) => {
	return {
		authors: state.authors
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);