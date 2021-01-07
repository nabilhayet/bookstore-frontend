import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'; 
import Home from './components/Home';
import CreateBook from './components/books/CreateBook';
import CreateAuthor from './components/authors/CreateAuthor';
import Navbar from './components/Navbar';
import ShowAuthor from './components/authors/ShowAuthor'
import IndexAuthor from './components/authors/IndexAuthor'

// const store = createStore('AnyReducer Function')


ReactDOM.render(
 <React.StrictMode>
     {/* <Provider store={store}> */}
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/books/new" component={CreateBook} />
        <Route exact path="/authors/new" component={CreateAuthor} />
        <Route exact path="/authors" component={IndexAuthor} />
        <Route exact path="/authors/:id" component={ShowAuthor} />
        </div>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
