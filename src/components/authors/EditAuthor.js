import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { render } from 'react-dom'
import updateAuthor from '../../actions/update'

 class EditAuthor extends Component {
     constructor(props) {
         super(props)
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
        this.updateAuthor(author)
      }

      updateAuthor = (author) => {
        const configobj = {
          method: 'PATCH',
          body: JSON.stringify(author),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
        }
        fetch(`http://localhost:3000/authors/${this.state.id}`,configobj)
        .then(response => response.json())
        .then(author => { 
          this.props.updateAuthor(author)
          this.setState({
            gotAuthor: true
          })
         
        })
      }

     getAuthor = () => {
        const getAuthor = this.props.authors.filter(a=> a.id == this.props.match.params.id) 
        this.setState({
         firstname: getAuthor[0].first_name,
         lastname: getAuthor[0].last_name,
         age: getAuthor[0].age,
         contact: getAuthor[0].contact,
         id: getAuthor[0].id 
        })
    } 

     componentDidMount() {
         this.getAuthor()
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
            {this.state.gotAuthor && (
                <Redirect to={`/authors/${this.state.id}`}/>
            )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAuthor: author => { dispatch(updateAuthor(author)) }
      }
}

const mapStateToProps = (state) => {
	return {
		authors: state.authors.authors
	};
};

 export default connect(mapStateToProps,mapDispatchToProps)(EditAuthor);