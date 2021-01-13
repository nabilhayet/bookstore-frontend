import './App.css';
import Home from './components/Home';
import CreateAuthor from './components/authors/CreateAuthor';
import Navbar from './components/Navbar';
import ShowAuthor from './components/authors/ShowAuthor'
import IndexAuthor from './components/authors/IndexAuthor'
import EditAuthor from './components/authors/EditAuthor'

import CreateBook from './components/books/CreateBook';
import ShowBook from './components/books/ShowBook'
import IndexBook from './components/books/IndexBook'
import EditBook from './components/books/EditBook'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthors } from './actions/getAuthors';
import { getBooks } from './actions/getBooks';

class App extends Component {

  // fetchAuthors = () => {
	// 	this.props.getAuthors();
	// };
	// componentDidMount() {
	// 	this.fetchAuthors();
  // }

  fetchEverything = () => {
    this.props.getAuthors();
    this.props.getBooks();
  }
  
  componentDidMount() {
    this.fetchEverything()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/new" component={CreateBook} />
            <Route exact path="/books" component={IndexBook} />
            <Route exact path='/books/:id' render={routerProps => <ShowBook {...routerProps}  />} />
            <Route exact path='/books/:id/edit' render={routerProps => <EditBook {...routerProps}  />} />

            <Route exact path="/authors/new" component={CreateAuthor} />
            <Route exact path="/authors" component={IndexAuthor} />
            <Route exact path='/authors/:id' render={routerProps => <ShowAuthor {...routerProps}  />} />
            <Route exact path='/authors/:id/edit' render={routerProps => <EditAuthor {...routerProps}  />} />
          </Switch>
        </div>
    </Router>
    );
  }
}
const mapStateToProps = (state) => {
	return {
    authors: state.authors,
    books: state.books 
	};
};
const mapDispatchToProps = dispatch => {
  return {
      getAuthors: () => { dispatch(getAuthors()) },
      getBooks: () => { dispatch(getBooks()) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
