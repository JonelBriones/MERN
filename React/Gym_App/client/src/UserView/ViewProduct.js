import React, {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import { Link,useNavigate,useParams } from 'react-router-dom'
import CartContext from '../CartContext'
import GymNavbar from './GymNavbar';
const ViewProduct = (props) => {
    const navigate = useNavigate();
    const [product,setProduct] = useState([])
    const {product_name} = useParams();
    const {productId} = useParams();
    const {cart,addToCart,removeFromCart} = useContext(CartContext);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" + product_name)
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])
    const redirect = (page) => {
        navigate(page)
    }
    return (
        <>
            <GymNavbar/>
            <div className="container">
                <div className='product-view-border'>
                <div img='' className='product-view-img'>img</div>
                <div className='product-view-content'>
                    <h1>{product.name}</h1>
                    <hr></hr>
                    <h2>{product.price}</h2>
                    <div>
                        <Button variant="info" size="sm" onClick={()=>addToCart(product)}>Add 
                        ({
                            cart.map((product)=>(
                                product._id === product._id?
                                product.qty:null
                                ))
                            })
                         to cart
                        </Button>
                        </div>
                        <div>
                        {
                        cart.map((product)=>(
                            product._id === product._id?
                            product.qty?
                            <Button key={product._id} variant="info" size="sm" onClick={()=>removeFromCart(product)}>Remove from cart</Button>:null:null
                            ))
                        } 
                        </div>
                    <p>{product.description}</p>
                </div>
                </div>
            </div>
        </>

    )
}

export default ViewProduct;