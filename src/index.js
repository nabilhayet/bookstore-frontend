import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; 
import authorsReducer from './reducers/authorsReducer.js';
import booksReducer from './reducers/booksReducer.js';
import { combineReducers } from "redux";
import App from './App';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})
 
const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
   <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default rootReducer;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
