import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import reducers from './reducers'
import state from './store' 

export default createStore(reducers, state, applyMiddleware(thunk)) 
