// ./src/components/authors/CreateAuthor.js

// componentDidMount() {
//   // Simple POST request with a JSON body using fetch
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'React POST Request Example' })
//   };
//   fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//       .then(response => response.json())
//       .then(data => this.setState({ postId: data.id }));
// }

// const configobj = {
//   method: 'POST',
//   body: JSON.stringify(kingdom),
//   headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//   }
// }

// fetch(BASE_URL + '/kingdoms', configobj)
// .then(response => response.json())
 
import React, { Component } from 'react'
 
class CreateAuthor extends Component {

  constructor(){
    super()
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      contact: "",
      submittedData: []
    }

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit =(event) => {
    event.preventDefault()
    const author = {firstname: this.state.firstname, lastname: this.state.lastname, age: this.state.age, contact: this.state.contact}
    this.createNewAuthor(author)
  }

  createNewAuthor = (author) => {
    const configobj = {
      method: 'POST',
      body: JSON.stringify(author),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    }
    debugger
    fetch('http://localhost:3000/authors',configobj)
    .then(response => response.json())
    .then(author => { 
    debugger
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>First Name</label>
            <input type="text" id="firstname" onChange={event => this.handleChange(event)}
            value={this.state.firstname}/>
          </p>
          <p>
            <label>Last Name</label>
            <input type="text" id="lastname" onChange={event => this.handleChange(event)}
            value={this.state.lastname}/>
          </p>
          <p>
            <label>Age</label>
            <input type="number" id="age" onChange={event => this.handleChange(event)}
            value={this.state.age}/>
          </p>
          <p>
            <label>Contact</label>
            <input type="number" id="contact" onChange={event => this.handleChange(event)}
            value={this.state.contact}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default CreateAuthor;