import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchBook extends Component {
    constructor(){
        super()
        this.state = {
            searchValue: ''
        }
    }

    handleSubmit = () => {
        const value = this.state.searchValue
        this.findBook(value)
    }
    findBook = (value) => {
        if(value !== '') {
            const searchedBook =  this.props.books.books.filter((book) => book.title === value)
                if(searchedBook.length !== 0) {
                    this.props.dispatch({ type: 'GET_BOOKS', books: searchedBook })
                    // searchedBook.map((book) => {
                    //     return(
                    //         <li key={book.id}><Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link></li>

                    //     )
                    // })
                }
        }
        else {
            return this.props.dispatch({})
        }
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" id ="searchValue" name="searchValue" onChange={this.handleChange} value={this.state.searchValue} />
                    <button onClick={this.handleSubmit}>Search</button>
                </div>
            // </form>
        )
    }
}
const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

export default connect(mapStateToProps)(SearchBook);