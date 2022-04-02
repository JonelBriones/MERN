import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
const ProductForm = (props) => {
    const {product, setProduct} = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setError] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,   
            price,
            description,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProduct([...product,res.data]);
                setTitle('');
                setPrice('');
                setDescription('');
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
    
    return (
        <div className='App'>
            <form onSubmit={onSubmitHandler}>
                <div>
                {
                    errors.title?
                    <span>{errors.title.message}</span>:
                    <label>Title</label>
                }
                <input type="text" value={title} onChange= {(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                {
                    errors.price?
                    <span>{errors.price.message}</span>:
                    <label>Price</label>
                }
                <input type="number" value={price}  onChange= {(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                {
                    errors.description?
                    <span>{errors.description.message}</span>:
                    <label>Description</label>
                }
                <input type="text" value={description}  onChange= {(e)=>setDescription(e.target.value)}/>
                </div>
                <button type="submit">Submit!</button>
            </form>
        </div>
        
        
    )
}
export default ProductForm;

