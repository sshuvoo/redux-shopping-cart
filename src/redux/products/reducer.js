import { CART_ADD, CART_DELETE, CART_REMOVE } from '../cart/actionTypes';
import { PRODUCT_ADD } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
   const payload = action.payload;
   switch (action.type) {
      case PRODUCT_ADD:
         return [
            ...state,
            {
               ...payload,
               id: state.length >= 1 ? state[state.length - 1].id + 1 : 1,
            },
         ];
      case CART_DELETE: {
         return state.map((product) => {
            if (product.id === payload.id) {
               return {
                  ...product,
                  productStock: product.productStock + payload.productStock,
               };
            } else return { ...product };
         });
      }
      case CART_ADD:
         return state.map((product) => {
            if (product.id === payload.id) {
               return {
                  ...product,
                  productStock:
                     product.productStock >= 1 ? product.productStock - 1 : 0,
               };
            } else return { ...product };
         });
      case CART_REMOVE:
         return state.map((product) => {
            if (product.id === payload.id) {
               return {
                  ...product,
                  productStock: product.productStock + 1,
               };
            } else return { ...product };
         });
      default:
         return [...state];
   }
};

export default reducer;
