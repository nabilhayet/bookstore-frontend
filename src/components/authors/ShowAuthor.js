import React from 'react';
import { connect } from 'react-redux';

function ShowAuthor(props) { 
    const renderSingleAuthor = props.authors.filter(a=> a.id == props.match.params.id) 
    return (
       <div>
         <br>
         </br>
            Full Name: { renderSingleAuthor[0].first_name }
            { renderSingleAuthor[0].last_name }
            <br>
            </br>
            Contact No:{ renderSingleAuthor[0].contact }
            <br>
            </br>
            Age: { renderSingleAuthor[0].age }
      </div>
  );
}

 
const mapStateToProps = (state) => {
	return {
		authors: state.authors.authors
	};
};


export default connect(mapStateToProps)(ShowAuthor);
// export default ShowAuthor;