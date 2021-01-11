import React from 'react';
// import { connect } from 'react-redux';

function ShowAuthor(props) { 
    debugger
    const renderSingleAuthor = props.authors.filter(a=> a.id === props.match.params.id) 
    return (
       <div>
            { renderSingleAuthor }
      </div>
  );
}

 
// const mapStateToProps = (state) => {
// 	return {
// 		authors: state.authors 
// 	};
// };


// export default connect(mapStateToProps)(ShowAuthor);
export default ShowAuthor;