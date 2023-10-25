import { useState } from 'react';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductInputForm from './components/ProductInputForm';
import { useSelector } from 'react-redux';

export default function App() {
   const products = useSelector((state) => state.products);
   const [page, setPage] = useState('product');
   return (
      <>
         <Navbar setPage={setPage} />
         <main className="py-16">
            {page === 'product' && (
               <div className="productWrapper">
                  <div className="productContainer" id="lws-productContainer">
                     {products.length >= 1 &&
                        products.map((product) => (
                           <Product key={product.id} product={product} />
                        ))}
                  </div>
                  <div>
                     <ProductInputForm />
                  </div>
               </div>
            )}
            {page === 'cart' && <CartPage />}
         </main>
      </>
   );
}
