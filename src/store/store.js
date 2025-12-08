import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import authReducer from './reducers/authReducer'; 
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import wishlistReducer from './reducers/wishlistReducer'; // Yeni


const rootReducer = combineReducers({
  auth: authReducer, 
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  wishlist: wishlistReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;