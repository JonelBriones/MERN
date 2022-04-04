import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import CreateForm from './CreateForm';
const Update = (props) => {



    const [errors, setError] = useState ({});
    const {id} = useParams();
    const navigate = useNavigate();

    const [editProduct, setEditProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/product/${id}`)
    	.then((res)=>{
	        console.log(res.data);
            setEditProduct(res.data);
	    })
    	.catch((err)=> console.log(err))
    }, [id]);
    const editSubmitHandler = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/product/' + id,editProduct)
        .then(res => {
            console.log(res);
            navigate("/product/list"); // this will take us back to the Main.js
            })
        .catch(err=>{
            console.log(err);
            console.log(err.response);
            console.log(err.response.data);
            console.log(err.response.data.errors);
            setError(err.response.data.errors);

        })
    }

    const onChangeHandler = (e) => {
        const editProductObject = {...editProduct};
        editProductObject[e.target.name] = e.target.value;
        console.log(`e.target.name = ${e.target.name}`)
        console.log(`e.target.value = ${e.target.value}`)
        setEditProduct(editProductObject);
        console.log(editProductObject)
        console.log(editProduct)
    }

    return (
        <div className="App">
            {/* <button onClick={home}>Home</button> */}
            <Home/>
            <h1> Updating {editProduct.title}</h1>
            <CreateForm 
            // all arguments will be passed as a paramter for form.js
            newProduct={editProduct}
            errors={errors}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={editSubmitHandler}
            buttonText={"Update a Product"}
            />
        </div>
    )
}
export default Update;