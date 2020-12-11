import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import StoreState from './state';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  reducers,
  StoreState,
  composeWithDevTools(applyMiddleware(thunk))
);
