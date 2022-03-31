import React, { useState } from 'react'
// import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(oneProduct => oneProduct._id !== productId));
    }
    
    return (
        <div>
    	{/* /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
           <ProductForm product={product} setProduct={setProduct} />
            <hr/>
           <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
