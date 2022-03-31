import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Update = (props) => {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/product/${id}`)
    	.then((res)=>{
	        console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
	    })
    	.catch((err)=>{
            console.log(err);
    	})
    }, []);
    const updateProduct = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/product/' + id, {
        title,    // this is shortcut syntax for firstName: firstName,
        price,      // this is shortcut syntax for lastName: lastName
        description
    })
        .then(res => {
            console.log(res);
            navigate("/product"); // this will take us back to the Main.js
            })
        .catch(err => console.log(err))
    }
    const home = () => {
    navigate("/product");
}
    return (
        <div>
            <button onClick={home}>Home</button>
            <h1> Updating {}</h1>
            <form onSubmit={updateProduct}>
                <label>Title</label>
                <input type="text" value={title} required onChange= {(e)=>setTitle(e.target.value)}/>
                
                <label>Price</label>
                <input type="number" value={price} required onChange= {(e)=>setPrice(e.target.value)}/>
                
                <label>description</label>
                <input type="text" value={description} required onChange= {(e)=>setDescription(e.target.value)}/>

                <button type="submit">Update!</button>
            </form>
        </div>

    ) 
}
export default Update;