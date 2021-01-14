// ./src/components/authors/CreateAuthor.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import addAuthor from '../../actions/authors'
 
class CreateAuthor extends Component {
  constructor(){
    super()
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      contact: "",
      submittedData: [],
      gotAuthor: false,
      id: ""
    }

  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit =(event) => {
    event.preventDefault()
    const author = {first_name: this.state.firstname, last_name: this.state.lastname, age: this.state.age, contact: this.state.contact}
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
    fetch('http://localhost:3000/authors',configobj)
    .then(response => response.json())
    .then(author => { 
      this.props.addAuthor(author)
      this.setState({
        gotAuthor: true,
        id: author.id 
      })
     
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
          <input type="submit" class="btn"/>
        </form>
        {this.state.gotAuthor && (
          <Redirect to={`/authors/${this.state.id}`}/>
        )}
      </div>
    );
  }
};
const mapDispatchToProps = dispatch => {
  return {
      addAuthor: author => { dispatch(addAuthor(author)) }
    }
}
export default connect(null, mapDispatchToProps)(CreateAuthor);