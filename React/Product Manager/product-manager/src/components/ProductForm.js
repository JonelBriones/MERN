import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
const ProductForm = (props) => {
    const {product, setProduct} = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

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
            })
            .catch(err=>console.log(err))
        setProduct([...product,{
            title,
            price,
            description,
            show : false
        }])
        setTitle('');
        setPrice('');
        setDescription('');
    }
    
    return (
        <div className='App'>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input type="text" value={title} required onChange= {(e)=>setTitle(e.target.value)}/>
                
                <label>Price</label>
                <input type="number" value={price} required onChange= {(e)=>setPrice(e.target.value)}/>
                
                <label>description</label>
                <input type="text" value={description} required onChange= {(e)=>setDescription(e.target.value)}/>

                <button type="submit">Submit!</button>
            </form>
        </div>
        
        
    )
}
export default ProductForm;

