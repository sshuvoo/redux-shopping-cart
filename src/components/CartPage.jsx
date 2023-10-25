import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import CartBill from './CartBill';

export default function CartPage() {
   const cartProducts = useSelector((state) => state.cart);
   return (
      <div className="container 2xl:px-8 px-2 mx-auto">
         <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
         <div className="cartListContainer">
            <div className="space-y-6">
               {cartProducts?.map((product) => (
                  <CartProduct key={product.id} product={product} />
               ))}
            </div>
            {cartProducts.length > 0 && <CartBill />}
         </div>
      </div>
   );
}
