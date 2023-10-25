import { CART_ADD, CART_DELETE, CART_REMOVE } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
   const payload = action.payload;
   switch (action.type) {
      case CART_ADD: {
         if (payload.productStock >= 1) {
            const exist = state.some((product) => product.id === payload.id);
            if (exist) {
               return state.map((product) => {
                  if (product.id === payload.id) {
                     return {
                        ...product,
                        productStock: product.productStock + 1,
                     };
                  } else return { ...product };
               });
            } else {
               return [...state, { ...payload, productStock: 1 }];
            }
         } else return [...state];
      }
      case CART_REMOVE: {
         return state.map((product) => {
            if (product.id === payload.id) {
               return {
                  ...product,
                  productStock: product.productStock - 1,
               };
            } else return { ...product };
         });
      }
      case CART_DELETE:
         return state.filter((product) => product.id !== payload.id);
      default:
         return [...state];
   }
};

export default reducer;
