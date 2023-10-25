import { CART_ADD, CART_DELETE, CART_REMOVE } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case CART_ADD: {
         if (action.payload.productStock >= 1) {
            const exist = state.some(
               (product) => product.id === action.payload.id
            );
            if (exist) {
               return state.map((product) => {
                  if (product.id === action.payload.id) {
                     return {
                        ...product,
                        productQuantity: product.productQuantity + 1,
                     };
                  } else return { ...product };
               });
            } else {
               return [...state, { ...action.payload, productQuantity: 1 }];
            }
         } else return [...state];
      }
      case CART_REMOVE:
         return state.map((product) => {
            if (product.id === action.payload.id) {
               return {
                  ...product,
                  productQuantity: product.productQuantity - 1,
               };
            } else return { ...product };
         });
      case CART_DELETE:
         return state.filter((product) => product.id !== action.payload.id);
      default:
         return [...state];
   }
};

export default reducer;
