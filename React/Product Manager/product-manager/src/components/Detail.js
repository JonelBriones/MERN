import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Delete from './Delete';
const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {removeFromDom} = props; 
    //lifted state, filters out the product 
    // const removeFromDom = productId => {
    //     setProduct(product.filter(oneProduct => oneProduct._id !== productId));
    // }
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/product/${id}`)
    	.then((res)=>{
	        console.log(res.data);
            setProduct(res.data);
	    })
    	.catch((err)=>{
            console.log(err);
    	})
    }, []);
    // const home = () => {
    //     navigate("/product/list");
    // }
    const deleteProduct = (thisProduct) => {
        // passing the whole object to console.log the key:value
        let productId = thisProduct._id; 
        console.log(thisProduct)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log(`Deleting Product:${thisProduct.title} ID:${productId}`);
                navigate("/product/list");
            })
            .catch(err => console.log(err))
    };
    return (
        <div className='App'>
            <Home/>
            <h1>Product: {product.title}</h1>
            <h1>Price: ${product.price}</h1>
            <h1>Description: {product.description}</h1>
            <Link to={`/product/edit/${product._id}`}><button>Edit</button></Link>
            {/* <button onClick={()=> deleteProduct(product)}>Delete</button> */}
            <Delete deleteHandler={()=>deleteProduct(product)}/>
        </div>
    ) 
}
export default Detail;

