// ./src/components/authors/CreateAuthor.js
 
import React, { Component } from 'react'
 
class CreateAuthor extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>First Name</label>
            <input type="text" />
          </p>
          <p>
            <label>Last Name</label>
            <input type="text" />
          </p>
          <p>
            <label>Age</label>
            <input type="number" />
          </p>
          <p>
            <label>Contact</label>
            <input type="number" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default CreateAuthor;