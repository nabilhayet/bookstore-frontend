![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/Restaurant) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/Restaurant) ![GitHub followers](https://img.shields.io/github/followers/nabilhayet) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/Restaurant)                                          
                                        <h1>:bomb: BookStore :bomb: </h1>
                                                      
This project lets a user add a new book or author. After creating, a user can see all the existing authors or books. After clicking on a link, the details of an author/book can be viewed. Updating or deleting an author/book option available to the user.

<a href="https://www.youtube.com/watch?v=54azoDzOMTc&t=1s">Demo</a>
<a href="https://github.com/nabilhayet/bookstore-backend">Backend</a>

Table of Contents
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Installing](#installing)
- [Challenges](#challenges)
- [Future-Implementation](#future-implementation)
- [Code-Snippet](#code-snippet)
                               
## Features
<ul>
 <li>Full CRUD capabilities for authors such as</li>
 <li>Add a new author</li>
 <li>View all existing authors on this application</li>
 <li>Edit/Delete the authors</li>
 <li>Full CRUD capabilities for books such as</li>
 <li>Add a new book</li>
 <li>View all existing books on this application</li>
 <li>Edit/Delete the books added</li>
</ul>

## Add Book
![add_book](https://user-images.githubusercontent.com/33500404/109563397-b59f9f00-7aad-11eb-8f58-f4ced6935236.gif)

## Add Like to Books
![add_like](https://user-images.githubusercontent.com/33500404/109563422-bf290700-7aad-11eb-80a0-8ea67533311c.gif)

## Book Details
![book_details](https://user-images.githubusercontent.com/33500404/109563444-c7814200-7aad-11eb-860c-8fa1014a04a6.gif)

## Search Book
![search_book](https://user-images.githubusercontent.com/33500404/109563467-cf40e680-7aad-11eb-8556-2d7e84ef88ad.gif)

## Sort Books
![sort_books](https://user-images.githubusercontent.com/33500404/109563511-dec02f80-7aad-11eb-86e5-3f27fdc646b2.gif)

## View Authors
![view_authors](https://user-images.githubusercontent.com/33500404/109563556-ef70a580-7aad-11eb-882d-428043361340.gif)

## View Books 
![view_books](https://user-images.githubusercontent.com/33500404/109563586-f992a400-7aad-11eb-83fb-463fe7a46e02.gif)

## Tech-Stack
<p>This web app makes use of the following:</p>

* react: "^17.0.1",	
*	react-dom: "^17.0.1",
*	react-redux: "^7.2.2",
*	react-router-dom: "^5.2.0",
*	react-scripts: "4.0.1",
*	redux: "^4.0.5",
*	redux-thunk: "^2.3.0",


## Installing
<ul>
<li> Clone this repo to your local machine git clone <this-repo-url></li>
<li> run bundle install to install required dependencies</li>
<li> run rails db:create to create a database locally.</li>
<li> run rails db:migrate to create tables into the database.</li>
<li> run rails db:seed to create seed data.</li>
<li> run npm start to start the browser.</li>
</ul>
        
## Challenges
<ul>
<li> Implementing redux state with react</li>
<li> Whenever an item was deleted the page wasn't updated automatically</li>
<li> Accessing the id of an item inside nested url</li>
<li> Creating the dropdown menu in book component</li>
</ul>

## Future-Implementation
<ul>
<li> Add bootstrap to make the UI more appealing</li>
<li> Insert image for each book</li>
<li> Add more classes like Genre</li>
</ul> 

## Code-Snippet 

```
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
```

```
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
```

```
render() {
 return(
  <div>
   <form onSubmit={event => this.handleSubmit(event)}>
   <p>
    <label>First Name</label>
    <input type="text" id="firstname" onChange={event => this.handleChange(event)} value={this.state.firstname} required/>
   </p>
   <p>
    <label>Last Name</label>
    <input type="text" id="lastname" onChange={event => this.handleChange(event)} value={this.state.lastname} required/>
   </p>
   {this.state.gotAuthor && (<Redirect to={`/authors/${this.state.id}`}/>)}
 </div>
 );
}
```

```
const mapDispatchToProps = dispatch => {
 return {
  addAuthor: author => { dispatch(addAuthor(author)) }
 }
}
export default connect(null, mapDispatchToProps)(CreateAuthor);
```

