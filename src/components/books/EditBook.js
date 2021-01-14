import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import updateBook from '../../actions/updateBook'

class EditBook extends Component {
    constructor(props){
        super(props)
        this.state = {
          title: '',
          pages: '',
          chapters: '',
          author_id: '',
          gotBook: false,
          id: "",
          author_name: ''
    
        }
      }

    //   addDropDownMenu = () => {
    //     return this.props.authors.authors.map(author => {
    //         if(author.id !== this.state.author_id) {
    //             const f_name = author.first_name
    //                  return <option key={author.id} value={author.id}>{f_name}</option>
    //         }
         
    //     })
    // }

    addDropDownMenu = () => {
        return this.props.authors.authors.map(author => {
            return <option key={author.id} value={author.id}>{author.first_name}</option>
        })
    }



    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    }
    handleSubmit =(event) => {
        event.preventDefault()
        const book = {title: this.state.title, pages: this.state.pages, chapters: this.state.chapters, author_id: this.state.author_id}
        this.updateBook(book)
    }

    updateBook = (book) => {
        const configobj = {
          method: 'PATCH',
          body: JSON.stringify(book),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
        }
        fetch(`http://localhost:3000/books/${this.state.id}`,configobj)
        .then(response => response.json())
        .then(book => { 
          this.props.updateBook(book)
          this.setState({
            gotBook: true
          })
         
        })
    }
    
   getBook = () => {
        const getBook = this.props.books.filter(b=> b.id == this.props.match.params.id) 
        const getAuthor = getBook[0].author
        this.setState({
         title: getBook[0].title,
         pages: getBook[0].pages,
         chapters: getBook[0].chapters,
         author_id: getBook[0].author_id,
         id: getBook[0].id,
         author_name: getAuthor.first_name 
        //  author_name: this.props.authors.authors[this.state.author_id].first_name 
        })
    } 

    handleChangeAuthor = event => {
        this.setState({
          author_id: event.target.value
        })
      }

    componentDidMount() {
        this.getBook()
    }
    render() { 
       return(
        <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Title</label>
            <input type="text" id="title" onChange={event => this.handleChange(event)}
            value={this.state.title}/>
          </p>
          <p>
            <label>Pages</label>
            <input type="number" id="pages" onChange={event => this.handleChange(event)}
            value={this.state.pages}/>
          </p>
          <p>
            <label>Chapters</label>
            <input type="number" id="chapters" onChange={event => this.handleChange(event)}
            value={this.state.chapters}/>
          </p>
          <p>
          <label>Author</label>
            <select value={this.state.author_id} onChange={event => this.handleChangeAuthor(event)}>
                {/* <option key={this.state.author_id} value={this.state.author_id}>{this.state.author_name}</option> */}
              {this.addDropDownMenu()}
            </select>
          </p>
          <input type="submit" class="btn"/>
        </form>
            {this.state.gotBook && (
                <Redirect to={`/books/${this.state.id}`}/>
            )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBook: book => { dispatch(updateBook(book)) }
      }
}
const mapStateToProps = (state) => {
	return {
        books: state.books.books,
        authors: state.authors
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(EditBook);