import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore,combineReducers,applyMiddleware, compose  } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import login from './store/reducers/login';
import register from './store/reducers/register';
import planner from './store/reducers/planner';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  login,
  register,
  planner

})
const store = createStore(combinedReducers,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>

    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
