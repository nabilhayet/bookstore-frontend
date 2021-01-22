import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from '../../actions/getBooks';
import { deleteBook } from '../../actions/deleteBook';

class IndexBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ids: [],
            like: 0,
            likes: [],
            currentBooks: [], 
            search: '',
            message: '',
            Num_Of_Likes: 0,
            index: 0 
        }
    }

    componentDidMount(){
        this.setState({
            ...this.state, currentBooks: this.props.books.books
        })
    }

    onClick(event){
        if(this.state.search !== '') {
            const searchBook = this.state.currentBooks.filter((book) => book.title === this.state.search)
            if(searchBook.length !== 0) {
                this.setState({
                    ...this.state, currentBooks: searchBook
                })
            }
            else {
                this.setState({
                    ...this.state, message: 'No Match'
                })
            }
        }
    }
    handleSortingBooks = (event) => {
        if(this.props.books.books.length > 1) {
            this.state.currentBooks.sort(this.compare)
            this.handleClear()
        }
    }
    compare(a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
      
        let comparison = 0;
        if (titleA > titleB) {
          comparison = 1;
        } else if (titleA < titleB) {
          comparison = -1;
        }
        return comparison;
      }

    onChange(event){
        this.setState({
            search: event.target.value
        })
    }

	handleDeleteBook = (event) => {
        event.preventDefault()
        this.props.deleteBook(event.target.id)
    }

    handleClear(event) {
        this.setState({
            ...this.state, currentBooks: this.props.books.books, message: '', search: ''
        })
    }

    handleLike = (event) => {
        let findID = this.state.ids.includes(event.target.id)
        if(findID) {
            let i = this.state.likes.findIndex(obj => obj.id == event.target.id);
            this.setState({
                ...this.state,
                Num_Of_Likes: this.state.likes[i].likee +=1,
                
            })
        }
        else {
            const likeObj = { id: event.target.id, likee: this.state.like + 1 }
            this.state.likes.push(likeObj)
            let v = this.state.likes.findIndex(obj => obj.id == event.target.id);

            this.setState({
                ...this.state,
                Num_Of_Likes:  this.state.likes[v].likee,
                ids: event.target.id 
            })  
        }
    }
    
    render() {
		const link = {
			width: '100px',
			padding: '12px',
			margin: '0 6px 6px',
			background: 'burlywood',
			color: 'brown'
        }
        // {this.state.likes[this.state.likes.findIndex(obj => obj.id == book.id)].likee}
		if (this.props.books.books.length > 0) {
			const allBooks = this.state.currentBooks.map((book) => {
				return(
					<li key={book.id}><Link key={book.id} style={link} to={`/books/${book.id}`}>{book.title}</Link>
						<Link key={book.id} style={link} to={`/books/${book.id}/edit`}><button>UPDATE</button></Link>
						<button id={book.id} style={link} onClick={this.handleDeleteBook}>DELETE</button>
                        <button id={book.id} onClick={event => this.handleLike(event)}>{(this.state.likes.findIndex(obj => obj.id == book.id)) === -1 ? 0 : this.state.likes[this.state.likes.findIndex(obj => obj.id == book.id)].likee} LIKE</button>
					</li>
				)
					
            });
            
		return ( <div>
                    {this.state.message}<br></br>
                    <input type="text" placeholder="search" value={this.state.search} onChange={(event) => this.onChange(event)}/>
                    <button onClick={(event) => this.onClick(event)}>Search</button> 
                    <button onClick={event => this.handleClear(event)}>Clear</button> 
                    <button onClick={event => this.handleSortingBooks(event)}>Sort</button>
                    {allBooks}
                   
                </div>
                )
		} 
		else {
			return <div>No Books</div>;
		}
	}
}
const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getBooks: () => { dispatch(getBooks()) },
		deleteBook: (id) => {dispatch(deleteBook(id))}
	  }
  }
export default connect(mapStateToProps,mapDispatchToProps)(IndexBook);