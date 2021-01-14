import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'yellow',
  color: 'black'
}
class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <ul>
        <li><NavLink to="/" exact style={link} activeStyle={{ background: 'green'}}>Home</NavLink></li>
        <li><NavLink to="/books/new" exact style={link} activeStyle={{ background: 'green'}}>ADD Book</NavLink></li>
        <li><NavLink to="/authors/new" exact style={link} activeStyle={{ background: 'green'}}> ADD Author</NavLink></li>
        <li><NavLink to="/authors" exact style={link} activeStyle={{ background: 'green'}}>VIEW Authors</NavLink></li>
        <li><NavLink to="/books" exact style={link} activeStyle={{ background: 'green'}}>VIEW Books</NavLink></li>
        </ul>
      </div>
    )
  }
}
export default Navbar;