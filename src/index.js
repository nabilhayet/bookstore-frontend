import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Book from './components/books/CreateBook';
import Author from './components/authors/CreateAuthor';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Book} />
        <Route exact path="/authors" component={Author} />
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
