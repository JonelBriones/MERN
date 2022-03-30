import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
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
    return (
        <div>
            <h1>Product: {product.title}</h1>
            <h1>Price: ${product.price}</h1>
            <h1>Description: {product.description}</h1>
        </div>
    ) 
}
export default Detail;

