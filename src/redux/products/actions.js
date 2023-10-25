import { PRODUCT_ADD } from './actionTypes';

export const productAdd = (product) => {
   return {
      type: PRODUCT_ADD,
      payload: product,
   };
};
