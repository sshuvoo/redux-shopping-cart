import { useDispatch, useSelector } from 'react-redux';
import { cartAdd, cartDelete, cartRemove } from '../redux/cart/actions';

/* eslint-disable react/prop-types */
export default function CartProduct({ product }) {
   const incrementProduct = useSelector((state) => state.products).filter(
      (item) => item.id === product.id
   )[0];

   const dispatch = useDispatch();
   return (
      <div className="cartCard">
         <div className="flex items-center col-span-6 space-x-6">
            <img
               className="lws-cartImage"
               src={product.productImage}
               alt="product"
            />
            <div className="space-y-2">
               <h4 className="lws-cartName">{product.productName}</h4>
               <p className="lws-cartCategory">{product.productCategory}</p>
               <p>
                  BDT{' '}
                  <span className="lws-cartPrice">{product.productPrice}</span>
               </p>
            </div>
         </div>
         <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
            {/*<!-- amount buttons -->*/}
            <div className="flex items-center space-x-4">
               <button
                  onClick={() => dispatch(cartAdd(incrementProduct))}
                  className="lws-incrementQuantity"
               >
                  <i className="text-lg fa-solid fa-plus"></i>
               </button>
               <span className="lws-cartQuantity">
                  {product.productQuantity}
               </span>
               <button
                  onClick={() =>
                     product.productQuantity > 1 &&
                     dispatch(cartRemove(incrementProduct))
                  }
                  className="lws-decrementQuantity"
               >
                  <i className="text-lg fa-solid fa-minus"></i>
               </button>
            </div>
            {/*<!-- price -->*/}
            <p className="text-lg font-bold">
               BDT{' '}
               <span className="lws-calculatedPrice">
                  {product.productQuantity * product.productPrice}
               </span>
            </p>
         </div>
         {/*<!-- delete button -->*/}
         <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button
               onClick={() => dispatch(cartDelete(product))}
               className="lws-removeFromCart"
            >
               <i className="text-lg text-red-400 fa-solid fa-trash"></i>
            </button>
         </div>
      </div>
   );
}
