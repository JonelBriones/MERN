import React, {useState,useEffect} from 'react'
import axios from 'axios';
import ProductForm from './ProductForm';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Admin/AdminNavbar';
const CreateProduct = (props) => {
    const [loggedAdmin,setloggedAdmin] = useState([])
    const [errors,setError] = useState({});
    const navigate = useNavigate();
    const [product,setProduct] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    })
    useEffect(()=> {
        axios.get("http://localhost:8000/api/admins")
            .then((res)=>{
                setloggedAdmin(res.data)
                console.log(res.data)
            })
            .catch((err)=>console.log(err))

    },[])
    const onSubmitHandler = (e) => {
        e.preventDefault();
            axios.post("http://localhost:8000/api/products/add",product,
            {
                withCredentials:true // Only Admin can access this link
            })
            .then((res)=>{
                console.log(res.data)
                setProduct({
                    name: "",
                    description: "",
                    category: "",
                    price: ""
                })
                setError({})
                navigate("/products");
            })
            .catch((err)=> {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)
            })
    }

    const onChangeHandler = (e) =>{
        const newProductObject = {...product};
        newProductObject[e.target.name] = e.target.value;
        console.log(newProductObject);
        setProduct(newProductObject);
    }

    const logout = () => {
        axios.post("http://localhost:8000/api/users/logout",{},
        {
            withCredentials:true
        })
            .then((res)=>{
                console.log(res.data)
                navigate("/users")
            })
            .catch((err)=>console.log(err))
    }

    return (

        <div>
            <AdminNavbar
            logout={()=>logout}
            loggedAdmin={loggedAdmin}/>
            
            <h1>Create Product</h1>
            
            <ProductForm
            product={product}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            errors={errors}
            buttonText={"Add Product"}
            />
        </div>
    )
    
}
export default CreateProduct;