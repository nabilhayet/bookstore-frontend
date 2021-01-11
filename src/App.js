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
import { getAuthors } from './actions/getAuthors';


class App extends Component {

  fetchAuthors = () => {
		this.props.getAuthors();
	};
	componentDidMount() {
		this.fetchAuthors();
	}
  render() {
  return (
    <Router>
    <div className="App">
         <Navbar />
          <Route exact path="/" component={Home} />
         <Route exact path="/books/new" component={CreateBook} />
         <Route exact path="/authors/new" component={CreateAuthor} />
         <Route exact path="/authors" component={IndexAuthor} />
         <Route exact path='/authors/:id' render={routerProps => <ShowAuthor {...routerProps} authors={this.props.authors} />} />
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

const mapDispatchToProps = dispatch => {
  return {
      getAuthors: () => { dispatch(getAuthors()) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
