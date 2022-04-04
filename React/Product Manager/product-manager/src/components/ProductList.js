import React, { useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import Delete from './Delete';
const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const removeFromDom = productId => {
        setProduct(product.filter(oneProduct => oneProduct._id !== productId));
    }
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	        console.log(res.data);
            setProduct(res.data);
	    })
    	.catch((err)=>{
            console.log(err);
    	})
    }, []);
    const toggleProduct = (_id) => {
        const showProductInfo = product.map((oneProduct) => { // after mapping through list, find tab that matches id
        // if the tab matches id, set show to true will display tab.description
        if (_id === oneProduct._id) {
            oneProduct.show = !oneProduct.show; // 
            console.log(oneProduct.show)
            console.log(`${oneProduct} matches the ${_id}`)
          }
          return oneProduct;
        })
        setProduct(showProductInfo);
        // console.log(showProductInfo)
      }
      const deleteProduct = (thisProduct) => {
        // passing the whole object to console.log the key:value
        let productId = thisProduct._id; 
        console.log(thisProduct)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log(`Deleting Product:${thisProduct.title} ID:${productId}`);
                removeFromDom(productId)
                navigate("/product/list");
            })
            .catch(err => console.log(err))
    };
    return (
        <div className="App">
        <Link to={"/product/add/"}><button>Add Product!</button></Link>
        { 
            product.map((oneProduct)=> (
            <div  key={oneProduct._id}> 
                <hr/>
                {/* checked function will set the object to have a false value, on click will change to the opposite  */}
                <button checked={oneProduct.show} onClick={(e) => toggleProduct(oneProduct._id)}>{oneProduct.title}</button>
                {
                    oneProduct.show?
                    <div>
                    <Link to={`/product/${oneProduct._id}`}><button>Show This Product</button></Link>
                    <Link to={`/product/edit/${oneProduct._id}`}><button>Edit</button></Link>
                    {/* <button onClick={() => deleteProduct(oneProduct)}>Delete</button> */}
                    <Delete deleteHandler={()=>deleteProduct(oneProduct)}/>
                    </div> // if tab.show == false, return tab's description
                    :null // if tab.show == false, return null
                }
            </div>  
            ))

        }
       </div>
    );
}
export default ProductList;

