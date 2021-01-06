// ./src/components/books/CreateBook.js
 
import React, { Component } from 'react'
 
class CreateBook extends Component {
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
            <input type="number" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default CreateBook;