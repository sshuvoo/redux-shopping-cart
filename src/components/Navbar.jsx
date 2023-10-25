/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import logo from './../assets/images/logo.png';

export default function Navbar({ setPage }) {
   const cartProducts = useSelector((state) => state.cart);
   const totalCartProducts = cartProducts.reduce(
      (total, product) => (total += product.productStock),
      0
   );
   return (
      <nav className="bg-[#171C2A] py-4">
         <div className="navBar">
            <a onClick={() => setPage('product')}>
               <img src={logo} alt="LWS" className="max-w-[140px]" />
            </a>
            <div className="flex gap-4">
               <a
                  onClick={() => setPage('product')}
                  className="navHome"
                  id="lws-home"
               >
                  Home
               </a>
               <a
                  onClick={() => setPage('cart')}
                  className="navCart"
                  id="lws-cart"
               >
                  <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                  <span id="lws-totalCart">{totalCartProducts}</span>
               </a>
            </div>
         </div>
      </nav>
   );
}
