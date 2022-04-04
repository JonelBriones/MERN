import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';
import Home from './Home';
import Delete from './Delete';
const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/product/${id}`)
    	.then((res)=>{
            console.log(`Displaying Product: ${res.data.title} from mongoDB`,res.data);
            setProduct(res.data);
	    })
    	.catch((err)=>{
            console.log(err);
    	})
    }, []);
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
            <Delete 
                    deleteHandler={()=>deleteProduct(product)}
                    editHandler={()=> console.log(`redirecting to edit: ${product.title}`)}
                    productId={product._id}/>
        </div>
    ) 
}
export default Detail;

