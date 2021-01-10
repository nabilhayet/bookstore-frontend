import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getAuthors from '../../actions/getAuthors'
 
class IndexAuthor extends Component {

    fetchAuthors = () => {
        this.props.getAuthors()
    }
    componentDidMount() {
        this.fetchAuthors()
    }
    
    render() {
    const allAuthors =  this.props.authors.map((author =>  {
        return (<li key={author.id}>{author.age}</li>)
        }))
  
   
      return ( 
          <div>
               {allAuthors}
          </div>
           
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authors: state.authors
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getAuthors: () => dispatch(getAuthors()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexAuthor);