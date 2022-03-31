import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {product, setProduct,removeFromDom} = props;
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
            })
            .catch(err => console.log(err))
    };
    return product.map((oneProduct) => {
        return (
            <div key={oneProduct._id}> 
                <hr/>
                {/* checked function will set the object to have a false value, on click will change to the opposite  */}
                <button checked={oneProduct.show} onClick={(e) => toggleProduct(oneProduct._id)}>{oneProduct.title}</button>
                {
                    oneProduct.show?
                    <div>
                    {/* <p>${oneProduct.price}</p>
                    <p>Description: {oneProduct.description}</p>
                    <p>ID: {oneProduct._id}</p> */}
                    <Link to={`/product/${oneProduct._id}`}><button>Show This Product</button></Link>
                    <Link to={`/product/edit/${oneProduct._id}`}><button>Edit</button></Link>
                    <button onClick={() => deleteProduct(oneProduct)}>Delete</button>
                    </div> // if tab.show == false, return tab's description
                    :null // if tab.show == false, return null
                }
            </div>
            
        )
       
    }); 

    // return (
    //     <div>
    //         {
    //             product.map((product, index)=>{
    //             return <p key={index}>{product.title}, {product.price}, {product.description} </p>
    //             })
    //         }
    //     </div>
    // )
}
export default ProductList;

