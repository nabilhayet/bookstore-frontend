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
      author_id: '',
      gotBook: false,
      id: ""

    }
  }

//   componentDidMount() {
//     fetch('http://localhost:3000/authors')
//     .then(response => response.json())
//     .then(authors => { 
//       this.setState({
//          authors: authors
//       })
//     })
//   }

//   addDropDownMenu = () => {
//     return this.state.authors.map(author => {
//       const full_name = author.first_name + " " + author.last_name
//       return <option  key ={author.id} value={full_name}>{full_name}</option>
//     })
// }

// handleChange =(event) => {
//   debugger 
// }

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
  debugger
  this.setState({
    author_id: event.target.value
  })
  debugger
}

handleSubmit =(event) => {
  event.preventDefault()
  debugger
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
      gotAuthor: true,
      id: book.id 
    })
   
  })
}

 
  render() {
    return(
      // <div>
      //   <form>
      //     <p>
      //       <label>Title</label>
      //       <input type="text" />
      //     </p>
      //     <p>
      //       <label>Pages</label>
      //       <input type="number" />
      //     </p>
      //     <p>
      //       <label>Chapters</label>
      //       <input type="number" />
      //     </p>
      //     <p>
      //       <label>Author</label>
      //       <select value="" onChange={this.handleChange}>
      //         {this.addDropDownMenu()}
      //       </select>
      //     </p>
      //     <input type="submit" />
      //   </form>
      // </div>

      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <p>
          <label>Title</label>
          <input type="text" id="title" onChange={event => this.handleChange(event)}
          value={this.state.title}/>
        </p>
        <p>
          <label>Pages</label>
          <input type="number" id="pages" onChange={event => this.handleChange(event)}
          value={this.state.pages}/>
        </p>
        <p>
          <label>Chapters</label>
          <input type="number" id="chapters" onChange={event => this.handleChange(event)}
          value={this.state.chapters}/>
        </p>
        <p>
        <label>Author</label>
          <select value="" onChange={event => this.handleChangeAuthor(event)}>
            {this.addDropDownMenu()}
          </select>
        </p>
        <input type="submit" />
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