import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productAdd } from '../redux/products/actions';

export default function ProductInputForm() {
   const dispatch = useDispatch();
   const [productName, setProductName] = useState('');
   const [productCategory, setProductCategory] = useState('');
   const [productImage, setProductImage] = useState('');
   const [productPrice, setProductPrice] = useState('');
   const [productStock, setProductStock] = useState('');

   const submitHandler = (event) => {
      event.preventDefault();
      if (
         productName &&
         productCategory &&
         productImage &&
         Number(productPrice) &&
         Number(productStock)
      ) {
         dispatch(
            productAdd({
               productName,
               productCategory,
               productImage,
               productPrice: Number(productPrice),
               productStock: Number(productStock),
            })
         );
      }
   };

   return (
      <div className="formContainer">
         <h4 className="formTitle">Add New Product</h4>
         <form
            onSubmit={submitHandler}
            className="space-y-4 text-[#534F4F]"
            id="lws-addProductForm"
         >
            {/* <!-- product name --> */}
            <div className="space-y-2">
               <label htmlFor="lws-inputName">Product Name</label>
               <input
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                  className="addProductInput"
                  id="lws-inputName"
                  type="text"
                  required
               />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
               <label htmlFor="lws-inputCategory">Category</label>
               <input
                  onChange={(e) => setProductCategory(e.target.value)}
                  value={productCategory}
                  className="addProductInput"
                  id="lws-inputCategory"
                  type="text"
                  required
               />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
               <label htmlFor="lws-inputImage">Image Url</label>
               <input
                  onChange={(e) => setProductImage(e.target.value)}
                  value={productImage}
                  className="addProductInput"
                  id="lws-inputImage"
                  type="text"
                  required
               />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
               {/* <!-- price --> */}
               <div className="space-y-2">
                  <label htmlFor="ws-inputPrice">Price</label>
                  <input
                     onChange={(e) => setProductPrice(e.target.value)}
                     value={productPrice}
                     className="addProductInput"
                     type="number"
                     id="lws-inputPrice"
                     required
                  />
               </div>
               {/* <!-- quantity --> */}
               <div className="space-y-2">
                  <label htmlFor="lws-inputQuantity">Quantity</label>
                  <input
                     onChange={(e) => setProductStock(e.target.value)}
                     value={productStock}
                     className="addProductInput"
                     type="number"
                     id="lws-inputQuantity"
                     required
                  />
               </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">
               Add Product
            </button>
         </form>
      </div>
   );
}
