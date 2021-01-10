import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowAuthor extends Component {
render() {
  return (
     <div>
         <h3> Hello </h3>
    </div>
  );
}
}
 
const mapStateToProps = (state) => {
	return {
		authors: state.authors
	};
};


export default connect(mapStateToProps)(ShowAuthor);