import React, { useState } from 'react'
// import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [product, setProduct] = useState([]);

    
    return (
        <div>
            <p>Hello World!</p>
    	{/* /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
           <ProductForm product={product} setProduct={setProduct} />
            <hr/>
           <ProductList product={product} setProduct={setProduct}/>
        </div>
    )
}
export default Main;
