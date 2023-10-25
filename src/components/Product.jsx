import { useDispatch } from 'react-redux';
import { cartAdd } from '../redux/cart/actions';

/* eslint-disable react/prop-types */
export default function Product({ product }) {
   const dispatch = useDispatch();

   const {
      productName,
      productCategory,
      productImage,
      productPrice,
      productStock,
   } = product;

   return (
      <div className="lws-productCard">
         <img className="lws-productImage" src={productImage} alt="product" />
         <div className="p-4 space-y-2">
            <h4 className="lws-productName">{productName}</h4>
            <p className="lws-productCategory">{productCategory}</p>
            <div className="flex items-center justify-between pb-2">
               <p className="productPrice">
                  BDT <span className="lws-price">{productPrice}</span>
               </p>
               <p className="productQuantity">
                  QTY <span className="lws-quantity">{productStock}</span>
               </p>
            </div>
            <button
               onClick={() => dispatch(cartAdd(product))}
               className="lws-btnAddToCart"
            >
               Add To Cart
            </button>
         </div>
      </div>
   );
}
