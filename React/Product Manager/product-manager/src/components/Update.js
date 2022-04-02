import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setError] = useState ({});
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
    	.catch((err)=> console.log(err))
    }, [id]);
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
        .catch(err=>{
            console.log("hello world!")
            console.log(err);
            console.log(err.response);
            console.log(err.response.data);
            console.log(err.response.data.errors);
            setError(err.response.data.errors);

        })
    }
    const home = () => {
    navigate("/product");
}
    return (
        <div className="App">
            <button onClick={home}>Home</button>
            <h1> Updating {title}</h1>
            <form onSubmit={updateProduct}>
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
                <button type="submit">Update!</button>
            </form>
        </div>

    ) 
}
export default Update;