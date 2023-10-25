import { combineReducers } from 'redux';
import productReducer from './products/reducer';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
   products: productReducer,
   cart: cartReducer,
});

export default rootReducer;
