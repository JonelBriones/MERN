import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { Link,useNavigate } from 'react-router-dom';
import Form from './Form';
const ProductForm = (props) => {
    // const {product, setProduct} = props;
    //keep track of what is being typed via useState hook
    // const [title, setTitle] = useState(""); 
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    const [errors, setError] = useState({});
    const navigate = useNavigate();

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: ""
    })
    //handler when the form is submitted
    const newSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', 
            newProduct
        )
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate("/product/list");
            })
            .catch(err=>{
                console.log("hello world!")
                console.log(err);
                console.log(err.response);
                console.log(err.response.data);
                console.log(err.response.data.errors);
                setError(err.response.data.errors);

            })
    }

    const onChangeHandler = (e) => {
        const newProductObject = {...newProduct};
        newProductObject[e.target.name] = e.target.value;
        console.log(`e.target.name = ${e.target.name}`)
        console.log(`e.target.value = ${e.target.value}`)
        setNewProduct(newProductObject);
        console.log(newProductObject)
        console.log(newProduct)
    }
    
    return (
        <div className='App'>
            <Link to={"/product/list"}><button>Home</button></Link>
            <Form 
            // all arguments will be passed as a paramter for form.js
            newProduct={newProduct}
            errors={errors}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={newSubmitHandler}
            buttonText={"Add a Product"}
            />
        </div>
        
        
    )
}
export default ProductForm;

