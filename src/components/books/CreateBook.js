// ./src/components/books/CreateBook.js
 
import React, { Component } from 'react'
 
class CreateBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      pages: '',
      chapters: '',
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

  addDropDownMenu = () => {
    return this.state.authors.map(author => {
      const full_name = author.first_name + " " + author.last_name
      return <option  key ={author.id} value={full_name}>{full_name}</option>
    })
}

handleChange =(event) => {
  debugger 
}
 
  render() {
    return(
      <div>
        <form>
          <p>
            <label>Title</label>
            <input type="text" />
          </p>
          <p>
            <label>Pages</label>
            <input type="number" />
          </p>
          <p>
            <label>Chapters</label>
            <input type="number" />
          </p>
          <p>
            <label>Author</label>
            <select value="" onChange={this.handleChange}>
              {this.addDropDownMenu()}
            </select>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default CreateBook;