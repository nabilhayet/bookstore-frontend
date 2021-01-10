import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CreateBook from './components/books/CreateBook';
import CreateAuthor from './components/authors/CreateAuthor';
import Navbar from './components/Navbar';
import ShowAuthor from './components/authors/ShowAuthor'
import IndexAuthor from './components/authors/IndexAuthor'
import AuthorsPage from './components/authors/AuthorsPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
         <Navbar />
          <Route exact path="/" component={Home} />
         <Route exact path="/books/new" component={CreateBook} />
         <Route exact path="/authors/new" component={CreateAuthor} />
         <Route exact path="/authors" component={IndexAuthor} />
         <Route exact path='/authors/:id' render={routerProps => <ShowAuthor {...routerProps} />} />
    </div>
    </Router>
  );
}
}

const mapStateToProps = (state) => {
	return {
		authors: state.authors
	};
};


export default connect(mapStateToProps)(App);
