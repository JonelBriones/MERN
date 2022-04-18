import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import { Link,useNavigate,useParams } from 'react-router-dom'
import GymNavbar from '../../components/Gym/GymNavbar';
const ViewProduct = (props) => {
    const navigate = useNavigate();
    const [product,setProduct] = useState([])
    const {product_name} = useParams();
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" + product_name)
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])

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
        <>
            <nav>
            <GymNavbar buttonText={"/"}/>
            </nav>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Description:</th>
                        <th>Category:</th>
                        <th>Price:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                    </tr>
                </tbody>
            </Table>
        </>

    )
}

export default ViewProduct;