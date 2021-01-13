import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue'}}>Home</NavLink>
        <NavLink to="/books/new" exact style={link} activeStyle={{ background: 'darkblue'}}>ADD Book</NavLink>
        <NavLink to="/authors/new" exact style={link} activeStyle={{ background: 'darkblue'}}> ADD Author</NavLink>
        <NavLink to="/authors" exact style={link} activeStyle={{ background: 'darkblue'}}>VIEW Authors</NavLink>
        <NavLink to="/books" exact style={link} activeStyle={{ background: 'darkblue'}}>VIEW Books</NavLink>
      </div>
    )
  }
}
export default Navbar;