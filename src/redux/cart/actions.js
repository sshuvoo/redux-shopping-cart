import { CART_ADD, CART_DELETE, CART_REMOVE } from './actionTypes';

export const cartAdd = (product) => {
   return {
      type: CART_ADD,
      payload: product,
   };
};

export const cartRemove = (product) => {
   return {
      type: CART_REMOVE,
      payload: product,
   };
};

export const cartDelete = (product) => {
   return {
      type: CART_DELETE,
      payload: product,
   };
};
