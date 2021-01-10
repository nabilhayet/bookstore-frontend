import React from 'react';
import { Route } from 'react-router-dom';
import IndexAuthor from './IndexAuthor';
import ShowAuthor from './ShowAuthor';
 
// const AuthorsPage = ({ match, authors }) => (
//   <div>
//     {/* <IndexAuthor authors={authors} /> */}
//     <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
//     <Route path={`${match.url}/:authorId`} render={routerProps => <ShowAuthor {...routerProps} authors={authors} /> }/>
//   </div>
// )
 
// export default AuthorsPage